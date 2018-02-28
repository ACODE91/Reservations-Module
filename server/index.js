const serve = require('koa-static');
const Koa = require('koa');
var bodyParser = require('koa-bodyparser');
const app = new Koa();           
const sqlDb = require('../database/helpers.js');
 

app.use(bodyParser());   
// response 
app.use(async (ctx, next) => {
  // the parsed body will store in ctx.request.body
  // if nothing was parsed, body will be an empty object {}

  //in koa, instead of using middlewares, it can just utilize a context 
  //which encapsulates node's request and response objects into just ONE single object.

  //a context is created per a request and is referenced in the middleware as the receiver 
  //or the ctx identifier

  if(ctx.req.method === 'GET') {
    // sqlDb.fetchItem((found) =>{
    //   console.log(found)
    // });
    // console.log(ctx.is('text/html'))
    ctx.status = 200;  
    // ctx.res.end('ok')   
  } 

  if(ctx.req.method === 'POST') {
    ctx.res.end('posted')
    ctx.status = 200;
    // console.log(ctx.req.body)
    sqlDb.createRestaurantListModel();
  }
 
await next();
});
app.use(serve('../client/public'));

app.listen(3000);
console.log('listening on port 3000');