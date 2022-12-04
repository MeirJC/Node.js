const fs = require("fs");

fs.writeFileSync("file.txt", "Hello World");
fs.copyFileSync("file.txt", "file-copy.txt");
fs.renameSync("file-copy.txt", "file-copy-rename.txt");
fs.readdirSync("./").forEach(item => {
  console.log(item)})
fs.appendFileSync("file-copy-rename.txt", "!\nIt is a Beautiful day!")