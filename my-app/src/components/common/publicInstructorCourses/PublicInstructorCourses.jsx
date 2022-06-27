import './publicInstructorcourses.scss'
import useFetch from "../../../hooks/useFetch";

const PublicInstructorCourses = ({instructorId}) => {




    const { data, loading, error } = useFetch(
        `/course/user/${instructorId}`
      );


console.log(data)
  return (
    <div>
        {data.map((item) => (
            <p>{item.name}</p>
        ))}
    </div>
  )
}

export default PublicInstructorCourses