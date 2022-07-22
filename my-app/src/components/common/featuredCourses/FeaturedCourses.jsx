import "./featuredCourses.scss";
import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from "../../../hooks/useFetch";




const FeaturedCourses = ({cat}) => {

  const { data, loading, error } = useFetch(
    `/course/${cat}`
  );
console.log(cat)

  return (
    
    <div className="flexWrap">
      {data.map((item) => ( 
        <div className="card">
          <Link to={"/course/" + item._id} style={{ color: "inherit", textDecoration: "none" }}>
              {/* <img
                src={item.img}
                alt=""
                 className="pListImg"
              /> */}
               <img src={item.img} alt="Avatar" />
          </Link>
       
        <div className="container">
          <h4><b>{item.name}</b></h4>
          <p>${item.price}</p>
        </div>
      </div>
    ))}
      
    </div>




    // <div className="flexWrap">
    //   {data.map((item) => ( 
    //     <div className="fpItem" key={item._id}>
    //       <Link to={"/course/" + item._id} style={{ color: "inherit", textDecoration: "none" }}>
    //           <img
    //             src={item.img}
    //             alt=""
    //             className="pListImg"
    //           />
    //        </Link>
    //     <span className="fpName">{item.name}</span>
    //     <span className="fpCity">{item.category}</span>
    //     <span className="fpPrice">Starting from ${item.price}</span>
    //     <div className="fpRating">
    //       <button>8.9</button>
    //       <span>{item.level}</span>
    //     </div>
    //   </div>
    // ))}
      
    // </div>
  )
}



export default FeaturedCourses