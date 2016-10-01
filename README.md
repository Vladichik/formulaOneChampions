# Formula 1 Champions


**Steps to run the project:**

1. Download the project
2. Enter the project directory from CLI
3. Run 'grunt serve' to start the project (it will open new tab in your browser automatically)

*This example app was built using AngularJs only without using any 3rd party libraries.* <br>
*Styles were written using SASS syntax.*

**Few words about the architecture:**

Application consists of a single controller that operates the whole application:
*Fetching data from the Api, dealing with received data etc.* <br>
*No routing setup was made because of the application requirements.* <br>
*Application contains separate strings file that contains all application strings with ability to change languages.*<br>
*Application contains global_filters and global_services files that contain application tools for global application usage.*<br>

*Stylesheet implementation:* <br>
*I used SASS syntax in order to create reusable constants, mixins and class extensions* <br>
*Application contains 3 stylesheet files VARIABLES.SASS for declaring constants and mixins, ICONS.SASS for icons and MAIN.SASS for main stylesheet implementation.* <br>
*All three above mentioned files are transpiled into MAIN.CSS using Compass*






