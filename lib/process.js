const process = require("process");
const structkit = require("structkit");

exports.allocatedForWaterMark = function () {

    const memoryUsage= process.memoryUsage();

    // Purpose: memory to use will be 50percent.

    if (structkit.has(memoryUsage, "rss")) {

        return parseInt(memoryUsage.rss*0.50/1000);

    }

    return 128;

};
