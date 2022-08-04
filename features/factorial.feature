Feature: Factorial 

Background: Navigate to the Factorial site
    Given Factorial site is opened 

Scenario: Calculate factorial of 0
    When I enter "0" into the input field
    And I click on Calculate button
    Then I should see "The factorial of 0 is: 1" message
    And the response is with '200' statusCode

Scenario: Calculate factorial of 170
    When I enter "170" into the input field
    And I click on Calculate button
    Then I should see "The factorial of 170 is: 7.257415615307999e+306" message
    And the response is with '200' statusCode

Scenario: Calculate factorial of 171
    When I enter "171" into the input field
    And I click on Calculate button
    Then I should see "The factorial of 171 is: Infinity" message
    And the response is with '200' statusCode

Scenario: Calculate factorial of 12 with space before it
    When I enter " 12" into the input field
    And I click on Calculate button
    Then I should see "The factorial of  12 is: 479001600" message
    And the response is with '200' statusCode

Scenario: Enter fractional number
    When I enter "12.5" into the input field
    And I click on Calculate button
    Then I should see "Please enter an integer" message

Scenario: Enter string into input field
    When I enter "SLJJJKG" into the input field
    And I click on Calculate button
    Then I should see "Please enter an integer" message

Scenario: Enter special charcters into input field
    When I enter "#$%^&*" into the input field
    And I click on Calculate button
    Then I should see "Please enter an integer" message

Scenario: Not enter any character into input field
    When I click on Calculate button
    Then I should see "Please enter an integer" message

Scenario: Enter a negative number into input field
    When I enter "-10" into the input field
    And I click on Calculate button
    Then the response is with '500' statusCode

Scenario: Enter a number more than 1000 into input field
    When I enter "1100" into the input field
    And I click on Calculate button
    Then the response is with '500' statusCode



       