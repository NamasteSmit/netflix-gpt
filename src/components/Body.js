import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import {onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch, useSelector} from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice'; 
import appStore from '../utils/appStore';

const Body = () => {
 
  const dispatch = useDispatch();
   


    const appRouter = createBrowserRouter([
        {
         path:"/",
         element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
      ])

    
      useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid,email,name} = user.uid;
               dispatch(addUser({uid:uid,email:email,displayName:name}));
            // ...
          } else {
            // User is signed out
            // ...
            dispatch(removeUser());
          }
        });
      },[])


  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )


}


export default Body