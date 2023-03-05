const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send(`<h1>This is Home page</h1>
	<a href="/about" >About</a>
	
	`);
});
app.get("/about", (req, res) => {
	let name = req.query.name; // you can get the output from query.
	res.send(`<input type="text" placeholder="Name" />
	<button>click me</button>
	</br>
	<h2>${name}</h2>
	`);
});
app.get("/contact", (req, res) => {
	res.send("This is Contact page");
});
app.get("/products", (req, res) => {
	res.send(`This is Products page
	[
		{name:"Vikas kashyap",
		email:"vkboss@gmail.com"
		},
		{name:"Sunil kashyap",
		email:"skboss@gmail.com"
		},
		{name:"Vishnu kashyap",
		email:"vkboss@gmail.com"
		},
	]
	
	`);
});

app.listen(4444);
