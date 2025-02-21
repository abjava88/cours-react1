import React, { useState } from "react";

const SimpleForm = () => {
  const [formData, setFormData] = useState({ username: "", email: "" });
  const handleChange = (e) => {
    console.log(`valeur courante formData ${JSON.stringify(formData)}`);
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(`nouvelle valeur formData ${JSON.stringify(formData)}`);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SimpleForm;
