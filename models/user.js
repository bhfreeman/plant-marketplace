const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true,
    },
    posts: [
        {type: Schema.Types.ObjectId, ref: 'Post'}
    ]
},{
  timestamps: true
});

userSchema.pre('save', async function(next) {
    if (!this.isModified("password")) return next();
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      return next();
    } catch (error) {
      return next(error);
    }
    // const user = this;
    // if(user.isModified('password') || user.isNew) {
    //     bcrypt.genSalt(10, function (saltError, salt) {
    //         if (saltError) {
    //           return next(saltError)
    //         } else {
    //           bcrypt.hash(user.password, salt, function(hashError, hash) {
    //             if (hashError) {
    //               return next(hashError)
    //             }
    //             user.password = hash
    //             next()
    //           })
    //         }
    //       })
    // }
    next();
})

userSchema.methods.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.password)
  }

// userSchema.methods.comparePassword = function(loginPw,cb) {
//     bcrypt.compare(loginPw, this.password, function(err, isMatch) {
//         if (err) return cb(err);
//         cb(null, isMatch)
//     })
// }

const User = mongoose.model("User", userSchema);

module.exports = User;