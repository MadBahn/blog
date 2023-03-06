const router = require("koa-router")();

router.get("/get", (ctx, next) => {
    console.log(ctx, next);
    ctx.body = "welcome";
});

router.post("/post", (ctx, next) => {
    console.log(ctx.request.body);
    ctx.body = ctx.request.body;
});

router.post("/register", (ctx, next) => {

});

router.post("/login", (ctx, next) => {

});

router.post("/comment", (ctx, next) => {

});

router.post("/post_comment", (ctx, next) => {

});

module.exports = router;