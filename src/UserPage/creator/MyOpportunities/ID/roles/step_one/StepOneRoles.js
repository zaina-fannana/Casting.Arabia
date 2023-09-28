import React, { useEffect, useState } from "react";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import axios from "axios";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import "./StepOneRoles.css";
import StepTwoRoles from "../step_two/StepTwoRoles";

function StepOneRoles() {
  const id = "";
  const id2 = "";

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const [showStepTwo, setShowStepTwo] = useState(false);
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

  const handleContinue = () => {
    window.history.pushState(
      {},
      "",
      "creator/opportunities/1833/edit/step-two"
    );
    setShowStepTwo(true);
  };

  const handleSubmit = (event) => {
    const token = localStorage.getItem("token");
    event.preventDefault();

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
      {showStepTwo ? (
        <StepTwoRoles />
      ) : (
        <>
          <p
            className="text-3xl text-blue-600 font-semibold sm:w-[500px] mx-auto mb-10"
            style={{ marginRight: "200px" }}
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
            ) : null}

            <div>
              <Box sx={{ minWidth: 120, lineHeight: 5 }}>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    role type
                  </InputLabel>
                  <NativeSelect
                    defaultValue={30}
                    inputProps={{
                      name: "age",
                      id: "uncontrolled-native",
                    }}
                  >
                    <option> ︎</option>
                    <option> Lead role</option>
                    <option>supporting role</option>
                    <option>extra role</option>
                    <option>other</option>
                  </NativeSelect>
                </FormControl>
              </Box>
            </div>

            {formData.type === "other" ? (
              <div>
                <TextField
                  value={formData.otherRoleType}
                  onChange={handleInputChange}
                  name="otherRoleType"
                  variant="standard"
                  label="Other Role Type"
                  className="sm:w-[500px] mt-5"
                />
                <p className="text-sm  text-red-500  p-2 inline-block ">
                  {errors.otherRoleType && errors.otherRoleType}
                </p>
              </div>
            ) : null}

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

            <div>
              <Box sx={{ minWidth: 120, lineHeight: 5 }}>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Gender
                  </InputLabel>
                  <NativeSelect
                    defaultValue={30}
                    inputProps={{
                      name: "age",
                      id: "uncontrolled-native",
                    }}
                  >
                    <option> ︎</option>
                    <option> Male</option>
                    <option>Female</option>
                    <option>other</option>
                  </NativeSelect>
                </FormControl>
              </Box>
            </div>

            <div className="mt-5">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.considerGender}
                    onChange={handleCheckChange}
                    name="considerGender"
                  />
                }
                label="This is a firm requirement"
              />
            </div>

            <div className="mt-5">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.isAcceptingTapedAudition}
                    onChange={handleCheckChange}
                    name="This is a firm requirement"
                  />
                }
                label="This is a firm requirement"
              />
            </div>

            {/* <button
              onClick={handleContinue}
              className="text-white bg-blue-600 p-2 mt-10 text-xl rounded-md sm:w-[400px] mx-auto"
              style={{ marginRight: "0px" }}
            >
              Continue
            </button> */}
            <div className="flex items-center gap-4">
              <button className="save" href={"/creator"}>
                Save For Later
              </button>
              <> ︎ ︎ ︎</>
              {isLoading && formData.description && formData.location !== "" ? (
                <div className="border-2 border-blue-700 bg-blue-700 rounded-md text-lg text-white px-4 py-1 font-semibold hover:bg-blue-600 duration-200"></div>
              ) : (
                <button
                  onClick={handleContinue}
                  className="border-2 border-blue-700 bg-blue-700 rounded-md text-lg text-white px-4 py-1 font-semibold hover:bg-blue-600 duration-200"
                >
                  {formData.description && formData.location !== ""
                    ? "Continue"
                    : "Continue"}
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default StepOneRoles;
