import asyncHandler from 'express-async-handler';
import Planner from '../models/Planner.js';

const assignSlot = asyncHandler(async (req, res) => {
  const { dropId, customerId, customerName, pickupLocation, dropoffLocation } =
    req.body;

  try {
    const newSlot = new Planner({
      dropId,
      customerId,
      customerName,
      pickupLocation,
      dropoffLocation,
    });
    await newSlot.save();
    res.status(201).send('Slot assigned successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

const getAssignedSlots = asyncHandler(async (req, res) => {
  try {
    const slots = await Planner.find();
    res.status(200).json(slots);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

const deleteSlot = asyncHandler(async (req, res) => {
  try {
    const result = await Planner.deleteOne({
      customerId: req.params.id,
    });

    if (result.deletedCount === 1) {
      res.json({ message: 'Slot removed' });
    } else {
      res.status(404).json({ error: 'Slot not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

export { assignSlot, getAssignedSlots, deleteSlot };
