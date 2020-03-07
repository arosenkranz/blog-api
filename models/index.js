// import other models
const Post = require('./Post');
const User = require('./User');

// connect (associate) models
User.hasMany(Post, {
  onDelete: 'CASCADE'
});

// this will create a column in Post table called 'UserId'
Post.belongsTo(User);

module.exports = { Post, User };
