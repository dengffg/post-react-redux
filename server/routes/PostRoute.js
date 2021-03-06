const express = require('express');
const PostRoute = express.Router();

let Post = require('../models/Post');

PostRoute.route('/add').post(function(req, res) {
  let post = new Post(req.body);
  post
    .save()
    .then(post => {
      res.status(200).json(post);
    })
    .catch(err => {
      res.status(400).send('unable to save to database');
    });
});

PostRoute.route('/').get(function(req, res) {
  Post.find((err, posts) => {
    if (err) {
      console.log(err);
    } else {
      res.json(posts);
    }
  });
});

PostRoute.route('/delete/:id').get(function(req, res) {
  Post.findByIdAndRemove({ _id: req.params.id }, function(err, post) {
    if (err) res.json(err);
    else res.json(req.params.id);
  });
});

module.exports = PostRoute;
