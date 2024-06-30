import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbUrl:string = process.env.DB_URL || '';

const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl).then((data:any) => {
            console.log(`Database connected at ${dbUrl}`);
        })
    } catch (error) {
        console.log(error.message);
        // Retry connection after 5 seconds
        setTimeout(connectDB, 5000);
    }
}

export default connectDB;
