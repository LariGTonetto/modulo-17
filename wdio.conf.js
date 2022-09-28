//const {join} = require('path')
const allure = require('allure-commandline')
const video = require('wdio-video-reporter');

exports.config = {
  //hostname: 'localhost',
  //port: 4723,
  //path: '/wd/hub',
  user: 'larigottschall_SO9fNG',
  key: 'DnFJLzqCG84z3z5RxZ9g',
  //services: ['appium'],
  service: ['browserstack'],
  specs: [
    './test/specs/**/*.js'
  ],
  framework: 'mocha',
  capabilities: [{
    // "app": join(process.cwd(), '.app/android/woocoom.apk'),
    // "platformName": "Android",
    // "appium:platformVersion": "9.0",
    // "appium:deviceName": "ebac-qe",
    // "appium:automationName": "UiAutomator2",
    // "appium:app": "C:\\Users\\LarissaTonetto\\Repositorio\\testes-mobile-android-2\\app\\android\\woocoom.apk",
    // "appium:appWaitActivity": "com.woocommerce.android.ui.login.LoginActivity"

    'app': 'bs://c700ce60cf13ae8ed97705a55b8e022f13c5827c',
    'device': 'Google Pixel 3',
    'os_version': '9.0',
    'project': 'Meu primeiro projeto',
    'build': '1',
    'name': 'teste_login'


  }],
  waitforTimeout: 20000,
  mochaOpts: { timeout: 300000 },
  reporters: ['spec',
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: true,
    }],
    [video, {
      saveAllVideos: true,       // If true, also saves videos for successful test cases
      videoSlowdownMultiplier: 50, // Higher to get slower videos, lower for faster videos [Value 1-100]
    }]
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