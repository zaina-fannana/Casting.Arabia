import React, { useEffect, useState } from "react";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import axios from "axios";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import "./StepOneRoles.css";

function StepOneRoles() {
  const id = "";
  const id2 = "";

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [formData, setFormData] = useState({
    considerGender: false,
    gender: "",
    isAcceptingTapedAudition: false,
    name: "",
    otherRoleType: "",
    otherTalentType: "",
    talentType: "",
    type: "",
  });

  useEffect(() => {
    async function fetchData() {
      if (id && id2) {
        try {
          const token = localStorage.getItem("token");
          const res = await axios.get(
            `http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/opportunities/${id}/roles/${id2}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (res) {
            setData(res.data);
          }
        } catch (error) {}
      }
    }

    fetchData();
  }, [id, id2]);

  useEffect(() => {
    if (data) {
      setFormData({
        considerGender: data.considerGender,
        gender: data.gender,
        isAcceptingTapedAudition: data.isAcceptingTapedAudition,
        name: data.name,
        otherRoleType: data.otherRoleType,
        otherTalentType: data.otherTalentType,
        talentType: data.talentType,
        type: data.type,
      });
      setSelectedOption1(data.talentType);
      setSelectedOption2(data.type);
    }
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckChange = (e) => {
    const { checked, name } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleSubmit = (event) => {
    const token = localStorage.getItem("token");
    event.preventDefault();
    // schema
    //   .validate(formData, { abortEarly: false })
    //   .then(() => {
    //     console.log("Form data is valid:", formData);
    //   })
    //   .catch((validationErrors) => {
    //     const Errors = {};
    //     validationErrors.inner.forEach((error) => {
    //       Errors[error.path] = error.message;
    //     });
    //     setErrors(Errors);
    //   });

    (async () => {
      try {
        const res = await axios.put(
          `http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/opportunities/{.id}/roles/{.id2}`,
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
        console.log(error);
      }
    })();
  };

  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");

  const handleSelect1 = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption1(selectedValue);
    setSelectedOption2("");
    setFormData({ ...formData, talentType: selectedValue });
  };

  const handleSelect2 = (event) => {
    setSelectedOption2(event.target.value);
    setFormData({ ...formData, type: event.target.value });
  };

  return (
    <div className="my-12">
      <p
        className="text-3xl text-blue-600 font-semibold sm:w-[500px] mx-auto mb-10"
        style={{ marginRight: "0px" }}
      >
        Role Details
      </p>
      <div className="flex flex-col sm:w-[500px] mx-auto gap-3">
        <div sx={{ minWidth: 120, lineHeight: 5 }}>
          <TextField
            value={formData.name}
            onChange={handleInputChange}
            name="name"
            label="Role Name"
            placeholder="Name"
            className="sm:w-[600px]"
            fullWidth
          />
          <p className="text-sm  text-red-500  p-2 inline-block ">
            {errors.name && errors.name}
          </p>
        </div>

        <div>
          <Box sx={{ minWidth: 120, lineHeight: 5 }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                ? talent you are looking for
              </InputLabel>
              <NativeSelect
                defaultValue={30}
                inputProps={{
                  name: "age",
                  id: "uncontrolled-native",
                }}
              >
                <option> ︎</option>
                <option>Actor</option>
                <option>Singer</option>
                <option>Model</option>
                <option>Host/hostess</option>
                <option>Dancer</option>
                <option>Musician</option>
                <option>staff</option>
                <option>writer</option>
                <option>Other</option>
                <option>Camera performer</option>
              </NativeSelect>
            </FormControl>
          </Box>
        </div>

        {formData.talentType === "other" ? (
          <div>
            <TextField
              value={formData.otherTalentType}
              onChange={handleInputChange}
              name="otherTalentType"
              variant="standard"
              label="Other Talent Type"
              className="sm:w-[500px] mt-5"
            />
            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.otherTalentType && errors.otherTalentType}
            </p>
          </div>
        ) : (
          <div className="my-5">
            <Box sx={{ minWidth: 120, lineHeight: 5 }}>
              <FormControl fullWidth>
                <InputLabel
                  variant="standard"
                  htmlFor="uncontrolled-native"
                  onChange={handleSelect2}
                >
                  Sub Type{" "}
                </InputLabel>
                <NativeSelect>
                  <option> ︎</option>
                  <option>Actor</option>
                  <option>Singer</option>
                  <option>Model</option>
                  <option>writer</option>
                  <option>Other</option>
                </NativeSelect>
              </FormControl>
            </Box>
          </div>
        )}
        <div>
          <Box sx={{ minWidth: 120, lineHeight: 5 }}>
            <FormControl fullWidth>
              <InputLabel
                variant="standard"
                htmlFor="uncontrolled-native"
                onChange={handleInputChange}
              >
                Gender{" "}
              </InputLabel>
              <NativeSelect>
                <option> ︎</option>
                <option>male</option>
                <option>female</option>
              </NativeSelect>
            </FormControl>
          </Box>
        </div>
        <div className="flex flex-col gap-3">
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.considerGender}
                name="considerGender"
                onChange={handleCheckChange}
              />
            }
            label="This is a firm requirement"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.isAcceptingTapedAudition}
                name="isAcceptingTapedAudition"
                onChange={handleCheckChange}
              />
            }
            label=" ? Accepting taped audition"
          />
        </div>
        <div className="flex items-center gap-4">
          <button
            className="save"
            href={"/creator/opportunities/edit/step-two"}
          >
            Save For Later
          </button>

          <> ︎ ︎ ︎</>

          {isLoading &&
          formData.type &&
          formData.talentType &&
          formData.gender &&
          formData.name !== "" ? (
            <div className="border-2 border-blue-700 bg-blue-700 rounded-md text-lg text-white px-4 py-1 font-semibold hover:bg-blue-600 duration-200">
              {/* <Loading buttonContent="Continue" /> */}
            </div>
          ) : (
            <button
              onClick={handleSubmit}
              className="border-2 border-blue-700 bg-blue-700 rounded-md text-lg text-white px-4 py-1 font-semibold hover:bg-blue-600 duration-200"
            >
              {formData.type &&
              formData.talentType &&
              formData.gender &&
              formData.name !== "" ? (
                <button
                  href={`/creator/opportunities/{.id}/roles/{.id2}/edit/step-two`}
                >
                  Continue
                </button>
              ) : (
                "Continue"
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default StepOneRoles;
