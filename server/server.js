import bodyParser from "body-parser";
import express from "express";
import path from "path";
import "./models/db";
import api from "../routes/api";


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const router = express.Router();
const staticFiles = express.static(path.join(__dirname, "../../client/build"));

app.use(staticFiles);
app.use("/api", api);

router.get("/cities", (req, res) => {
    const cities = [
        {name: "New York City", population: 8175133},
        {name: "Los Angeles",   population: 3792621},
        {name: "Chicago",       population: 2695598}
    ];
    res.json(cities);
});

router.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'), function(err) {
        if (err) {
            res.status(500).send(err);
        };
    });
})

app.use(router);
app.set("port", (process.env.PORT || 5000));
app.listen(app.get("port"), () => {
    console.log(`Listening on ${app.get("port")}`);
})
