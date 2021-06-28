var { Given, When, Then, And } = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
const { element, browser, $$, $ } = require('protractor');

chai.use(chaiAsPromised);
var expect = chai.expect;

Given(/^Launch the application "([^"]*)"$/, { timeout: 2 * 3000 }, function (appURL) {
    return browser.get(appURL);
});

When(/^User validates the title$/, { timeout: 2 * 3000 }, function () {
    var actualtitle = browser.getTitle();
    return expect(actualtitle).to.eventually.equal('Protractor practice website - WebTables');
});

When(/^User selects Add user button and validates the Modal header$/, { timeout: 2 * 3000 }, function () {
    element(by.css("button[type='add']")).click();
    var modalHeader = element(by.css("h3[class='ng-binding']"));
    return modalHeader.getAttribute('innerText').then(text => {
        // console.log('The Modal header text is ', text);
        return expect(text).to.equal('Add User');
    });
});

When(/^User fills in the details, hit Save and validates modal is closed$/, { timeout: 2 * 3000 }, function () {
    element(by.css("input[name='FirstName']")).sendKeys('UserFirst');
    element(by.css("input[name='LastName']")).sendKeys('UserLast');
    element(by.css("input[name='UserName']")).sendKeys('test test');
    element(by.css("input[name='Password']")).sendKeys('test@123');
    element.all(by.css("input[name='optionsRadios']")).get(0).click();
    element(by.css("select[name='RoleId']")).click();
    element(by.css("option[value='0']")).click();
    element(by.css("input[name='Email']")).sendKeys('test@gmail.com');
    element(by.css("input[name='Mobilephone']")).sendKeys('5671872635');
    element(by.css("button[class='btn btn-success']")).click();
    var isModalClosed = element(by.css("div[class='modal ng-scope']"));
    return isModalClosed.isPresent().then(bool => {
        // console.log('Is the Modal diaplayed? - ', bool);
        return expect(bool).to.be.false;
    });
});

Then(/^user details should be added to table$/, { timeout: 2 * 3000 }, function () {
    browser.sleep(1000);
    element(by.css("input[type='text']")).sendKeys('UserLast');
    browser.sleep(1500);
    var rowcount = element.all(by.className('smart-table-data-row ng-scope'))
    return rowcount.count().then(value => {
        // console.log('the search result row count is ', value);
        return expect(value).to.equal(1);
    });
});

When(/^User looks for user Name and select remove user icon for "([^"]*)"$/, { timeout: 2 * 7000 }, function (userName) {
    browser.sleep(3500);
    element(by.css("input[type='text']")).clear();
    browser.sleep(5000);
    var userNamelist = $$('tbody > tr > td:nth-child(3)');
    var removeUserIcon = element.all(by.css("i[class='icon icon-remove']"))
    var userNamesCount = userNamelist.count().then(value => {
        console.log('the username count is ', value);
        return value;
    });
    console.log("before loop)")
    for (var i = 0; i < userNamesCount; i++) {
        console.log('I entered for loop');
        var temp = userNamelist.getAttribute('innerText').get(i).then(function(text)  {
            return text;
        });
        console.log('the name list is ', temp);
        if (temp === userName) {
             browser.sleep(5600);
            removeUserIcon.get(i).click();
            removeUserIcon.get(i).click();
        }
         browser.sleep(5600);
         return removeUserIcon.get(2).click();
    }
    // return removeUserIcon.get(2).click();

});


When(/^confirmation dialog pops up$/, { timeout: 2 * 7000 }, function () {
    browser.sleep(3000);
    var modalHeader = element(by.css("h3[class='ng-binding']"));
    return modalHeader.getAttribute('innerText').then(text => {
        console.log('The Modal header text is ', text);
        return expect(text).to.equal('Confirmation Dialog');
    });

});

Then(/^select ok$/, { timeout: 2 * 2000 }, function () {
    browser.sleep(2500);
    element(by.css("h3[class='ng-binding']")).click();
    return element(by.css("button[class='btn ng-scope ng-binding btn-primary']")).click();
});


Then(/^user should be removed from the table for "([^"]*)"$/, { timeout: 2 * 7000 }, function (userName) {
    browser.sleep(1500);
    element(by.css("input[type='text']")).click();
    element(by.css("input[type='text']")).sendKeys(userName);
    var rowcount = element.all(by.className('smart-table-data-row ng-scope'))
    rowcount.count().then(value => {
        console.log('the search result row count is ', value);
        return expect(value).to.equal(0);
    });
     browser.sleep(5500);
});

