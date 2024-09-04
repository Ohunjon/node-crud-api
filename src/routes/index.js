const Router = require("express");
const router = new Router();

//routes
const userRouter = require("./userRouter");

router.use("/user", userRouter);

module.exports = router;
