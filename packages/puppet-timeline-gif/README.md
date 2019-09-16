# Turn your Puppeteer session into gif
### Dead simple example
```
const { getPage } = require('puppet-pool');
const { startCapture, endCapture } = require('puppet-timeline-gif');

(async () => {
    const { page, closePage } = await getPage();

    const { endCapture } = await startCapture(page);

    await page.goto('https://www.apple.com');

    await endCapture();
    await closePage();
})();
```
