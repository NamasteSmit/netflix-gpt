import { useState } from "react";
import Header from "./Header";
const Login = ()=>{

      const [isloggedIn,setIsLoggedIn] = useState(true);
       
      const handleSignInForm = ()=>{
        setIsLoggedIn(!isloggedIn);
      }

    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    return (
        <div>
            <Header/>
            <div className="">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" className=""/>
            </div>

            <div className="bg-black w-[30%] max-h-[100%] absolute top-[18%] left-[35%] flex flex-col p-5 items-start justify-center bg-opacity-80">
            <h1 className="text-white text-2xl font-semibold ml-14">{isloggedIn ? "Sign In" : "Sign Up"}</h1> 
            <form action="" className="w-[100%] h-[100%] m-3flex flex-col  justify-evenly items-start mr-10 mb-36 mt-6" onSubmit={handleSubmit}>
                {
                    !isloggedIn ?  <input className="p-3 px-4 ml-12  bg-[#333333] w-[80%] rounded-md mt-6 text-white outline-none" type="text" placeholder="Name"/> : ""
                }
                <input className="p-3 px-4 ml-12  bg-[#333333] w-[80%] rounded-md mt-6 text-white outline-none" type="text" placeholder="Email or phone number"/>
                <input className="p-3 px-4 ml-12 w-[80%] rounded-md bg-[#333333] mt-6 text-white" type="password" placeholder="Password"/>
                <button className="p-3 px-4 text-white w-[80%] ml-12 bg-[#E50914] text-xl font-semibold rounded-md mt-10"  type="submit">
                    {
                        isloggedIn ? "Sign In" : "Sign Up"
                    }
                </button>
                <div className="flex w-[100%]">
                <input type="checkbox" className="ml-12" checked/><span className="text-white text-xs font-light mt-1">Remember me</span>
                <h3 className="text-white ml-36 text-sm mt-2">Need help?</h3>
                </div>
               <span className="text-gray-600 ml-10 px-2">{!isloggedIn?"Already a user : " : "New to Netflix?"}</span><button className="text-white mt-10" onClick={handleSignInForm}>{!isloggedIn?"Sign in now" : "Sign up now"}</button>
            </form>
            </div>
           
        </div>
    )
}

export default Login;

