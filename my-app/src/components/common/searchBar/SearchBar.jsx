import './searchbar.scss'
// import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';


import axios from "axios";
import React, { useEffect, useState } from "react";
// import useScrollPosition from '../../../hooks/useScrollPosition';

const SearchBar = () => {

    const navigate = useNavigate()
    const [q, setQ] = useState("")

    // const scrollPosition = useScrollPosition()
  

    const [isActive, setIsActive] = useState(false)
    const [courses, setCourses] = useState([]);
    // const query = useLocation().search;
  
    useEffect(() => {
      const fetchVideos = async () => {
        const res = await axios.get(`/course/query/search?q=${q}`);
        setCourses(res.data);
      };
      if (q.length === 1 || q.length > 2) fetchVideos();
      // if (q.length === 0) fetchVideos();
    }, [q]);

// console.log(courses)

// console.log(isActive)





  return (
    <div className='searchComponent'>
      <form className='searchBar'>
        <div className='searchBox'>
            <input className='searchBarInput' onFocus={()=> setIsActive(true)} onBlur={()=>setIsActive(false)} type="text" placeholder="Search course.." autocomplete="off" name="search" onChange={(e) => setQ(e.target.value)}/>
            <button  type="submit" onClick={()=>navigate(`/search?q=${q}`, {state: q})}>
                <SearchIcon className="icon" style={{color: "#A9A9A9"}}/>
            </button>
        </div>   



        {isActive && q.length >= 1 && (
      <ul className="fastSearchResults">
      {courses.map(video=>(
        
        <li onClick={()=>navigate(`/course/${video._id}`)} style={{cursor: "pointer"}}>{video.name}</li>
        
        
        
      ))}
          </ul>
    )}    
      </form>
      

      
    
    
    
    </div>
  )
}

export default SearchBar