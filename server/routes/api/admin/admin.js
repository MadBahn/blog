const router = require('koa-router')();

const articleRouter = require('./article/article');
const categoryRouter = require('./category/category');

router.get("/", (ctx) => {
    ctx.body = "admin";
});

router.use("/article", articleRouter.routes(), articleRouter.allowedMethods());
router.use("/category", categoryRouter.routes(), categoryRouter.allowedMethods());

module.exports = router;