import { createBrowserRouter } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import { RouterProvider } from "react-router-dom"
import { useEffect } from "react"
import { auth } from "../utilis/Firebase"
import { onAuthStateChanged } from "firebase/auth"
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../utilis/userSlice"

const Body = ()=>{
    const dispatch = useDispatch()
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
              const {uid,email,displayname,photoURL} = user;
              dispatch(addUser({uid:uid,email:email,displayname:displayname,photoURL:photoURL}))
              // ...
            } else {
              // User is signed out
              // ...
              dispatch(removeUser())
            }
          });
    },[])
    return(
       <div>
       <RouterProvider router ={appRouter}/>
        </div>
    )
}
 export default Body