import { DB_NAME } from "@/constant";
import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    const connect = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    isConnected = true;

    console.log(
      `\n 💨 MongoDB connected Successfully, DB HOST => ${connect.connection.host}`
    );
  } catch (error) {
    console.log("error in connecting mongodb", error);
    process.exit(1);
  }
};
