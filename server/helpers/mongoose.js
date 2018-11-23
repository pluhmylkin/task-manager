import mongoose from 'mongoose';
import config from './config';

mongoose.Promise = Promise;
mongoose.connect(
  config.get('mongoose:url'),
  config.get('mongoose:options')
);

export default mongoose;
