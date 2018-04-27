import express from ("express");
const router = express.Router();

import controller from "../controllers/apiControllers";

router.get('/user/:id', controller.sayHello);

export default router;