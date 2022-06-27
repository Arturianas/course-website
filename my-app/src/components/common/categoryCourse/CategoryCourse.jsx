import './categroyCourse.scss'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Link } from 'react-router-dom'

const CategoryCourse = ({course}) => {

    const likes =  course.likes?.length || 0


  return (
   
        <>
            <Link to={"/course/" + course._id} style={{ color: "inherit", textDecoration: "none" }}>
            <img src={course.img} alt="Category course"/> 
           </Link>

            <div className="nameLevel">
                <span>{course.name}</span>
                <span>{course.level}</span>
            </div> 
            
            <div className="likePrice">
                <span className='likes'><ThumbUpIcon className='icon'/>{likes}</span>
                <span>${course.price}</span>      
            </div>

        </>
   
  )
}

export default CategoryCourse