import { Given, When, Then } from '@cucumber/cucumber';
import { assert } from 'chai';
import Factorial from '../pageObjects/factorial.page';


Given(/^Factorial site is opened$/, () => {
  Factorial.waitForIsShown(true);
});

When(/^I enter "(.*)" into the input field$/,  async (inputText) => {
   await Factorial.input.setValue(inputText);
});

When(/^I click on Calculate button$/, async () => {
  browser.setupInterceptor();
  await Factorial.calculateButton.click();
});

Then(/^I should see "(.*)" message$/, async (expectedMessage) => {  
  const isDisplayed = await Factorial.getResult(expectedMessage).waitForDisplayed({ timeout: 5000 });
  assert.isTrue(isDisplayed, `The message is: ${expectedMessage}`);
});

Then(/^the response is with '(.*)' statusCode?/, async (statusCode) => {
  await browser.pause(1500); 
  var request = await browser.getRequest(0);
  assert.equal(request.response?.statusCode, statusCode, `Status code of response is '${statusCode}'`);
})

