import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
const BasicInfoForm = (props) => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(props.profileImage);
  const [formData, setFormData] = useState({
    dob: "",
    country: "",
    city: "",
    gender: "",
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    // Handle the form submission logic here

    // Close the dialog
    handleClose();
  };

  return (
    <>
      <ModeEditOutlineOutlinedIcon
        onClick={handleOpen}
        className="text-4xl text-blue-600 hover:bg-blue-50 rounded-full duration-200"
        style={{ fontSize: "x-large" ,color:"#1976d2"}}
      />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ direction: "ltr" }}>Basic Info</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Date Of Birth"
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Gender</InputLabel>
              <Select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="City"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
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
    </>
  );
};

export default BasicInfoForm;
