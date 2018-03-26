const express = require("express");
const app = express();
const router = require("./routes/routes");

app.set("view engine", "ejs");

app.use(express.static("./public"));
app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
