import React from 'react'
import './adminNewCategoryPage.scss'






import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../../../firebase";

import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
// import { createCategory, reset } from '../../features/adminCategory/categorySlice.js'
import {addCategory} from '../../../../features/categories/categoriesService'
import { useState, useEffect } from 'react'

// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

import axios from "axios";
import AdminSidebar from "../../../../components/admin/adminSidebar/AdminSidebar";
// import AdminNavbar from "../../components/adminNavbar/AdminNavbar";
// import NewAdminSidebar from "../../components/newAdminSidebar/NewAdminSidebar";





import { useSelector} from 'react-redux'






const AdminNewCategoryPage = () => {




  // const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const navigate = useNavigate()
    const dispatch = useDispatch()



    const { user } = useSelector((state) => state.auth)
  
  // const dispatch = useDispatch()

  useEffect(() => {
    // if (isError) {
    //   toast.error(message)
    // }

    if (!user || !user.auth.isAdmin) {
      navigate('/')
    }

    // getCategories(dispatch);
    // dispatch(reset())
  }, [user, navigate])

  // const handleChange = (e) => {
  //   setInputs((prev) => {
  //     return { ...prev, [e.target.name]: e.target.value };
  //   });
  // };
  // const handleCat = (e) => {
  //   setCat(e.target.value.split(","));
  // };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const category = {  img: downloadURL, category: cat };
          // addProduct(product, dispatch);
          console.log(category)
          // dispatch(createCategory(category))
          addCategory(category, dispatch)
          navigate('/admin/categories')
        });
      }
    );
  };






  return (
    <div className="new">
    {/* <AdminSidebar/> */}
    <div className="newContainer">
      {/* <AdminNavbar/> */}
      <div className="newProduct">
    <h1 className="addProductTitle">New Category</h1>
    <form className="addProductForm">
      <div className="addProductItem">
        <label>Image</label>
        <input
          type="file"
          id="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>
      <div className="addProductItem">
        <label>New Category</label>
        <input
          name="category"
          type="text"
          placeholder="Category Name"
          onChange={e => setCat(e.target.value)}
        />
      </div>
      {/* <div className="addProductItem">
        <label>Description</label>
        <input
          name="desc"
          type="text"
          placeholder="description..."
          // onChange={handleChange}
        />
      </div>
      <div className="addProductItem">
        <label>Price</label>
        <input
          name="price"
          type="number"
          placeholder="100"
          // onChange={handleChange}
        />
      </div>
      <div className="addProductItem">
        <label>Categories</label>
        <input type="text" placeholder="jeans,skirts"  />
      </div>
      <div className="addProductItem">
        <label>Stock</label>
        <select name="inStock" >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div> */}
      <button onClick={handleClick}  className="addProductButton">
        Create
      </button>
    </form>
  </div>
    </div>
  </div>
  )
}

export default AdminNewCategoryPage