## 1.Launch of the project

After downloading the project
Need to install dependencies, by typing in the console, command **bower i && npm i**
at the terminal in the directory with the project.

After that, you need to run gulp by typing in the console, command 'npm run build'
at the terminal in the directory with the project
Then, after the full launch gulp, go to the browser link:
http://localhost:8000/

--------------------------

## 2.Launch Unit Tests

To start you need at the terminal in the directory with the project, enter the command
karma **start karma.config.js**

--------------------------

## 3.Launch E2E Tests

You need to run Selenium Server, typing in the console, command **webdriver-manager start**
at the terminal in the directory with the project.
Once, in the new terminal window typing in the console, command **protractor protractor.config.js**
at the terminal in the directory with the project.
