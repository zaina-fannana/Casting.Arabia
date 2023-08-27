import React, { useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import OpportunitiesData from "../../../mock/OpportunitiesData";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(8);
  const prependNumber = useRef(1);

  const opportunities = OpportunitiesData;

  return (
    <>
      <div id="Opportunities" className="OpportunitiesSection">
        <div className="OpportunitiesSection">
          <h2 className="OppTitle" style={{ marginTop: 20 }}>
            الفرص
          </h2>
          <Swiper
            modules={[Virtual, Navigation]}
            onSwiper={setSwiperRef}
            spaceBetween={0}
            navigation={true}
            slidesPerView={3}
            virtual
          >
            {opportunities.map((opportunity) => (
              <SwiperSlide key={opportunity.id} virtualIndex={opportunity.id}>
                <div className="slide-wrapper">
                  <div className="opportunities-container">
                    <Card>
                      <CardMedia
                        component="img"
                        src={opportunity.image}
                        alt="Opportunity Image"
                        image={opportunity.image}
                        className="opportunity-image"
                      />

                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {opportunity.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {opportunity.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          style={{ background: "#e5fff2", color: "#30b06f" }}
                        >
                          مدفوع
                        </Button>
                        <Button size="small">دور واحد</Button>
                      </CardActions>
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
