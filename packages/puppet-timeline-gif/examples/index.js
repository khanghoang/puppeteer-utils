const { getPage } = require('puppet-pool');
const { startCapture, endCapture } = require('../');

const iphone5 = {
    name: 'iPhone 5',
    userAgent:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
    viewport: {
        width: 320,
        height: 568,
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true,
        isLandscape: false
    }
};

(async () => {
    const { page, closePage } = await getPage();

    await page.emulate(iphone5);

    const { endCapture } = await startCapture(page);

    await page.goto('https://www.apple.com');
    await page.goto('https://www.google.com');

    await endCapture();
    await closePage();
})();
