import mongoose from "mongoose";

const DB_CONNECTION_URL = "mongodb+srv://user2:akshay@cluster0.9bjxk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = () => {
    console.log("DB trying to connect on " + new Date());
    const options = {
        
      };
      return mongoose.connect(DB_CONNECTION_URL, options);
    };

    export default connectDB;
