#!/usr/bin/env node
var fs = require('fs');
var args = process.argv.slice(2);
var key = args[0]
var flag = 0
var temp = []
var text = fs.readFileSync("data", "utf-8");
var textByLine = text.split("\n")

textByLine.forEach(function (element) {
    if (!element.match("key: " + key)) {
        temp.push(element)
    } else {
        flag = 1
    }
});

if (flag == 0) {
    console.log("not found")
} else {
    temp = temp.join('\n')
    fs.writeFileSync('data', temp);
    console.log("DELETED")
}