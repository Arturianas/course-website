import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FilteredCourse from "../../../components/common/filteredCourse/FilteredCourse";
import MainNavbar from '../../../components/common/mainNavbar/MainNavbar';
import "./search.scss"
// import styled from "styled-components";
// import Card from "../components/Card";

// const Container = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 10px;
// `;

const Search = () => {
  const [videos, setVideos] = useState([]);
  const query = useLocation().search;

  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const [level, setLevel] = useState("All");
  const [category, setCategory] = useState("All");

  // const [amount, setAmount] = useState(videos.length)
  const location = useLocation();
  const search = location.state;
  // const [search, setSearch] = useState(location.state)
  const amount = videos.length
  console.log(category)

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/course/query/search${query}&min=${min || 0 }&max=${max || 999}${level === "All" ? "" : `&level=${level}`}${category === "All" ? "" : `&category=${category}`}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [query, min, max, category, level]);


  // const resetFilter = () => {
  //   setMin(undefined);
  //   setMax(undefined);
  //   setLevel("All");
  //   setCategory("All")
  // }

  return (
    <>
    <MainNavbar/>
    <h1 style={{marginLeft: "20px"}}>Courses</h1>
      <div className="searchContainer">
        <div className="searchWrapper">
          <div className="searchFilter">
            <h1 className="sTitle">{amount} results for "{search}"</h1>
            <div className="sItem">
            <label>Level</label>
                    <select
                     name="level" 
                     className='select' 
                     onChange={(e) => setLevel(e.target.value)}
                    //  onChange={handleChange}
                     >
                      <option value="All">ALL</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
            </div>

            <div className="sItem">
            <label>Category</label>
                    <select
                     name="level" 
                     className='courseInput' 
                     onChange={(e) => setCategory(e.target.value)}
                    //  onChange={handleChange}
                     >
                      <option value="All" >ALL</option>
                      <option value="jolita">jolita</option>
                      <option value="Marketing">Marketing</option>
                      <option value="lemons">lemons</option>
                      <option value="header">header</option>
                    </select>
            </div>

            <div className="sItem">
            <label>Min Price</label>
                    <input
                      name="price"
                      className='courseInput' 
                      type="number"
                      min={0}
                      placeholder="100"
                      onChange={(e) => setMin(e.target.value)}
                      // onChange={handleChange}
                    />
            </div>

            <div className="sItem">
            <label>Max Price</label>
                    <input
                    min={0}
                      name="price"
                      className='courseInput' 
                      type="number"
                      placeholder="100"
                      onChange={(e) => setMax(e.target.value)}
                      // onChange={handleChange}
                    />
            </div>

            {/* <button >Reset filter</button> */}

          </div>

          <div className="searchResults">
          {videos.map(video=>(
            <FilteredCourse key={video._id} course={video}/>
          ))}
          </div>
        </div>
      </div>
    </>


  // <div>
  //     {/* <Navbar /> */}
  //     {/* <Header type="list" /> */}
  //     <MainNavbar/>
  //     <div className="listContainer">
  //       <div className="listWrapper">
  //         <div className="listSearch">
  //           <h1 className="lsTitle">Search: {query}</h1>
  //           <div className="lsItem">
  //             <label>Destination</label>
  //             {/* <input placeholder={destination} type="text" /> */}
  //             <input placeholder="destination" type="text" />
  //           </div>
  //           {/* <div className="lsItem">
  //             <label>Check-in Date</label>
  //             <span onClick={() => setOpenDate(!openDate)}>{`${format(
  //               date[0].startDate,
  //               "MM/dd/yyyy"
  //             )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
  //             {openDate && (
  //               <DateRange
  //                 onChange={(item) => setDate([item.selection])}
  //                 minDate={new Date()}
  //                 ranges={date}
  //               />
  //             )}
  //           </div> */}
  //           <div className="lsItem">
  //             <label>Options</label>
  //             <div className="lsOptions">
  //               <div className="lsOptionItem">
  //                 <span className="lsOptionText">
  //                   Min price <small>per night</small>
  //                 </span>
  //                 <input type="number" className="lsOptionInput" />
  //               </div>
  //               <div className="lsOptionItem">
  //                 <span className="lsOptionText">
  //                   Max price <small>per night</small>
  //                 </span>
  //                 <input type="number" className="lsOptionInput" />
  //               </div>
  //               <div className="lsOptionItem">
  //                 <span className="lsOptionText">Adult</span>
  //                 <input
  //                   type="number"
  //                   min={1}
  //                   className="lsOptionInput"
  //                   // placeholder={options.adult}
  //                 />
  //               </div>
  //               <div className="lsOptionItem">
  //                 <span className="lsOptionText">Children</span>
  //                 <input
  //                   type="number"
  //                   min={0}
  //                   className="lsOptionInput"
  //                   // placeholder={options.children}
  //                 />
  //               </div>
  //               <div className="lsOptionItem">
  //                 <span className="lsOptionText">Room</span>
  //                 <input
  //                   type="number"
  //                   min={1}
  //                   className="lsOptionInput"
  //                   // placeholder={options.room}
  //                 />
  //               </div>
  //             </div>
  //           </div>
  //           <button>Search</button>
  //         </div>
  //         <div className="listResult">
  //           <FilteredCourse />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  )
};

export default Search;