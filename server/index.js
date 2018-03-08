const serve = require('koa-static');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');
const app = new Koa();
const db = require('../seed.js');

app.use(bodyParser());
 
app.use(cors()); 
 
app.use(async (ctx, next) => { 
  ctx.body = ctx.request.body;

  if (ctx.req.method === 'GET') {
    ctx.status = 200; 
  }

  if (ctx.req.method === 'POST') {
    ctx.status = 200;
   
    ctx.respond = false;
        
    const promise = new Promise(((resolve, reject) => {
      // console.log(ctx.body.date)
      db.query(ctx.body.date, (info) => {
        resolve(info);  
      });  
    })).then((data) => { 
      let rawDate = JSON.stringify(data)
       ctx.res.end(JSON.stringify(data));
    }); 
  } 
 
  await next(); 
}); 
 
app.use(serve('../client/public'));

app.listen(7000); 
console.log('listening on port 7000');
