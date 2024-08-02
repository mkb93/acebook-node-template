const User = require("../models/user");

const UsersController = {
  New: (req, res) => {
    res.render("users/new", {});
  },

  Create: (req, res) => {
    const user = new User(req.body);
    user.save((err) => {
      if (err) {
        console.error("Error creating user:", err); // Log the error
        return res.redirect("/users/new"); // Redirect back to the signup form on error
    }
      console.log("user created:", user); // Log the created user
      res.status(201).redirect("/posts");
    });
  },
};

module.exports = UsersController;
