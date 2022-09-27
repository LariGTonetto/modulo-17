//const {join} = require('path')

exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub', 
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
      }]
    }

    