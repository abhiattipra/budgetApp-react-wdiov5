# Budget app - e2e Test Plan and Framework

**A guide to understand and execute functional testing strategies used for testing Budget app**

## Scope

Functionalities like add/edit budget item, inflow-outflow calculations, reports and its charts based on data, design consistency, data consistency across pages, and user experience is to be covered, with cross-platform support. 

Page refresh scenarios, network latency, app's performance with huge user data, style checks are not ccovered. The app will not be tested in android phones below 5.4 and iPhones below 8.0.

## Test Plan

![Test plan Mind Map](https://github.com/abhiattipra/budgetApp-react-wdiov5/blob/master/e2e/images/TestPlanMindMap.png)

---

# End-to-End Test Framework

The framework used is _WebdriverIO-V5_, a test automation framework that allows us to run tests based on Selenium's Webdriver protocol and requires Node.js to run.

Test are written using _Cucumber(BDD format)_

Reports are generated using _Cucumber-html-reporter_

Design pattern used is _Page Object Model_

Browsers supported are _Chrome_(default) and _Firefox_


_PS: The tests are written in Linux environment and should be working(not tested) in Mac or Windows env._




### System Requirements

* JDK - 1.8+
* Node - v8.10.0 or above
* NPM

### Local Environment Setup

* Clone the [project repo](https://github.com/abhiattipra/budgetApp-react-wdiov5.git), if not already done
* Ensure you are within the cloned folder `budgetApp-react-wdiov5`
* Run `npm install`

### Start Budget app

* Run `npm start`, to have app running on http://localhost:8000/budget

---


### Local Test Environment Setup

* Ensure you are within the cloned folder `budgetApp-react-wdiov5`
* Run `cd e2e`
* Run `npm install`

### Start Test execution

Run `npm test` to automate given test scenarios.

### Browser Configuration

Default browser configuration to run tests is specified in **/e2e/wdio.conf.js**, as below:

```javascript
capabilities: [
      browserCapabilities.chrome
    ],
```

Update **chrome** to **firefox** to run tests in firefox browser.

---

### View Test Report :

Use below commands to see the test report in your default browser(configured above).

Linux
<pre>
$ npm run report
</pre>

Mac
<pre>
$ npm run report-mac
</pre>

Windows
<pre>
$ npm run report-windows
</pre>

<br/>
<br/>
**Note:** One test scenario fails in automation where Total Outflow > Total Inflow as it expects Working Balance to be -ve. However, there is no -ve Working Balance generated in app and no user guide text is displayed in that case.

---