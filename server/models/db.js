import mongoose from "mongoose";
import config from "../config";
import "./award";
import "./chat";
import "./event";
import "./skill";
import "./user";

mongoose.connect(config.mlab, function (err) {
    if (!err) {
        console.log("Connected to mongo ");
    } else {
        console.log("Failed to connect to mongo");
    }
});