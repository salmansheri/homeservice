import mongoose from "mongoose";

const ebillSchema = new mongoose.Schema({
  billnumber: { type: Number, required: true },
  amount: { type: Number, required: true },
  date: { type: String, required: true },
});

const ebillModel = mongoose.model("ebill", ebillSchema);

export default ebillModel;
