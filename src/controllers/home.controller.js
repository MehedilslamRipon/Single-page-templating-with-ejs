// scaffolding
let home = {};

home.homeController = (req, res) => {
   // throw Error("error occurred");
   res.render("pages/index");
};

module.exports = home;
