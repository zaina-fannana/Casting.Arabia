import React, { useState, useEffect } from "react";
import { Checkbox, FormControlLabel, Slider } from "@mui/material";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import "./StepTwoRoles.css";
import StepThreeRoles from "../step_three/StepThreeRoles";

const StepTwoRoles = () => {
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = React.useState([0, 100]);
  const [data, setData] = useState({});
  const [showStepThree, setShowStepThree] = useState(false);
  const [formData, setFormData] = useState({
    citizenship: "",
    considerAge: false,
    considerCitizen: false,
    considerSkills: [],
  });

  useEffect(
    () => {
      async function fetchData() {
        if (true) {
          try {
            const token = localStorage.getItem("token");
            const res = await axios.get(
              `http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/opportunities/roles/`,
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
    }
    //   [router.query.id, router.query.id2]
  );

  useEffect(() => {
    if (data) {
      setFormData({
        citizenship: data.citizenship,
        considerAge: data.isAcceptingTapedAudition,
        considerCitizen: data.considerCitizen,
        considerSkills: data.skills,
      });
      setValue([data.minAge, data.maxAge]);
    }
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSkillChange = (e) => {
    const token = localStorage.getItem("token");
    const selectedSkill = e.target.value;

    async function addSkill() {
      try {
        const res = await axios.post(
          `http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/opportunities/roles/skills`,
          { level: "intermediate", skillId: Math.round(Math.random() * 100) },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (res) {
          setFormData({
            ...formData,
            considerSkills: [
              ...formData.considerSkills,
              { skill: { id: res.data.id, title: selectedSkill } },
            ],
          });
        }
      } catch (error) {}
    }

    addSkill();
  };

  const handleContinueToStepThree = () => {
    setShowStepThree(true);
  };

  const handleDeleteSkill = async (skillId) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.delete(
        `http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/opportunities/roles/skills/${skillId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res) {
        const updatedSkills = formData.considerSkills.filter(
          (item) => item.id !== skillId
        );
        setFormData({ ...formData, considerSkills: updatedSkills });
      }
    } catch (error) {
      console.error("Error deleting skill:", error);
    }
  };

  const handleSubmit = (event) => {
    const token = localStorage.getItem("token");
    event.preventDefault();
    setShowStepThree(true);
    async function validateAndSubmit() {
      try {
        const res = await axios.put(
          `http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/opportunities/roles`,
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
    }
  };
  // schema
  //   .validate(formData, { abortEarly: false })
  //   .then(() => {
  //     console.log("Form data is valid:", formData);
  //     validateAndSubmit();
  //   })
  //   .catch((validationErrors) => {
  //     const Errors = {};
  //     validationErrors.inner.forEach((error) => {
  //       Errors[error.path] = error.message;
  //     });
  //     setErrors(Errors);
  //   });
  // };
  const handleCheckChange = (e) => {
    const { checked, name } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setFormData({
      ...formData,
      minAge: newValue[0],
      maxAge: newValue[1],
    });
  };

  return (
    <div>
      <div className="my-12">
        {showStepThree ? (
          <StepThreeRoles />
        ) : (
          <>
            <p
              className="text-3xl text-blue-600 font-semibold sm:w-[500px] mx-auto mb-10 mr:[700px]"
              style={{ marginRight: "200px" }}
            >
              Role Details
            </p>
            <div
              className="flex flex-col sm:w-[500px] mx-auto gap-3"
              style={{ marginRight: "24%", marginTop: "-50px" }}
            >
              <div>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 555 }}>
                  <InputLabel
                    id="demo-simple-select-standard-label"
                    style={{ minWidth: "555px" }}
                  >
                    Skills
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    onChange={handleChange}
                    label="Start Typing..."
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="w-full bg-white h-48 border-[1px] rounded-lg border-gray-300 overflow-y-auto">
                <Table className="MuiTable-root mui-16z4ktv">
                  <TableHead className="MuiTableHead-root mui-1wbz3t9">
                    <TableRow className="MuiTableRow-root MuiTableRow-head mui-qfypx2">
                      <TableCell
                        className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium mui-vyyw5x"
                        scope="col"
                      >
                        Skill Name
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody className="MuiTableBody-root mui-1xnox0e">
                    <TableRow className="MuiTableRow-root mui-9jehzt">
                      <TableCell className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium mui-1p7duky"></TableCell>
                    </TableRow>
                    <TableRow className="MuiTableRow-root mui-9jehzt">
                      <TableCell className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium mui-1p7duky"></TableCell>
                    </TableRow>
                    <TableRow className="MuiTableRow-root mui-9jehzt">
                      <TableCell className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium mui-1p7duky"></TableCell>
                    </TableRow>
                    <TableRow className="MuiTableRow-root mui-9jehzt">
                      <TableCell className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium mui-1p7duky"></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                {formData.considerSkills?.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <p className="text-lg ml-3 mt-4">{item.skill.title}</p>
                    <div className="flex items-center">
                      <button onClick={() => handleDeleteSkill(item.id)}>
                        <MdDelete className="text-2xl text-red-600" />
                        {""}
                      </button>
                      <p className="text-lg">Required</p>
                      <Checkbox />
                    </div>
                  </div>
                ))}
              </div>
              <div className="ml-10" style={{ marginRight: "inherit" }}>
                <Box sx={{ width: 300 }}>
                  <p
                    className="mb-3"
                    style={{
                      fontSize: "1.2rem",
                      fontFamily: "Segoe UI",
                      fontWeight: "400",
                      lineHeight: "1.3",
                      textAlign: "end",
                    }}
                  >
                    Age Range {value[0]} to {value[1]}
                  </p>
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                  />
                </Box>
              </div>
              <div>
                <FormControlLabel
                  label="This is a firm requirement"
                  control={
                    <Checkbox
                      checked={formData.considerAge}
                      onChange={handleCheckChange}
                      name="considerAge"
                    />
                  }
                />
              </div>
              <div>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 555 }}>
                  <InputLabel
                    id="demo-simple-select-standard-label"
                    style={{ minWidth: "555px" }}
                  >
                    Country of talent
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    onChange={handleChange}
                    label="Country of talent"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="mb-5">
                <FormControlLabel
                  label="This is a firm requirement"
                  control={
                    <Checkbox
                      checked={formData.considerCitizen}
                      onChange={handleCheckChange}
                      name="considerCitizen"
                    />
                  }
                />
              </div>
              <div className="flex items-center gap-4" style={{direction:"start"}}>
                <button className="save" href={"/creator"}>
                  Save For Later
                </button>
                <> ︎ ︎ ︎</>
                {isLoading && formData.citizenship !== "" ? (
                  <div className="border-2 border-blue-700 bg-blue-700 rounded-md text-lg text-white px-4 py-1 font-semibold hover-bg-blue-600 duration-200">
                    {/* <Loading buttonContent="Continue" /> */}
                  </div>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="border-2 border-blue-700 bg-blue-700 rounded-md text-lg text-white px-4 py-1 font-semibold hover:bg-blue-600 duration-200"
                  >
                    <button
                      style={{
                        backgroundColor: "#6371e0",
                        border: "#6371e0",
                        color: "#fff",
                        fontSize: "inherit",
                        cursor: "pointer",
                      }}
                      href={`/creator/opportunities/roles//edit/step-three`}
                    >
                      Continue
                    </button>
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StepTwoRoles;
