const router = require("koa-router")();

const userRouter = require("./api/user/user");
const adminRouter = require("./api/admin/admin");

router.prefix("/api");

router.use("/user", userRouter.routes(), userRouter.allowedMethods());
router.use("/admin", adminRouter.routes(), adminRouter.allowedMethods());

module.exports = router;