const mongoose = require('mongoose');


const mongoose_url = process.env.MONGOOSE;

mongoose.connect(mongoose_url)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log("mongodb is not connected", err));