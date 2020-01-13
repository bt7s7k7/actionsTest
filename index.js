const fs = require("fs")

var line = `Hello world. The time is ${new Date()}`

console.log(line);
fs.writeFileSync("./build.txt", line)