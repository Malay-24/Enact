import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const CarouselTop = ({ slides }) => {
  return (
    <Carousel infiniteLoop useKeyboardArrows autoPlay showStatus={false} interval={5000} showIndicators={false}>
      {slides.map((slide,index) => {
        return <Image key={index} src={slide.image} boxSize='500px'  />;
      })}
    </Carousel>
  );
};

export default CarouselTop;


