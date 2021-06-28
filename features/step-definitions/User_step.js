var { Given, When, Then, After } = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
const { element, browser } = require('protractor');

chai.use(chaiAsPromised);
var expect = chai.expect;

Given(/^Launch the application "([^"]*)"$/, {timeout: 2 * 3000}, function (appURL) {
    return browser.get(appURL);
});

When(/^User validates the title$/, {timeout: 2 * 3000}, function () {
    var actualtitle = browser.getTitle();
    return expect(actualtitle).to.eventually.equal('Protractor practice website - WebTables');
});

When(/^User selects Add user button and validates the Modal header$/, {timeout: 2 * 3000}, function () {
    element(by.css("button[type='add']")).click();
    var modalHeader = element(by.css("h3[class='ng-binding']"));
    return modalHeader.getAttribute('innerText').then(text => {
        console.log('The Modal header text is ', text);
        return expect(text).to.equal('Add User');
    });
});

When(/^User fills in the details, hit Save and validates modal is closed$/, {timeout: 2 * 3000}, function () {
    element(by.css("input[name='FirstName']")).sendKeys('UserFirst');
    element(by.css("input[name='LastName']")).sendKeys('UserLast');
    element(by.css("input[name='UserName']")).sendKeys('test test');
    element(by.css("input[name='Password']")).sendKeys('test@123');
    element(by.css("input[name='optionsRadios']")).click();
    element(by.css("select[name='RoleId']")).click();
    element(by.css("option[value='0']")).click();
    element(by.css("input[name='Email']")).sendKeys('test@gmail.com');
    element(by.css("input[name='Mobilephone']")).sendKeys('5671872635');
    element(by.css("button[class='btn btn-success']")).click();
    var isModalClosed = element(by.css("div[class='modal ng-scope']"));
    return isModalClosed.isPresent().then(bool => {
        console.log('Is the Modal diaplayed? - ', bool);
        return expect(bool).to.be.false;
    });
});

Then(/^user details should be added to table$/, {timeout: 2 * 3000}, function () {
    browser.sleep(1000);
    element(by.css("input[type='text']")).sendKeys('UserLast');
    browser.sleep(1500);
    var rowcount = element.all(by.className('smart-table-data-row ng-scope'))
    return rowcount.count().then(value => {
            console.log('the search result row count is ', value);
            return expect(value).to.equal(1);
        });  
    });

