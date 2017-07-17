const mongoose = require('mongoose');

const BicycleSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String},
    price: {type: Number},
    image: {type: String},
    location: {type: String},
    user_id: {type: String}
});

mongoose.model('Bicycle', BicycleSchema);