const app = require("express")();
const bodyParser = require("body-parser");
const { v4 } = require("uuid");
const mongoose = require("mongoose");
const User = require("../api/models/user");

app.use(bodyParser.json());
mongoose.connect(
  "mongodb+srv://amdsaad:0fmp2ZuhyzRwghPA@cluster0.ukm8d.mongodb.net/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

// //ad new user
// app.post("/api/user", async (req, res) => {
//   const user = new User({
//     family_name: req.body.family_name,
//     given_name: req.body.given_name,
//     email: req.body.email,
//     nickname: req.body.nickname,
//     picture: req.body.picture,
//   });

//   try {
//     const newUser = await user.save();
//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(400).json({ message: err.message });
//   }
// });

//find one user

app.get("/users", async (req, res) => {
  res.send("hello");
});

module.exports = app;
