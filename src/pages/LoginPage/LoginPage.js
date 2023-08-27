import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import HomePage from "../HomePage/HomePage";
import App from "../HomePage/components/LearningCenter";
import CreateAccount from "../CreateAccount/CreateAccount";
// const LoginPage = ({ open, onClose }) => {
//   const [loginSuccessful, setLoginSuccessful] = useState(false);
//   const username = useFormInput("user");
//   const password = useFormInput("password");
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleLogin = () => {
//     if (username.value === "user" && password.value === "password") {
//       setLoginSuccessful(true);
//     } else {
//       setError("Invalid username or password");
//     }
//   };
const LoginPage = ({ open, onClose }) => {
  const [loginSuccessful, setLoginSuccessful] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    // Simulate checking credentials in local storage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
      setLoginSuccessful(true);
    } else {
      setError("Invalid username or password");
    }
  };
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      className="LoganSection"
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="xs"
    >
      <Button
        onClick={handleClose}
        color="inherit"
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          cursor: "pointer",
        }}
      >
        X
      </Button>
      <DialogTitle
        className="Login"
        style={{
          textAlign: "center",
          color: "#262E3B",
          fontSize: "1rem",
          fontFamily: "Segoe UI",
          fontWeight: 400,
        }}
      >
        تسجيل دخول
      </DialogTitle>

      {loginSuccessful ? (
        <HomePage onClose={handleClose} />
      ) : (
        <DialogContent style={{ textAlign: "center" }}>
          <div className="UserName">
            <br />
            <input
              type="text"
              {...username}
              autoComplete="new-password"
              placeholder="اسم المستخدم"
              style={{
                color: "currentColor",
                textAlign: "end",
                letterSpacing: "inherit",
                font: "inherit",
                padding: "4 0 5",
                padding: 10,
                width: 355,
                borderRadius: 7,
              }}
            />
          </div>
          <div className="Password" style={{ marginTop: 10 }}>
            <br />
            <input
              type="password"
              {...password}
              autoComplete="new-password"
              placeholder="كلمة المرور"
              style={{
                color: "currentColor",
                textAlign: "end",
                letterSpacing: "inherit",
                font: "inherit",
                padding: "4 0 5",
                padding: 10,
                width: 355,
                borderRadius: 7,
              }}
            />
          </div>
          {error && (
            <>
              <small style={{ color: "red" }}>{error}</small>
              <br />
            </>
          )}
          <br />
          <Button
            sx={{
              my: 2,
              color: "rgb(99, 113, 224)",
              display: "block",
              fontSize: 15,
              fontWeight: 500,
              textTransform: "unset",
              fontFamily: "Segoe UI",
              marginLeft: "auto",
            }}
          >
            نسيت كلمة المرور
          </Button>
          <p className="text-lg">
            تسجيل دخولك يعني انك موافق{" "}
            <span className="cursor-pointer font-[400] text-[#0000EE] underline">
              شروط الخدمة
            </span>{" "}
            و{" "}
            <span className="cursor-pointer font-[400] text-[#0000EE] underline">
              سياسة الخصوصية
            </span>
          </p>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              my: 2,
              width: "100%",
              color: "white",
              backgroundColor: "#6371e0",
              fontSize: 15,
              fontWeight: 500,
              textTransform: "unset",
              ":hover": {
                backgroundColor: "rgb(69, 79, 156)",
                fontFamily: "Segoe UI",
              },
            }}
            onClick={handleLogin}
          >
            تسجيل الدخول
          </Button>
        </DialogContent>
      )}
    </Dialog>
  );
};

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};

export default LoginPage;
