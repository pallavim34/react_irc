import React from "react";
import img2 from "../sliderImg/img1off.avif";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination, Navigation  , Autoplay} from "swiper";

function OfferBanner() {

    const imgarr = [
        "https://images-static.nykaa.com/uploads/1b5be40f-5094-4ba6-a463-4a1ab8c8ee18.jpg?tr=w-400,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/146bc8cd-e5ee-4305-bd11-1b9f2c395ad6.jpg?tr=w-400,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/f9cfaae2-c9b4-49ac-a41e-e87d4ad46d62.jpg?tr=w-400,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/a5fb58d0-4b5a-4f7b-8ce1-6a6f3b04e542.jpg?tr=w-400,cm-pad_resize"

    ]
  return (
    <>
      <div className="afterProductGrid">
        <img src={img2} alt="Not found" />
      </div>

      <div className="trendingSection">
       
        <div className="trendingSlider">
          
        </div>
      </div>
    </>
  );
}

export default OfferBanner;
