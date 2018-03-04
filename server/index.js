const serve = require('koa-static');
const Koa = require('koa');
var bodyParser = require('koa-bodyparser');
const app = new Koa();           
const db =  require('../seed.js');

app.use(bodyParser());   
// response 
app.use(async (ctx, next) => {
  ctx.body = ctx.request.body;

  if(ctx.req.method === 'GET') {
    ctx.status = 200;  
  } 

  if(ctx.req.method === 'POST') {
    console.log(ctx.body)
    ctx.status = 200;  
 
    var result = db.query(ctx.body.people, ctx.body.date , ctx.body.time, ctx.body.restaurantName, (data) => {
      console.log(data)
    }); 

    ctx.res.end('ok')    
  } 
  
await next();
});
app.use(serve('../client/public'));

app.listen(7000);
console.log('listening on port 7000');