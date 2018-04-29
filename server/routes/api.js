import express from "express";
const router = express.Router();

import controller from "../controllers/apiControllers";

router.get("/user/:id", controller.getUser);

router.get("/chat/:id", controller.getChat);

router.post("/chat/:id", controller.postMessage);

export default router;