import './searchbar.scss'
// import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';

import axios from "axios";
import React, { useEffect, useState } from "react";

const SearchBar = () => {

    const navigate = useNavigate()
    const [q, setQ] = useState("")
  


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







  return (
    <div className='searchComponent'>
      <form className='searchBar'>
        <div className='searchBox'>
            <input className='searchBarInput' type="text" placeholder="Search course.." autocomplete="off" name="search" onChange={(e) => setQ(e.target.value)}/>
            <button  type="submit" onClick={()=>navigate(`/search?q=${q}`)}>
                <SearchIcon className="icon" style={{color: "#A9A9A9"}}/>
            </button>
        </div>   



        {q.length >= 1 && (
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