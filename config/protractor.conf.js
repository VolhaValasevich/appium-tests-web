"use strict";

const path = require('path');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [path.resolve('./test/spec.js')],
    capabilities: {
        browserName: 'chrome'
    },
    onPrepare: () => {
        browser.waitForAngularEnabled(false);
    }
};