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
        <div className="MuiBox-root mui-rtl-6rehta">
          <p className="MuiTypography-root MuiTypography-body1 mui-rtl-1ulheli">
            هل لديك موهبة؟
          </p>
          <p className="MuiTypography-root MuiTypography-body1 mui-rtl-1u6oyw1">
            هل تحب التمثيل، أو الغناء، أو الرقص، أو عرض الأزياء، أو الكتابة، أو
            أي من الوظائف الأخرى الخاصة بالمجال الأداء الفني؟ إذا كان الأمر
            كذلك، فقد وصلت إلى موقع صُمم خصيصاً لك. شاهد هذا الفيديو ثم انضم
            كموهبة لتفتح لك آفاق من فرص العمل.
          </p>
          <button
            className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButtonBase-root  mui-rtl-9h8kyx"
            // tabindex="0"
            type="button"
          >
            <p className="MuiTypography-root MuiTypography-body1 mui-rtl-1dyuov1">
              انضم كموهبة
            </p>
            <span className="MuiTouchRipple-root mui-rtl-w0pj6f"></span>
          </button>
        </div>
        <video className="videoTalent">
          <source
            src="https://casting-arabia-uploads.s3.us-east-2.amazonaws.com/videos/talent.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>

      <div className="HiredAProjectClass">
        <video className="HiredProject">
          <source
            src="https://casting-arabia-uploads.s3.us-east-2.amazonaws.com/videos/seeker.mp4"
            type="video/mp4"
          ></source>
        </video>
        <div className="MuiBox-root mui-rtl-r973jf">
          <p className="MuiTypography-root MuiTypography-body1 mui-rtl-1ulheli">
            هل توظف لمشروع؟
          </p>
          <p className="MuiTypography-root MuiTypography-body1 mui-rtl-1u6oyw1">
            هل تبحث عن ممثلين، أو مغنيين، أو راقصين، أو كتاب، أو طاقم تصوير، أو
            موهوبين آخرين لمشروعك القادم؟ أنشأت كاستينج أريبيا لمساعدتك. شاهد
            هذا الفيديو وانضم كصانع فرصة لتنشر فرصتك التالية.
          </p>
          <button
            className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButtonBase-root  mui-rtl-9h8kyx"
            // tabindex="0"
            style={{ marginLeft: 728 }}
            type="button"
          >
            <p className="MuiTypography-root MuiTypography-body1 mui-rtl-1dyuov1">
              انضم كصانع فرصة
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
