// dependencies
const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes/home.routes");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "../", "public")));

// routes
routes.homeRouter(app);

// middleware
app.use((req, res, next) => {
   const error = new Error();
   error.status = 404;
   next(error);
});

app.use((err, req, res, next) => {
   console.log(err.status);

   if (err.status === 404) {
      console.log("hello");

      res.status(404);
      return res.render("errors/404");
   }

   res.status(500);
   res.render("errors/505");
});

// server port
const PORT = 3000;

// server start
app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});
