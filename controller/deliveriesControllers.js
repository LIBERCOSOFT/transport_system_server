import asyncHandler from 'express-async-handler';

import Delivery from '../models/Delivery.js';

const createDelivery = asyncHandler(async (req, res) => {
  const { customerId, customerName, pickupLocation, dropoffLocation } =
    req.body;

  try {
    const newTask = new Delivery({
      customerId,
      customerName,
      pickupLocation,
      dropoffLocation,
    });
    await newTask.save();
    res.status(201).send('Task created successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

const getAllDelivery = asyncHandler(async (req, res) => {
  try {
    const tasks = await Delivery.find({});
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

const deleteDelivery = asyncHandler(async (req, res) => {
  try {
    const result = await Delivery.deleteOne({
      customerId: req.params.id,
    });

    if (result.deletedCount === 1) {
      res.json({ message: 'Delivery removed' });
    } else {
      res.status(404).json({ error: 'Delivery not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

export { createDelivery, getAllDelivery, deleteDelivery };
