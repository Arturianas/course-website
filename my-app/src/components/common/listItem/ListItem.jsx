import "./listItem.scss";
// import {
//   PlayArrow,
//   Add,
//   ThumbUpAltOutlined,
//   ThumbDownOutlined,
// } from "@material-ui/icons";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';


import { Link } from 'react-router-dom'
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

export default function ListItem({course}) {
  // const [isHovered, setIsHovered] = useState(false);
  // const [movie, setMovie] = useState({});

  // useEffect(() => {
  //   const getMovie = async () => {
  //     try {
  //       const res = await axios.get("/course" + item, {
  //         headers: {
  //           token:
  //           "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
  //         },
  //       });
  //       setMovie(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getMovie();
  // }, [item]);

  return (
   
      <div
        className="listItem"
    
      >
        <Link to={"/course/" + course._id} style={{ color: "inherit", textDecoration: "none" }}>
              {/* <img
                src={item.img}
                alt=""
                 className="pListImg"
              /> */}
               <img src={course.img} alt="Avatar" />
          </Link>
       
        <div className="container">
          <h4><b>{course.name}</b></h4>
          <p>${course.price}</p>
        </div>



        {/* <div className="hiddenListItem">
          <video src={course.promotionVideo}/>
        </div> */}
      </div>

     

  );
}