import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import axios from "axios";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

const StepFourRoles = () => {
  const [errors, setErrors] = useState({});
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    isCompleted: false,
    isPaid: false,
    mediaRequired: { characteristics: false, skills: false },
    paidRate: "2",
    paidType: "hourly",
  });

  useEffect(
    () => {
      (async () => {
        if ("") {
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
    }
    //   [router.query.id, router.query.id2]
  );

  useEffect(() => {
    if (data) {
      setFormData({
        isCompleted: data.isCompleted,
        isPaid: data.isPaid,
        mediaRequired: {
          characteristics: data.mediaRequired.characteristics,
          skills: data.mediaRequired.skills,
        },
        paidRate: data.paidRate,
        paidType: data.paidType,
      });
    }
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "isPaid") {
      value === "Paid"
        ? setFormData({ ...formData, isPaid: true, isCompleted: true })
        : setFormData({ ...formData, isPaid: false, isCompleted: true });
    }
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
        console.log(error);
      }
    })();
  };

  return (
    <>
      <div className="mt-12 mb-[133px] h-[400px] ">
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
                    defaultValue={30}
                    inputProps={{
                      name: "Compensation & Contract Details",
                    }}
                  >
                    <option> ︎</option>
                    <option>Paid</option>
                    <option>Unpaid</option>
                  </NativeSelect>
                </FormControl>
              </Box>
            </div>

            <p className="text-sm  text-red-500  p-2 inline-block ">
              {errors.isPaid && errors.isPaid}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="save" href={"/creator"}>
              Save For Later
            </button>
            <> ︎ ︎ ︎</>

            {isLoading &&
            (formData.isPaid === false ||
              (formData.paidType && formData.paidRate) !== "") ? (
              <div className="border-2 border-blue-700 bg-blue-700 rounded-md text-lg text-white px-4 py-1 font-semibold hover:bg-blue-600 duration-200">
                {/* <Loading buttonContent="Save" /> */}
              </div>
            ) : (
              <button
                onClick={handleSubmit}
                className="border-2 border-blue-700 bg-blue-700 rounded-md text-lg text-white px-4 py-1 font-semibold hover:bg-blue-600 duration-200"
              >
                {formData.isPaid === false ||
                (formData.paidType && formData.paidRate) !== "" ? (
                  <a href={`/creator/opportunities/edit/step-two`}>Save</a>
                ) : (
                  "Save"
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default StepFourRoles;
