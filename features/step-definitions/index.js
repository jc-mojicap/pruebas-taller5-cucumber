//Complete siguiendo las instrucciones del taller

var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var {expect} = require('chai');

Given('I go to losestudiantes home screen', () => {
  browser.url('/');
  if($('button=Cerrar').isDisplayed()) {
    $('button=Cerrar').click();
  }
});

When('I open the login screen', () => {
  $('button=Ingresar').waitForExist(5000);
  $('button=Ingresar').waitForDisplayed(5000);
  $('button=Ingresar').click();
});

When('I fill a wrong email and password', () => {
  var cajaLogIn = $('.cajaLogIn');

  var mailInput = cajaLogIn.$('input[name="correo"]');
  mailInput.click();
  mailInput.setValue('wrongemail@example.com');

  var passwordInput = cajaLogIn.$('input[name="password"]');
  passwordInput.click();
  passwordInput.setValue('123467891');
});

When('I try to login', () => {
  var cajaLogIn = $('.cajaLogIn');
  cajaLogIn.$('button=Ingresar').click();
});

When(/^I fill with (.*) and (.*)$/ , (email, password) => {
    var cajaLogIn = $('.cajaLogIn');

    var mailInput = cajaLogIn.$('input[name="correo"]');
    mailInput.click();
    mailInput.setValue(email);

    var passwordInput = cajaLogIn.$('input[name="password"]');
    passwordInput.click();
    passwordInput.setValue(password);
});

Then(/^I expect to see (.*)/, (error) => {
    $('.aviso.alert.alert-danger').waitForDisplayed(5000);
    var alertText = $('.aviso.alert.alert-danger').getText('.aviso.alert.alert-danger');
    expect(alertText).contains(error);
});

When('I fill a correct email and password', () => {
  var cajaLogIn = $('.cajaLogIn');

  var mailInput = cajaLogIn.$('input[name="correo"]');
  mailInput.click();
  mailInput.setValue('jc.mojicap@uniandes.edu.co');

  var passwordInput = cajaLogIn.$('input[name="password"]');
  passwordInput.click();
  passwordInput.setValue('myPassword123');
});


Then('I expect to be able to login', () => {
    $('#cuenta').waitForExist(5000);;
});


