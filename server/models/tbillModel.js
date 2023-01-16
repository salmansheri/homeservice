import mongoose from "mongoose";

const tbillSchema = new mongoose.Schema({
  billnumber: { type: Number, required: true },
  amount: { type: Number, required: true },
  date: { type: String, required: true },
});

const tbillModel = mongoose.model("tbill", tbillSchema);

export default tbillModel;
