# ColleenBrown RealDecoy QA Challenge

Automation Testing is used to speed up testing of software to save time, cost and improve accuracy. Cypress was chosen to complete this project. In this project, various areas of the Sauce Labs website will be automated.

## Dependencies
NodeJS (v12, v14 or above)
NPM (v6 or above)
Code editor (Visual Studio Code)
JavaScript v.17
GitBash

## Installation

Install the following packages in your terminal.

```bash
#For cypress
npm install cypress --save-dev
npx cypress open
#For reporter
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
npm install --save-dev npm-run-all


```

## Commands

```javascript

# opens cypress GUI
'npx cypress open'
# Select E2E testing, then Chrome browser then start

# runs all test and generated report in default browser window
'npm test'

# runs tests
'npm cypress run'
```


## Points to note

Run test suites in the Cypress GUI, therefore, run the command
```
npx cypress open
```
If at anytime the test may fail(flaky) refresh the test using the refresh button at the top right hand corner in the Cypress GUI or clear the chrome browser history in the Cypress GUI

## Acknowledgement
Thanks to the Management and team at RealDecoy for considering me for this position.

## Project Status
Completed to meet the requirements of the assignment. 
