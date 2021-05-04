const db = require("../models");

// Defining methods for the postsController
module.exports = {
  //Don't think we need to find all users
  //   findAll: function(req, res) {
  //     db.User.find(req.query)
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   },
  create: function (req, res) {
    db.User.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  login: async (req,res) => {
    try{
      const userData = await db.User.find({email: req.body.email});
      if(!userData) {
        res.status(400).json("Incorrect email, please enter a correct email.")
      }
      const validPassword = await userData.comparePassword(req.body.password)
      if(!validPassword){
        res.status(400).json("Incorrect password, please re-enter password.")
      }
      req.session.save(()=> {
        req.session.userID = userData.id;
        req.session.loggedIn = true;
        res.json({ user: userData, message: 'You are now logged in!' });
      })
    } catch (err) {
      res.status(400).json(err);
    }
  },
  logout: function (req, res) {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  }
};
