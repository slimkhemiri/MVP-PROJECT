const express = require("express");
const db = require("./db/schema");
const app = express();
const port = 1337;
app.use(express.json());
app.use(express.static("./client/build"));
app.use(express.urlencoded({ extended: true }));
const mongoose = require("mongoose");

//////////////////////    mongoose connection     /////////////////////////////////////
mongoose
  .connect("mongodb://localhost:27017/MyDataBase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected...");
  })
  .catch((err) => {
    console.log("Cannot connect to DB");
  });

app.get("/", (req, res) => {
  res.render("index");
});

/////////////////////////////     signup      ////////////////////////////////////////

app.post("/signup", (req, res) => {
  const user = new db.User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  user.save().then((user) => {
    console.log("user :", user);
  });

  res.send("user added");
});

/////////////////////////////     login     ///////////////////////////////////////////

app.post("/login", (req, res) => {
  db.User.findOne({ name: req.body.name })
    .then((user) => {
      user.comparePassword(req.body.password, user.password, (err, isMatch) => {
        console.log("isMatch :", isMatch);
        if (isMatch) {
          res.status(200).send(isMatch);
        } else {
          res.json({ message: "Wrong Password" });
        }
      });
    })
    .catch((err) => {
      res.json({ message: "user not found" });
    });
});

//////////////////////////////////     Pro Side      ///////////////////////////////
app.post("/insert", (req, res) => {
  const pro = new db.Pro({
    company_name: req.body.company_name,
    phone_number: req.body.phone_number,
    job_name: req.body.job_name,
    description: req.body.description,
  });
  pro.save().then((pro) => {
    console.log("pro :", pro);
    res.send(pro);
  });

  
});

app.get("/read", (req, res) => {
  db.Pro.find({}, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.Pro.findByIdAndRemove(id).exec()
  db.Pro.find({}, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

////////////////////////////////////////////////////////////////////////////////////
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
