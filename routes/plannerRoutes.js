import express from 'express';
const router = express.Router();

import {
  assignSlot,
  getAssignedSlots,
  deleteSlot,
} from '../controller/plannerControllers.js';

router.route('/').post(assignSlot);
router.route('/').get(getAssignedSlots);
router.route('/:id').delete(deleteSlot);

export default router;
