console.log (process.env.MONGODB_URI);
import {createHazard} from './db/models/hazardModel.js';
const addHazardToDatabase = async hazard => {
  try {
    const newHazard = await createHazard (hazard);
    console.log (newHazard);
  } catch (error) {
    console.log ('Error creating hazard', hazard, error.message);
  }
};

const hazardDeepDitch = {
  userName: 'Deep Ditch',
  hazardPostalCode: 'T3E 4M2',
  hazardDescription: [' A deep ditch in the middle of street'],
  hazardDate: [15, 11, 2022],
  hazardLocation: {city: 'Calgary', province: 'AB', country: 'Canada'},
};

const hazardBlackIce = {
  userName: ['Black Ice'],
  hazardPostalCode: ['A5I 3R6'],
  hazardDescription: ['Extended Black Ice Area that is very Slippery'],
  hazardDate: [8, 5, 2022],
  location: {
    city: 'Calgary',
    province: 'AB',
    country: 'Canada',
  },
};

addHazardToDatabase (hazardDeepDitch);
addHazardToDatabase (hazardBlackIce);
