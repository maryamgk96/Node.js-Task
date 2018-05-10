#!/usr/bin/env node
var fs = require('fs');
var args = process.argv.slice(2);
fs.appendFileSync("data", "key: "+args[1]+" Value: "+args[2]+"\n");
console.log("SAVED")