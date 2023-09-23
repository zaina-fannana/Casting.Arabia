import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import { Switch, TextField, Button } from "@mui/material";
import { IoAddOutline } from "react-icons/io5";
import Tooltip from "@mui/material/Tooltip";
import ClearIcon from "@mui/icons-material/Clear";
import "./StepTwoEdit.css";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

const StepTwoEdit = () => {
  const currentDate = dayjs();
  const [myRoles, setMyRoles] = useState([]);
  const [expirationDate, setExpirationDate] = useState(null);

  const handleDateChange = (date) => {
    setExpirationDate(date);
  };
  const handleBackToStepOne = () => {
    window.history.pushState(
      {},
      "",
      "creator/opportunities/1833/edit/step-one"
    );
  };
  const handleSubmit = (event) => {
    const token = localStorage.getItem("token");
    event.preventDefault();

    // schema
    //   .validate(expirationDate, { abortEarly: false })
    //   .then(() => {
    //     console.log("Form data is valid:", expirationDate);
    //   })
    //   .catch((validationErrors) => {
    //     console.log(validationErrors);
    //   });

    // (async () => {
    //   try {
    //     const response = await axios.put(
    //       `http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/opportunities/`,
    //       { expirationDate: expirationDate },
    //       {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //         },
    //       }
    //     );
    //     if (response) {
    //       setIsLoading(true);
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // })();
  };

  const handleDynamicRoute = (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();

    (async () => {
      try {
        const response = await axios.post(
          `http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/opportunities/roles`,
          {
            name: "",
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data && response.data.id) {
          // .push(
          //   `/creator/opportunities/${.id}/roles/${response.data.id}/edit/step-one`
          // );
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("token");
        // if (.id) {
        //   const res = await axios.get(
        //     `http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/opportunities/`,
        //     {
        //       headers: {
        //         Authorization: `Bearer ${token}`,
        //       },
        //     }
        //   );
        //   if (res) {
        //     setMyRoles(res.data.roles);
        //   }
        // }
      } catch (error) {}
    })();
  }, []);

  const handleCheckSwitch = async (id) => {
    const token = localStorage.getItem("token");

    try {
      const updatedRoles = myRoles.map((role) => {
        if (role.id === id) {
          const newStatus = role.status === "opened" ? "closed" : "opened";
          return { ...role, status: newStatus };
        }
        return role;
      });

      setMyRoles(updatedRoles);

      const res = await axios.put(
        `http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/opportunities/roles/${id}`,
        { status: updatedRoles.find((role) => role.id === id)?.status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (id) => {
    // .push(
    //   `/creator/opportunities/${.id}/roles/${id}/edit/step-one`
    // );
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.delete(
        `http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/opportunities/roles/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res) {
        setMyRoles(myRoles.filter((item) => item.id !== id));
      }
    } catch (error) {}
  };
  return (
    <div className="my-12">
      <div className="flex flex-col sm:w-[500px] mx-auto gap-3">
        <div className="flex sm:w-[500px] mx-auto justify-between items-center">
          <p className="text-xl text-gray-500   ">Role(s) You're Casting</p>

          <button
            onClick={handleDynamicRoute}
            className="hover:bg-blue-50 duration-200 text-gray-500 rounded-full text-3xl"
          >
            <IoAddOutline /> {""}
          </button>
        </div>

        <div className="h-[200px] rounded-lg my-5 w-ful bg-white border-2 overflow-y-auto border-blue-100">
          <p className="text-xl p-4">Role Name</p>

          {myRoles.map((item, index) => (
            <div
              key={index}
              className="border-b-[1px] border-blue-200 p-3 flex justify-between items-center"
            >
              <p className="text-xl">{item.name}</p>
              <div className="flex items-center gap-1">
                <div className="flex items-center ">
                  <p className="text-xl">{item.status}</p>
                  <Switch
                    checked={item.status === "opened"}
                    onChange={() => handleCheckSwitch(item.id)}
                  />
                </div>
                <Tooltip title="Edit">
                  <button
                    onClick={() => handleEdit(item.id)}
                    style={{ color: "#6371e0" }}
                  >
                    <ModeEditOutlineIcon /> {""}
                  </button>
                </Tooltip>

                <Tooltip title="Delete">
                  <button
                    onClick={() => handleDelete(item.id)}
                    style={{ color: "red" }}
                  >
                    <ClearIcon /> {""}
                  </button>
                </Tooltip>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-10">
          <label className="block text-xl mb-2" htmlFor="expirationDate">
            ?When should this listing expire
          </label>
          {/* <DatePicker
            minDate={currentDate}
            label="Select a date"
            value={expirationDate}
            inputProps={{
              className:
                "w-full h-14 border-2 border-gray-300 outline-none rounded-xl text-lg border-none px-3",
              id: "expirationDate",
            }}
            format="MM/dd/yyyy"
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} />}
            adapter={AdapterDateFns}
          /> */}
        </div>

        <div className="flex items-center gap-4">
          <button className="save" href={"/creator"}>
            Save For Later
          </button>

          <> ︎ ︎ ︎</>
          {/* {isLoading && expirationDate !== "" ? (
            <div className="border-2 border-blue-700 bg-blue-700 rounded-md text-lg text-white px-4 py-1 font-semibold hover:bg-blue-600 duration-200">
              <Loading buttonContent="Continue" />
            </div>
          ) : ( */}
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            className="continuo"
          >
            {expirationDate ? (
              <a href={`/creator/opportunities/edit/summary`}>Continue</a>
            ) : (
              "Continue"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StepTwoEdit;
