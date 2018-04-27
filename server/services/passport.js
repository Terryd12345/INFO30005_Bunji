const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
import keys from '../keys.js';

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
