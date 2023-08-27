import React from "react";
import logo from "../../assets/images/logo.imag.webp";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="MuiBox-root mui-rtl-19midj6">
      <nav
        className="MuiBox-root mui-rtl-wah1k1"
        style={{ display: "flex", flexDirection: "row-reverse" }}
      >
        <a className="." href="/">
          <span className="spanImgLogo">
            <img src={logo} alt="" decoding="async" data-nimg="fixed" />
          </span>
        </a>
        <div className="MuiBox-root mui-rtl-181edu8">
          <a className="" href="/contact-us" style={{ textDecoration: "auto" }}>
            <p className="MuiTypography-root MuiTypography-body2 mui-rtl-1c0kuqw">
              اتصل بنا
            </p>
          </a>
          <> ︎ ︎ ︎ ︎ ︎ ︎ ︎ ︎</>
          <a
            className=""
            target="popup"
            rel="noopener noreferrer"
            href="/about-us"
            style={{ textDecoration: "auto" }}
          >
            <p className="MuiTypography-root MuiTypography-body2 mui-rtl-1c0kuqw">
              من نحن
            </p>
          </a>
          <> ︎ ︎ ︎ ︎ ︎ ︎ ︎ ︎</>
          <a
            className=""
            target="popup"
            rel="noopener noreferrer"
            href="/terms-of-service"
            style={{ textDecoration: "auto" }}
          >
            <p className="MuiTypography-root MuiTypography-body2 mui-rtl-1c0kuqw">
              شروط الخدمة
            </p>
          </a>
          <> ︎ ︎ ︎ ︎ ︎ ︎ ︎ ︎</>
          <a
            className=""
            target="popup"
            rel="noopener noreferrer"
            href="/privacy-policy"
            style={{ textDecoration: "auto" }}
          >
            <p className="MuiTypography-root MuiTypography-body2 mui-rtl-1c0kuqw">
              سياسة الخصوصية
            </p>
          </a>
          <> ︎ ︎ ︎ ︎ ︎ ︎ ︎ ︎</>
          <a
            className=""
            target="popup"
            rel="noopener noreferrer"
            href="/frequently-asked-questions"
            style={{ textDecoration: "auto" }}
          >
            <p className="MuiTypography-root MuiTypography-body2 mui-rtl-1c0kuqw">
              أسئلة مكررة
            </p>
          </a>
        </div>
      </nav>
    </footer>
  );
};
export default Footer;
