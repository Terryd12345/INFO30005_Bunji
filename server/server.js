import bodyParser from "body-parser"
import express from "express"
import path from "path";

require('./services/passport');

const app = express()
const cors = require('cors');

import "./models/db";
import api from "./routes/api";

app.use(cors());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


const staticFiles = express.static(path.join(__dirname, "../../client/build"))
app.use(staticFiles)

import auth from "./routes/authRoutes";
app.use("/auth", auth);

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'), function(err) {
        if (err) {
            res.status(500).send(err);
        };
    });
})

app.set("port", (process.env.PORT || 5000))
app.listen(app.get("port"), () => {
    console.log(`Listening on ${app.get("port")}`)
})
