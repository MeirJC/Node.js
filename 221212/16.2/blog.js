import { MongoClient } from "mongodb";
import { ObjectID } from "bson";
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "blogPosts";

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
  {
    name: "Arel",
    email: "arel@test.com",
    age: 30,
    location: "Porto-Rico",
    posts: [],
  },
];
const posts = [
  {
    authorId: ObjectID("63972ec9b29f5beccd047a5d"),
    content: "This is the 1st post i made!",
    comments: [],
  },
  {
    authorId: ObjectID("63972ec9b29f5beccd047a5e"),
    content: "This is the 1st post i made!, this is much better then his",
    comments: [],
  },
  {
    authorId: ObjectID("63972ec9b29f5beccd047a5f"),
    content: "Fuck this shit, i'll be a stripper!",
    comments: [],
  },
];

//! 1 → Create and connect to your mongo server
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (err, Client) => {
  if (err) {
    return console.log(err, "not connect");
  }
  console.log("client running on", Client.s.url);
  const db = Client.db(databaseName);
  //!===============================================================================
  //! Run each section 2-4 to build the collection
  //!===============================================================================
  //! 2 → inserting users to blogPosts collection
  // db.collection("users").insertMany(users, function (err, res) {
  //   if (err) throw err;
  //   console.log("Number of documents inserted: " + res.insertedCount);
  // });
  //! 3 → inserting posts to blogPosts collection
  // db.collection("posts").insertMany(posts, function (err, res) {
  //   if (err) throw err;
  //   console.log("Number of documents inserted: " + res.insertedCount);
  // });
  //! 4 → Create at least 1 comment on a post.
  // db.collection("posts").updateOne(
  //   { content: "Fuck this shit, i'll be a stripper!" },
  //   { $push: { comments: { _id: new ObjectID(), comment: "Hell yeah! :)" } } }
  // );
});
