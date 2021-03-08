const app = require("express")();
const bodyParser = require("body-parser");
const { v4 } = require("uuid");
const mongoose = require("mongoose");
const Subscriber = require("./models/subscriber");

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
