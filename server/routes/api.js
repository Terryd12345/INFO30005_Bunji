import express from "express";
const router = express.Router();

import controller from "../controllers/apiControllers";

// User calls
router.get("/user", controller.getCurrentUser);
router.get("/user/:id", controller.getUser);
router.post("/createUser", controller.createUser);

router.get("/loggingin", controller.loggingIn);

router.get("/allSkills", controller.allSkills);
router.post("/mentorsBySkills", controller.mentorsBySkills);
router.post("/addSkills", controller.addSkills);
router.post("/removeSkills", controller.removeSkills);
router.post("/addLearned", controller.addLearned);
router.post("/removeLearned", controller.removeLearned);

//router.get("/events", controller.getEvents);
router.post('/newevent', controller.createEvent);

router.post("/addConnection", controller.addConnection);

router.get("/chat/:id", controller.getChat);
router.post("/chat/:id", controller.postMessage);

// Admin calls
router.post("/createSkill", controller.createSkill);

export default router;
