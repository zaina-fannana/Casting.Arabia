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
          <h2 className="NewsTitle">الأخبار</h2>
          <Swiper
            modules={[Virtual, Navigation]}
            onSwiper={setSwiperRef}
            spaceBetween={0}
            navigation={true}
            slidesPerView={3}
            virtual
          >
            {News.map((News) => (
              <SwiperSlide key={News.id} virtualIndex={News.id}>
                <div className="slide-wrapper">
                  <div className="News-container">
                    <Card>
                      <CardMedia
                        component="img"
                        alt="News Image"
                        image={News.image}
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          {News.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
