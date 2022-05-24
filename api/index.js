// Embedded below is essentially the simplest Express app you can create. It is a single file app.
 
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
const app = express()
dotenv.config()
const port = 3000
 
 
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};
 
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});
 
 
app.get('/', (req, res) => {
  res.send('Hello, Arturas!')
})
 
app.listen(port, () => {
  connect();
  console.log(`Example app listening on port ${port}`)
})