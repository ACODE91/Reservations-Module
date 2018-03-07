const serve = require('koa-static');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const db = require('../seed.js');

app.use(bodyParser());

app.use(async (ctx, next) => {
  ctx.body = ctx.request.body;

  if (ctx.req.method === 'GET') {
    ctx.status = 200;
  }

  if (ctx.req.method === 'POST') {
    ctx.status = 200;

    ctx.respond = false;

    const promise = new Promise(((resolve, reject) => {
      db.query(ctx.body.people, ctx.body.date, ctx.body.time, ctx.body.restaurantName, (info) => {
        resolve(info);
      });
    })).then((data) => {
      ctx.res.end(JSON.stringify(data));
    });
  }

  await next();
});
app.use(serve('../client/public'));

app.listen(7070);
console.log('listening on port 7070');
