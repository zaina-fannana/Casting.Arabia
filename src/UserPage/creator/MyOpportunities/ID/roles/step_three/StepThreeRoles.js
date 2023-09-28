import React, { useEffect, useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextField from "@mui/material/TextField";
import { BiSolidPencil } from "react-icons/bi";
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import StepFourRoles from "../step_four/StepFourRoles";
import "dayjs/locale/en";
import "./StepThreeRoles.css";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";


const StepThreeRoles = () => {
  const currentDate = dayjs();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [data, setData] = useState(null);
  const [showStepFour, setShowStepFour] = useState(false);
  const [formData, setFormData] = useState({
    description: "",
    location: "",
    shootingAvailability: [],
    auditionDates: ["2023-01-01"],
  });

  const [value, setValue] = React.useState([
    dayjs("2022-04-17"),
    dayjs("2022-04-21"),
  ]);

  useEffect(() => {
    (async () => {
      if (false) {
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
    })();
  }, []);

  useEffect(() => {
    if (data) {
      setFormData({
        ...formData,
        description: data?.description,
        location: data?.location,
        auditionDates: data.auditionDates ? data.auditionDates : ["2023-01-01"],
      });
    }
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleDateChange = (e) => {
    const startDate = dayjs(e[0]);
    const endDate = dayjs(e[1]);
    const startMonthName = startDate.format("MMM");
    const endMonthName = endDate.format("MMM");
    setFormData({
      ...formData,
      shootingAvailability: [
        `${startDate.format("D")}-${startMonthName}-${startDate.format(
          "YYYY"
        )}`,
        `${endDate.format("D")}-${endMonthName}-${endDate.format("YYYY")}`,
      ],
    });
  };

  const handleSubmit = (event) => {
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
          `http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/opportunities/roles/`,
          formData,
          {
            headers: {
              //   Authorization: `Bearer ${token}`,
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

  const [date, setDate] = React.useState("20-Aug-2023");

  const handleChangeDate = (e) => {
    setDate(`${e.$y}-${e.$M + 1}-${e.$D}`);
  };

  const handleContinue = () => {
    setShowStepFour(true);
  };

  const handleDateSubmit = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      auditionDates: [...formData.auditionDates, date],
    });
    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (dateToDelete) => {
    const updatedAuditionDates = formData.auditionDates.filter(
      (date) => date !== dateToDelete
    );
    setFormData({ ...formData, auditionDates: updatedAuditionDates });
  };

  return (
    <>
      <div className="my-12">
        {showStepFour ? (
          <StepFourRoles />
        ) : (
          <>
            <p
              className="text-3xl text-blue-600 font-semibold sm:w-[500px] mx-auto mb-10 mr:[700px]"
              style={{ marginRight: "200px" }}
            >
              Role Details
            </p>
            <div className="flex flex-col sm:w-[500px] mx-auto gap-3">
              <div className="RoleDescription">
                <TextareaAutosize
                  value={formData.description}
                  onChange={handleInputChange}
                  name="description"
                  minRows={7}
                  className="sm:w-[500px] "
                  placeholder="Role Description"
                  style={{
                    height: "105px",
                    width: "-webkit-fill-available",
                    marginTop: "-40px",
                    direction: "initial",
                  }}
                />
                <p className="text-sm  text-red-500  p-2 inline-block ">
                  {errors.description && errors.description}
                </p>
              </div>

              <div className="mb-5">
                <TextField
                  value={formData.location}
                  onChange={handleInputChange}
                  label="Filming City"
                  name="location"
                />
                <p className="text-sm  text-red-500  p-2 inline-block ">
                  {errors.location && errors.location}
                </p>
              </div>

              <div className="flex justify-between items-center mb-10">
                <p className="textAudition">Audition/Meeting Dates</p>
                <div>
                  <button className="add" onClick={handleClickOpen}>
                    <p className="text-blue-600 text-xl border-2 border-blue-600 rounded-lg px-3 py-1  ">
                      +Add
                    </p>{" "}
                  </button>
                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle className="text-md">SELECT DATE</DialogTitle>
                    <DialogContent className=" sm:w-[370px] md:w-[400px]">
                      <div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer
                            components={[
                              "DatePicker",
                              "MobileDatePicker",
                              "DesktopDatePicker",
                              "StaticDatePicker",
                            ]}
                          >
                            <DemoItem label="SELECT DATE">
                              <MobileDatePicker
                                defaultValue={dayjs("2022-04-17")}
                              />
                            </DemoItem>
                          </DemoContainer>
                          <button className="text-3xl hover:bg-blue-50 duration-200 rounded-full p-2">
                            <BiSolidPencil />
                            {""}
                          </button>
                        </LocalizationProvider>
                      </div>
                    </DialogContent>
                    <DialogActions>
                      <button
                        onClick={handleDateSubmit}
                        className="border-blue-600 rounded-lg text-xl  text-blue-600 border-2 hover:bg-blue-50 duration-200 hover:!border-blue-500 h-10 w-24 font-semibold"
                      >
                        Submit
                      </button>
                    </DialogActions>
                  </Dialog>
                </div>
              </div>

              <div className="flex items-center gap-5 !w-[500px] ">
                {formData.auditionDates?.map((item, index) => (
                  <div key={index}>
                    <Chip
                      label={item.split("T").shift()}
                      onDelete={() => handleDelete(item)}
                    />
                  </div>
                ))}
              </div>

              <div className="w-full mb-5">
                <p className="text-lg mb-5" style={{ lineHeight: 3.1 }}>
                  Filming Availability
                </p>
                <div>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                      components={["DateRangePicker", "DateRangePicker"]}
                    >
                      <DemoItem label="" component="DateRangePicker">
                        <DateRangePicker
                          defaultValue={[
                            dayjs("2022-04-17"),
                            dayjs("2022-04-21"),
                          ]}
                        />
                      </DemoItem>
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button className="save" href={"/creator"}>
                  Save For Later
                </button>
                <> ︎ ︎ ︎</>
                {isLoading &&
                formData.description &&
                formData.location !== "" ? (
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
    </>
  );
};

export default StepThreeRoles;
