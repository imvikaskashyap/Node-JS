let a = 10;
let b = 0;

// here you can see the async example

// setTimeout(() => {
// 	b = 100;
// }, 2000);

// console.log(a + b);

// handling async

const waitingData = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve((b = 100));
	}, 2000);
});

let res = waitingData.then((data) => {
	b = data;
	console.log(a + b);
});
