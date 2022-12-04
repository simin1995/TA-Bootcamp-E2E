@wip
Feature: An user search the items and add or delete items to/from shopping cart

@searchItems
Scenario: An user searches Switch and the items appear
  Given An user is on Newegg page
  When An user types Swtich in the search bar and clicks search button
  Then Switch items are displayed
  And the names of the first five items contain Switch

@closeCookiesBanner
Scenario: Cookies banner shows up and click Accpet All
  When the cookies banner showes up
  Then Click on Accept All

@itemPage
Scenario: An user click one item and is navigated to the page
  When An user clicks on View Details button of the first item
  Then An user is navigated to the item page
