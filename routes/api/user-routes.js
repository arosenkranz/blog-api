// import express router
const router = require('express').Router();
// import models
const { Post, User } = require('../../models');

// get all Users with associated posts
// will eventually be `/api/users`
router.get('/', (req, res) => {
  User.findAll({
    include: [Post]
  })
    .then(userdata => res.json(userdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// get a post by id with associated posts
router.get('/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id
    },
    include: [Post]
  })
    .then(userdata => res.json(userdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// create a new user
router.post('/', (req, res) => {
  /* 
  {
    name: "Alex",
    email: "alex.rosenkranz@hotmail.biz",
    password: '1234'
  }
  */

  User.create(req.body)
    .then(userdata => res.json(userdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// update user by id
router.put('/:id', (req, res) => {
  User.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(userdata => res.json(userdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// delete user by id
router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(userdata => res.json(userdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
