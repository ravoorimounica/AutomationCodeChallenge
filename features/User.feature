 
Feature: WebTable Actions and Validations

Scenario: Add a user and validate the user has been added to the table

Given Launch the application "http://www.way2automation.com/angularjs-protractor/webtables/"
Then User validates the title
When User selects Add user button and validates the Modal header
When User fills in the details, hit Save and validates modal is closed
Then user details should be added to table
