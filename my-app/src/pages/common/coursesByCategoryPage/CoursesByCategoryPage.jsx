import './coursesByCategorypage.scss'
import useFetch from "../../../hooks/useFetch";
import {useParams } from 'react-router-dom';
import Navbar from '../../../components/common/navbar/Navbar'
import CourseList from '../../../components/common/courseList/CourseList'
import FeaturedCourses from '../../../components/common/featuredCourses/FeaturedCourses';
import CategoryCourse from '../../../components/common/categoryCourse/CategoryCourse';

const CoursesByCategoryPage = () => {

     // Get the category param from the URL.
  let { category } = useParams();

  console.log(category)

    const { data, loading, error } = useFetch(
        `/course/category/${category}`
      );


  return (
    <div>
         <Navbar/>
         <div className="category">
            <h1>{category} category</h1>
         </div>
        
        <div className="coursesCat">
            <div className="center">
            <div className='categoryCourse'>
            {data.map((item) => (
                    <CategoryCourse course={item}/>
                    
                ))}

            </div>
                
            </div>
        </div>
    </div>
  )
}

export default CoursesByCategoryPage