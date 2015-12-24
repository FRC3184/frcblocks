import cgi, cgitb, subprocess, shlex, sys
cgitb.enable(logdir="logs")

form = cgi.FieldStorage()

print("Content-Type: text/html")
print()
#print(form)
def run(cmd):
    subprocess.Popen(shlex.split(cmd), creationflags=subprocess.CREATE_NEW_CONSOLE)

if 'code' in form and 'name' in form:
    load = open("code/" + form['name'].value + ".py", 'w+')
    load.write(form['code'].value)
    print("Wrote")
    load.close()
    cmd = "python \"code/_runner.py\" " + form['name'].value
    if 'opt' in form:
        opt = form['opt'].value
        if opt == "deploy":
            run(cmd + " deploy deploy")
        if opt == "sim":
            run(cmd + " sim sim")