Installing
===
0. Install Python 3. https://www.python.org/downloads/

1. Download the zip file from github. Unzip it somewhere on your development computer. It's a portable script, doesn't matter where.

2. Install pyfrc on the robot and your development computer. https://github.com/robotpy/pyfrc



Coding
===
1. Run "run.bat"

2. Navigate to "localhost:8000/cgi-bin/index.py"

3. Use blocks from the "Robot Events" category to begin coding. Each 'init' method is run once at the beginning of the respective phase, while 'periodic' methods are run at 50hz ideally.

4. Create motor controllers, sensors, robot drives, and joysticks using their respective constructor blocks (the ones with just a number input)

5. Use those objects in other blocks to perform actions, such as driving and getting a sensor value. Specific documentation can be found on http://robotpy.readthedocs.org/en/latest/

Running & saving
===
To save, enter a name in the text box and press "Save". This will be saved to the "saves" dir and can be loaded by clicking on the file name in the web interface.

To compile (without running), press compile. It's not necessary to save before this.

To deploy to robot, press "deploy". You can watch the output on the web server to see if anything is going wrong.

To run on the simulator, press "Simulate". This compiles the code and runs the PyFRC simulator.