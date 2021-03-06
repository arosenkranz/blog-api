// import express router
const router = require('express').Router();
// import models
const { Post, User } = require('../../models');

// import auth middleware
const checkAuth = require('../../middleware/check-auth');
const uploadImage = require('../../middleware/image-upload');

// get all Posts with associated users
// will eventually be `/api/posts`
router.get('/', checkAuth, (req, res) => {
  Post.findAll({
    include: [User]
  })
    .then(postdata => res.json(postdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// get a post by id with associated User
router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    include: [User]
  })
    .then(postdata => res.json(postdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// create a new post
router.post('/', checkAuth, uploadImage, (req, res) => {
  /* 
  {
    title: "post title",
    body: "long post body of paragraphs",
    UserId: 1
  }
  */

  // set UserID
  req.body.UserId = req.id;

  Post.create(req.body)
    .then(postdata => res.json(postdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// update post by id
router.put('/:id', (req, res) => {
  Post.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(postdata => res.json(postdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// delete post by id
router.delete('/:id', (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(postdata => res.json(postdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
