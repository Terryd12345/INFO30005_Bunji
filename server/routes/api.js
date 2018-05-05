import express from "express";
const router = express.Router();

import controller from "../controllers/apiControllers";

// User calls
router.get("/user", controller.getCurrentUser);
router.get("/user/:id", controller.getUser);
router.post("/createUser", controller.createUser);

router.post("/addSkill", controller.addSkill);
router.post("/addConnection", controller.addConnection);

router.get("/chat/:id", controller.getChat);
router.post("/chat/:id", controller.postMessage);

router.get("/allSkills", controller.allSkills);
router.post("/mentorsBySkills", controller.mentorsBySkills);


// Admin calls
router.post("/createSkill", controller.createSkill);

export default router;