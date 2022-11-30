import mongoose from '../mongoose.js';

const Schema = mongoose.Schema;

const hazardSchema = new Schema ({
  userName: {type: String, required: true},
  userPhone: {type: String, required: true, unique: true},
  hazardPostalCode: {type: String},
  hazardDescription: {type: String, required: true},
  hazardDate: {type: Date, required: true},
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

const Hazard = mongoose.model ('hazard', hazardSchema);

export const getAllHazards = async () => {
  const hazards = await Hazard.find ();
  return hazards;
};

export const createHazard = async hazard => {
  const newHazard = await Hazard.create (hazard);
  return newHazard;
};

export const getHazardById = async id => {
  const superhero = await Superhero.findById (id);
  return superhero;
};
