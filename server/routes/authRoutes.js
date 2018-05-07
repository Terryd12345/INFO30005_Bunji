import passport from "passport";
import express from "express";
const router = express.Router();

router.get(
    "/google",
    passport.authenticate("google", {
        scope: ["profile"]
    })
);

router.get(
    "/google/callback",
    passport.authenticate("google"),
    function (req, res) {
        res.redirect("/welcome")
    }
);

router.get(
    "/logout",
    (req, res) => {
        req.logout();
        res.redirect("/");
    }
);

export default router;
