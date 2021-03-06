const Koa = require('koa');
const app = module.exports = new Koa();

app.use(async function(ctx) {
  if(ctx.url == "/hello"){
    ctx.body = "你好";
    console.log(ctx.url);
  }
  else if(ctx.url == "/name"){
    ctx.body = "陳佳駿";
    console.log(ctx.url);
  }
  else if(ctx.url == "/id"){
    ctx.body = "110510530";
    console.log(ctx.url);
  }
  else
    ctx.status = 404;
});

if (!module.parent) app.listen(3000);