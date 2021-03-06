var hue = 60; //hue hue

Blockly.Blocks['robot_motor'] = {
  init: function() {
    this.appendValueInput("ID")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["PWM Talon", "TALON"], ["PWM Victor", "VICTOR"], ["PWM Jaguar", "JAGUAR"], ["CAN Talon", "TALON_CAN"], ["CAN Jaguar", "JAGUAR_CAN"]]), "type")
        .appendField("#");
    this.setOutput(true);
    this.setColour(hue);
    this.setTooltip('Create a speed controller object using the PWM number or device number (for CAN)');
  }
};
Blockly.Blocks['robot_motor_set'] = {
  init: function() {
    this.appendValueInput("MOTOR")
        .appendField("Set Motor");
    this.appendValueInput("VALUE")
        .setCheck("Number")
        .appendField("Power");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(hue);
    this.setTooltip('Set a speed controller value between -1 and 1 inclusive.');
  }
};
Blockly.Blocks['robot_drive2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Robot Drive");
    this.appendValueInput("MOTOR_LEFT")
        .appendField("Left Motor");
    this.appendValueInput("MOTOR_RIGHT")
        .appendField("Right Motor");
    this.setOutput(true);
    this.setColour(hue);
    this.setTooltip('Create a two-controller drive train object. Provide two motor controller objects.');
  }
};
Blockly.Blocks['robot_drive4'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Robot Drive");
    this.appendValueInput("MOTOR_LEFT1")
        .appendField("Front Left Motor");
    this.appendValueInput("MOTOR_RIGHT1")
        .appendField("Front Right Motor");
    this.appendValueInput("MOTOR_LEFT2")
        .appendField("Back Left Motor");
    this.appendValueInput("MOTOR_RIGHT2")
        .appendField("Back Right Motor");
    this.setOutput(true);
    this.setColour(hue);
    this.setTooltip('Create a 4-controller drive train object. Provide four motor controller objects.');
  }
};
Blockly.Blocks['robot_joystick'] = {
  init: function() {
    this.appendValueInput("ID")
        .setCheck("Number")
        .appendField("Joystick");
    this.setOutput(true);
    this.setColour(hue);
    this.setTooltip('Create a joystick object using the device number.');
  }
};
Blockly.Blocks['robot_joystick_button'] = {
  init: function() {
    this.appendValueInput("JOYSTICK")
        .appendField("Is joystick");
    this.appendValueInput("BUTTON_NUM")
        .setCheck("Number")
        .appendField("button #");
    this.appendDummyInput()
        .appendField("pressed?");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(hue);
    this.setTooltip('Check if a joystick button is pressed');
  }
};
Blockly.Blocks['robot_joystick_axis'] = {
  init: function() {
    this.appendValueInput("JOYSTICK")
        .appendField("Joystick");
    this.appendDummyInput()
        .appendField("axis")
        .appendField(new Blockly.FieldDropdown([["Yaw", "YAW"], ["Pitch", "PITCH"], ["Twist", "ROLL"]]), "AXIS");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(hue);
    this.setTooltip('Get the value of a named joystick axis');
  }
};
Blockly.Blocks['robot_joystick_axis_raw'] = {
  init: function() {
    this.appendValueInput("JOYSTICK")
        .appendField("Joystick");
    this.appendValueInput("AXIS")
        .setCheck("Number")
        .appendField("axis");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(hue);
    this.setTooltip('Get the value of a numbered joystick axis');
  }
};
Blockly.Blocks['robot_drive_arcade'] = {
  init: function() {
    this.appendValueInput("DRIVE")
        .appendField("Robot drive");
    this.appendValueInput("MOVE")
        .setCheck("Number")
        .appendField("move");
    this.appendValueInput("ROTATE")
        .setCheck("Number")
        .appendField("rotate");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(hue);
    this.setTooltip('Drive a robot using arcade drive (forward/rotate)');
  }
};
Blockly.Blocks['robot_drive_tank'] = {
  init: function() {
    this.appendValueInput("DRIVE")
        .appendField("Robot drive");
    this.appendValueInput("LEFT")
        .setCheck("Number")
        .appendField("left");
    this.appendValueInput("right")
        .setCheck("Number")
        .appendField("right");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(hue);
    this.setTooltip('Drive a robot using tank drive.');
  }
};
Blockly.Blocks['robot_drive_mecanum'] = {
  init: function() {
    this.appendValueInput("DRIVE")
        .appendField("Robot drive");
    this.appendValueInput("MOVE")
        .setCheck("Number")
        .appendField("move");
    this.appendValueInput("ROTATE")
        .setCheck("Number")
        .appendField("rotate");
    this.appendValueInput("STRAFE")
        .setCheck("Number")
        .appendField("strafe");
    this.appendValueInput("GYRO")
        .setCheck("Number")
        .appendField("gyro");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(hue);
    this.setTooltip('Drive a robot with a mecanum drive. Provide the robot drive object, forward, rotate, and strafe values. If not using field-centric driving, gyro can be 0');
  }
};
Blockly.Blocks['robot_gyro'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("Gyro");
    this.setOutput(true);
    this.setColour(hue);
    this.setTooltip('Create a gyro object using an analog input channel number');
  }
};
Blockly.Blocks['robot_encoder'] = {
  init: function() {
    this.appendValueInput("CHANNEL_A")
        .setCheck("Number")
        .appendField(new Blockly.FieldDropdown([["4X", "k4X"], ["2X", "k2X"], ["1X", "k1X"]]), "TYPE")
        .appendField("Encoder A");
    this.appendValueInput("CHANNEL_B")
        .setCheck("Number")
        .appendField("B");
    this.appendDummyInput()
        .appendField("Reverse?")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "REVERSE");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(hue);
    this.setTooltip('Create an encoder. Channels A and B are the digital input channel numbers.');
  }
};
Blockly.Blocks['robot_encoder_get'] = {
  init: function() {
    this.appendValueInput("ENCODER")
        .appendField("Get encoder");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["rate", "getRate()"], ["distance", "getDistance()"]]), "ACTION");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(hue);
    this.setTooltip('Get rate or distance from the provided encoder');
  }
};
Blockly.Blocks['robot_gyro_get'] = {
  init: function() {
    this.appendValueInput("GYRO")
        .appendField("Get gyro");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["rate", "getRate()"], ["angle", "getAngle()"]]), "ACTION");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(hue);
    this.setTooltip('Get rate or angle from the provided gyro');
  }
};
Blockly.Blocks['robot_sensor_reset'] = {
  init: function() {
    this.appendValueInput("SENSOR")
        .appendField("Reset");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(hue);
    this.setTooltip('Resets an encoder or gyro to 0 accumulation');
  }
};
Blockly.Blocks['robot_accel_builtin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("RoboRIO Accelerometer");
    this.setOutput(true);
    this.setColour(hue);
    this.setTooltip('Create a BuiltinAccelerometer object');
  }
};
Blockly.Blocks['robot_accel_builtin_get'] = {
  init: function() {
    this.appendValueInput("ACCEL")
        .appendField("RoboRIO Accelerometer");
    this.appendDummyInput()
        .appendField("get")
        .appendField(new Blockly.FieldDropdown([["X", "getX()"], ["Y", "getY()"], ["Z", "getZ()"]]), "DIR");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(hue);
    this.setTooltip('Get one of the directions from the 3-axis RoboRIO accelerometer');
  }
};
Blockly.Blocks['robot_invert_drive_motor'] = {
  init: function() {
    this.appendValueInput("DRIVE")
        .appendField("Robot Drive");
    this.appendDummyInput()
        .appendField("invert ")
        .appendField(new Blockly.FieldDropdown([["front left", "RobotDrive.MotorType.kFrontLeft"], ["front right", "RobotDrive.MotorType.kFrontRight"], ["rear left", "RobotDrive.MotorType.kRearLeft"], ["rear right", "RobotDrive.MotorType.kRearRight"]]), "MOTOR")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "IS_INVERTED");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(hue);
    this.setTooltip('Invert a drive motor');
  }
};
Blockly.Blocks['robot_solenoid'] = {
  init: function() {
    this.appendValueInput("CHANNEL")
        .setCheck("Number")
        .appendField("Solenoid");
    this.setOutput(true);
    this.setColour(hue);
    this.setTooltip('Create a single solenoid using the channel provided');
  }
};
Blockly.Blocks['robot_solenoid_double'] = {
  init: function() {
    this.appendValueInput("CHANNEL_F")
        .setCheck("Number")
        .appendField("Double Solenoid Forward Channel");
    this.appendValueInput("CHANNEL_R")
        .setCheck("Number")
        .appendField("Reverse Channel");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(hue);
    this.setTooltip('Create a double solenoid using the two channels provided');
  }
};
Blockly.Blocks['robot_solenoid_set'] = {
  init: function() {
    this.appendValueInput("SOLENOID")
        .appendField("Solenoid");
    this.appendValueInput("VALUE")
        .setCheck("Boolean")
        .appendField("set");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(hue);
    this.setTooltip('Sets a single solenoid to on or off (true/false)');
  }
};
Blockly.Blocks['robot_solenoid_double_set'] = {
  init: function() {
    this.appendValueInput("SOLENOID")
        .appendField("Double Solenoid");
    this.appendDummyInput()
        .appendField("set ")
        .appendField(new Blockly.FieldDropdown([["Forward", "kForward"], ["Reverse", "kReverse"], ["Off", "kOff"]]), "VALUE");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(hue);
    this.setTooltip('Set a DoubleSolenoid\'s value');
  }
};
Blockly.Blocks['robot_solenoid_get'] = {
  init: function() {
    this.appendValueInput("SOLENOID")
        .appendField("Solenoid");
    this.appendDummyInput()
        .appendField("get state");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(hue);
    this.setTooltip('Gets the state of a single or double solenoid. Could be a boolean or a DoubleSolenoid.Value.');
  }
};
Blockly.Blocks['robot_event_begin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("When")
        .appendField(new Blockly.FieldDropdown([["initialization", "robotInit"], ["teleop", "teleopInit"], ["autonomous", "autonomousInit"], ["test", "testInit"], ["disabled", "disabledInit"]]), "MODE")
        .appendField("begins");
    this.appendStatementInput("CODE");
    this.setColour(hue);
    this.setTooltip('Starting point for initialization code');
  }
};
Blockly.Blocks['robot_event_periodic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Teleop", "teleopPeriodic"], ["Autonomous", "autonomousPeriodic"], ["Test", "testPeriodic"], ["Disabled", "disabledPeriodic"]]), "MODE")
        .appendField("periodic");
    this.appendStatementInput("CODE");
    this.setColour(hue);
    this.setTooltip('Starting point for periodic code');
  }
};