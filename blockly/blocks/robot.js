var hue = 60;

Blockly.Blocks['robot_motor'] = {
  init: function() {
    this.appendValueInput("ID")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["PWM Talon", "TALON"], ["PWM Victor", "VICTOR"], ["PWM Jaguar", "JAGUAR"], ["CAN Talon", "TALON_CAN"], ["CAN Jaguar", "JAGUAR_CAN"]]), "type")
        .appendField("#");
    this.setOutput(true);
    this.setColour(hue);
    this.setTooltip('');
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
    this.setTooltip('');
  }
};
Blockly.Blocks['robot_drive2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Robot Drive");
    this.appendValueInput("MOTOR_LEFT")
        .appendField("Reverse")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L_REVERSED")
        .appendField("Left Motor");
    this.appendValueInput("MOTOR_RIGHT")
        .appendField("Reverse")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "R_REVERSED")
        .appendField("Right Motor");
    this.setOutput(true);
    this.setColour(hue);
    this.setTooltip('');
  }
};
Blockly.Blocks['robot_drive4'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Robot Drive");
    this.appendValueInput("MOTOR_LEFT1")
        .appendField("Reverse")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L1_REVERSED")
        .appendField("Front Left Motor");
    this.appendValueInput("MOTOR_RIGHT1")
        .appendField("Reverse")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "R1_REVERSED")
        .appendField("Front Right Motor");
    this.appendValueInput("MOTOR_LEFT2")
        .appendField("Reverse")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L2_REVERSED")
        .appendField("Back Left Motor");
    this.appendValueInput("MOTOR_RIGHT2")
        .appendField("Reverse")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "R2_REVERSED")
        .appendField("Back Right Motor");
    this.setOutput(true);
    this.setColour(hue);
    this.setTooltip('');
  }
};
Blockly.Blocks['robot_joystick'] = {
  init: function() {
    this.appendValueInput("ID")
        .setCheck("Number")
        .appendField("Joystick");
    this.setOutput(true);
    this.setColour(hue);
    this.setTooltip('');
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
    this.setTooltip('');
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
    this.setTooltip('');
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
    this.setTooltip('');
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
    this.setTooltip('');
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
    this.setTooltip('');
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
    this.setTooltip('');
  }
};
Blockly.Blocks['robot_gyro'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("Gyro");
    this.setOutput(true);
    this.setColour(hue);
    this.setTooltip('');
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
    this.setTooltip('');
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
    this.setTooltip('');
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
    this.setTooltip('');
  }
};
Blockly.Blocks['robot_sensor_reset'] = {
  init: function() {
    this.appendValueInput("SENSOR")
        .appendField("Reset");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(hue);
    this.setTooltip('');
  }
};
Blockly.Blocks['robot_accel_builtin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("RoboRIO Accelerometer");
    this.setOutput(true);
    this.setColour(hue);
    this.setTooltip('');
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
    this.setTooltip('');
  }
};