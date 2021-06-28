# coding_challenge_IIII

Instructions:

Fork this repo.

Clone the repo and push up your changes and share link.

Using Protractor or WebDriverIO Bonus points for leveraging a BDD tool.

Create a branch and name it with your "{firstname_lastname}_FINEOS_challenge".
*Make sure to update your README to show how to run your scripts.*
*Fulfill the following two scenarios.*
*Once complete push your branch up.*

---
Feature: Automate
     As an Engr. Candidate
     I need to automate http://www.way2automation.com/angularjs-protractor/webtables/
     So I can show my automation capabilities

Scenario: Add a user and validate the user has been added to the table

Scenario: Delete user User Name: novak and validate user has been deleted

---
Install:
    npm install cucumber-html-reporter,
    npm install protractor-cucumber-framework,

pre-requisits:
Need to run the selenium server by using below script
npm run webdriver start

Run commands from script:
npm run protractorcuke --> To run the Automation script and to seee the results 