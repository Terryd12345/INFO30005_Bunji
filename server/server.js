import bodyParser from "body-parser";
import express from "express";
import path from "path";
<<<<<<< HEAD
import keys from './keys.js';

const app = express()
const cors = require('cors');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

app.use(cors());
=======
import api from "../routes/api";

const app = express();
>>>>>>> 03dae7c44b8101f018b91b8300bf81694cef5afe

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

router.post("/api/login", (req, res) => {

});

// GOOGLE AUTHENTICATION -------------------------------------------------

passport.use(new GoogleStrategy({
    clientID: keys.GOOGLE_CLIENT_ID,
    clientSecret: keys.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  (accessToken, refreshToken, profile, cb) => {
    console.log('access token: ', accessToken);
    console.log('refreshToken: ', refreshToken);
    console.log('profile: ', profile);
  }
));

router.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

router.get(
    '/auth/google/callback',
    passport.authenticate('google')
);

// END AUTHENTICATION -----------------------------------------------

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
