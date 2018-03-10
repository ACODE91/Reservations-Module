const serve = require('koa-static-server');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');
const app = new Koa();
const db = require('../seed.js');

app.use(bodyParser());
  
app.use(cors());  
 
app.use(async (ctx, next) => {  
  ctx.body = ctx.request.body;

  if (ctx.req.method === 'POST') {
    ctx.status = 201;
   
    ctx.respond = false;
        
    const promise = new Promise(((resolve, reject) => {
      db.query(ctx.body.date, (info) => {
        resolve(info);  
      });  
    })).then((data) => { 
       ctx.res.end(JSON.stringify(data));
    }); 
  } 
 
  await next(); 
}); 
 
// app.use(serve(__dirname + '/client/public'));
app.use(serve({rootDir: 'client/public'}));

app.listen(6500); 
console.log('listening on port 6500');
