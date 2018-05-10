var fs = require('fs');
var args = process.argv.slice(2);
var key = args[0]
var res

var text = fs.readFileSync("data", "utf-8");
var textByLine = text.split("\n")
for (var j = 0; j < textByLine.length; j++) {
    if (textByLine[j].match("key: " + key)) {
        res = textByLine[j];
        break;
    } else {
        res = 0
    };
}

if (res == 0) {
    console.log("not found")
} else {
    console.log(res)
}