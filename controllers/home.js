const HomeController = {
  Index: (req, res) => {
    res.render("home/index", { title: "FAKEbook" });
  },
};

module.exports = HomeController;
