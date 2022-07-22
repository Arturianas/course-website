import React from 'react'
import CourseList from '../../../components/common/courseList/CourseList'
import FeaturedCourses from '../../../components/common/featuredCourses/FeaturedCourses'
import Intro from '../../../components/common/intro/Intro'
import Navbar from '../../../components/common/navbar/Navbar'
import NewNavbar from '../../../components/common/newNavbar/NewNavbar'
import Header from '../../../components/visitor/header/Header'
import MailList from '../../../components/visitor/mailList/MailList'
import './visitorHomePage.scss'

const VisitorHomePage = () => {
  return (
    <>
    {/* <Navbar/> */}
    <NewNavbar/>
    {/* <Header/> */}
    <Intro/>
       <div className="homeContainerCenter">
        {/* <Header/> */}
    {/* <Featured/> */}
    <h2>You are Visitor, welcome to Marketplace!</h2>
    <h1 className="homeTitle">Categories </h1>
    <CourseList id="categoriesList"/>
    <h1 className="homeTitle">Courses</h1>
    {/* <FeaturedCourses cat=""/> */}
    <FeaturedCourses cat=""/>
    {/* {!user && <MailList/>} */}
    <MailList/>
  </div>
    </>
   
  )
}

export default VisitorHomePage