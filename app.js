
const render = require('./lib/render');
const logger = require('koa-logger');
const router = require('./routes/router');
const koaBody = require('koa-body');

const Koa = require('koa');
const app = new Koa();

// middleware

app.use(logger());

app.use(render);

app.use(koaBody());

// route definitions
app.use(router.routes());

// listen

module.exports = app;
