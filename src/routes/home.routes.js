// dependencies
const { homeController } = require("../controllers/home.controller");

// scaffolding
let routes = {};

routes.homeRouter = (app) => {
   app.get("/", homeController);
};

module.exports = routes;
