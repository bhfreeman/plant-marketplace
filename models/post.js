const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    plant_name: { type: String, required: true },
    description: { type: String, required: true },
    image_link: { type: String },
    user_id: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
