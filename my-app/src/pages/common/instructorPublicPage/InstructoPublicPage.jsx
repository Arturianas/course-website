import './instructorPublicPage.scss'
import { useParams } from 'react-router-dom'
import Navbar from '../../../components/common/navbar/Navbar';
import PublicInstructorCourses from '../../../components/common/publicInstructorCourses/PublicInstructorCourses';
import useFetch from "../../../hooks/useFetch";

const InstructoPublicPage = () => {

    const {id} = useParams()

    console.log(id)

    const { data, loading, error } = useFetch(
        `/users/one/${id}`
      );
      

  return (
    <div>

        <Navbar/>
        <div className="center">
        <div className="publicInstructor">
            {data.username}
        </div>

        <div className="pubInstructorCourses">
            <PublicInstructorCourses instructorId={data._id}/>
        </div>
        </div>

    </div>
  )
}

export default InstructoPublicPage