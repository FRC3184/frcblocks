import cgi, cgitb
cgitb.enable()

form = cgi.FieldStorage()

print("Content-Type: text/html")
print()
#print(form)

if 'save' in form and 'name' in form:
    load = open("saves/" + form['name'].value + ".xml", 'w+')
    load.write(form['save'].value)
    print("Wrote")
    load.close()