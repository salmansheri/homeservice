import mongoose from "mongoose";

const wbillSchema = new mongoose.Schema({
  billnumber: { type: Number, required: true },
  amount: { type: Number, required: true },
  date: { type: String, required: true },
});

const wbillModel = mongoose.model("wbill", wbillSchema);

export default wbillModel;
