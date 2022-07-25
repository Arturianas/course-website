import React from 'react'
import CourseList from '../../../components/common/courseList/CourseList'
import FeaturedCourses from '../../../components/common/featuredCourses/FeaturedCourses'
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
    <h2>You are Visitor, welcome to Marketplace!</h2>
    <h1 className="homeTitle">Categories </h1>
    <CourseList id="categoriesList"/>
    <h1 className="homeTitle">Courses</h1>
    <List/>
    {/* <FeaturedCourses cat=""/> */}
    {/* <FeaturedCourses cat=""/> */}
    {/* {!user && <MailList/>} */}
    <MailList/>
  </div>
    </>
   
  )
}

export default VisitorHomePage