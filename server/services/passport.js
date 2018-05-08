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
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ "googleID": profile.id });
        if (existingUser) {
            return done(null, existingUser);
        }
        const user = await new User({
            googleID: profile.id,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            gender: profile.gender,
            imagePath: profile._json.image.url
        }).save();
        done(null, user);
    }
));
