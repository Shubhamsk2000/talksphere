import mongoose from "mongoose";
import 'dotenv/config';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI); 
        console.log("DB Connected...")
    } catch (error) {
        console.log("Connection error in MongoDB : ",error.message);
    }
}
   
export default connectDB;