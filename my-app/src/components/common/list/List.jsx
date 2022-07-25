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

export default function List() {



  const { data, loading, error } = useFetch(
    `/course`
  );

  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 10 - clickLimit) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="courseCarousele">
      <span className="listTitle">Top Courses</span>

      <div className="wrapperCarousele">
        <ArrowBackIosNewIcon
          className="sliderArrow left"
          
          onClick={() => handleClick("left")}
          // style={{ display: !isMoved && "none" }}
        />

        <div className="carousele" ref={listRef}>
          {data.map(item=> (
            <ListItem key={item._id} course={item}/>
          ))}
         

        </div>

        <ArrowForwardIosIcon
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>

    </div>
  );
}


