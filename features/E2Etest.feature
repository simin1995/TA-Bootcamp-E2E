@wip
Feature: End to end testing for QA bootcamp

Background: 
  Given I am on Newegg page

@searchBar
Scenario: I search on the website and items I searched are displayed
  When I type Windows in the search bar and click search button
  Then Items are displayed

@todaysBestDeals
Scenario: Today's Best Deals tab and shopping cart logo function well
  When I click on Today's Best Deals tab
  Then I am navigated to Today's Best Deals page
  When I click on shopping cart logo
  Then I am navigate to shopping cart page