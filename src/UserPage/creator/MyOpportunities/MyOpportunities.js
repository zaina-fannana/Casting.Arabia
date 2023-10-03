import React, { useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import OpportunitiesData from "../../../mock/OpportunitiesData";
import "swiper/css";
import "swiper/css/navigation";
import EditStepOnePage from "./ID/edit/step-one/EditStepOnePage";
import CardMedia from "@mui/material/CardMedia";
import "./MyOpportunities.css";
export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [isNewButtonClicked, setIsNewButtonClicked] = useState(false);

  const MyOpportunities = OpportunitiesData;

  const handleNewButtonClick = () => {
    const apiUrl = "https://api.castingarabia.com/opportunities";
    const requestData = {};

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (response.status === 201) {
          console.log("API call successful");
        } else {
          console.error("API call failed");
        }
      })
      .catch((error) => {
        console.error("Error occurred during API call:", error);
      });

    window.open("/creator/opportunities/1831/edit/step-one", "_self");
    setIsNewButtonClicked(true);
  };
  return (
    <div id="Opportunities" className="OpportunitiesSection">
      {window.location.pathname ===
      "/creator/opportunities/1831/edit/step-one" ? (
        <EditStepOnePage />
      ) : (
        <>
          <div className="OppTitle0">
            <h2 className="OppTitle" style={{ height: "10px" }}>
              My Opportunities
            </h2>
            <button className="new" onClick={handleNewButtonClick}>
              <p>New</p>
            </button>
          </div>

          {isNewButtonClicked ? null : (
            <Swiper
              modules={[Virtual, Navigation, Pagination]}
              onSwiper={setSwiperRef}
              spaceBetween={16}
              navigation={true}
              pagination={{ clickable: true }}
              slidesPerView={4}
              virtual
            >
              {MyOpportunities.map((opportunity) => (
                <SwiperSlide key={opportunity.id} virtualIndex={opportunity.id}>
                  <Card sx={{ maxWidth: 345, boxShadow: "none" }}>
                    <CardMedia
                      component="img"
                      alt="Opportunity Image"
                      height="140"
                      image={opportunity.image}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        dir="ltr"
                      >
                        {opportunity.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {isNewButtonClicked ? null : (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="MuiBox-root mui-rtl-nb25bq">
                <button
                  className="MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeLarge MuiButton-outlinedSizeLarge MuiButton-disableElevation MuiButtonBase-root mui-rtl-dwgqy6"
                  tabIndex="0"
                  type="button"
                >
                  Show More
                </button>
              </div>
            </div>
          )}

          <> ︎ ︎ ︎ ︎ ︎ ︎</>
        </>
      )}
    </div>
  );
}
