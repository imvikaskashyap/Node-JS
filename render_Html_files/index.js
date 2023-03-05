const express = require("express");
const path = require("path");

const app = express();

// path function folder ka path provide karta h.
// join function us path ko us folder se join karta hai.
const publicPath = path.join(__dirname, "render_Html_files");
// console.log(publicPath);

// yaha static method static content ko load karta hai.
// yaha pe search karne par URL me index.html, home.html dalna padta h lekin ye right method nahi hai. so we should remove exptension from URL.

// app.use(express.static(publicPath));

// here we are removing extension from URL.
// we can change api name also

// =>>>>>>>>>>>>
// sending dynamically data
// here we are sending dynamically data
// step 1 -
// npm install ejs
app.set("view engine", "ejs");

// step 2 -
// make an "views" folder and create "ejs" files inside it.
// and then use render method
app.get("/profile", (req, res) => {
	const user = {
		name: "vikas",
		email: "vk@gmail.com",
		age: 23,
	};
	res.render("profile", { user });
});

app.get("/", (req, res) => {
	res.sendFile(`${publicPath}/index.html`);
});

app.get("/about", (req, res) => {
	res.sendFile(`${publicPath}/about.html`);
});

app.get("/contact", (req, res) => {
	res.sendFile(`${publicPath}/contact.html`);
});

// This is 404 page
app.get("*", (req, res) => {
	res.sendFile(`${publicPath}/page404.html`);
});

app.listen(4444);
