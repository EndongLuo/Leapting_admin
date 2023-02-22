# Web控制



##  Web控制

以下所有代码均已上传至github

[valieo/Raspberry-Car](https://link.zhihu.com/?target=https%3A//github.com/valieo/Raspberry-Car)



### 安装bottle库

- 安装pip

pip是特定于Python的软件包管理器，没有安装pip的按照下述方式安装，安装了跳过此步

安装pip

```markup
sudo apt install python2-pip -y
```

或者安装pip3

```markup
sudo apt install python3-pip -y
```

我在这里安装的是pip3，以下代码也尽在python3下测试通过



```text
如果系统中只安装了Python2，那么就只能使用pip。
如果系统中只安装了Python3，那么既可以使用pip也可以使用pip3，二者是等价的。
如果系统中同时安装了Python2和Python3，则pip默认给Python2用，pip3指定给Python3用。
```

- 安装bottle

```markup
pip3 install bottle
```



### 代码

### 1. 超声波测距模块

```markup
# 超声波测距模块 HC-SR04
import RPi.GPIO as GPIO
import time

class Measure(object):

    def __init__(self, GPIO_TRIG, GPIO_ECHO) -> None:
        super().__init__()
        self.GPIO_TRIG = GPIO_TRIG
        self.GPIO_ECHO = GPIO_ECHO

        GPIO.setmode(GPIO.BCM)
        #设置 GPIO 的工作方式 (IN / OUT)
        GPIO.setup(GPIO_TRIG, GPIO.OUT)
        GPIO.setup(GPIO_ECHO, GPIO.IN)


    def getDistance(self):
        # 向Trig引脚发送10us的脉冲信号
        GPIO.output(self.GPIO_TRIG, True)
        time.sleep(0.00001)
        GPIO.output(self.GPIO_TRIG, False)

        # 开始发送超声波的时刻
        while GPIO.input(self.GPIO_ECHO)==0:
            pass
        startTime=time.time()
 
        # 收到返回超声波的时刻
        while GPIO.input(self.GPIO_ECHO)==1:
            pass
        endTime=time.time()

        # 计算距离 距离=(声波的往返时间*声速)/2
        timeDelta = endTime - startTime
        distance = (timeDelta * 34300) / 2
  
        return round(distance,2)
```



### 2. 电机驱动模块

```markup
# MotorControl.py
# TB6612FNG电机驱动
# 电机控制

import RPi.GPIO as GPIO
'''
self.GPIO_PWM
self.GPIO_IN1
self.GPIO_IN2
self.freq

self.last_pwm
self.pwm
'''
class Motor(object):
    
    def __init__(self, GPIO_PWM, GPIO_IN1, GPIO_IN2, freq=300) -> None:
        super().__init__()
        self.GPIO_PWM = GPIO_PWM
        self.GPIO_IN1 = GPIO_IN1
        self.GPIO_IN2 = GPIO_IN2
        self.freq = freq

        GPIO.setmode(GPIO.BCM)
        #GPIO.setwarnings(False)
        
        GPIO.setup(self.GPIO_PWM, GPIO.OUT)
        GPIO.setup(self.GPIO_IN1, GPIO.OUT)
        GPIO.setup(self.GPIO_IN2, GPIO.OUT)

        self.pwm = GPIO.PWM(self.GPIO_PWM, self.freq)
        self.last_pwm = 0
        self.pwm.start(self.last_pwm)

    ''' 静态方法 TB6612FNG的STBY引脚
    1. GPIO_STBY int BCM编码号
    2. status bool 为true则TB6612FNG工作，反之待机 默认为false
    '''
    @staticmethod
    def standby(GPIO_STBY,status=False):
        GPIO.setmode(GPIO.BCM)
        #GPIO.setwarnings(False)
        if status:
            GPIO.setup(status, GPIO.OUT)
            GPIO.output(status, True)
        else:
            GPIO.output(status, False)
    
    ''' 设置PWM占空比
    1. dc 占空比 [0,100]
    '''
    def __setPWM(self, dc):
        if dc != self.last_pwm:
            self.pwm.ChangeDutyCycle(dc)
            self.last_pwm = dc


    ''' 启动
    1. speed int 范围[-100,100] 正数则正转，负数则反转
    '''
    def run(self, speed):
        if(speed>=0):
            GPIO.output(self.GPIO_IN1, False)
            GPIO.output(self.GPIO_IN2, True)
            self.__setPWM(speed)
        else:
            GPIO.output(self.GPIO_IN1, True)
            GPIO.output(self.GPIO_IN2, False)
            self.__setPWM(-speed)
        

    '''停止'''
    def stop(self):
        GPIO.output(self.GPIO_IN1, False)
        GPIO.output(self.GPIO_IN2, False)
        self.__setPWM(0)


    def cleanup(self):
        self.stop()
        self.pwm.stop()
```



### 3. 小车控制

考虑到两个电机的转速可能不完全一致，所以需要一个微调功能。

摄像头模块在[DIY树莓派小车（二）树莓派4B安装并使用摄像头和超声波模块](https://link.zhihu.com/?target=https%3A//www.valieo.com/archives/51/)中使用motion在8081端口开启了视频输出，可以直接调用，这里不再写有关摄像头模块的代码



```markup
# CarControl.py
# 控制小车移动 （前进 后退 左转 右转）
# 驱动：TB6612FNG
import RPi.GPIO as GPIO
from MotorControl import Motor
from Distance import Measure

''' 
TB6612FNG 接口
        # STBY
        GPIO_STBY = 27
        # 左边电机
        GPIO_PWMA = 18
        GPIO_AIN1 = 14
        GPIO_AIN2 = 15
        # 右边电机
        GPIO_PWMB = 19
        GPIO_BIN1 = 23
        GPIO_BIN2 = 24

HC-SR04 接口
        GPIO_TRIG = 5
        GPIO_ECHO = 6

小车功能
        1. 微调
        2. 变速
        3. 前进
        4. 后退
        5. 左转
        6. 右转
        7. 停车
        8. 测距
'''


class Car(object):
    def __init__(self) -> None:
        super().__init__()

        '''电机模块'''
        # STBY引脚定义
        self.GPIO_STBY = 27
        GPIO.setmode(GPIO.BCM)
        #GPIO.setwarnings(False)
        GPIO.setup(self.GPIO_STBY, GPIO.OUT)

        # 左右两个电机
        self.motor_left = Motor(18,14,15)
        self.motor_right = Motor(19,23,24)

        # STBY = True  TB6612FNG开始工作
        Motor.standby(self.GPIO_STBY,True)

        # 速度  占空比
        self.motor_speed = 60
        self.motor_left_speed = 60
        self.motor_right_speed = 60
        # 速度系数 用于微调
        self.motor_left_coefficient = 1.0
        self.motor_right_coefficient = 1.0

        '''超声波测距模块'''
        self.measure = Measure(5, 6)


    # 微调 使两个电机转速一致  left=True向左微调 反之向右
    def fineTuning(self, left):
        if left:
            # 向左微调 左边的电机减速 右边的电机加速
            self.motor_left_coefficient -= 0.05
            self.motor_right_coefficient += 0.05
        else:
            # 向右边微调 左边的电机加速 右边的电机减速
            self.motor_left_coefficient += 0.05
            self.motor_right_coefficient -= 0.05

    # 更改速度 [0,100]
    def setSpeed(self, speed):
        if speed>100:
            speed = 100
        if speed<0:
            speed = 0
        self.motor_speed = speed
        self.motor_left_speed = self.motor_left_coefficient * speed
        self.motor_right_speed = self.motor_right_coefficient * speed

    # 前进
    def forward(self):
        self.motor_left.run(self.motor_left_speed)
        self.motor_right.run(self.motor_right_speed)

    # 后退
    def backward(self):
        self.motor_left.run(-self.motor_left_speed)
        self.motor_right.run(-self.motor_right_speed)
    
    # 左转
    def turnLeft(self):
        self.motor_left.run(-self.motor_left_speed)
        self.motor_right.run(self.motor_right_speed)

    # 右转
    def turnRight(self):
        self.motor_left.run(self.motor_left_speed)
        self.motor_right.run(-self.motor_right_speed)

    # 停止
    def stop(self):
        self.motor_left.stop()
        self.motor_right.stop()

    # 测距
    def getDistance(self):
        return self.measure.getDistance()

    def getSpeed(self):
        return self.motor_speed

    # 释放资源
    def cleanup(self):
        self.motor_left.cleanup()
        self.motor_right.cleanup()
        GPIO.cleanup()
```



### 4. 获取树莓派信息

以下代码用于获取树莓派CPU温度、CPU使用率、RAM使用率

```markup
# RaspberryInfo.py
# 获取树莓派 CPU温度 内存使用率 CPU使用率

import os

# CPU温度
def getCpuTemp():
    res = os.popen('vcgencmd measure_temp').readline()
    return(res.replace("temp=","").replace("'C\n",""))

# CPU使用率
def getCpuUsage():
    return(str(os.popen("top -n1 | awk '/Cpu\(s\):/ {print $2}'").readline().strip()))

# RAM信息
def getRAMinfo():
    p = os.popen('free')
    i = 0
    while 1:
        i = i + 1
        line = p.readline()
        if i==2:
            return(line.split()[1:4])

# 内存使用率
def getRamUsage():
    RAM_stats = getRAMinfo()
    return round(int(RAM_stats[1]) / int(RAM_stats[0])*100,1)
```





### 5. 小车Web控制面板

通过按钮或者键盘来控制小车移动

键盘操作方法见下表

| 按键 | W    | S    | A    | D    | Q    | E    | Z      | C      |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ------ | ------ |
| 功能 | 前进 | 后退 | 左转 | 右转 | 加速 | 减速 | 左微调 | 右微调 |



```markup
<!-- index.html -->
<!-- 树莓派小车控制面板 -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Raspberry Car Control Panel</title>
    <link href="http://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet" media="screen">
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>
    <style type="text/css">
        #front {
            margin-left: 55px;
            margin-bottom: 3px;
        }
        #rear{
            margin-top: 3px;
            margin-left: 55px;
        }
        .btn{
             background: #62559f;
            }
    </style>
    <script>

        $(function(){
            $("button").mousedown(function(){
                console.log(this.id + "mouse down");
                $.post("/cmd",this.id,function(data,status){});
            });
            // 鼠标弹起则停止移动
            $("button").mouseup(function(){
                console.log(this.id + "mouse up");
                $.post("/cmd","stop",function(data,status){});
            })


            // 键盘控制小车移动
            $(document).keydown(function(event){
                switch(event.keyCode){
                    case 87://w
                        console.log("press W");
                        $.post("/cmd","forward",function(data,status){});
                        break;
                    case 83://s
                        console.log("press S");
                        $.post("/cmd","backward",function(data,status){});
                        break;
                    case 65://a
                        console.log("press A");
                        $.post("/cmd","turnLeft",function(data,status){});
                        break;
                    case 68://d
                        console.log("press D");
                        $.post("/cmd","turnRight",function(data,status){});
                        break;
                    case 81://q
                        console.log("press Q");
                        $.post("/cmd","speedUp",function(data,status){});
                        break;
                    case 69://e
                        console.log("press E");
                        $.post("/cmd","slowDown",function(data,status){});
                        break;
                    case 90://z
                        console.log("press Z");
                        $.post("/cmd","leftFineTuning",function(data,status){});
                        break;
                    case 67://c
                        console.log("press C");
                        $.post("/cmd","rightFineTuning",function(data,status){});
                        break;
                }
            });

            $(document).keyup(function(event){
                switch(event.keyCode){
                    case 87://w
                    case 83://s
                    case 65://a
                    case 68://d
                    case 81://q
                        console.log("key up");
                        $.post("/cmd","stop",function(data,status){});
                        break;
                }
            });

        });

    </script>
</head>
<body>
<div class="row">
    <div class="col-xs-12 col-sm-6 col-md-7">
        <div class="panel panel-default">
			<div class="panel-heading">
				<h3 class="panel-title">实时画面</h3>
            </div>
            <div class="panel-body">
                <iframe src="http://192.168.0.100:8081/" width="820" height="620"   frameborder="1"  name="name"  scrolling="auto"></iframe>
            </div>
        </div>
    </div>
		 
		  
    <div class="col-xs-6 col-md-4">
        <div class="panel panel-default">
			<div class="panel panel-default">
                <div class="panel-heading">
					<h3 class="panel-title">信息</h3>
                </div>
                <div class="panel-body" >
                    <iframe id="car-info"  width="320" height="195" src="http://192.168.0.100:8088/info"></iframe>
                </div>
			</div>
			  
			  
            <div class="panel-heading">
				<h3 class="panel-title">控制</h3>
            </div>
            <div class="panel-body" style="margin: 30px;margin-left: 40px">
                <div class="row" >
                    <div class="col-md-2"></div>
                    <div class="col-md-2"><button id="forward" class="btn btn-large btn-primary" type="button"><span class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span><br/>前进</button></div>
                    <div class="col-md-2"></div>
                </div>

				<br/>

                <div class="row">
                    <div class="col-md-2"><button id="turnLeft" class="btn btn-large btn-primary" type="button"><span class="glyphicon glyphicon-triangle-left" aria-hidden="true"></span><br/>左转</button></div>
                    <div class="col-md-2"><button id="backward" class="btn btn-large btn-primary" type="button"><span class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span><br/>后退</button></div>
                    <div class="col-md-2"><button id="turnRight" class="btn btn-large btn-primary" type="button"><span class="glyphicon glyphicon-triangle-right" aria-hidden="true"></span><br/>右转</button></div>
                </div>
                   
                <br/>
					  
                <div class="row">
                    <div class="col-md-2"><button id="speedUp" class="btn btn-large btn-primary" type="button"><span class="glyphicon glyphicon glyphicon-plus-sign" aria-hidden="true"></span><br/>加速</button></div>
					<div class="col-md-2"></div>
                    <div class="col-md-2"><button id="slowDown" class="btn btn-large btn-primary" type="button"><span class="glyphicon glyphicon glyphicon-minus-sign" aria-hidden="true"></span><br/>减速</button></div>
                </div>

                <br>

                <div class="row">
                    <div class="col-md-2"><button id="leftFineTuning" class="btn btn-large btn-primary" type="button"><span class="glyphicon glyphicon-triangle-left" aria-hidden="true"></span><br/>左微调</button></div>
                    <div class="col-md-2"></div>
					<div class="col-md-2"><button id="rightFineTuning" class="btn btn-large btn-primary" type="button"><span class="glyphicon glyphicon-triangle-right" aria-hidden="true"></span><br/>右微调</button></div>
                </div>

			</div>
    </div>
</div>

</body>
</html>
```



### 6. 树莓派小车信息页面

此页面嵌入到小车Web控制面板页面中，显示小车速度（PWM占空比）、距离、CPU温度、CPU使用率、内存使用率

此页面1秒刷新一次



```markup
<!-- info.html -->
<!-- 树莓派小车信息面板 -->
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<!--每1秒刷新一次-->
	<meta http-equiv="refresh" content="1"> 
	<title>信息</title>
</head>
<body>
	<p>Speed:&nbsp;{{speed}}</p>
	<p>Distance:&nbsp;{{distance}}cm</p>
	<p>CPU Temp:&nbsp;{{cpuTemp}}&#8451</p>
	<p>CPU Uasge:&nbsp;{{cpuUsage}}%</p>
	<p>RAM Uasge:&nbsp;{{ramUsage}}%</p>
</body>
</html>
```



### 7. 启动

```markup
# Start.py
from bottle import get,post,run,request,template
from CarControl import Car
from RaspberryInfo import *

car = Car()

def main(status):
    print("Event: "+status)
    if status == "forward":
        car.forward()
    elif status == "backward":
        car.backward()
    elif status == "turnLeft":
        car.turnLeft()
    elif status == "turnRight":
        car.turnRight()
    elif status == "speedUp":
        car.setSpeed(car.getSpeed() + 5)
    elif status == "slowDown":
        car.setSpeed(car.getSpeed() - 5)
    elif status == "leftFineTuning":
        car.fineTuning(True)
    elif status == "rightFineTuning":
        car.fineTuning(False)
    elif status == "stop":
        car.stop()


# 控制台
@get("/")
def index():
    print("request index.html")
    return template("index.html")

# 控制小车
@post("/cmd")
def cmd():
    adss=request.body.read().decode()
    main(adss)
    return "OK"

# 小车信息
@get("/info")
def info():
    print("Update status Information")
    return template("info.html", speed=car.getSpeed(), distance=car.getDistance(), cpuTemp=getCpuTemp(), cpuUsage=getCpuUsage(), ramUsage=getRamUsage())

run(host='0.0.0.0', port=8088, debug=False)

car.cleanup()
```



## 实测

启动

```markup
sudo motion # 打开摄像头

python3 Start.py
```



在浏览器中输入如下Url进入树莓派小车控制页面

```markup
http://树莓派ip:8088
```



Web页面如下，可以通过网页上的按钮或者键盘控制小车（局域网内网络延迟很低，画面几乎实时显示）

控制面板右侧显示的是树莓派小车信息，其中Speed是PWM占空比，范围是[0,100]，Distance是超声波测距的结果

当小车不能走直线时，如果向右偏，则需要使用左微调，反之使用右微调

[![img](./Web控制_img/v2-3b289529c649ad64c25c99b435bcfd0e_720w.jpg)](https://pic3.zhimg.com/80/v2-3b289529c649ad64c25c99b435bcfd0e_720w.jpg)

