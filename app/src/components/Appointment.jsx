import { useState } from "react";
import axios from "axios";

function Appointment() {
  const [formData, setFormData] = useState({
    doctor: "",
    fullname: "",
    age: "",
    problem: "",
    status: "",
    email: "",
    mobile: "",
    address: "",
    time: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      // Example Axios POST
      await axios.post("http://localhost:5000/auth/app", formData);

      setMessage("Appointment done!");

      setFormData({
        doctor: "",
        fullname: "",
        age: "",
        problem: "",
        status: "",
        email: "",
        mobile: "",
        address: "",
        time: ""
      });

    } catch (error) {
      console.log(error);
      setMessage("Server Error!");
    }
  };
  return (
    

  

  

    <div className="app-container">

      <form className="appointment-form" onSubmit={handleSubmit}>

        <h1>DENTAL APPOINTMENT</h1>

        {/* Select Doctor */}
        <label>Select Doctor</label>
        <select
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
          required
        >
          <option value="">Choose Doctor</option>
          <option>Dr. Sharma</option>
          <option>Dr. Patil</option>
          <option>Dr. Verma</option>
        </select>

        {/* Full Name */}
        <label>Patient Full Name</label>
        <input
          type="text"
          name="fullname"
          placeholder="Enter Full Name"
          value={formData.fullname}
          onChange={handleChange}
          required
        />

        {/* Age */}
        <label>Age</label>
        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        {/* Problem */}
        <label>Problem</label>
        <textarea
          name="problem"
          placeholder="Enter Problem"
          value={formData.problem}
          onChange={handleChange}
          required
        ></textarea>

        {/* Status */}
        <label>Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="">Select Status</option>
          <option>Visited</option>
          <option>New</option>
        </select>

        {/* Email */}
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Mobile */}
        <label>Mobile</label>
        <input
          type="text"
          name="mobile"
          placeholder="Enter Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
        />

        {/* Address */}
        <label>Address</label>
        <textarea
          name="address"
          placeholder="Enter Address"
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>

        {/* Time */}
        <label>Select Time Zone</label>
        <select
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        >
          <option value="">Choose Time</option>
          <option>1 PM to 2 PM</option>
          <option>2 PM to 3 PM</option>
          <option>4 PM to 6 PM</option>
        </select>

        {/* Button */}
        <button type="submit">
          SUBMIT
        </button>

        {/* Message */}
        <p className="message">{message}</p>

      </form>

    </div>
  )
}

export default Appointment;