import React, { useState } from "react";
import "./AdminForm.css";

function AdminForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phoneNumber: "",
    gender: "",
    role: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};

    if (!formData.email.includes("@")) {
      tempErrors.email = "Invalid email format.";
    }

    if (
      !/(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(
        formData.password
      )
    ) {
      tempErrors.password =
        "Password must be at least 8 characters, include one uppercase letter, one number, and one special character.";
    }

    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      tempErrors.phoneNumber = "Phone number should be 10 digits.";
    }

    if (!formData.gender) {
      tempErrors.gender = "Please select your gender.";
    }

    if (!formData.role) {
      tempErrors.role = "Please select a role.";
    }

    if (!formData.termsAccepted) {
      tempErrors.termsAccepted = "You must accept the terms and conditions.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const validateField = (name, value) => {
    let tempErrors = { ...errors };

    switch (name) {
      case "email":
        tempErrors.email = !value.includes("@") ? "Invalid email format." : "";
        break;
      case "password":
        tempErrors.password =
          !/(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(value)
            ? "Password must be at least 8 characters, include one uppercase letter, one number, and one special character."
            : "";
        break;
      case "phoneNumber":
        tempErrors.phoneNumber = !/^\d{10}$/.test(value)
          ? "Phone number should be 10 digits."
          : "";
        break;
      case "gender":
        tempErrors.gender = !value ? "Please select your gender." : "";
        break;
      case "role":
        tempErrors.role = !value ? "Please select a role." : "";
        break;
      case "termsAccepted":
        tempErrors.termsAccepted = !value
          ? "You must accept the terms and conditions."
          : "";
        break;
      default:
        break;
    }

    setErrors(tempErrors);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newValue = type === "checkbox" ? checked : value;

    if (name === "phoneNumber") {
      newValue = value.replace(/[^0-9]/g, "");
    }

    setFormData({ ...formData, [name]: newValue });

    validateField(name, newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data:", formData);
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="admin-form-container">
      <form onSubmit={handleSubmit} className="admin-form">
        <h2>Admin Form</h2>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            className="form-control"
            value={formData.phoneNumber}
            onChange={handleChange}
            maxLength={10}
          />
          {errors.phoneNumber && (
            <div className="error">{errors.phoneNumber}</div>
          )}
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div className="gender-radio">
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="form-check-input"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                />
                Male
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="form-check-input"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                />
                Female
              </label>
            </div>
          </div>
          {errors.gender && <div className="error">{errors.gender}</div>}
        </div>

        <div className="form-group">
          <label>Role</label>
          <select
            name="role"
            className="form-control"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="viewer">Viewer</option>
          </select>
          {errors.role && <div className="error">{errors.role}</div>}
        </div>

        <div className="form-group">
          <div className="form-check">
            <label className="form-check-label">
              <input
                type="checkbox"
                name="termsAccepted"
                className="form-check-input"
                checked={formData.termsAccepted}
                onChange={handleChange}
              />
              I accept the terms and conditions
            </label>
          </div>
          {errors.termsAccepted && (
            <div className="error">{errors.termsAccepted}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AdminForm;
