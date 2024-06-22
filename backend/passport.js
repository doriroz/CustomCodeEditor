const passport = require("passport");
// const GitHubStrategy = require("passport-github").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const GITHUB_CLIENT_ID = "Ov23liK7UdhCRnN0yJDt";
const GITHUB_CLIENT_SECRET = "1e58a95f32174725c1b4fb0d970abe5216629e29";

passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
