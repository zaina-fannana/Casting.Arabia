import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { MdOutlineModeEdit } from "react-icons/md";
import * as Yup from "yup";

const UserInfoForm = (props) => {
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
  });

  useEffect(() => {
    if (props.profileInfo) {
      setFormData({
        firstName: props.profileInfo.firstName || "",
        lastName: props.profileInfo.lastName || "",
        companyName: props.profileInfo.companyName || "",
        email: props.profileInfo.email || "",
        phoneNumber: props.profileInfo.phoneNumber || "",
      });
    }
  }, [props.profileInfo]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const schema = Yup.object().shape({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        companyName: Yup.string().required("Company Name is required"),
        email: Yup.string()
          .email("Invalid email")
          .required("Email is required"),
        phoneNumber: Yup.string().required("Phone Number is required"),
      });

      await schema.validate(formData, { abortEarly: false });

      try {
        const res = await fetch(
          "http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/me",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(formData),
          }
        );

        if (res.ok) {
          const profileInfo = await res.json();
          if (profileInfo) {
          }
        } else {
        }
      } catch (error) {
      }

      handleClose();
    } catch (validationErrors) {
      const Errors = {};
      validationErrors.inner.forEach((error) => {
        Errors[error.path] = error.message;
      });
      setErrors(Errors);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <MdOutlineModeEdit
          className="text-4xl text-blue-600 hover:bg-blue-50 rounded-full duration-200"
          style={{ fontSize: "x-large", marginTop: -330, marginLeft: 60 }}
        />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ direction: "ltr" }}>Account Info</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              value={formData.firstName}
              name="firstName"
              label="First Name"
              fullWidth
              margin="normal"
              error={Boolean(errors.firstName)}
              helperText={errors.firstName}
              onChange={handleInputChange}
            />
            <TextField
              value={formData.lastName}
              name="lastName"
              label="Last Name"
              fullWidth
              margin="normal"
              error={Boolean(errors.lastName)}
              helperText={errors.lastName}
              onChange={handleInputChange}
            />
            <TextField
              value={formData.companyName}
              name="companyName"
              label="Company Name"
              fullWidth
              margin="normal"
              error={Boolean(errors.companyName)}
              helperText={errors.companyName}
              onChange={handleInputChange}
            />
            <TextField
              value={formData.email}
              name="email"
              label="Email"
              fullWidth
              margin="normal"
              error={Boolean(errors.email)}
              helperText={errors.email}
              onChange={handleInputChange}
            />
            <TextField
              value={formData.phoneNumber}
              name="phoneNumber"
              label="Phone Number"
              fullWidth
              margin="normal"
              error={Boolean(errors.phoneNumber)}
              helperText={errors.phoneNumber}
              onChange={handleInputChange}
            />
            {error ? (
              <Typography variant="body1" className="text-lg text-red-500 p-2">
                {error}
              </Typography>
            ) : null}
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="error"
            variant="outlined"
            sx={{ width: 120, height: 40 }}
          >
            Cancel
          </Button>
          <> ︎ ︎ ︎</>
          <Button
            onClick={handleSubmit}
            color="primary"
            variant="contained"
            sx={{ width: 100, height: 40 }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserInfoForm;
