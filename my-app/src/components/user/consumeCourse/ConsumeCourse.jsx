import React, { useState } from 'react'
import './consumeCourse.scss'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import useFetch from "../../../hooks/useFetch";
import {addLike} from '../../../features/likeCourse/likeCourseSlice'
import {updateLikedCourse} from '../../../features/likeCourse/likeCourseService'
import { useDispatch, useSelector } from 'react-redux';

const ConsumeCourse = ({course}) => {

    const { user } = useSelector((state) => state.auth)
    const { isLiked } = useSelector((state) => state.likeCourse)
    // const [isLiked, setIsLiked] = useState(false);
    const instructorId = course.instructor
    const dispatch = useDispatch()

    const { data, loading, error } = useFetch(
        `/users/one/${instructorId}`
      );
// console.log(instructorId)


const userId = {
    userId: user.details._id
}

const likeHandler = (e) => {
    e.preventDefault();
//    dispatch(addLike())
updateLikedCourse(course._id, userId, dispatch )
// addLike(dispatch)
    // setIsLiked(!isLiked);
  };

  console.log(isLiked)

  return (
    <div className="consumeCourseContainer">
        <video src={course.courseVideo} controls className='consumeCourseVideo' poster={course.img}/>
        <div className="consumeCourseDetails">
            {/* <div className="instructorDetails"> */}
                <div className="messageandLike">
                    <div className="aboutinstructor">
                        <h2>About the Instructor</h2>
                        <p>Hello, my name is {data.username}. I created {course.name} course to share my knowladge of {course.category} with you!</p>
                    </div>
                </div>
                <div className="instructorPhoto">
                    <img src='https://i.ibb.co/MBtjqXQ/no-avatar.gif' alt='Instructor Avatar' className='instructorImg'/>
                </div>
            {/* </div> */}
        </div>
        <div className="aboutTheCourse">
                <div className="messageandLike">
                    <div className="aboutinstructor">
                        <h2>About the Course</h2>
                        <p>{course.desc}</p>
                    </div>
                    <ThumbUpIcon  className={isLiked? "iconLiked" : "icon"}  onClick={likeHandler}/>
                </div>
                <hr className='solid'/>
                    <div className="catLevel">
                        category Level
                    </div>
                

        </div>
        
    </div>
  )
}

export default ConsumeCourse