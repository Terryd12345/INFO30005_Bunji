import express from "express";
const router = express.Router();

import controller from "../controllers/apiControllers";

router.get("/user", controller.getCurrentUser);
router.get("/user/:id", controller.getUser);
router.post("/createUser", controller.createUser);

router.post("/addSkill", controller.addSkill);
router.post("/addConnection", controller.addConnection);

router.post("/createSkill", controller.createSkill);
router.get("/allSkills", controller.allSkills);

router.get("/chat/:id", controller.getChat);

router.post("/chat/:id", controller.postMessage);

export default router;