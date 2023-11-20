import mongoose from "mongoose";

const connectDB = async()=>{
try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to MongoDB database ${conn.connection.host}`);
} catch (error) {
    console.log('An error occurred:', error);
}
};

export default connectDB;