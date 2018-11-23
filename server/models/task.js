import mongoose from '../helpers/mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  title: {
    type: String,
    requited: true,
  },
  priority: {
    type: String,
    enum: ['High', 'Middle', 'Low'],
    default: 'Low',
  },
  status: {
    type: String,
    enum: ['New', 'Active', 'Resolved', 'Closed'],
    default: 'New',
  },
  finish: {
    type: Date,
    default: Date.now,
  },
  position: Number,
});

const Task = mongoose.model('Task', schema);

export default Task;
