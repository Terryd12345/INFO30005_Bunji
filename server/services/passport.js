import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { auth } from "../config";

import mongoose from "mongoose";
const User = mongoose.model("user");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

passport.use(new GoogleStrategy({
    clientID: auth.GOOGLE_CLIENT_ID,
    clientSecret: auth.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
},
    (accessToken, refreshToken, profile, done) => {
        User.findOne({ "googleID": profile.id })
            .then((existingUser) => {
                if (existingUser) {
                    // already have the profile
                    console.log(profile)
                    done(null, existingUser);
                } else {
                    new User({ googleID: profile.id })
                        .save()
                        .then(user => done(null, user));
                }
            });

    }
));
