import express from 'express';
const router = express.Router();

import {
  createDelivery,
  getAllDelivery,
  deleteDelivery,
} from '../controller/deliveriesControllers.js';

router.route('/').post(createDelivery);
router.route('/').get(getAllDelivery);
router.route('/:id').delete(deleteDelivery);

export default router;
