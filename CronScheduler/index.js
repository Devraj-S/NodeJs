const cron = require('node-cron');
let shell = require('shelljs');

// "* * * * * *"
//  | | | | | |
//  | | | | | |
//  | | | | | day of week (1-7)
//  | | | | month (1-12)
//  | | | day of month (1-31)
//  | | hour (0-23)
//  | minute (0-59)
//  second(optional) (0-59)
cron.schedule("* * * * * *", function () {
    console.log(new Date().toLocaleString());
    if (shell.exec("node testFile.js").code !== 0) {
        console.log("Something went wrong.");
    }
});