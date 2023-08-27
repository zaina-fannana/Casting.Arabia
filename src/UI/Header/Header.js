import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logo from "../../assets/images/logo.imag.webp";
import useAuth from "../../hooks/useAuth";
import LoginPage from "../../pages/LoginPage/LoginPage";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import PostingOpportunity from "../../pages/PostingOpportunity/PostingOpportunity";
import CreateAccount from "../../pages/CreateAccount/CreateAccount";

const pages = ["مركز التعلم", "الأخبار", "الفرص"];
const settings = ["Logout"];

function Header() {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [loginPageOpen, setLoginPageOpen] = useState(false);
  const [PostingOpportunityOpen, setPostingOpportunityOpen] = useState(false);
  const [CreateAccountOpen, setCreateAccountOpen] = useState(false);

  const openLoginPage = () => {
    setLoginPageOpen(true);
  };

  const closeLoginPage = () => {
    setLoginPageOpen(false);
  };

  const openPostingOpportunity = () => {
    setPostingOpportunityOpen(true);
  };

  const closePostingOpportunity = () => {
    setPostingOpportunityOpen(false);
  };

  const openCreateAccount = () => {
    setCreateAccountOpen(true);
  };

  const closeCreateAccount = () => {
    setCreateAccountOpen(false);
  };
  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: { xs: "space-between" },
        }}
      >
        <div className="flex items-center" style={{ marginTop: 14 }}>
          <Button
            onClick={openCreateAccount}
            sx={{
              borderRadius: 2,
              color: "#fff",
              fontSize: 18,
              fontWeight: 400,
              background: "#6371E0 !important",
              fontFamily: "Segoe UI",
              boxShadow: "#b5bdefcc 0px 4px 12px",
            }}
          >
            انشاء حساب جديد
          </Button>{" "}
          {"   "}
          <Button
            onClick={openPostingOpportunity}
            sx={{
              color: "#6371E0",
              fontSize: 18,
              fontWeight: 400,
              fontFamily: "Segoe UI",
            }}
          >
            نشر فرصة
          </Button>{" "}
          <Button
            onClick={openLoginPage}
            sx={{
              color: "#6371E0",
              fontSize: 18,
              fontWeight: 400,
              textTransform: "unset",
              fontFamily: "Segoe UI",
            }}
          >
            تسجيل دخول
          </Button>
          <Button
            sx={{
              color: "#6371E0",
              fontSize: 18,
              fontWeight: 400,
              textTransform: "unset",
              fontFamily: "Segoe UI",
            }}
          >
            English{" "}
          </Button>
        </div>

        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: { xs: "space-between", md: "start" },
          }}
        >
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => navigate(`#${page.replace(" ", "-")}`)}
                sx={{
                  my: 2,
                  color: "#6371E0",
                  display: "block",
                  fontSize: 18,
                  fontWeight: 400,
                  textTransform: "unset",
                  fontFamily: "Segoe UI",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Link to="/castingarabia" style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              noWrap
              component="button"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
                cursor: "pointer",
                background: "#fff",
                borderColor: "#fff",
              }}
            >
              <img
                src={logo}
                alt="logo"
                className="h-[40px] w-[130px] object-cover"
              />
            </Typography>
          </Link>
        </Toolbar>
      </Container>
      <LoginPage open={loginPageOpen} onClose={closeLoginPage} />
      <Dialog
        open={PostingOpportunityOpen}
        onClose={closePostingOpportunity}
        fullWidth
        maxWidth="md"
      >
        {" "}
        <PostingOpportunity onClose={closePostingOpportunity} />
      </Dialog>

      <Dialog
        open={CreateAccountOpen}
        onClose={closeCreateAccount}
        fullWidth
        maxWidth="md"
      >
        {" "}
        <CreateAccount onClose={closeCreateAccount} />
      </Dialog>
    </AppBar>
  );
}

export default Header;
