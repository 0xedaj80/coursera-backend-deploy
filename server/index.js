require("dotenv").config()
const express = require('express');
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user")
const cors = require("cors")

const app = express();

app.use(express.json());

const corsOptions = {
  origin: 'https://course-selling-website-pi.vercel.app', // Allow this specific domain
  methods: ['GET', 'POST', 'PUT'], // Allow only these methods
  Credential:true // Some browsers (like IE11) choke on 204
};

app.use(cors(corsOptions)); // Use CORS middleware with defined options




app.use("/admin", adminRouter)
app.use("/users", userRouter)

async function main(){
  await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "course-selling" });
  app.listen(3000, () => {
  console.log('Server is listening on port 3000');
  });

}

main()
 
             

