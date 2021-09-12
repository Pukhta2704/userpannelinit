require('dotenv').config();
const mongoose = require('mongoose');

const connectDB= async (server) => {
  await mongoose.connect(process.env.MONGO_CONNECTION_URI, () => {
    console.log('db connected');
    server();
  });
};
module.exports=connectDB
