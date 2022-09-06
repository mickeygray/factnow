const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const path = require("path");

connectDB();
app.use(cors());

//app.engine("handlebars", exphbs({ defaultLayout: "main" }));
//app.set("view engine", "handlebars");
//app.set("views", path.join(__dirname, "views"));
//bodyparser

app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

app.use(express.static(__dirname + "/public"));

app.use("/api/leads", require("./routes/leads"));

// Set static folder
app.use(express.static("var/www/html/build"));

app.get("*", (req, res) =>
 res.sendFile(path.resolve("var", "www", "html", "build", "index.html"))
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
