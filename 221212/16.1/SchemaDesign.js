// Part 1
// Design your Data Model
//! 1. Create an appropriate schema for a blog.
//? - What collections do you need?
//* I will create 2 collections
//* one for users and one for posts.

//? - How are you going to structure your documents?
//* each user document will include
//* {_id: user._id, name: user.name, email: user.email, posts: [post1id, post2id...]}
//* the users will be able to access the posts collection.
//* Each post document will include
//* {_id: post._id, author: user._id ,body: post.body}

//? - Should you embed your data or use references?
//* We shold use references, this will allow us to keep the user document leaner

// Users collection
const users = [
  {
    name: "Omer",
    email: "omer@test.com",
    age: 23,
    location: "Zanzibar",
    posts: [],
  },
  {
    name: "Benny",
    email: "benny@test.com",
    age: 29,
    location: "Maldives",
    posts: [],
  },
  {
    name: "Meir",
    email: "meir@test.com",
    age: 38,
    location: "Costa-Rica",
    posts: [],
  },
  {
    name: "Lidor",
    email: "lidor@test.com",
    age: 29,
    location: "Amsterdam",
    posts: [],
  },
];

// Users collection
