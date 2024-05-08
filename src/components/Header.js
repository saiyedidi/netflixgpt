import { signOut } from "firebase/auth";
import { auth } from "../utilis/Firebase";
import { useNavigate } from "react-router-dom";

const Header = ()=>{
    const navigate = useNavigate()
    const handleSignOut = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")

          }).catch((error) => {
            // An error happened.
          });
    }
    return(
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-40 w-full flex justify-between">
            <img className="w-40 "
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt = "logo"/>
            <div className="flex p-3">
                <img className="w-10 h-10 "  alt="usericon" src="https://occ-0-2040-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"/>
                <button className="font-bold text-white" onClick={handleSignOut}>(Sign Out)</button>
            </div>
        </div>
    )
}
export default Header