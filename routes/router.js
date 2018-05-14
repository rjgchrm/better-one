const router = require('koa-router')();
const page = require('../controllers/page');

// route definitions

router.get('/', page.renderList)
  .get('/post/new', page.renderAdd)
  .get('/post/:id', page.renderShow)
  .post('/post', page.renderCreate);

module.exports = router;
