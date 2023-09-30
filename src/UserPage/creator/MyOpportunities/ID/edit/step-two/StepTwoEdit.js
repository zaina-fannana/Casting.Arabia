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
import StepOneRoles from "../../roles/step_one/StepOneRoles";
import Summary from "../summary/Summary";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
const StepTwoEdit = () => {
  const currentDate = dayjs();
  const [myRoles, setMyRoles] = useState([]);
  const [expirationDate, setExpirationDate] = useState(null);
  const [showStepOne, setShowStepOne] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const handleShowStepOne = () => {
    setShowStepOne(true);
  };

  const handleHideStepOne = () => {
    setShowStepOne(false);
  };

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

    setShowSummary(true);
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
      {showStepOne ? (
        <StepOneRoles />
      ) : !showSummary ? (
        <>
          <p className="StepOne">Posting an Opportunity</p>
          <div className="flex flex-col sm:w-[500px] mx-auto gap-3">
            <div className="flex sm:w-[500px] mx-auto justify-between items-center">
              <p className="text-xl text-gray-500   ">Role(s) You're Casting</p>

              <button
                onClick={handleShowStepOne}
                className="hover:bg-blue-50 duration-200 text-gray-500 rounded-full text-3xl"
              >
                <IoAddOutline /> {""}
              </button>
            </div>

            <div className="h-[200px] rounded-lg my-5 w-ful bg-white border-2 overflow-y-auto border-blue-100">
              <Table className="MuiTable-root mui-16z4ktv">
                <TableHead className="MuiTableHead-root mui-1wbz3t9">
                  <TableRow className="MuiTableRow-root MuiTableRow-head mui-qfypx2">
                    <TableCell
                      className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium mui-vyyw5x"
                      scope="col"
                    >
                      Role Name
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
              <div className="AdapterDay">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker />
                </LocalizationProvider>
              </div>
            </div>

            <div className="flex gap-5 mb-11">
              <button className="save" href={"/creator"}>
                Save For Later
              </button>
              <> ︎ ︎ ︎</>

              <button
                onClick={handleSubmit}
                variant="contained"
                color="primary"
                className="continuo"
              >
                Continue
              </button>
            </div>
          </div>
        </>
      ) : (
        <Summary />
      )}
    </div>
  );
};

export default StepTwoEdit;
