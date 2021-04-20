const passport = require("passport");


const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
 
      done(null, user);
    
  });

passport.use(new GoogleStrategy({
    clientID: "741546714262-b6sr2q2vt39csnlv4dehj97vgqgo8h2g.apps.googleusercontent.com",
    clientSecret: "aWTIz16vPlPM0hz8tYxlm_Oy",
    callbackURL: "http://localhost:3000/auth/google/redirect"
  },
  function(accessToken, refreshToken, profile, cb) {
    
      return cb(null, profile);

  }
));

