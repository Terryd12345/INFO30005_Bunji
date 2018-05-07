import bodyParser from "body-parser"
import express from "express"
import path from "path";
import cors from "cors";
import compression from "compression";
import passport from "passport";
import cookieSession from "cookie-session";
import "./models/db";
import "./services/passport";
import api from "./routes/api";
import auth from "./routes/authRoutes";
import { cookieKey } from "./config";


const staticFiles = express.static(path.join(__dirname, "../../client/build"));
const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(compression());


app.use("/api", api);
app.use("/auth", auth);
app.use(staticFiles);

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"), function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});

app.set("port", (process.env.PORT || 5000));
app.listen(app.get("port"), () => {
    console.log(`Listening on ${app.get("port")}`)
});
