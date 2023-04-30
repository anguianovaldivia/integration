const assert = require('assert')
const {Before, Given, When, Then} = require('cucumber');
const Calculator = require('../lib/calculator');
 
let calculator;
 
Given('The numbers {int} and {int}', function (x, y) {
    calculator = new Calculator(x, y);
});
 
When('they are added together', function () {
    calculator.add();
});

When('they are rested together', function () {
    calculator.substract();
});
 
Then('the result is {int}', function (expected) {
    assert.equal(calculator.getResult(), expected)
});