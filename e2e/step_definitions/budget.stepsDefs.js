import { Given, When, Then } from 'cucumber';
import budgetPage from '../page_objects/budget.page';

Given('I am on budget app home page', () => {
  budgetPage.open();
});

Given('The app data is empty', () => {
  budgetPage.clearExistingBudgetData();
});

When('I successfully add inflow item Income with description and amount', () => {
  budgetPage.addBudgetItem('Income', 'paycheck creditted', '10000');
});

Then('Total Inflow and Working Balance is properly updated', () => {
  budgetPage.validateTotalAmount('10000', 'Inflow');
});

Given(/^I add outflow item "(.+)" with description "(.*)" and amount "(-?[0-9]+)"$/, (expenseType, text, value) => {
  budgetPage.addBudgetItem(expenseType, text, value);
});

Then(
  /^Outflow item "(.+)" should be added with description "(.*)" and value "(-?[0-9]+)"$/,
  (expenseType, text, value) => {
    budgetPage.verifyLatestAddition('Outflow', expenseType, text, value);
  }
);

Then(
  /^Total Inflow is "(-?[0-9]+)" and Total Ouflow is "(-?[0-9]+)" and Working Balance is "(-?[0-9]+)"$/,
  (totalInflow, totalOutFlow, workingBalance) => {
    budgetPage.validateTotalAmount(totalInflow, 'Inflow');
    budgetPage.validateTotalAmount(totalOutFlow, 'Outflow');
    budgetPage.validateWorkingBalance(workingBalance);
  }
);
When('I can successfully update the category of second item and its description', () => {
  budgetPage.editBudgetItem('2', 'Commute', ' and car repair');
});

When('I can attempt to update second item but can decide to cancel successfully', () => {
  budgetPage.editBudgetItem('2', 'Commute', ' and car repair', 'cancelFlag');
});

Then('I can successfully delete the second item', () => {
  budgetPage.deleteItem(2);
});
