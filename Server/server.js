const express = require('express');
const app = express();
const mongoose = require("mongoose")
const port = 3000;
const {usermodel} = require("./usermodel.js")
const bcrypt = require("bcrypt")
const cors = require("cors");
const { connected, isConnected } = require('./db.js');
require("dotenv").config();
const jwt = require("jsonwebtoken")

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  try {
    res.json({
      database: isConnected() ? 'connected' : 'disconnected'
    })
  } catch (error) {
    console.log(error)
  }
});


app.post("/signup", async (req, res) => {
  const data= req.body;
  console.log(data)
  try {
    const emailVerify = await usermodel.findOne({ email: data.email });
    if (emailVerify) {
      return res.status(400).send("User already exists");
    }else{
      const saltRounds = 10;
      const hashPassword = await bcrypt.hash(data.password, saltRounds);
  
      const newUser = new usermodel({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: hashPassword,
      });
  
      await newUser.save();
      res.status(201).send("Congrats! You signed up successfully");
    }

  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/login" ,async(req, res)=>{
  const data = req.body;
  console.log(data)
  try{
    const user = await usermodel.findOne({firstname : data.name})
    console.log(user)
    if(!user){
      return res.send("User not found. Please Create an account.")

    }
    const hashPasswordMatch = await bcrypt.compare(data.password, user.password)
    if(hashPasswordMatch){
      const token = jwt.sign(
        {id : user.id, name: user.name},
        process.env.JWT_SECRET
      )
      res.json({
        token : token,
        message : "You logged in successfully!",
        id : user._id,

      })

    }
    else{
      res.status(401).send("Incorrect password")
    }
  }
  catch(error){
    console.error(error)
  }
})

if(require.main === module){
  connected()
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}
