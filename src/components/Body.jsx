import React from "react";
import Slider from "react-slick";
import { Image } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Box,Text,Button } from "@chakra-ui/react";
import styles from "./body.module.css"
import { IconName } from "react-icons/bs";
import axios from "axios"
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BsArrowRight
      className={className}
      style={{ ...style,
        display: "block",
        color: "grey",
        height: "5.5rem",
        width: "2.5rem",
        right:"0",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"

        // marginRight:"-25px"
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BsArrowLeft
      className={className}
      style={{
        ...style,
        display: "block",
        color: "grey",
        height: "5.5rem",
        width: "2.5rem",
        zIndex:"5",
        left:"0",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
       

      }}
      onClick={onClick}
    />
  );
}



const Body = () => {
    const [data, setData] = React.useState([])
    
    const fetchData = () => {
        return axios.get(`https://mocki.io/v1/a41f3039-4c21-42bb-a886-d9a342a02ae9`)
      }

      React.useEffect(() => {
        fetchData().then((res) => {
          setData(res.data)
        }).catch((err) => console.log(err))
   
      
    
      }, [])
    

  const settings = {
    infinite: true,
    speed: 500,
    dots:false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 816,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (<>
    <div className={styles.container2}>
    <span className={styles.headingbody}>Latest Movies</span>
   
        <div className={styles.innerContainer}>
          
      <Slider {...settings}>
        <div  className={styles.card3}>
          <div className={styles.cardimage}>
          <Image src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/1529/571529-v" />
          </div>
        </div>

        <div  className={styles.card3}>
          <div className={styles.cardimage}>
          <Image src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/1529/571529-v" />
          </div>
        </div>

        <div  className={styles.card3}>
          <div className={styles.cardimage}>
          <Image src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/1529/571529-v" />
          </div>
        </div>

        <div  className={styles.card3}>
          <div className={styles.cardimage}>
          <Image src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/1529/571529-v" />
          </div>
        </div>

        <div  className={styles.card3}>
          <div className={styles.cardimage}>
          <Image src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/1529/571529-v" />
          </div>
        </div>

        <div  className={styles.card3}>
          <div className={styles.cardimage}>
          <Image src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/1529/571529-v" />
          </div>
        </div>
        
        <div  className={styles.card3}>
          <div className={styles.cardimage}>
          <Image src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/1529/571529-v" />
          </div>
        </div>

        <div  className={styles.card3}>
          <div className={styles.cardimage}>
          <Image src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/1529/571529-v" />
          </div>
        </div>
         
      </Slider>
      </div>
    </div>
   
    </>);
}

export default Body