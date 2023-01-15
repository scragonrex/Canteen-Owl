const connectToMongo = require('./db.js');
connectToMongo();

var cors = require('cors')
const express = require('express');
const User = require('./models/users.js');
const port = 5000;
const app = express()
app.use(cors())
 
app.use(express.json());
// app.get('/signin', (req, res) => {
//     res.send('Hello World!')
//   })

//ROUTES
app.post("/signin", async (req, res) => {
    res.send("user recieved");
    console.log(req.body);
    let user = await User.findOne({ email: req.body.email });
    if(user)
    {
        console.log("User already exist");
    }
    else
    {
        let user = await User.create({
            id:req.body.id,
            name:req.body.name,
            email:req.body.email,
            profileImg:req.body.profileImg
        })
        console.log("New user created sucessfully", user);
    }
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})