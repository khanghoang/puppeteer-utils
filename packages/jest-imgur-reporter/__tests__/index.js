const { getPage } = require('puppet-pool');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

test('should work', async () => {
    const page = await getPage();
    await page.goto('https://www.apple.com');
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
})
