const app = require("express")();
const bodyParser = require("body-parser");
const { v4 } = require("uuid");
const mongoose = require("mongoose");
const Subscriber = require("./models/subscriber");
const User = require("./models/user");

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

//find one user

app.get("/api/users", async (req, res) => {
  console.log("usesr");
  res.send("hello");
});
app.get("/api", async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.post("/api", async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel,
  });
  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = app;
