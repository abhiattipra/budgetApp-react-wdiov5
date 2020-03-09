import Page from './Page';
import utilities from './utilities';

class BudgetPage extends Page {
  get firstBudgetEntry() {
    return $('table > tbody > tr');
  }

  get lastBudgetEntry() {
    return $('table > tbody > tr:last-child');
  }

  /**
   * Get entry of budget to corresponding index
   * @param {*} index
   * @param {*} forClick determine if to click the selected row, to deal with existing BUG with tr not referenced
   */
  budgetEntry(index, forClick) {
    const currRow = `table > tbody > tr:nth-child(${index})`;
    return forClick ? $(`${currRow  }td:nth-child(1)`) : $(currRow);
  }

  get deleteButton() {
    return $('button.delete');
  }

  get updateButton() {
    return $('tbody button.submit');
  }

  get cancelButton() {
    return $('button.cancel');
  }

  get latestCategory() {
    return this.lastBudgetEntry.$('td:nth-child(1) .components-BudgetGridRow-style__cellContent')
  }

  get latestDescription() {
    return this.lastBudgetEntry.$('td:nth-child(2) .components-BudgetGridRow-style__cellContent')
  }

  get latestAmount() {
    return this.lastBudgetEntry.$('td:nth-child(3) .components-BudgetGridRow-style__cellContent')
  }

  get addNewBudgetButton() {
    return $('tfoot button.submit');
  }

  get addBudgetCategory(){
    return $('tfoot select[name="categoryId"]')
  }

  get addBudgetDescription(){
    return $('tfoot input[name="description"]')
  }

  get addBudgetAmount(){
    return $('tfoot input[name="value"]')
  }

  get editNewBudgetButton() {
    return $('table button.submit');
  }

  get editBudgetCategory(){
    return $('table tbody select[name="categoryId"]')
  }

  get editBudgetDescription(){
    return $('table tbody input[name="description"]')
  }

  get editBudgetAmount(){
    return $('table tbody input[name="value"]')
  }

  get totalInflow(){
    return $('div:nth-child(1) div.components-Balance-style__balanceAmount.components-Balance-style__pos')
  }

  get totalOutflow(){
    return $('div:nth-child(3) div.components-Balance-style__balanceAmount.components-Balance-style__neg')
  }

  get workingBalance(){
    return $('div:nth-child(5) div.components-Balance-style__balanceAmount.components-Balance-style__pos')
  }

  get amountAddButton(){
    return $('//button[text()="Add"]');
  }

  /**
   * Page methods
   *
   */
  get budgetEntryCount() {
    return $$('table > tbody > tr').length;
  }

  open() {
    super.open('/');
  }

  clearExistingBudgetData() {
    const count = this.budgetEntryCount;
    for (let i = 0; i < count; i++) {
      this.budgetEntry(1, true).click();
      this.deleteButton.click();
    }
  }
  }
  addBudgetItem(category, description, amount){
    this.addBudgetCategory.selectByVisibleText(category); 
    this.addBudgetDescription.setValue(description);
    this.addBudgetAmount.setValue(amount);
    this.amountAddButton.click();
  }

  editBudgetItem(index,category, description, cancelFlag){
    this.budgetEntry(index, true).click();
    this.editBudgetCategory.selectByVisibleText(category); 
    this.editBudgetDescription.addValue(description);
    if(cancelFlag){
      this.cancelButton.click();
      var updatedBudgetEntry = this.budgetEntry(index).getText().replace(/\n/g, " ");
      assert.equal("Travel Gas -$764.73", updatedBudgetEntry);
    }
    else{
      this.updateButton.click();
      var updatedBudgetEntry = this.budgetEntry(index).getText().replace(/\n/g, " ");
      assert.equal("Commute Gas and car repair -$764.73", updatedBudgetEntry);
    }
  }

  validateTotalAmount(amount, type){
    assert.equal(utilities.formatAmount(amount), this[`total${  type}`].getText()); 
  };

  validateWorkingBalance(amount){
    assert.equal(utilities.convertAmount(amount, amount < 0), this.workingBalance.getText());
  };

  verifyLatestAddition(type, category, desc, amount) {
    assert.equal(category, this.latestCategory.getText());
    assert.equal(desc, this.latestDescription.getText());
    assert.equal(utilities.convertAmount(amount, type === 'Outflow'), this.latestAmount.getText());
  }

  deleteItem(index){
    this.budgetEntry(index, true).click();
    this.deleteButton.click();
  }
}

export default new BudgetPage();
