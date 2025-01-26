import React, { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2
import "./RegistrationForm.css";

const RegistrationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    department: "",
    year: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    // Show SweetAlert after form submission
    Swal.fire({
      icon: "success",
      title: "Registration Successful!",
      text: `Thank You for registering, ${formData.fullName}!`,
      confirmButtonText: "OK",
    }).then(() => {
      onClose(); // Close modal after alert
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>CodeClub Registration</h2>
        <form onSubmit={handleSubmit} className="registration-form">
          <label>
            Full Name
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Department
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Year
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Year
              </option>
              <option value="First Year">First Year</option>
              <option value="Second Year">Second Year</option>
              <option value="Third Year">Third Year</option>
              <option value="Fourth Year">Fourth Year</option>
            </select>
          </label>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
