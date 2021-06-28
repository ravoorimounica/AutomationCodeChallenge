 
Feature: To Automate WebTable Add, Delete Actions and App Validations
     As an Engr. Candidate
     I need to automate http://www.way2automation.com/angularjs-protractor/webtables/
     So I can show my automation capabilities

Background:
Given Launch the application "http://www.way2automation.com/angularjs-protractor/webtables/"
When User validates the title

Scenario: Add a user and validate the user has been added to the table

When User selects Add user button and validates the Modal header
And User fills in the details, hit Save and validates modal is closed
Then user details should be added to table


Scenario: Delete user User Name: novak and validate user has been deleted

When User looks for user Name and select remove user icon for "Novak"
When confirmation dialog pops up
Then select ok
Then user should be removed from the table for "Novak"
