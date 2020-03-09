import { Given, When, Then } from 'cucumber';
import reportPage from '../page_objects/report.page';

When('I go to report page', () => {
  reportPage.openReport();
});

Then(
  /^I see the report screen with graph successfully updated with item "(.*)" and amount "(-?[0-9]+)"$/,
  (category, amount) => {
    reportPage.validateReportPageBasic(category, amount);
  }
);
