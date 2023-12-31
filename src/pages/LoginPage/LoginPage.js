import React, { useState } from "react";
import { Button, Typography, TextField } from "@mui/material";
import axios from "axios";
import { loginFunc } from "../../services/auth";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginPage = ({ open, onClose, setIsAuthenticated }) => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [AccessToken, setAccessToken] = useState("");
  // search about react query

  const handleAuthentication = async (request) => {
    try {
      const response = await loginFunc(request);
      if (response.status === 201) {
        const data = await response.data;
        return data.accessToken;
      } else {
        throw new Error("Failed to authenticate");
      }
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      const request = {
        email: values.email,
        password: values.password,
      };

      try {
        const userToken = await handleAuthentication(request);
        localStorage.setItem("accessToken", userToken);
        setAccessToken(userToken);
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
          setAccessToken(userToken);
          // fetch user data
        }
        setError("");
        setIsAuthenticated(true);

        onClose();
        setEmail("");
        setPassword("");
        console.log("Login successful");
      } catch (error) {
        setError(error.message);
      }
    },
  });

  return (
    <div
      className="LoginPage"
      style={{
        background: "#f5f5f5",
        display: open ? "flex" : "none",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <div
        style={{
          direction: "ltr",
          width: "90%",
          boxShadow: "rgba(0, 0, 0, 0.18) 0px 4px 18px",
          borderRadius: "16px",
          backgroundColor: "white",
          padding: "32px",
        }}
      >
        <Typography
          variant="h6"
          style={{
            fontSize: "25px",
            fontWeight: 400,
            color: "#262e3b",
          }}
        >
          Login
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <TextField
            type="email"
            name="email"
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            dir="ltr"
            aria-label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && (
            <Typography variant="body2" color="error" dir="ltr">
              {formik.errors.email}
            </Typography>
          )}

          <TextField
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            dir="ltr"
            aria-label="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password && (
            <Typography variant="body2" color="error" dir="ltr">
              {formik.errors.password}
            </Typography>
          )}

          {/* {error && (
          <Typography variant="body2" color="error" dir="ltr">
            {error}
          </Typography>
        )} */}

          <Button
            sx={{
              my: 2,
              fontSize: 15,
              fontWeight: 500,
              textTransform: "unset",
              marginRight: "auto",
              display: "block",
            }}
          >
            Forget password
          </Button>

          <p className="text-lg" style={{direction:"rtl"}}>
            Your login means that you agree to{" "}
            <span
              className="cursor-pointer font-[400] text-[#0000EE] underline"
              style={{ color: "#0000EE", textDecoration: "underline" }}
            >
              Terms Of Service
            </span>{" "}
            and{" "}
            <span
              className="cursor-pointer font-[400] text-[#0000EE] underline"
              style={{ color: "#0000EE", textDecoration: "underline" }}
            >
              Privacy Policy
            </span>
          </p>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: "10px" }}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
