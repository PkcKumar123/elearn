import mongoose from "mongoose";

export const connectDB = async () => {
  const { connection } = await mongoose.connect(
    "mongodb+srv://Prashat:123@cluster0.rd5tq.mongodb.net/ELearning?retryWrites=true&w=majority"
  );
  console.log(`MongoDB connected with ${connection.host}`);
};
