"use strict";

const path = require('path');

exports.config = {
    seleniumAddress: 'http://localhost:4723/wd/hub',
    specs: [path.resolve('./test/spec.js')],
    capabilities: {
        browserName: 'chrome',
        platformName: 'Android',
        deviceName: '9ff69a1b7d14'
    },
    onPrepare: () => {
        browser.waitForAngularEnabled(false);
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 50000
    }
};