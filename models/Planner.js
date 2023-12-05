import mongoose from 'mongoose';

const PlannerSchema = mongoose.Schema(
  {
    dropId: { type: String, required: true },
    customerId: { type: String, required: true },
    customerName: { type: String, required: true },
    pickupLocation: { type: String, required: true },
    dropoffLocation: { type: String, required: true },
  },
  { timestamps: true },
);

const Planner = mongoose.model('Planner', PlannerSchema);

export default Planner;
