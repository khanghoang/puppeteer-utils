const { getPage, closePage } = require('puppet-pool');
const { startCapture, endCapture } = require('../');

(async () => {
    const page = await getPage();
    const { endCapture } = await startCapture(page);

    await page.goto('https://www.apple.com');
    await page.goto('https://www.google.com');

    await closePage(page);
    await endCapture();
})();
