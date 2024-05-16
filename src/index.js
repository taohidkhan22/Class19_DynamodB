const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const studentRoutes = require('./src/routes/studentRoutes');

const app = new Koa();

app.use(bodyParser());
app.use(studentRoutes.routes()).use(studentRoutes.allowedMethods());

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
