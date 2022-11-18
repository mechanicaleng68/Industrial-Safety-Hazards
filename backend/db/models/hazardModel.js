import mongoose from "../mongoose.js";

const Schema = mongoose.Schema;

const hazardSchema = new Schema({
  hazardName: { type: String, required: true, unique: true },
  hazardPostalCode: [String],
  hazardDescription: [String],
  hazardDate: [{ Day: Number, Mont: Number, Year: Number }],
  hazardLocation: {
    type: {
      city: String,
      province: String,
      country: String,
      postalCode: String,
    },
    required: false,
  },
});

const hazard = mongoose.model("hazard", hazardSchema, "hazards");

export const createHazard = async (hazard) => {
  const newHazard = await hazard.create(hazard);
  return newHazard;
};
