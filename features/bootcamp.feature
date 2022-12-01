Feature: Bootcamp E2E

  Scenario: Search bar

    //Open the home page
  Close the promo banner if it appears
  Entry the word "Windows" in the search bar (top middle)
  Click the search
  Check that at least one item appears//

  Background:
    Given I am in the {string} home page
    When I need entry the word "Windows" in the search bar
    And I close the promo banner if it appears
    Then I should be able click the search button
    And check that at least one "Windows" item appears

#    //browser.refresh() will load page again and banner shouldn't pop up, other solution
#  is to use try catch block so you can try to click on X on banner (not sure but I guess you should
#  add wait function until banner pop up)
#  and catch the error if banner doesn't exist. It will pop up only for first test case
