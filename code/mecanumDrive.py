import wpilib

stick = None
strafe = None
drive = None
move = None
gyro = None
turn = None

def robotInit():
  global stick, drive, gyro
  stick = wpilib.Joystick(1)
  drive = wpilib.RobotDrive((wpilib.CANTalon(0)), (wpilib.CANTalon(1)))
  gyro = wpilib.Gyro(0)

def teleopPeriodic():
  global strafe, stick, move, turn, drive, gyro
  strafe = stick.getAxis(0)
  move = stick.getAxis(1)
  turn = stick.getAxis(2)
  drive.mecanumDrive_Cartesian(move, strafe, turn, (gyro.getRate()))
