const Post = require("../models/post");

const PostsController = {
  Index: (req, res) => {
    Post.find((err, posts) => {
      if (err) {
        throw err;
      }

      res.render("posts/index", { posts: posts });
    });
  },
  New: (req, res) => {
    res.render("posts/new", {});
  },
  Create: (req, res) => {
    const post = new Post(req.body);
    post.save((err) => {
      if (err) {
        throw err;
      }

      res.status(201).redirect("/posts");
    });
  },

  Like: (req, res) => {
    const postId = req.params.id; // Get the post ID from the request parameters
    Post.findByIdAndUpdate(postId, { $inc: { likes: 1 } }, { new: true })
      .then((post) => {
        if (!post) {
          return res.status(404).send("Post not found");
        }
        res.redirect("/posts"); // Redirect back to the posts page
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Server error");
      });
  },


  Unlike: (req, res) => {
    const postId = req.params.id; // Get the post ID from the request parameters
    Post.findByIdAndUpdate(postId, { $inc: { likes: -1 } }, { new: true })
      .then((post) => {
        if (!post) {
          return res.status(404).send("Post not found");
        }
        res.redirect("/posts"); // Redirect back to the posts page
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Server error");
      });
  },

  Delete: (req, res) => {
    const postId = req.params.id; // Get the post ID from the request parameters
    Post.findByIdAndRemove(postId)
      .then((post) => {
        if (!post) {
          return res.status(404).send("Post not found");
        }
        res.redirect("/posts"); // Redirect back to the posts page
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Server error");
      });
  },
};

module.exports = PostsController;