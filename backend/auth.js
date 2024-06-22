const router = require("express").Router();
const passport = require("passport");

const BASE_URL = "http://localhost:3000/editor";
// const OPEN_BASE_URL = "http://localhost:3000/";

//success login
router.get("/login/success", (req, res) => {
  res.status(200).json({
    success: true,
    message: "success",
    user: req.user,
  });
});

//failure login
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

//authenticate login
router.get("/github", passport.authenticate("github"));
router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: BASE_URL,
    failureRedirect: "/login/failed",
  })
);

//logout
router.get("/logout", (req, res, next) => {
  req.logOut((err) => {
    if (err) {
      return next(err);
    }
    res.json({ status: "success" });
  });
});

module.exports = router;
