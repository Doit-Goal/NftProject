import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={6000}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        width={1000}
      >
        <div>
          <img src={process.env.PUBLIC_URL + "/images/BabyLion.jpg"} />
          <p className="legend">Baby Lion</p>
        </div>

        <div>
          <img src={process.env.PUBLIC_URL + "/images/PassionLion.jpg"} />
          <p className="legend">Passion Lion</p>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + "/images/PerfectLion.jpg"} />
          <p className="legend">Perfect Lion</p>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + "/images/AllLion.jpg"} />
          <p className="legend">강사님이 바라보는 우리 모습</p>
        </div>
      </Carousel>
    );
  }
}

export default DemoCarousel;
