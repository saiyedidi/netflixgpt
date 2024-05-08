import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidData } from "../utilis/Validate"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utilis/Firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [signInForm, setSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const navigate = useNavigate();
    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)
    const handleButtonClick = () => {
        console.log(email.current.value)
        console.log(password.current.value)
        console.log(name.current?.value)
        const message = checkValidData(email.current?.value, password.current?.value, name.current?.value)
        console.log(message)
        setErrorMessage(message)
        if (message) return;
        if (!signInForm) {
            //sign up form
            createUserWithEmailAndPassword(auth, email.current?.value, password.current?.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user, 'login');
                    navigate("/browse")
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                    // ..
                });
        }
        else {
            //sign in form
            signInWithEmailAndPassword(auth, email.current?.value, password.current?.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    navigate("/browse")
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+" -"+errorMessage)
                });
        }
    }
    const toggleSigninForm = () => {
        setSignInForm(!signInForm)
    }
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_medium.jpg" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className=" w-3/12 absolute bg-black p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80" >
                <h1 className="font-bold text-3xl py-4 ">{signInForm ? "Sign In" : "Sign Up"}</h1>

                {!signInForm && <input type="text" placeholder="Full Name" ref={name} className="p-2 my-4 w-full bg-gray-700 rounded-lg" />}

                <input
                    type="text" placeholder="email"
                    ref={email}
                    className="p-2 my-4 w-full bg-gray-700 rounded-lg"
                />
                <input
                    type="password" placeholder="password"
                    ref={password}
                    className="p-2 my-4 w-full bg-gray-700 rounded-lg"
                />
                <p className="text-red-500 font-bold py-1 text-lg">{errorMessage}</p>

                <button
                    className="p-3 my-6 bg-red-700 w-full rounded-lg"
                    onClick={handleButtonClick}>
                    {signInForm ? "Sign In" : "Sign Up"}
                </button>

                <p
                    className="my-2"
                    onClick={toggleSigninForm} >
                    {signInForm ? "New to Netflix? Sign Up Now" : "Already Registered.Sign In Now...."}
                </p>
            </form>

        </div>
    )
}
export default Login