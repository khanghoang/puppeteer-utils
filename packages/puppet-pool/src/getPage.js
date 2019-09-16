const { getPool } = require('./pool');

const getPage = async (puppeteerOptions) => {
    const pool = await getPool();
    const browser = await pool.acquire();
    const context = await browser.createIncognitoBrowserContext();
    return await context.newPage();
}

module.exports.getPage = getPage;
