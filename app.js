const express = require("express");
const mongoose = require("mongoose");
const path = require('path');

mongoose.connect("mongodb://localhost:27017/blogDB", { useNewUrlParser: true, useUnifiedTopology: true });

const homeStartingContent = "This is a simple blogsite created together with MongoDB, on your localhost:3000. To create a new blog post, /compose. To go to a specific blogpost, /posts/:postid";
const aboutContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nobis fuga asperiores quo corporis veniam nihil quos, aliquid corrupti esse sunt ab cumque suscipit repellendus quae recusandae natus doloribus voluptate.";
const contactContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nobis fuga asperiores quo corporis veniam nihil quos, aliquid corrupti esse sunt ab cumque suscipit repellendus quae recusandae natus doloribus voluptate.";

const app = express();

const postSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Post = mongoose.model("post", postSchema);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", function (req, res) {
  Post.find({}, function (error, allPosts) {
    if (!error) {
      res.render("home", {
        homeContent: homeStartingContent,
        allPosts: allPosts
      });
    }
  })
})

app.get("/about", function (req, res) {
  res.render("about", {
    aboutContent: aboutContent
  });
})

app.get("/contact", function (req, res) {
  res.render("contact", {
    contactContent: contactContent
  });
})

//compose new blog post
app.get("/compose", function (req, res) {
  res.render("compose")
})

app.post("/compose", function (req, res) {
  const newPost = new Post({
    title: req.body.postTitle,
    content: req.body.postBody
  });
  newPost.save(function () {
    res.redirect("/");
  });
})

//express routing
app.get("/posts/:postID", function (req, res) {
  var requestedPostID = req.params.postID;
  Post.findById(requestedPostID, function (error, foundPost) {
    if (!error) {
      res.render("post", {
        postTitle: foundPost.title,
        postContent: foundPost.content
      })
    } else (
      console.log(error)
    )
  })
})


app.listen(3000, function () {
  console.log("Server started on port 3000");
});