const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/repotteddb");

const userSeed = [
  {
    name: "Brett",
    username: "brett",
    email: "brett@email.com",
    password: "password12345",
    city: "Mesa",
    state: "AZ",
    posts: []
  },
  {
    name: "Kyle",
    username: "kyle",
    email: "kyle@email.com",
    password: "password12345",
    city: "Glendale",
    state: "AZ",
    posts: []
  },
  {
    name: "Emily",
    username: "dobinator",
    email: "emily@email.com",
    password: "password12345",
    city: "Tucson",
    state: "AZ",
    posts: []
  },
];

const postSeed = [
  {
    plant_name: "Quaking Aspen",
    plant_type: 'foliage',
    description: "quakie sapling started in a teracotta pot. Decent sized, healty root ball. No low ball, i know what i've got.",
    image_link: "https://res.cloudinary.com/repotted/image/upload/v1620355666/bbjtcywrlhterrxd0op5.jpg",
    user: 1,
  },
  {
    plant_name: "Rose",
    plant_type: 'foliage',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image_link: "https://res.cloudinary.com/repotted/image/upload/v1620355666/bbjtcywrlhterrxd0op5.jpg",
    user: 2,
  },
  {
    plant_name: "Purple Kush",
    plant_type: 'foliage',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image_link: "https://res.cloudinary.com/repotted/image/upload/v1620355666/bbjtcywrlhterrxd0op5.jpg",
    user: 3,
  },
  {
    plant_name: "Placeholder",
    plant_type: 'foliage',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image_link: "https://res.cloudinary.com/repotted/image/upload/v1620355666/bbjtcywrlhterrxd0op5.jpg",
    user: 1,
  },
  {
    plant_name: "Placeholder",
    plant_type: 'foliage',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image_link: "https://res.cloudinary.com/repotted/image/upload/v1620355666/bbjtcywrlhterrxd0op5.jpg",
    user: 2,
  },
  {
    plant_name: "Placeholder",
    plant_type: 'foliage',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image_link: "https://res.cloudinary.com/repotted/image/upload/v1620355666/bbjtcywrlhterrxd0op5.jpg",
    user: 3,
  },
];

const seedUser = async () => {
  await db.User.deleteMany({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then((data) => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}

const seedPost = async () => {
await db.Post.deleteMany({})
    .then(() => db.Post.collection.insertMany(postSeed))
    .then((data) => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}

const init = async () => {
  await seedUser();
  await seedPost();
}

init()