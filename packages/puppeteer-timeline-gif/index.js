const { getPage, closePage } = require('puppeteer-pool');
const os = require('os');
const { readJson, outputJson } = require('fs-extra');
const { resolve } = require('path');
const snapline = require('snapline');

module.exports = {

    startCapture: async (page) => {
        const client = await page.target().createCDPSession();
        await client.send('Performance.enable');

        const tempPath = os.tmpdir();
        const filePath = resolve(tempPath, 'trace.json');
        await page.tracing.start({ path: filePath, screenshots: true });
        return {
            endCapture: async () => {
                await page.tracing.stop();
                const contentFile = await readJson(filePath);
                await outputJson(filePath, contentFile.traceEvents);

                const gifPath = await snapline.toGif(contentFile.traceEvents);
                console.log(`The gif is ready: ${gifPath}!`);
            }
        }
    },

}
