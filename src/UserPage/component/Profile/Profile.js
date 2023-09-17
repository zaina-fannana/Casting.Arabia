import React from "react";
import ProfileImage from "../ProfileImage/ProfileImage";
import UserInfoForm from "../UserInfoForm/UserInfoForm";
import BasicInfoForm from "../BasicInfoForm/BasicInfoForm";
import { Grid, Typography } from "@mui/material";
import "./style.css";

const Profile = (props) => {
  const calculateAge = () => {
    const birthYear = new Date(props.profileInfo).getFullYear();
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  };
  return (
    <div
      className="flex md:flex-row flex-col my-14 gap-x-20 lg:gap-x-36"
      style={{ direction: "ltr" }}
    >
      <div className="mb-1">
        <ProfileImage />
        <p className="text-3xl font-semibold">
          {" "}
          <> ︎ ︎ ︎</> <UserInfoForm />
        </p>
      </div>

      <div style={{marginTop:-200 ,marginLeft:50}}>
        <div className="grid grid-cols-3 gap-10">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">First Name</Typography>
              <Typography
                variant="body1"
                className="text-xl text-blue-600 !w-full"
              ></Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">Last Name</Typography>
              <Typography
                variant="body1"
                className="border-l-2 border-blue-200 pl-2 text-xl text-blue-600"
              ></Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">Company Name</Typography>
              <Typography
                variant="body1"
                className="border-l-2 border-blue-200 pl-2 text-xl text-blue-600"
              ></Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Phone</Typography>
              <Typography
                variant="body1"
                className="text-xl text-blue-600"
              ></Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Email</Typography>
              <Typography
                variant="body1"
                className="text-xl text-blue-600"
              ></Typography>
            </Grid>
          </Grid>
        </div>

        <div className="flex items-center gap-5 my-10">
          <p className="text-3xl font-semibold">
            {" "}
            Basic Info
            <> ︎ ︎ ︎</>
            <BasicInfoForm />
          </p>
          <div className="grid grid-cols-3 gap-10">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" className="text-xl text-blue-600">
                  Location
                </Typography>
                <Typography variant="body1" className="text-xl"></Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" className="text-xl text-blue-600">
                  Age
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" className="text-xl text-blue-600">
                  Gender
                </Typography>
                <Typography variant="body1" className="text-xl"></Typography>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
