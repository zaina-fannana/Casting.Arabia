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

  const Opportunities = OpportunitiesData;

  return (
    <div id="Opportunities" className="OpportunitiesSection">
      <div className="OpportunitiesSection">
        <div className="OppTitle0">
          <h2 className="OppTitle">Opportunities</h2>
        </div>
        <Swiper
          modules={[Virtual, Navigation, Pagination]}
          onSwiper={setSwiperRef}
          spaceBetween={16}
          navigation={true}
          pagination={{ clickable: true }}
          slidesPerView={4}
          virtual
        >
          {Opportunities.map((opportunity) => (
            <SwiperSlide key={opportunity.id} virtualIndex={opportunity.id}>
              <Card sx={{ maxWidth: 345, boxShadow: "none" }}>
                {" "}
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
                  <Typography variant="body2" color="text.secondary" dir="ltr">
                    {opportunity.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <div style={{ flex: 1 }}></div>
                  <Button
                    size="small"
                    style={{ background: "#e5fff2", color: "#30b06f" }}
                  >
                    Paid
                  </Button>
                  <>︎ ︎ ︎</>
                  <Button size="small">One Role</Button>
                </CardActions>
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
        <> ︎ ︎ ︎ ︎ ︎ ︎</>
      </div>
    </div>
  );
}
