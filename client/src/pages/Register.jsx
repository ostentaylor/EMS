import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    employeeNumber: "",
    salaryAmount: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to your backend API
      const response = await fetch("http://localhost:3000/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to register");
      }
      // Redirect to success page or any other route
      navigate("/success");
    } catch (error) {
      console.error("Registration error:", error);
      // Handle error state or display error message to the user
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="employeeNumber"
          value={formData.employeeNumber}
          onChange={handleInputChange}
          placeholder="Employee Number"
          required
        />
        <input
          type="number"
          name="salaryAmount"
          value={formData.salaryAmount}
          onChange={handleInputChange}
          placeholder="Salary Amount"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
