import Page from './Page';

class ReportPage extends Page {
  get reportPageLink() {
    return $('=Reports');
  }

  get graphView() {
    return $('div.components-StackedChart-styles__stackedChart svg');
  }

  openReport() {
    this.reportPageLink.click();
  }

  validateReportPageBasic(category, amount) {
    this.graphView.isDisplayed();
    $(`span=${category}`).isDisplayed();
    $(`span*=${amount}`).isDisplayed();
  }
}

export default new ReportPage();
