import React, { useRef, useState } from "react";
import { Virtual, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LearningCenterData from "../../../mock/LearningCenterData";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);

  const LearningCenter = LearningCenterData;

  return (
    <>
      <div id="Learning-Center" className="LearningSection">
        <div className="LearningSection">
          <h2 className="LearningTitle">مركز التعلم</h2>
          <Swiper
            modules={[Virtual, Navigation]}
            onSwiper={setSwiperRef}
            spaceBetween={0}
            navigation={true}
            slidesPerView={3}
            virtual
          >
            {LearningCenter.map((LearningCenter) => (
              <SwiperSlide
                key={LearningCenter.id}
                virtualIndex={LearningCenter.id}
              >
                <div className="slide-wrapper">
                  <div className="Laerning-container">
                    <Card>
                      <CardMedia
                        component="img"
                        alt="Learning Center Image"
                        image={LearningCenter.image}
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          {LearningCenter.description}
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
