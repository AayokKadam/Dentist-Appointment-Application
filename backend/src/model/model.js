const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({

    doctor: {
        type: String,
        required: true
    },

    fullname: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    problem: {
        type: String,
        required: true
    },

    status: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    mobile: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    time: {
        type: String,
        required: true
    }

},
{
    timestamps: true
});

const Appointment = mongoose.model(
    "Appointment",
    appointmentSchema
);

module.exports = Appointment;