import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"
import AuthRoute from "./Routes/AuthRoute.js"
import UserRoute from "./Routes/UserRoute.js"
import PostRoute from "./Routes/PostRoute.js"
import UploadRoute from "./Routes/UploadRoute.js"

const app = express();

// middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(express.json());

dotenv.config();

mongoose.set('strictQuery', false); 

mongoose
  .connect(process.env.MONGO_DB, {    
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`listening it at the ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(error));

//   usage of route

app.use('/auth', AuthRoute) 
app.use('/user',UserRoute)
app.use('/post',PostRoute)
app.use('/upload',UploadRoute)