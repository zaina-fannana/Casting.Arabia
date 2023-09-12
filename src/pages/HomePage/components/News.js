import React, { useRef, useState } from "react";
import { Virtual, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import NewsData from "../../../mock/NewsData";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);

  const News = NewsData;

  return (
    <>
      <div id="News" className="NewsSection">
        <div className="NewsSection">
          <h2 className="NewsTitle">News</h2>
          <Swiper
            modules={[Virtual, Navigation]}
            onSwiper={setSwiperRef}
            spaceBetween={16}
            navigation={true}
            pagination={{ clickable: true }}
            slidesPerView={4}
            virtual
            // style={{marginTop:-39}}
          >
            {News.map((newsItem) => (
              <SwiperSlide key={newsItem.id} virtualIndex={newsItem.id}>
                <Card sx={{ maxWidth: 345, boxShadow: "none" }}>
                  {" "}
                  <CardMedia
                    component="img"
                    alt="News Image"
                    height="140"
                    image={newsItem.image}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      dir="ltr"
                    >
                      {newsItem.description}
                    </Typography>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="MuiBox-root mui-rtl-nb25bq">
              <button
                className="MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeLarge MuiButton-outlinedSizeLarge MuiButton-disableElevation MuiButtonBase-root mui-rtl-dwgqy6"
                tabIndex="0"
                type="button"
              >
                Show More{" "}
                <span className="MuiTouchRipple-root mui-rtl-w0pj6f"></span>
              </button>
            </div>
          </div>
          <> ︎ ︎ ︎ </>
        </div>
      </div>
    </>
  );
}
