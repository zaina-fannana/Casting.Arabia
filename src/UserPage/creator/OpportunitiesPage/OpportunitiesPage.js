import React, { useState } from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./OpportunitiesPage.css";
const DropDownList = ({ options, label, name, value, onChange }) => {
  return (
    <select name={name} value={value} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

const OpportunitiesPage = () => {
  const [selectedData, setSelectedData] = useState({
    Opportunities: "",
    Roles: "",
    Status: "",
  });
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [connect, setConnect] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedData({ ...selectedData, [name]: value });
  };

  const handleChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
    console.log(swiper.activeIndex);
  };

  const handleConnect = () => {
    setConnect(false);
  };
  const handleReject = () => {
    setConnect(true);
  };

  return (
    <div className="py-10 bg-blue-200">
      <div className="container">
        <div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6  ">
            <div className="sm:w-56 w-full">
              <DropDownList
                options={[
                  "All",
                  "Connected",
                  "Archived",
                  "Pending",
                  "Scheduled",
                  "Hired",
                  "Rejected",
                ]}
                value={selectedData.Status}
                onChange={handleInputChange}
                label="Status"
                name="Status"
              />
            </div>
          </div>
          <div className="py-20 flex">
            {isBeginning ? (
              <button
                title="'"
                className="prev hidden md:block text-[#ccc3c3] cursor-not-allowed "
              >
                <AiOutlineArrowLeft className=" text-6xl " />
              </button>
            ) : (
              <button title="s" className="next hidden md:block text-blue-700 ">
                <AiOutlineArrowLeft className="  text-6xl bg-blue-50 rounded-full p-1 hover:bg-blue-100 duration-200 " />
              </button>
            )}

            <Swiper
              onSlideChange={handleChange}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              navigation={{
                nextEl: `.next`,
                prevEl: `.prev`,
                enabled: true,
              }}
              modules={[EffectCoverflow, Navigation]}
              scrollbar={{ draggable: true }}
            ></Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesPage;
