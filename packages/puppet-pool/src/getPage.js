const { getPool } = require('./pool');

const getPage = async (puppeteerOptions) => {
    const pool = await getPool();
    const browser = await pool.acquire();
    const context = await browser.createIncognitoBrowserContext();
    return {
        page: await context.newPage(),
        closePage: async () => {
            await browser.close();
        }
    }
}

module.exports.getPage = getPage;
