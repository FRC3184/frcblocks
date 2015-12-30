Blockly.Python['robot_motor'] = function(block) {
  var dropdown_type = block.getFieldValue('type');
  var value_id = Blockly.Python.valueToCode(block, 'ID', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...';
  switch(dropdown_type) {
        case "TALON_CAN": 
            code = "wpilib.CANTalon(" + value_id + ")";
            break;
        case "JAGUAR_CAN": 
            code = "wpilib.CANJaguar(" + value_id + ")";
            break;
        case "VICTOR": 
            code = "wpilib.Victor(" + value_id + ")";
            break;
        case "JAGUAR": 
            code = "wpilib.Talon(" + value_id + ")";
            break;
        default:
        case "TALON": 
            code = "wpilib.Talon(" + value_id + ")";
            break;
  }
  
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['robot_motor_set'] = function(block) {
  var value_motor = Blockly.Python.valueToCode(block, 'MOTOR', Blockly.Python.ORDER_ATOMIC);
  var value_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_motor + ".set(" + value_value + ")";
  return code + "\n";
};
Blockly.Python['robot_drive2'] = function(block) {
  var value_motor_left = Blockly.Python.valueToCode(block, 'MOTOR_LEFT', Blockly.Python.ORDER_ATOMIC);
  var value_motor_right = Blockly.Python.valueToCode(block, 'MOTOR_RIGHT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'wpilib.RobotDrive(' + value_motor_left + ", " + value_motor_right + ")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['robot_drive4'] = function(block) {
  var value_motor_left1 = Blockly.Python.valueToCode(block, 'MOTOR_LEFT1', Blockly.Python.ORDER_ATOMIC);
  var value_motor_right1 = Blockly.Python.valueToCode(block, 'MOTOR_RIGHT1', Blockly.Python.ORDER_ATOMIC);
  var value_motor_left2 = Blockly.Python.valueToCode(block, 'MOTOR_LEFT2', Blockly.Python.ORDER_ATOMIC);
  var value_motor_right2 = Blockly.Python.valueToCode(block, 'MOTOR_RIGHT2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'wpilib.RobotDrive(' + value_motor_left1 + ", " + value_motor_left2 + ", " + value_motor_right1 + ", " + value_motor_right2 + ")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['robot_joystick'] = function(block) {
  var value_id = Blockly.Python.valueToCode(block, 'ID', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'wpilib.Joystick(' + value_id + ")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['robot_joystick_button'] = function(block) {
  var value_joystick = Blockly.Python.valueToCode(block, 'JOYSTICK', Blockly.Python.ORDER_ATOMIC);
  var value_button_num = Blockly.Python.valueToCode(block, 'BUTTON_NUM', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_joystick + ".getRawButton(" + value_button_num + ")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['robot_joystick_axis'] = function(block) {
  var value_joystick = Blockly.Python.valueToCode(block, 'JOYSTICK', Blockly.Python.ORDER_ATOMIC);
  var dropdown_axis = block.getFieldValue('AXIS');
  var axis_id = 0;
  switch (dropdown_axis) {
      case "YAW":
        axis_id = 0;
        break;
      case "PITCH":
        axis_id = 1;
        break;
      case "ROLL":
        axis_id = 2;
        break;
  }
  // TODO: Assemble Python into code variable.
  var code = value_joystick + ".getAxis(" + axis_id + ")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['robot_joystick_axis_raw'] = function(block) {
  var value_joystick = Blockly.Python.valueToCode(block, 'JOYSTICK', Blockly.Python.ORDER_ATOMIC);
  var value_axis = Blockly.Python.valueToCode(block, 'AXIS', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_joystick + ".getRawAxis(" + value_axis + ")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['robot_drive_arcade'] = function(block) {
  var value_drive = Blockly.Python.valueToCode(block, 'DRIVE', Blockly.Python.ORDER_ATOMIC);
  var value_move = Blockly.Python.valueToCode(block, 'MOVE', Blockly.Python.ORDER_ATOMIC);
  var value_rotate = Blockly.Python.valueToCode(block, 'ROTATE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_drive + ".arcadeDrive(" + value_move + ", " + value_rotate + ")";
  return code + "\n";
};
Blockly.Python['robot_drive_tank'] = function(block) {
  var value_drive = Blockly.Python.valueToCode(block, 'DRIVE', Blockly.Python.ORDER_ATOMIC);
  var value_left = Blockly.Python.valueToCode(block, 'LEFT', Blockly.Python.ORDER_ATOMIC);
  var value_right = Blockly.Python.valueToCode(block, 'right', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_drive + ".tankDrive(" + value_left + ", " + value_right + ")";
  return code + "\n";
};
Blockly.Python['robot_drive_mecanum'] = function(block) {
  var value_drive = Blockly.Python.valueToCode(block, 'DRIVE', Blockly.Python.ORDER_ATOMIC);
  var value_move = Blockly.Python.valueToCode(block, 'MOVE', Blockly.Python.ORDER_ATOMIC);
  var value_rotate = Blockly.Python.valueToCode(block, 'ROTATE', Blockly.Python.ORDER_ATOMIC);
  var value_strafe = Blockly.Python.valueToCode(block, 'STRAFE', Blockly.Python.ORDER_ATOMIC);
  var value_gyro = Blockly.Python.valueToCode(block, 'GYRO', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_drive + ".mecanumDrive_Cartesian(" + value_move + ", " + value_strafe + ", " + value_rotate + ", " + value_gyro + ")";
  return code+ "\n";
};
Blockly.Python['robot_gyro'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'wpilib.Gyro(' + value_name + ")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['robot_encoder'] = function(block) {
  var dropdown_type = block.getFieldValue('TYPE');
  var value_channel_a = Blockly.Python.valueToCode(block, 'CHANNEL_A', Blockly.Python.ORDER_ATOMIC);
  var value_channel_b = Blockly.Python.valueToCode(block, 'CHANNEL_B', Blockly.Python.ORDER_ATOMIC);
  var checkbox_reverse = block.getFieldValue('REVERSE') == 'TRUE';
  // TODO: Assemble Python into code variable.
  var code = 'wpilib.Encoder(' + value_channel_a + ", " + value_channel_b + ", " + (checkbox_reverse ? "True" : "False") + ", wpilib.Encoder.EncodingType." + dropdown_type + "";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['robot_encoder_get'] = function(block) {
  var value_encoder = Blockly.Python.valueToCode(block, 'ENCODER', Blockly.Python.ORDER_ATOMIC);
  var dropdown_action = block.getFieldValue('ACTION');
  // TODO: Assemble Python into code variable.
  var code = value_encoder + "." + dropdown_action;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['robot_gyro_get'] = function(block) {
  var value_gyro = Blockly.Python.valueToCode(block, 'GYRO', Blockly.Python.ORDER_ATOMIC);
  var dropdown_action = block.getFieldValue('ACTION');
  // TODO: Assemble Python into code variable.
  var code = value_gyro + "." + dropdown_action;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['robot_sensor_reset'] = function(block) {
  var value_sensor = Blockly.Python.valueToCode(block, 'SENSOR', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_sensor + ".reset()";
  return code;
};
Blockly.Python['robot_accel_builtin_get'] = function(block) {
  var value_accel = Blockly.Python.valueToCode(block, 'ACCEL', Blockly.Python.ORDER_ATOMIC);
  var dropdown_dir = block.getFieldValue('DIR');
  // TODO: Assemble Python into code variable.
  var code = value_accel + "." + dropdown_dir;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['robot_invert_drive_motor'] = function(block) {
  var value_drive = Blockly.Python.valueToCode(block, 'DRIVE', Blockly.Python.ORDER_ATOMIC);
  var dropdown_motor = block.getFieldValue('MOTOR');
  var checkbox_is_inverted = block.getFieldValue('IS_INVERTED') == 'TRUE';
  // TODO: Assemble Python into code variable.
  var code = value_drive + ".setInvertedMotor(wpilib." + dropdown_motor + ", " + (checkbox_is_inverted ? "True" : "False") + ")\n";
  return code;
};
Blockly.Python['robot_solenoid'] = function(block) {
  var value_channel = Blockly.Python.valueToCode(block, 'CHANNEL', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'wpilib.Solenoid(' + value_channel + ")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['robot_solenoid_double'] = function(block) {
  var value_channel_f = Blockly.Python.valueToCode(block, 'CHANNEL_F', Blockly.Python.ORDER_ATOMIC);
  var value_channel_r = Blockly.Python.valueToCode(block, 'CHANNEL_R', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'wpilib.DoubleSolenoid(' + value_channel_f + ", " + value_channel_r + ")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['robot_solenoid_set'] = function(block) {
  var value_solenoid = Blockly.Python.valueToCode(block, 'SOLENOID', Blockly.Python.ORDER_ATOMIC);
  var value_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_solenoid + ".set(" + value_value + ")\n";
  return code;
};
Blockly.Python['robot_solenoid_double_set'] = function(block) {
  var value_solenoid = Blockly.Python.valueToCode(block, 'SOLENOID', Blockly.Python.ORDER_ATOMIC);
  var dropdown_value = block.getFieldValue('VALUE');
  // TODO: Assemble Python into code variable.
  var code = value_solenoid + ".set(wpilib.DoubleSolenoid.Value." + dropdown_value + ")\n";
  return code;
};
Blockly.Python['robot_solenoid_get'] = function(block) {
  var value_solenoid = Blockly.Python.valueToCode(block, 'SOLENOID', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_solenoid + ".get()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['robot_event_begin'] = function(block) {
  var dropdown_mode = block.getFieldValue('MODE');
  var statements_code = Blockly.Python.statementToCode(block, 'CODE') || Blockly.Python.INDENT + 'pass';
  
  
  var globals = Blockly.Variables.allVariables(block);
  for (var i = globals.length - 1; i >= 0; i--) {
    var varName = globals[i];
    globals[i] = Blockly.Python.variableDB_.getName(varName,
          Blockly.Variables.NAME_TYPE);
  }
  globals = globals.length ? '  global ' + globals.join(', ') + '\n' : '';
  
  var code = 'def ' + dropdown_mode + '(self):\n' + globals + statements_code;
  
  return code;
};
Blockly.Python['robot_event_periodic'] = Blockly.Python['robot_event_begin'];