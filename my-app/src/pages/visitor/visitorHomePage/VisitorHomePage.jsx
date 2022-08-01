import React from 'react'
import CourseList from '../../../components/common/courseList/CourseList'
import FeaturedCourses from '../../../components/common/featuredCourses/FeaturedCourses'
import Footer from '../../../components/common/footer/Footer'
import Intro from '../../../components/common/intro/Intro'
import List from '../../../components/common/list/List'
import MainNavbar from '../../../components/common/mainNavbar/MainNavbar'
import Navbar from '../../../components/common/navbar/Navbar'
import NewNavbar from '../../../components/common/newNavbar/NewNavbar'
import Header from '../../../components/visitor/header/Header'
import MailList from '../../../components/visitor/mailList/MailList'
import './visitorHomePage.scss'

const VisitorHomePage = () => {
  return (
    <>
    {/* <Navbar/> */}
    {/* <NewNavbar/> */}
    {/* <Header/> */}
    <MainNavbar/>
    <Intro/>
       <div className="homeContainerCenter">
        {/* <Header/> */}
    {/* <Featured/> */}
    <h2 style={{marginLeft: "20px"}}>Top Courses</h2>
    <List/>
    <h2  style={{marginLeft: "20px"}}>Categories </h2>
    <CourseList id="categoriesList"/>
    {/* <h1 className="homeTitle">Courses</h1> */}
    {/* <List/> */}
    {/* <FeaturedCourses cat=""/> */}
    {/* <FeaturedCourses cat=""/> */}
    {/* {!user && <MailList/>} */}
    <MailList/>
    {/* <Footer/> */}
  </div>
    </>
   
  )
}

export default VisitorHomePage