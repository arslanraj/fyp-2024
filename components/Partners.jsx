import React from "react";
import img1 from "../assets/img/bus/10.png";
import img2 from "../assets/img/bus/13.png";
import img3 from "../assets/img/bus/4.png";
import img4 from "../assets/img/bus/5.png";
import img5 from "../assets/img/bus/6.png";
import img6 from "../assets/img/bus/7.png";
import img7 from "../assets/img/bus/8.png";

export default function Partners() {
  return (
    <div className="px-20">
      <div className="text-slate-800 md:text-5xl text-3xl mt-20 mb-10">
        Our Partners
      </div>
      <div className="partners w-full flex justify-around items-center">
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img4} />
        </div>
        <div>
          <img src={img5} />
        </div>
        <div>
          <img src={img6} />
        </div>
        <div>
          <img src={img7} />
        </div>        
      </div>
    </div>
  );
}
