const db = require("../models");

// Defining methods for the postsController
module.exports = {
  findAll: function(req, res) {
    db.Post.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Post.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: async function(req, res) {
    const newPost = await db.Post.create(req.body)
    const updateUser = await db.User.findByIdAndUpdate(req.body.user_id,{$push: {posts: newPost._id}}, {new: true})
    res.send('Post created')
    // db.Post.create(req.body)
    // //possible need this line of code below to link sales posts to the user
    //  .then(({_id}) => db.User.findOneAndUpdate({}, { $push: { posts: _id } }, { new: true }))
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Post.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Post.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
