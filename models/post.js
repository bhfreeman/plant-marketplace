const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    plant_name: { type: String, required: true },
    plant_type: {type: String, required: true},
    description: { type: String, required: true },
    image_link: { type: String },
    user: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
