Feature: Validate Booking Functionality

  Scenario Outline: Validate Booking Functionality
    Given The user navigates to adactin page
    When The user enters the valid "<username>" in the username field
    And The user enters the valid "<password>" in the password field
    And The user clicks the loginButton
    And The Navigate to the search hotel page
    When The user selecting the '<location>' in location dropdown
    And The user selecting the '<hotel>' in hotels dropdown
    And The user selecting the '<type>' in room type dropdown
    And The user selecting the "<unit>" in the numberof rooms dropdown
    And The user selecting the "<adultscount>" in the adults per room dropdown
    And The user click the search button

     Examples:
    |username        |password |location |hotel       |type   |unit    |adultscount |
    |chamundeeshwari |21JD9Y   |Sydney   |Hotel Creek |Deluxe |1 - One |1 - One     |