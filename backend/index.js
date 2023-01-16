const connectToMongo = require('./db.js');
connectToMongo();

var cors = require('cors')
const express = require('express');
const User = require('./models/users.js');
const Item = require('./models/items.js');
const port = 5000;
const app = express()
app.use(cors())

app.use(express.json());
// app.get('/signin', (req, res) => {
//     res.send('Hello World!')
//   })

//ROUTE1: Authenticating the user
app.post("/signin", async (req, res) => {
  res.send("user recieved");
  const { displayName, photoURL, email } = req.body;
  console.log(displayName);
  console.log(photoURL);
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    console.log("User already exist");
  }
  else {
    if (displayName && email && photoURL) {
      let user = await User.create({
        name: displayName,
        profileImg: photoURL,
        email: email
      })
    }
  }});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})