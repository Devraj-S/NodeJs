const cron = require('node-cron');
let shell = require('shelljs');

// * * * * * *
// | | | | | | 
// | | | | | +-- Year              (range: 1900-3000)
// | | | | +---- Day of the Week   (range: 1-7, 1 standing for Monday)
// | | | +------ Month of the Year (range: 1-12)
// | | +-------- Day of the Month  (range: 1-31)
// | +---------- Hour              (range: 0-23)
// +------------ Minute            (range: 0-59)
cron.schedule("* * * * * *", function(){
    console.log("cron scheduler running...");
    if(shell.exec("node testFile.js").code !== 0){
        console.log("Something went wrong.");
    }
});