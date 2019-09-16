# Everyone deserves an easy way to use Puppeteer
## Dead simple example
```
const { getPage } = require('puppet-pool');

(async () => {
    const { page, closePage } = await getPage();
    await page.goto('https://www.apple.com');
    await closePage();
})();
```
