const express = require("express");
const { engine } = require("express-handlebars");

const app = express();

const hbs = engine({
  defaultLayout: "main",
  extname: "hbs",
});

app.engine("hbs", hbs);
app.set("view engine", "hbs");

//serve static files
app.use(express.static("public"));

app.get("/", async (req, res) => {
  res.render("home", { title: "Home Page" });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
