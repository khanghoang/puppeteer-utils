/* eslint-disable */

/*
 * To enable this image reporter, add it to your `jest.config.js` "reporters" definition:
    "reporters": [ "default", "<rootDir>/image-reporter.js" ]
 */

const imgur = require('imgur');
const fs = require('fs');

class ImgurImageReporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig;
    this._options = options;
  }

  async onTestResult(test, testResult, aggregateResults) {
    if (testResult.numFailingTests && testResult.failureMessage.match(/different from snapshot/)) {
      const files = fs.readdirSync('./__tests__/__image_snapshots__/__diff_output__/');
      files.forEach(async (value) => {
        const path = `diff_output/${value}`;
        const pathToImage = `./__tests__/__image_snapshots__/__diff_output__/${value}`;
        const res = await imgur.uploadFile(pathToImage)
        console.log('Link to the diff: ', res.data.link);
      });
    }
  }
}

module.exports = ImgurImageReporter;
