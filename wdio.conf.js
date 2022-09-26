const {join} = require('path')

exports.config = {
    hostname: 'http://localhost',
    port: 4723,
    path: '/wd/hub', 
    specs: [
        './test/specs/**/*.js'
    ],
    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
        "platformVersion": "9.0",
        "deviceName": "ebac-qe",
        "automationName": "UiAutomator2",
        "app": join(process.cwd(), '.app/android/woocoom.apk'),
        "appWaitActivity": "com.woocommerce.android.ui.login.LoginActivity",
      }]
    }