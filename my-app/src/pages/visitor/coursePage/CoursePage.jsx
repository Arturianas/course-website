import React from 'react'
import './coursePage.scss'
import { Link } from 'react-router-dom'
import useFetch from "../../../hooks/useFetch";
import {
  useParams
} from "react-router-dom";
// import InstructorCourses from '../../components/instructorCourses/InstructorCourses.jsx';
import { useDispatch } from 'react-redux';
import Navbar from '../../../components/common/navbar/Navbar';
import { addProduct } from "../../../features/cart/cartSlice";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ConsumeCourse from '../../../components/user/consumeCourse/ConsumeCourse';
import AboutInstructor from '../aboutInstructor/AboutInstructor';
import NewNavbar from '../../../components/common/newNavbar/NewNavbar';
import MainNavbar from '../../../components/common/mainNavbar/MainNavbar';

const CoursePage = () => {

    let { id } = useParams();

    const { data, loading, error } = useFetch(
      `/course/${id}`
    );
    
    const likes =  data.likes?.length || 0
    const dispatch = useDispatch();
  
    const handleClick = () => {
      dispatch(
        addProduct({ ...data })
      );
    };

//  console.log(data.likes.length)

  return (
    <>
    {/* <Navbar/> */}
    {/* <NewNavbar/> */}
    <MainNavbar/>
        <div className='coursePageWrapper'>
    <div className='ImageContainer'>
        {/* <img src={data.img} alt="courseImage"/> */}
        <video src={data.promotionVideo} controls className='coursePageVideo' />
    </div>

    <div className='InfoContainer'>
        <div className='Title'>
            <h1>{data.name}</h1>
        </div>
        <div className='ProductDescription'>
            <h2>Description:</h2>
            <p>{data.desc}</p>
        </div>
       
        <div className="infoContainerBottom">
          <div className='likes'>
            <ThumbUpIcon className='icon'/> 
            <span>{likes}</span>
          </div>
          <div className="addCartAndPrice">
            <div className='Price'>$ {data.price}</div>
            <div className=''>      
                <button className='addCart' onClick={handleClick}>ADD TO CART</button>
            </div>
          </div>
        </div>

    </div>

    {/* <div className="aboutInstructor"> */}
    
            
        
    {/* </div> */}
   
</div>
  <div className="instructorCourseinfo">
    <AboutInstructor instructorId={data.instructor} course={data}/>
  </div>
  
    </>
  )
}

export default CoursePage