let data = require("./data");
let fs = require("fs");

console.log(data);

let arr = [34, 56, 76, 7, 68, 56, 44345, 2, 43];

let res = arr.filter((el) => {
	return el > 50;
});

console.log(res);

fs.writeFileSync("vk.txt", "vk kashyap");
console.log(__dirname);
console.log(__filename);

// let chalk = require("chalk");

// console.log(chalk.blue("Hello worlds!"));
