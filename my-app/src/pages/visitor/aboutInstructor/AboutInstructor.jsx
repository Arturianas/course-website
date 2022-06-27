import './aboutInstructor.scss'
import useFetch from "../../../hooks/useFetch";
import { Link } from 'react-router-dom'

const AboutInstructor = ({instructorId, course}) => {

    const { data, loading, error } = useFetch(
        `/users/one/${instructorId}`
      );
  return (
    <div className="aboutInstructor">
            {/* <div className="instructorDetails"> */}
                <div className="messageandLike">
                    <div className="aboutinstructor">
                        <h2>About the Instructor</h2>
                        <p>Hello, my name is {data.username}. I created {course.name} course to share my knowladge of {course.category} with you!</p>
                    </div>
                </div>
                <div className="instructorPhoto">
                    <Link to={"/instructor/" + course.instructor} style={{ color: "inherit", textDecoration: "none" }}>
                        <img src='https://i.ibb.co/MBtjqXQ/no-avatar.gif' alt='Instructor Avatar' className='instructorImg'/>
                    </Link>
                    
                </div>
            {/* </div> */}
        </div>
  )
}

export default AboutInstructor