Feature: Validate report screen 
 
Scenario: Check inflow registration
Given I am on budget app home page
When The app data is empty
When I successfully add inflow item Income with description and amount
When I add outflow item "Commute" with description "prague trip" and amount "2000"
When I go to report page
Then I see the report screen with graph successfully updated with item "Commute" and amount "2000"