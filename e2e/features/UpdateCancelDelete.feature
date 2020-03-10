Feature: Validate Update-Delete-Cancel fucntionality
 
Scenario: Check item update functionality
Given I am on budget app home page
Then I can successfully update the category of second item and its description


Scenario: Check item update-cancel functionality
Given I am on budget app home page
When I can attempt to update second item but can decide to cancel successfully


Scenario: Check item delete  functionality
Given I am on budget app home page
Then I can successfully delete the second item 

