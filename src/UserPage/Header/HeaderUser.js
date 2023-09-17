import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import logo from "../../assets/images/logo.imag.webp";
import useAuth from "../../hooks/useAuth";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import "./Header.css";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Opportunities from "../../pages/HomePage/components/Opportunities";
import News from "../../pages/HomePage/components/News";
import LearningCenter from "../../pages/HomePage/components/LearningCenter";
import Review from "../creator/Review/Review";
import Chats from "../creator/Chats/Chats";
import Community from "../creator/Community/Community";
import AboutUs from "../creator/AboutUs/AboutUs";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import Profile from "../component/Profile/Profile";
import OpportunitiesPage from "../creator/OpportunitiesPage/OpportunitiesPage";
const navigationItems = [
  {
    href: "/creator/review",
    icon: <ListAltIcon style={{ color: "#97accc" }} />,
    text: "Review",
  },
  {
    href: "/chats",
    icon: <ChatBubbleOutlineIcon style={{ color: "#97accc" }} />,
    text: "Chats",
  },
  {
    href: "/community",
    icon: <PeopleOutlinedIcon style={{ color: "#97accc" }} />,
    text: "Community",
  },
  {
    href: "/about-us",
    icon: <ErrorOutlineOutlinedIcon style={{ color: "#97accc" }} />,
    text: "About Us",
  },
];

function HeaderUser() {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [tooltipText, setTooltipText] = useState("");
  const [activeIcon, setActiveIcon] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const handleMouseEnter = (text) => {
    setTooltipText(text);
  };

  const handleMouseLeave = () => {
    setTooltipText("");
  };

  const handleIconClick = (text) => {
    if (activeIcon === text) {
      setActiveIcon(null);
    } else {
      setActiveIcon(text);
    }
  };

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleProfileMenuItemClick = () => {
    setIsProfileMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: { xs: "space-between" },
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="icon-container" style={{ direction: "initial" }}>
              {navigationItems.map((item, index) => (
                <div
                  key={index}
                  className="hover-icon-container"
                  onMouseEnter={() => handleMouseEnter(item.text)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleIconClick(item.text)}
                >
                  {item.icon}
                  {tooltipText && (
                    <div className="tooltip">
                      <p>{tooltipText}</p>
                    </div>
                  )}
                </div>
              ))}
              <Button
                sx={{
                  color: "#6371E0",
                  fontSize: 18,
                  fontWeight: 600,
                  textTransform: "unset",
                  fontFamily: "Segoe UI",
                }}
                onMouseEnter={() => handleMouseEnter("Language")}
                onMouseLeave={handleMouseLeave}
              >
                العربية
              </Button>
              <div
                onClick={handleMenuClick}
                style={{ cursor: "pointer", display: "inline-block" }}
              >
                <AccountCircleRoundedIcon style={{ color: "#97accc" }} />
              </div>
              <Menu
                anchorEl={menuAnchorEl}
                open={Boolean(menuAnchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleProfileMenuItemClick}>
                  Profile <PermIdentityRoundedIcon />{" "}
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  Logout <LogoutRoundedIcon />{" "}
                </MenuItem>
              </Menu>
            </div>

            <Link to="/HomePage">
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  mr: 122,
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
      </AppBar>

      {activeIcon === "Review" && <Review />}
      {activeIcon === "Chats" && <Chats />}
      {activeIcon === "Community" && <Community />}
      {activeIcon === "About Us" && <AboutUs />}

      {isProfileMenuOpen && <Profile />}

      {!activeIcon && !isProfileMenuOpen && (
        <>
          {/* <Opportunities /> */}
          <News />
          <LearningCenter />
        </>
      )}
    </>
  );
}

export default HeaderUser;
