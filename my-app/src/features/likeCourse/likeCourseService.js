import axios from 'axios'

import {
    addLike,
  } from "./likeCourseSlice.js";


  


  export const updateLikedCourse = async (courseId, userId, dispatch) => {
    dispatch(addLike());
    try {

      const res = await axios.put(`/course/like/${courseId}`, userId)

    //   dispatch(updateCourseSuccess(res.data))
    } catch (err) {
    //   dispatch(updateCourseFailure())
    }
  }

