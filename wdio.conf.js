//const {join} = require('path')
const allure = require('allure-commandline')

exports.config = {
  hostname: 'localhost',
  port: 4723,
  path: '/wd/hub',
  services: ['appium'],
  specs: [
    './test/specs/**/*.js'
  ],
  framework: 'mocha',
  capabilities: [{
    // "app": join(process.cwd(), '.app/android/woocoom.apk'),
    "platformName": "Android",
    "appium:platformVersion": "9.0",
    "appium:deviceName": "ebac-qe",
    "appium:automationName": "UiAutomator2",
    "appium:app": "C:\\Users\\LarissaTonetto\\Repositorio\\testes-mobile-android-2\\app\\android\\woocoom.apk",
    "appium:appWaitActivity": "com.woocommerce.android.ui.login.LoginActivity"
  }],
  waitforTimeout: 20000,
  mochaOpts: { timeout: 300000 },
  reporters: ['spec',
  ['allure', {
    outputDir: 'allure-results',
    disableWebdriverStepsReporting: false,
    disableWebdriverScreenshotsReporting: false,
  }],
],
  onComplete: function () {
    const reportError = new Error('Could not generate Allure report')
    const generation = allure(['generate', 'allure-results', '--clean'])
    return new Promise((resolve, reject) => {
      const generationTimeout = setTimeout(
        () => reject(reportError),
        5000)

      generation.on('exit', function (exitCode) {
        clearTimeout(generationTimeout)

        if (exitCode !== 0) {
          return reject(reportError)
        }

        console.log('Allure report successfully generated')
        resolve()
      })
    })
  },
  afterStep: function (test, scenario, { error, duration, passed }) {
    driver.takeScreenshot()
  }
}