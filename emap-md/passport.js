var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

module.exports = function (passport) {
  // Use the GoogleStrategy within Passport.
  //   Strategies in passport require a `verify` function, which accept
  //   credentials (in this case, a token, tokenSecret, and Google profile), and
  //   invoke a callback with a user object.
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GoogleClientID,
        clientSecret: process.env.GoogleClientSecret,
        callbackURL: "/api/auth/callback",
      },
      function (token, tokenSecret, profile, done) {
        const user = tempDB.find((x) => x.token === token);

        if (user == undefined) {
          const newUser = {
            id: tempDB.length,
            token: token,
            given_name: profile._json.given_name,
          };
          tempDB.push(newUser);
          done(null, newUser);
        } else {
          done(null, user);
        }
      }
    )
  );

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    const user = tempDB.find((x) => x.id === id);
    done(null, user);
  });
};
