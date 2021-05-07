const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/repotteddb");

const setUserId = async () => {
    const newUser = await db.User.findOne({name: 'Brett'})
    const res = await db.Post.updateMany({},{user: newUser._id})
    console.log(res.n)
    console.log(res.nModified)
    process.exit(0)
  }

  setUserId()