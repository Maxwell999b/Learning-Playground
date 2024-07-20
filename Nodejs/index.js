// // node js learning area start 13-07-2024
// // electricity cut off all day 1507
// console.log("Hello World");
// const loggers = require("./logger");
// // loggers.log1();
// // loggers.log2();
// console.log(loggers);
// // console.log(`${loggers} + ${loggers.log1()} + ${loggers.log2()}`);
const fs = require("fs");
const http = require("http");
// Blocking synchronous way
// const textIn = fs.readFileSync("./1-node-farm/starter/txt/input.txt", "utf-8");
// console.log(textIn);

// const textOut = `this is the update version ✅\n Here more Info about the ▶: ${textIn}\n created one ▶: ${new Date().toJSON()}`;
// fs.writeFileSync("./1-node-farm/starter/txt/output.txt", textOut);
// console.log("data was written ✔");
// console.log(fs.readFileSync("./1-node-farm/starter/txt/output.txt", "utf-8"));

// Non-Blocking asynchronous way

// fs.readFile("./1-node-farm/starter/txt/start.txt", "utf-8", (error, data1) => {
//   if (error) return console.log("ERROR#1 💥");
//   fs.readFile(`./1-node-farm/starter/txt/${data1}.txt`, "utf-8", (error, data2) => {
//     if (error) return console.log("ERROR#2 💥");
//     console.log(`#2 :${data2}`);
//     fs.readFile("./1-node-farm/starter/txt/append.txt", "utf-8", (error, data3) => {
//       if (error) return console.log("ERROR#3 💥");
//       console.log(`#3 :${data3}`);
//       fs.writeFile("./1-node-farm/starter/txt/final.txt", `${data2}\n${data3}`, "utf-8", (error) => {
//         if (error) return console.log("ERROR#4 💥");
//         console.log("the file has been written 😁");
//         fs.readFile("./1-node-farm/starter/txt/final.txt", "utf-8", (error, data4) => {
//           if (error) return console.log("ERROR#5 💥");
//           console.log(`#4 :${data4}`);
//         });
//       });
//     });
//   });
// });
// console.log("the end of the Line. 🔚");

/////////////////////////////////////////////////////////////////////////////
// http server #3
const server = http.createServer((req, res) => {
  res.end("Hello from the Local HTTP Server");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests at 127.0.0.1, Port: 8000");
});

// blue link url

// server.listen(8000, "127.0.0.1", () => {
//   const url = "http://127.0.0.1:8000";
//   console.log(`Listening to requests at \x1b[34m\x1b[4m${url}\x1b[0m`);
// });

// link url
// server.listen(8000, "127.0.0.1", () => {
//   const url = "http://127.0.0.1:8000";
//   console.log(`Listening to requests at ${url}`);
// });
