import { Router } from 'express';
import { createHazard, getAllHazards } from '../db/models/hazardModel.js';
import { debug } from '../server.js';

const router = Router();

router.get('/', async (req, res) => {
  //const hazard = req.body;
  debug('in list route');
  try {
    const hazards = await getAllHazards();
    res.send(hazards);
  } catch (error) {
    debug(error);
    res.status(500).send(error);
  }
});

router.post('/', async (req, res) => {
  const hazard = req.body;
  debug('in create route', hazard);
  try {
    const newHazard = await createHazard(hazard);
    res.send(newHazard);
  } catch (error) {
    debug(error);
    res.status(500).send(error);
  }
});

export default router;
