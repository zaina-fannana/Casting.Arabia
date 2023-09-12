import React from "react";
import Layout from "../../components/Layout";
import LearningCenter from "./components/LearningCenter";
import News from "./components/News";
import Opportunities from "./components/Opportunities";
import "./HomePage.css";
const HomePage = () => {
  return (
    <Layout>
      <div className="TalentClass">
        <div
          className="MuiBox-root mui-rtl-6rehta"
          style={{ marginLeft: "inherit" }}
        >
          <p className="MuiTypography-root MuiTypography-body1 mui-rtl-1ulheli">
            ? Are you a Talent{" "}
          </p>
          <p className="MuiTypography-root MuiTypography-body1 mui-rtl-1u6oyw1">
            Do you love to act, sing, dance, model, write, or other jobs in
            entertainment? If so, you’ve come to the right place. Watch this
            video and sign up to apply for opportunities
          </p>
          <button
            className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButtonBase-root mui-rtl-9h8kyx"
            style={{ textAlign: "right", marginRight: 762, marginTop: 30 }}
            type="button"
          >
            <p className="MuiTypography-root MuiTypography-body1 mui-rtl-1dyuov1">
              Join as TALENT{" "}
            </p>
            <span className="MuiTouchRipple-root mui-rtl-w0pj6f"></span>
          </button>
        </div>
        <video className="videoTalent" controls autoPlay loop>
          <source
            src="https://casting-arabia-uploads.s3.us-east-2.amazonaws.com/videos/talent.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>

      <div className="HiredAProjectClass">
        {" "}
        <video className="HiredProject" controls autoPlay loop>
          <source
            src="https://casting-arabia-uploads.s3.us-east-2.amazonaws.com/videos/seeker.mp4"
            type="video/mp4"
          ></source>
        </video>
        <div className="MuiBox-root mui-rtl-r973jf">
          <p className="MuiTypography-root MuiTypography-body1 mui-rtl-1ulheli">
            ? Are you hiring for a project{" "}
          </p>
          <p className="MuiTypography-root MuiTypography-body1 mui-rtl-1u6oyw1">
            Are you looking for talented actors, singers, dancers, writers, and
            camera crew for your next project? Casting Arabia can help you.
            Watch this video and click below to register and post your next
            opportunity
          </p>
          <button
            className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButtonBase-root mui-rtl-9h8kyx"
            style={{ textAlign: "right", marginRight: 782, marginTop: 30 }} // Align button to the right and add margin to the right
            type="button"
          >
            <p className="MuiTypography-root MuiTypography-body1 mui-rtl-1dyuov1">
              Join as SEEKER{" "}
            </p>
            <span className="MuiTouchRipple-root mui-rtl-w0pj6f"></span>
          </button>
        </div>
      </div>

      <Opportunities />
      <News />
      <LearningCenter />
    </Layout>
  );
};

export default HomePage;
