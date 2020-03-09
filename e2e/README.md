# End to End test framework

The framework used is WebdriverIO-V5, a test automation framework that allows us to run tests based on Selenium's Webdriver protocol and requires Node.js to run

Test are written using **Cucumber(BDD format)**
Reports are generated using **Cucumber-html-reporter**
Design pattern used is **Page Object Model **
Browsers supported are **Chrome**(default) and **Firefox**

Ps: The tests are written in Linux environment and should be working (not tested) in Mac or Windows env.




#### Setup
###### Prerequiste environment
**JDK 1.8:**
Install JDK 1.8+ and make sure class path is set properly based on your OS. 
Java (https://www.java.com/en/download/) - Installed and added to your path.JAVA is require to start Selenium Server nothing else.

**Node v8.10.0 and Above.**
While earlier versions of node may work, they have not been tested or verified.
[Download Node.js](http://nodejs.org/en/ "Download Node.js") 
Follow the instructions for install. 
To check installation is successful, run `$ node -v`  in the terminal, you should see the Node version installed.

**NPM**
This will be installed with node. To check, run `$ npm -v` in the terminal, you should see the NPM version installed.
If not installed, follow the instructions for install from the link below.
[Dowload NPM]( https://www.npmjs.com/)

Few additional tools like [GIT](http://git-scm.com/downloads "GIT") and a [suitable IDE](https://code.visualstudio.com/download "suitable IDE") should be already be installed

Now follow the commands
`$ git clone https://github.com/abhiattipra/budgetAppE2E `
Go to the clones location and from the root folder 
`$ npm install`
`$ npm start`

Now that you have our budget app runing on localhost-port: 8000
http://localhost:8000/budget
###### Test framework 

#### To run tests : 
Go to cd into **/e2e** folder  and execute `$npm install` and then `$ npm test`

By default test will be running in Chrome. If you want to change to firefox,  go to  **/e2e/wdio.conf.js** and edit- replace with** firefox** instead of chrome in the below line 2

```javascript
capabilities: [
      browserCapabilities['chrome'] 
    ],
```
###### To view test report :
Linux- `$ npm run report`
Mac-`$ npm run report-mac`
Windows - `$ npm run report-windows`
and you will see the test report  in your default browser


