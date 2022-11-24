import mongoose from '../mongoose.js';

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
      postalCode: String
    },
    required: false
  }
});

const Hazard = mongoose.model('hazard', hazardSchema, 'hazards');

export const getAllHazards = async () => {
  const Hazards = await Hazard.find();
  return Hazards;
};

export const createHazard = async (hazard) => {
  const newHazard = await Hazard.create(hazard);
  return newHazard;
};
