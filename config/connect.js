import mongoose from 'mongoose';

export default async function connect() {

  await mongoose.connect('mongodb://localhost:27017/test')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error(err));
}