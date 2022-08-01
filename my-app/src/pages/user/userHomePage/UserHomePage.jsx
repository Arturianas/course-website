import React from 'react'
import Navbar from '../../../components/common/navbar/Navbar'
import Header from '../../../components/visitor/header/Header'
import CourseList from '../../../components/common/courseList/CourseList'
import './userHomePage.scss'
import FeaturedCourses from '../../../components/common/featuredCourses/FeaturedCourses'
import { useSelector} from 'react-redux'
import MainNavbar from '../../../components/common/mainNavbar/MainNavbar'

const UserHomePage = () => {

  const { user } = useSelector((state) => state.auth)


  return (
    <>
    {/* <Navbar/> */}
    <MainNavbar/>
    <Header/>
       <div className="homeContainerCenter">
        
    {/* <Featured/> */}
    <h2>Hello {user.details.username}, welcome to Marketplace!</h2>
    <h1 className="homeTitle">Categories </h1>
    <CourseList/>
    <h1 className="homeTitle">Courses</h1>
    {/* <FeaturedCourses cat=""/> */}
    <FeaturedCourses cat=""/>
    {/* {!user && <MailList/>} */}
    {/* <MailList/> */}
  </div>
    </>
  )
}

export default UserHomePage