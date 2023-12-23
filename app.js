const express = require("express");
const mongoose = require("mongoose");


const app = express()
const PORT = 5000;

//for geting data form 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect("mongodb://0.0.0.0:27017/testdb", {
  useNewUrlParser: "true",
})
mongoose.connection.on("error", err => {
  console.log("err", err)
})
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
})

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true
  },
  message: {
    type: String,
    required: true
  }
});

//create model 
const Feedback = new mongoose.model("Feedback", feedbackSchema);


app.use(express.static(__dirname));

app.get("/", (req, res) => {

  const filePath = (__dirname, "index.html");
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("Error sending the file:", err.message);
      res.status(500).send("Error sending the file");
    }
  });
});
//create new user in db
app.post("/contact", async (req, res) => {
  try {
    console.log(req.body);
    var userMess = new Feedback({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    })
    await userMess.save();

    res.status(201).redirect('/')


  } catch (err) {
    console.log(err)
    res.status(400).send(err);
  }
})


//server
app.listen(PORT, () => {
  console.log(`app is listening to PORT ${PORT}`)
})