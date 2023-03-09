exports.config = {
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      app: 'C:/Users/digit/Downloads/app-release.apk',
      desiredCapabilities: {
        appPackage: 'com.qazandoapp',
        appActivity: 'MainActivity',
        deviceName: 'pixel',
        platformVersion: '9'
      }
    }
  },
  include: {
    I: './steps_file.js',
    login_page: './pages/login_page.js',
    home_page: './pages/home_page.js'
  },
  mocha: {
    reporterOptions: {}
  },
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  /* gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  }, */
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
  },
  name: 'automação-codeceptjs-appium',
  tests: './steps/*_test.js'
}