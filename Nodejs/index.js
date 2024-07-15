// // node js learning area start 13-07-2024
// // electricity cut off all day 1507
// console.log("Hello World");
// const loggers = require("./logger");
// // loggers.log1();
// // loggers.log2();
// console.log(loggers);
// // console.log(`${loggers} + ${loggers.log1()} + ${loggers.log2()}`);

const fs = require("fs");
const textIn = fs.readFileSync("./1-node-farm/starter/txt/input.txt", "utf-8");
console.log(textIn);

const textOut = `this is the update version ✅\n Here more Info about the ▶: ${textIn}\n created one ▶: ${new Date().toJSON()}`;
fs.writeFileSync("./1-node-farm/starter/txt/output.txt", textOut);
console.log("data was written ✔");
console.log(fs.readFileSync("./1-node-farm/starter/txt/output.txt", "utf-8"));
