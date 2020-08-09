const mongoose = require ('mongoose');

const flightSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },   
    airline: {
        type: String,
        required: true
    },
    model: String,
    origin: {
        type: String,
        required: true
    },
    ticket_price: Number
});

const Flights = mongoose.model('Flights', flightSchema)

module.exports = Flights;