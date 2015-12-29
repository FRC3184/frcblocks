//Keep from navigating if the workspace has changed
var confirmOnPageExit = function (e) 
{
    // If we haven't been passed the event get the window.event
    e = e || window.event;

    var message = 'You have unsaved changes. Would you still like to leave?';

    // For IE6-8 and Firefox prior to version 4
    if (e) 
    {
        e.returnValue = message;
    }

    // For Chrome, Safari, IE8+ and Opera 12+
    return message;
};


//add wpilib import to code
var genCode = function(workspace) {
    return "import wpilib\n\n" + Blockly.Python.workspaceToCode(workspace);
};
//create workspace
var workspace = Blockly.inject('blocklyDiv',
    {toolbox: document.getElementById('toolbox')});
    
//load in saved file
var saved = document.getElementById("saved");
if (saved != undefined) {
    Blockly.Xml.domToWorkspace(workspace, saved);
    window.onbeforeunload = null;
}

//Format code for HTML and put it in the window
//Also add confirm navigation function
var codeWindow = document.getElementById("codeWindow");
workspace.addChangeListener(function() {
    window.onbeforeunload = confirmOnPageExit;
    codeWindow.innerHTML = genCode(workspace).replace(/ /g, '&nbsp;').replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/(\n)/g, '<br />').replace(/\\/g, "&bsol;");
});


//Save code using the name textbox
//Also disable navigation confirm
var save = document.getElementById("save");
save.onclick = function() {
    var name = document.getElementById("progname");
    var dom = Blockly.Xml.workspaceToDom(workspace).innerHTML;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'save.py', true);
    xhr.onreadystatechange = function() {
        window.onbeforeunload = null;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(xhr.responseText);
        }
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("name=" + name.value + "&save=" + dom);
};

//send things to compile script. 'opt' can be 'compile', 'deploy', or 'sim'
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