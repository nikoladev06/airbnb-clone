import "dotenv/config";
import mongoose from "mongoose";

const { MONGO_URL } = process.env;

export const connectDb = async () => {
  try {
    mongoose.connect(MONGO_URL);
    console.log("Deu certo conectar com o banco");
  } catch (error) {
    console.log("Não deu certo conectar com o banco", error);
  }
};
