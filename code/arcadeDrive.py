import wpilib

class TheRobot(wpilib.IterativeRobot):
  stick = None
  drive = None
  
  
  def robotInit(self):
    global stick, drive
    stick = wpilib.Joystick(1)
    drive = wpilib.RobotDrive((wpilib.CANTalon(0)), (wpilib.CANTalon(1)))
  
  def teleopPeriodic(self):
    global drive, stick
    drive.arcadeDrive((stick.getAxis(1)), (stick.getAxis(0)))
  

if __name__ == '__main__':
  wpilib.run(TheRobot)