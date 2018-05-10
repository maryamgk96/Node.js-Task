#!/usr/bin/env node
var fs = require('fs');
var text = fs.readFileSync("data", "utf-8");
console.log(text)