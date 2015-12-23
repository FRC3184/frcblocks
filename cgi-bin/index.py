import cgi, cgitb, os
cgitb.enable()

form = cgi.FieldStorage()

toolbox = """
<xml id="toolbox" style="display: none">
    <category name="Variables" custom="VARIABLE" colour="330"></category>
    <category name="Functions" custom="PROCEDURE" colour="290"></category>
    <category name="Lists" colour="260">
        <block type="lists_create_with"></block>
        <block type="lists_repeat"></block>
        <block type="lists_length"></block>
        <block type="lists_isEmpty"></block>
        <block type="lists_indexOf"></block>
        <block type="lists_getIndex"></block>
        <block type="lists_setIndex"></block>
        <block type="lists_getSublist"></block>
        <block type="lists_split"></block>
    </category>
    <category name="Logic" colour="210">
        <block type="controls_if"></block>
        <block type="logic_compare"></block>
        <block type="logic_operation"></block>
        <block type="logic_negate"></block>
        <block type="logic_boolean"></block>
        <block type="logic_null"></block>
        <block type="logic_ternary"></block>
    </category>
    <category name="Control" colour="120">            
        <block type="controls_repeat_ext"></block>
        <block type="controls_whileUntil"></block>
        <block type="controls_for"></block>
        <block type="controls_forEach"></block>
        <block type="controls_flow_statements"></block>            
    </category>
    <category name="Math" colour="230">
        <block type="math_number"></block>
        <block type="math_arithmetic"></block>
        <block type="math_single"></block>
        <block type="math_constant"></block>
        <block type="math_trig"></block>
        <block type="math_number_property"></block>
        <block type="math_change"></block>
        <block type="math_round"></block>
        <block type="math_on_list"></block>
        <block type="math_modulo"></block>
        <block type="math_constrain"></block>
        <block type="math_random_int"></block>
        <block type="math_random_float"></block>
    </category>
    <category name="Text" colour="160">
        <block type="text"></block>
        <block type="text_join"></block>
        <block type="text_append"></block>
        <block type="text_length"></block>
        <block type="text_isEmpty"></block>
        <block type="text_indexOf"></block>
        <block type="text_charAt"></block>
        <block type="text_getSubstring"></block>
        <block type="text_changeCase"></block>
        <block type="text_trim"></block>
        <block type="text_print"></block>
        <block type="text_prompt_ext"></block>
    </category>
    <category name="Robot Drive" colour="60">
        <block type="robot_motor"></block>
        <block type="robot_motor_set"></block>
        <block type="robot_drive2"></block>
        <block type="robot_drive4"></block>
        <block type="robot_drive_arcade"></block>
        <block type="robot_drive_tank"></block>
        <block type="robot_drive_mecanum"></block>
    </category>
    <category name="Sensors" colour="60">
        <block type="robot_sensor_reset"></block>
        <block type="robot_gyro"></block>
        <block type="robot_gyro_get"></block>
        <block type="robot_encoder"></block>
        <block type="robot_encoder_get"></block>
        <block type="robot_accel_builtin"></block>
        <block type="robot_accel_builtin_get"></block>
    </category>
    <category name="Pneumatics" colour="60">
    
    </category>
    <category name="Controllers" colour="60">
        <block type="robot_joystick"></block>
        <block type="robot_joystick_button"></block>
        <block type="robot_joystick_axis"></block>
        <block type="robot_joystick_axis_raw"></block>
    </category>
</xml>
"""
scripts = """
<script src="../blockly/blockly_compressed.js"></script>
<script src="../blockly/blocks_compressed.js"></script>
<script src="../blockly/msg/js/en.js"></script>
<script src="../blockly/blocks/lists.js"></script>
<script src="../blockly/blocks/logic.js"></script>
<script src="../blockly/blocks/loops.js"></script>
<script src="../blockly/blocks/math.js"></script>
<script src="../blockly/blocks/procedures.js"></script>
<script src="../blockly/blocks/variables.js"></script>
<script src="../blockly/blocks/robot.js"></script>

<script src="../blockly/generators/python.js"></script>
<script src="../blockly/generators/python/robot.js"></script>
<script src="../blockly/generators/python/lists.js"></script>
<script src="../blockly/generators/python/logic.js"></script>
<script src="../blockly/generators/python/loops.js"></script>
<script src="../blockly/generators/python/math.js"></script>
<script src="../blockly/generators/python/procedures.js"></script>
<script src="../blockly/generators/python/variables.js"></script>

<script>
    var genCode = function(workspace) {
        return "import wpilib\\n\\n" + Blockly.Python.workspaceToCode(workspace);
    };
    var workspace = Blockly.inject('blocklyDiv',
        {toolbox: document.getElementById('toolbox')});
        
    var saved = document.getElementById("saved");
    if (saved != undefined) {
        Blockly.Xml.domToWorkspace(workspace, saved);
    }
    var codeWindow = document.getElementById("codeWindow");
    
    workspace.addChangeListener(function() {
        codeWindow.innerHTML = genCode(workspace).replace(/ /g, '&nbsp;').replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/(\\n)/g, '<br />').replace(/\\\\/g, "&bsol;");
    });
    var save = document.getElementById("save");
    save.onclick = function() {
        var name = document.getElementById("progname");
        var dom = Blockly.Xml.workspaceToDom(workspace).innerHTML;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'save.py', true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                console.log(xhr.responseText);
            }
        }
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send("name=" + name.value + "&save=" + dom);
    };
    
    var send = function(opt) {
        var name = document.getElementById("progname");
        var code = genCode(workspace);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'compile.py', true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                console.log(xhr.responseText);
            }
        }
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send("name=" + name.value + "&opt=" + opt + "&code=" + code);
    };
    var compile = document.getElementById("compile");
    compile.onclick = function() {
        send("compile");
    };
    var deploy = document.getElementById("deploy");
    deploy.onclick = function() {
        send("deploy");
    };
    var sim = document.getElementById("sim");
    sim.onclick = function() {
        send("sim");
    };
</script>
"""

print("Content-Type: text/html")    # HTML is following
print()                             # blank line, end of headers
saved = None
if 'load' in form:
    load = open("saves/" + form['load'].value + ".xml", 'r')
    saved = ''.join(load.readlines())
    load.close()
print("""
<!DOCTYPE html>
<html style="height:100%">
<head>
<title>FRC Blocks</title>
</head>
<body style="height:100%">
""" + toolbox)
if saved is not None:
    print("<xml id=\"saved\" style=\"display:none\">" + saved + "</xml>")
print("<div id=\"blocklyDiv\" style=\"height: 75%; width: 60%; float:left;\"></div><code id=\"codeWindow\" style=\"height: 75%; width: 40%; float:right; overflow:auto;\"></code>")
print("""<input id="progname" type="text" placeholder="Name" value=\"""" + ((form['load'].value) if 'load' in form else "") + """\"/>
<button id="save">Save</button><button id="compile">Compile</button><button id="deploy">Deploy</button><button id="sim">Simulate</button>
<br />
<div style="overflow:auto;height:20%">
<ul id="files">
""")
for i in os.listdir("saves"):
    i = i[:-4]
    print("<li><a href=\"index.py?load=" + i + "\">" + i + "</a></li>")
print("</ul></div>")
print(scripts)
print("</body></html>")
