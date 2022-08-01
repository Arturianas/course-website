// import {
//     ArrowBackIosOutlined,
//     ArrowForwardIosOutlined,
//   } from "@material-ui/icons";
  import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
  import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
  import { useRef, useState } from "react";
import ListItem from '../listItem/ListItem';
// import ListItem from "../listItem/ListItem";
import "./list.scss";

import useFetch from "../../../hooks/useFetch";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.scss";

// import required modules
import { Pagination, Navigation } from "swiper";





export default function List() {



  const { data, loading, error } = useFetch(
    `/course`
  );

  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 225);

  const carousel = useRef();

  // const handleClick = (direction) => {
  //   setIsMoved(true);

  //   let distance = listRef.current.getBoundingClientRect().x;

  //   if (direction === "left" && slideNumber > 0) {
  //     setSlideNumber(slideNumber - 1);
  //     listRef.current.style.transform = `translateX(${225 + distance}px)`;
  //   }

  //   if (direction === "right" && slideNumber < 10 - clickLimit) {
  //     setSlideNumber(slideNumber + 1);
  //     listRef.current.style.transform = `translateX(${-225 + distance}px)`;
  //   }
  // };



  const incrementCarousel = delta => {
    if (!carousel.current) return;

    const width = carousel.current.offsetWidth;

    // if (count + delta > images.length - 1) {
    //   setCount(0);
    //   carousel.current.scrollTo(0, 0);
    //   return;
    // } else if (count + delta < 0) {
    //   setCount(images.length - 1);
    //   console.log(width, carousel.current.scrollLeft);
    //   carousel.current.scrollTo(width * images.length - 1, 0);
    //   return;
    // }

    carousel.current.scrollTo(
      carousel.current.scrollLeft + width * delta,
      0
    );
    // setCount(c => c + delta);
  };

  return (








    <div className="courseCarousele">
      {/* <span className="listTitle">Top Courses</span> */}

      <div className="wrapperCarousele">
        <ArrowBackIosNewIcon
          className="sliderArrow left"
          onClick={() => incrementCarousel(-1)}
          // onClick={() => handleClick("left")}
          // style={{ display: !isMoved && "none" }}
        />

        <div className="carousele" ref={carousel}>
          {data.map(item=> (
            <ListItem className="carouselListItem" key={item._id} course={item}/>
          ))}
         

        </div>

        <ArrowForwardIosIcon
          className="sliderArrow right"
          // onClick={() => handleClick("right")}
          onClick={()=> incrementCarousel(1)}
        />
      </div>

    </div>
  );
}


