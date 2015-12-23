FRC Blocks
==

What is this?
===

FRC Blocks is intended as a starter method for those new to coding, but want to code simple FRC bots. It's essentially a bridge between Blockly and robotpy. This does output code that can be run on an FRC robot using robotpy.

That's great! How do I use it?
===
Install Python 3 and pyfrc.

Start the webserver (run.bat). It's just a python http.server with CGI enabled.

Navigate to localhost:8000/cgi-bin/index.py using your favorite web browser (not IE).

Start coding! You will need, at minimum, a robotInit procedure, and a teleopPeriodic procedure. Further methods can be found in the robotpy docs. 

Enter a filename and click 'save' if you need. Other commands are run from the code in your browser.

All methods and objects are very similar to robotpy. When in doubt, you'll need an object and not just a channel number.

Other things
==
This distribution contains a copy of Blockly with unnecessary generators, etc, removed.

This project was created by Nick Schatz of FRC Team 3184 Blaze Robotics. I'm not responsible for ANYTHING that this code does to your robot, your computer, or your cat. I will try to help you though.

Feel free to improve on this code. This is a very basic implementation so far, and I still need to do all the documentation, overloading, and pneumatic systems. (can also be found in todo.txt)