const genericPool = require("generic-pool");
const puppeteer = require('puppeteer');
 
/**
 * Step 1 - Create pool using a factory object
 */
const factory = {
  create: function(opts) {
    return puppeteer.launch(opts);
  },
  destroy: function(client) {
    client.disconnect();
  }
};
 
const opts = {
  max: 10, // maximum size of the pool
  min: 1 // minimum size of the pool
};
 
module.exports = {
    getPool: async () => {
        return await genericPool.createPool(factory, opts);
    },
    destroyPool: async () => {
        const pool = await getPool();
        await myPool.drain();
        await myPool.clear();
    }
};
