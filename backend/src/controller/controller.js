const Appointment = require("../model/model");

/* CREATE APPOINTMENT */

const createAppointment = async (req, res) => {

    try {

        const newAppointment = new Appointment(req.body);

        await newAppointment.save();

        res.status(201).json({
            message: "Appointment Created Successfully",
            data: newAppointment
        });

    } 
    
    catch (error) {

        res.status(500).json({
            message: "Server Error",
            error: error.message
        });

    }
};


/* GET APPOINTMENTS */

const getAppointments = async (req, res) => {

    try {

        const appointments = await Appointment.find();

        res.status(200).json(appointments);

    } 
    
    catch (error) {

        res.status(500).json({
            message: "Server Error",
            error: error.message
        });

    }
};


/* EXPORT */

module.exports = {
    createAppointment,
    getAppointments
};