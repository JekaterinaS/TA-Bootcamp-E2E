@wip
Feature: Bootcamp E2E

  Background:
    Given I am at the home page

  @close_promo_banner
  Scenario: Promo banner
    When I close the promo banner
    Then the promo banner should disappear

  @search_bar_manipulations
  Scenario: Search bar
    When I entry the word "Windows" in the search bar and click the search
    Then Check that at least one item appears

 # @logo_button
 # Scenario: Internet shop logo button
 #  Then the promo banner should disappear
 #  When Open Best deal tab
 #  Then Click on the Internet shop logo and check the main page opened