import { useState } from "react"
import Header from "./Header"

const Login = ()=>{
    const [signInForm,setSignInForm] = useState(true)
    const toggleSigninForm = ()=>{
        setSignInForm(!signInForm)
    }
    return(
        <div>
            <Header/>
            <div className="absolute"> 
                <img src ="https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_medium.jpg"/>
            </div>
            <form className=" w-3/12 absolute bg-black p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80" >
                <h1 className="font-bold text-3xl py-4 ">{signInForm ?"Sign In":"Sign Up"}</h1>
                {!signInForm&&<input type ="text" placeholder="Full Name" className="p-2 my-4 w-full bg-gray-700 rounded-lg"/>}
                <input type ="text" placeholder="email" className="p-2 my-4 w-full bg-gray-700 rounded-lg"/>
                <input type ="password" placeholder="password" className="p-2 my-4 w-full bg-gray-700 rounded-lg"/>
                <button className="p-3 my-6 bg-red-700 w-full rounded-lg">{signInForm ?"Sign In":"Sign Up"}</button>
                <p className="my-2" onClick={toggleSigninForm} >{signInForm ?"New to Netflix? Sign Up Now":"Already Registered.Sign In Now...."}</p>
            </form>

        </div>
    )
} 
export default Login