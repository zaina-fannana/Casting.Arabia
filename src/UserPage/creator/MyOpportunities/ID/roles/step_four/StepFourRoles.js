import React, { useEffect, useState } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  NativeSelect,
  Input,
  InputAdornment,
} from "@mui/material";
import axios from "axios";
import Box from "@mui/material/Box";
import "./StepFourRoles.css";
const StepFourRoles = () => {
  const [formData, setFormData] = useState({
    isCompleted: false,
    isPaid: false,
    mediaRequired: {
      characteristics: "",
      skills: "",
    },
    paidRate: "",
    paidType: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const res = await axios.put(
        `http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/opportunities/roles/`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res) {
        setIsLoading(true);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="mt-12 mb-[133px] h-[400px]">
        <p
          className="text-3xl text-blue-600 font-semibold sm:w-[500px] mx-auto mb-10 mr:[700px]"
          style={{ marginRight: "200px" }}
        >
          Role Details
        </p>
        <div className="flex flex-col sm:w-[500px] mx-auto gap-3 mb-20">
          <div className="mb-5">
            <p className="text-lg mb-5">Compensation & Contract Details</p>
            <div>
              <Box sx={{ minWidth: 120, lineHeight: 5 }}>
                <FormControl fullWidth style={{ direction: "initial" }}>
                  <NativeSelect
                    value={formData.isPaid ? "Paid" : "Unpaid"}
                    onChange={(e) => {
                      setFormData((prevData) => ({
                        ...prevData,
                        isPaid: e.target.value === "Paid",
                      }));
                    }}
                  >
                    <option value="Unpaid">Unpaid</option>
                    <option value="Paid">Paid</option>
                  </NativeSelect>
                </FormControl>
              </Box>
            </div>
          </div>

          {formData.isPaid && (
            <div className="MuiBox-root mui-1yuhvjn">
              <div className="MuiFormControl-root MuiTextField-root mui-mehm24">
                <label
                  htmlFor="paidType"
                  className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-sizeSmall MuiInputLabel-standard MuiFormLabel-root MuiFormLabel-colorPrimary MuiFormLabel-filled mui-59uj5m"
                >
                  Period
                </label>
                <FormControl
                  variant="standard"
                  className="MuiInput-root MuiInput-underline MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl MuiInputBase-sizeSmall mui-1qmr4gc"
                >
                  <Select
                    labelId="paidType-label"
                    id="paidType"
                    name="paidType"
                    value={formData.paidType}
                    onChange={handleChange}
                    className="MuiInput-input MuiInputBase-input MuiInputBase-inputSizeSmall mui-qq14pi"
                  >
                    <MenuItem value="Weekly">Weekly</MenuItem>
                    <MenuItem value="Monthly">Monthly</MenuItem>
                    <MenuItem value="Yearly">Yearly</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="MuiFormControl-root MuiTextField-root mui-w0p51q">
                <label
                  htmlFor="paidRate"
                  className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-sizeSmall MuiInputLabel-standard MuiFormLabel-root MuiFormLabel-colorPrimary MuiFormLabel-filled mui-59uj5m"
                  style={{ marginLeft: "20px" }}
                >
                  Rate
                </label>
                <> ︎ ︎ ︎</>

                <FormControl className="MuiInput-root MuiInput-underline MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl MuiInputBase-sizeSmall mui-1qmr4gc">
                  <Input
                    id="paidRate"
                    name="paidRate"
                    type="number"
                    value={formData.paidRate}
                    onChange={handleChange}
                    placeholder="0.00"
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    className="MuiInput-input MuiInputBase-input MuiInputBase-inputSizeSmall MuiInputBase-inputAdornedStart mui-2duac4"
                  />
                </FormControl>
              </div>
            </div>
          )}

          <div className="flex items-center gap-4">
            <button
              className="save"
              onClick={() => (window.location.href = "/creator")}
            >
              Save For Later
            </button>
            <> ︎ ︎ ︎</>

            <button
              onClick={handleSubmit}
              className="border-2 border-blue-700 bg-blue-700 rounded-md text-lg text-white px-4 py-1 font-semibold hover:bg-blue-600 duration-200"
              disabled={
                !formData.isPaid || !(formData.paidType && formData.paidRate)
              }
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepFourRoles;
