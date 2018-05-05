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
        res.redirect('/dashboard')
    }
);

router.get(
    "/profile",
    (req, res) => {
        res.send(req.user);
    }
);

router.get(
    "/logout",
    (req, res) => {
        req.logout();
    }
);

export default router;
