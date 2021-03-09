const app = require("express")();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/user");
var cors = require("cors");

app.use(cors());

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

// get one user
app.get("/api/user/:email", async (req, res) => {
  const { email } = req.params;
  console.log(email);
  try {
    const user = await User.findOne({ email: email });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//update user
app.put("/api/user/:email", async (req, res) => {
  const { email } = req.params;
  const query = { email: email };
  const update = req.body;
  console.log(update);

  try {
    const user = await User.findOneAndUpdate(query, update, {
      new: true,
    });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// get all users
app.get("/api/users/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//ad new user
app.post("/api/user", async (req, res) => {
  const user = new User({
    family_name: req.body.family_name,
    given_name: req.body.given_name,
    email: req.body.email,
    nickname: req.body.nickname,
    picture: req.body.picture,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = app;
