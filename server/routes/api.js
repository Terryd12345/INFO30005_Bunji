import express from "express";
const router = express.Router();

import controller from "../controllers/apiControllers";

router.get("/user", controller.getCurrentUser);
router.get("/user/:id", controller.getUser);
router.post("/createUser", controller.createUser);

router.post("/createSkill", controller.addSkill);

router.get("/chat/:id", controller.getChat);

router.post("/chat/:id", controller.postMessage);

export default router;