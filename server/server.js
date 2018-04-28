import bodyParser from "body-parser"
import express from "express"
import path from "path";
import cors from "cors";

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

import "./models/db";
import "./services/passport";
import api from "./routes/api";
import auth from "./routes/authRoutes";
const staticFiles = express.static(path.join(__dirname, "../../client/build"))

app.use("/api", api);
app.use("/auth", auth);
app.use(staticFiles)

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"), function (err) {
        if (err) {
            res.status(500).send(err);
        };
    });
})

app.set("port", (process.env.PORT || 5000))
app.listen(app.get("port"), () => {
    console.log(`Listening on ${app.get("port")}`)
})
