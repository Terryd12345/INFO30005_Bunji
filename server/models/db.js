import mongoose from "mongoose";
import { db } from "../config";
import "./chat";
import "./event";
import "./skill";
import "./state";
import "./user";

mongoose.connect(db.mlab, function (err) {
    if (!err) {
        console.log("Connected to mongo ");
    } else {
        console.log("Failed to connect to mongo");
    }
});
