@wip
Feature: Bootcamp E2E

  Background:
    Given I am at the home page
    Given I've closed the promo banner if it appeared

  @search_bar_manipulations
  Scenario: Search bar
    When I enter the word "Windows" in the search bar and click the search
    Then Check that at least 1 item appears

  @internet_shop_logo_button
  Scenario: Internet shop logo button
    When I open "Today's Best Deals" tab
    Then I click on the Internet shop logo
    Then I should see the main page
