const db = require("../models");

// Defining methods for the postsController
module.exports = {
  //Don't think we need to find all users
  findAll: function (req, res) {
    db.User.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: async function (req, res) {
    try {
      const newUser = new db.User(req.body);
      newUser.save((err) => {
        if (err) return handleError(err);
      });
      res.send("User created!");
    } catch (err) {
      console.log(err);
      res.send("Something went wrong!");
    }
    // db.User.create(req.body)
    //   .then((dbModel) => res.json(dbModel))
    //   .catch((err) => res.status(422).json(err));
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
  login: async (req, res) => {
    try {
      const userData = await db.User.findOne({ email: req.body.email });
      console.log(userData);
      if (!userData) {
        res.send("Incorrect email, please enter a correct email.");
      }
      const validPassword = await userData.comparePassword(req.body.password);
      console.log(validPassword);
      if (!validPassword) {
        res.send("Incorrect password, please re-enter password.");
      } else {
        req.session.save(() => {
          req.session.userID = userData.id;
          req.session.loggedIn = true;
          res.json({
            user: {
              posts: userData.posts,
              id: userData._id,
              name: userData.name,
              username: userData.username,
              email: userData.email,
              city: userData.city,
              state:userData.state,
            },
            message: "You are now logged in!",
            loggedIn: req.session.loggedIn,
          });
        });
      }
      console.log(req.session);
    } catch (err) {
      console.log(err);
      res.json(err);
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
  },
};
