import mongoose from 'mongoose';

const DeliverySchema = mongoose.Schema(
  {
    customerId: { type: String, required: true },
    customerName: { type: String, required: true },
    pickupLocation: { type: String, required: true },
    dropoffLocation: { type: String, required: true },
  },
  { timestamps: true },
);

const Delivery = mongoose.model('Delivery', DeliverySchema);

export default Delivery;
