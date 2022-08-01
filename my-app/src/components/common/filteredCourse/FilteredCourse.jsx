import "./filteredCourse.scss"

const FilteredCourse = ({course}) => {
  return (
    <>
      <div className='searchItem'>
      <img src={course.img}/>
      <div className="siDesc">
          <h1>{course.name}</h1>
          <h2>{course.level}</h2>
          <h3>{course.category}</h3>
      </div>
      <div className="siDetails">
        ${course.price}
      </div>
    </div>
    <hr className="solid"/>

    </>
  )
}

export default FilteredCourse