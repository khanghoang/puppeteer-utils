const { getPage, closePage } = require('puppet-pool');
const os = require('os');
const { readJson } = require('fs-extra');
const { resolve } = require('path');
const snapline = require('snapline');
const uuidv1 = require('uuid/v1');

module.exports = {
    startCapture: async (page) => {
        const client = await page.target().createCDPSession();
        await client.send('Performance.enable');

        const tempPath = os.tmpdir();
        const filePath = resolve(tempPath, `${uuidv1()}.json`);
        await page.tracing.start({ path: filePath, screenshots: true });

        return {
            endCapture: async () => {
                await page.tracing.stop();
                const contentFile = await readJson(filePath);
                const gifPath = await snapline.toGif(contentFile.traceEvents);
                console.log(`The gif is ready: ${gifPath}!`);
            }
        }
    },

}
