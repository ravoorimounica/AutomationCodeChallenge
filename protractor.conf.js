exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    // directConnect: true,
    getPageTimeout: 60000,
    allScriptsTimeout: 50000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        "browserName": 'chrome',
        chromeOptions: { args: ['start-maximized']}
    },
    specs: ['features/AddDeleteUser.feature',
],

    cucumberOpts: {
        // require step definitions
        format: 'json:cucumber_report.json',
        require: [
          'features/step-definitions/AddDeleteUser_step.js',
        ]
      }
  };