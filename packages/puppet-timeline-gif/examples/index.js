const { getPage } = require('puppet-pool');
const { startCapture, endCapture } = require('../');

(async () => {
    const { page, closePage } = await getPage();

    const { endCapture } = await startCapture(page);

    await page.goto('https://www.apple.com');
    await page.goto('https://www.google.com');

    await endCapture();
    await closePage();
})();
