const Koa = require('koa');            // "K"oa  大寫--可以成為一個類別，通常使用大寫
const app = module.exports = new Koa();

app.use(async function(ctx) {
  ctx.body = 'Hello World';
});

if (!module.parent) app.listen(3000);
