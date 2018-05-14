// "database"
const posts = [];
/**
 * Post listing.
 */
exports.renderList = async function(ctx) {
    await ctx.render('ex1/list', { posts: posts });
}

/**
 * Show creation form.
 */
exports.renderAdd = async function(ctx) {
    await ctx.render('ex1/new');
}

/**
 * Show post :id.
 */

exports.renderShow = async function(ctx) {
  const id = ctx.params.id;
  const post = posts[id];
  if (!post) ctx.throw(404, 'invalid post id');
  await ctx.render('ex1/show', { post: post });
}

/**
 * Create a post.
 */

exports.renderCreate = async function(ctx) {
  const post = ctx.request.body;
  const id = posts.push(post) - 1;
  post.created_at = new Date();
  post.id = id;
  ctx.redirect('/');
}
