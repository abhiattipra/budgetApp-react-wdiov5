Feature: Validate Inflow-Outflow registration

Scenario: Check inflow registration and balance updation
Given I am on budget app home page
When The app data is empty
When I successfully add inflow item Income with description and amount
Then Total Inflow and Working Balance is properly updated

Scenario Outline: Check outflow registration & balance updation
When I add outflow item "<expenseType>" with description "<text>" and amount "<value>"
Then Outflow item "<expenseType>" should be added with description "<text>" and value "<value>"
Then Total Inflow is "<totalInflow>" and Total Ouflow is "<totalOutFlow>" and Working Balance is "<workingBalance>"

#The test with commute budget entry here will fail as Working Balance is not displaying negative values when inflow < outflow. In such cases either a negative value should be displayed or a proper error/user message.
Examples:
    |expenseType| |text| |value| |totalInflow| |totalOutFlow| |workingBalance|
    |Groceries| |from market| |500| |10000| |500| |9500|
    |School| |february| |1500| |10000| |2000| |8000|
    |Entertainment| |imax| |200| |10000| |2200| |7800|
    |Commute| |prague trip| |8000| |10000| |10200| |-200|
