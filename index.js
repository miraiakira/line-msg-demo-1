const https = require("https");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;
console.log("PORT", PORT);
const TOKEN = process.env.LINE_ACCESS_TOKEN;

app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);

app.get("/", (req, res) => {
	res.sendStatus(200);
});

app.listen(PORT, () => {
	console.log(`Example app listening at http://localhost:${PORT}`);
});
