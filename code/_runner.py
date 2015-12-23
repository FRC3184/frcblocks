import wpilib, sys, importlib

global custom
custom = None

_do_init = True
_do_auto_periodic = True
_do_teleop_periodic = True
_do_test_periodic = True
_do_disabled_periodic = True
_do_auto_init = True
_do_teleop_init = True
_do_test_init = True
_do_disabled_init = True

class TheRobot(wpilib.IterativeRobot):
    
    def robotInit(self):
        if _do_init: custom.robotInit()
    def autonomousInit(self):
        if _do_auto_init: custom.autonomousInit()
    def teleopInit(self):
        if _do_teleop_init: custom.teleopInit()
    def testInit(self):
        if _do_test_init: custom.testInit()
    def disabledInit(self):
        if _do_disabled_init: custom.disabledInit()
    
    def autonomousPeriodic(self):
        if _do_auto_periodic: custom.autonomousPeriodic()
    def teleopPeriodic(self):
        if _do_teleop_periodic: custom.teleopPeriodic()
    def testPeriodic(self):
        if _do_test_periodic: custom.testPeriodic()
    def disabledPeriodic(self):
        if _do_disabled_periodic: custom.disabledPeriodic()
    
    
    
    

if __name__ == "__main__":
    #global custom, _do_auto_init, _do_init, _do_teleop_init, _do_disabled_init, _do_teleop_periodic, _do_auto_periodic, _do_test_init, _do_test_periodic, _do_disabled_periodic
    args = sys.argv
    if len(args) >= 2:
        custom = importlib.import_module(args[1])
        mods = dir(custom)
        _do_auto_init = "autonomousInit" in mods
        _do_init = "robotInit" in mods
        _do_teleop_init = "teleopInit" in mods
        _do_disabled_init = "disabledInit" in mods
        _do_teleop_periodic = "teleopPeriodic" in mods
        _do_auto_periodic = "autonomousPeriodic" in mods
        _do_test_init = "testInit" in mods
        _do_test_periodic = "testPeriodic" in mods
        _do_disabled_periodic = "disabledPeriodic" in mods
        sys.argv = sys.argv[2:]
        wpilib.run(TheRobot)
        
    else:
        print("Requires name of custom code file as first arg (with pyfrc args following)")
    
    