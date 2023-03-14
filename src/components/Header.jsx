import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
export default function Header() {
    const [pageName, setPageName] = useState("Sign in");
    const location = useLocation();
    const navigate = useNavigate();
    function pathMatchRoute(route){

        if(route === location.pathname){
            return true;
        }
    }

    const auth = getAuth();
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setPageName("Profile")
            }else{
                setPageName("Sign in")
            }
        })

    },[auth])

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
        <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
            <div>
                <img 
                src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" 
                alt="logo" 
                className="h-5 cursor-pointer"
                onClick={()=>navigate("/")}
                />
            </div>
            <div>
                <ul className="flex space-x-10">
                    <li className={` cursor-pointer py-3 text-semibold
                     text-gray-400 border-b-[3px] border-b-transparent 
                     ${pathMatchRoute("/") && "text-black !border-b-red-500 "}`}
                     onClick={()=>navigate("/")}
                     >Home</li>
                    <li className={` cursor-pointer py-3 text-semibold
                     text-gray-400 border-b-[3px] border-b-transparent 
                     ${pathMatchRoute("/offer") && "text-black !border-b-red-500"}`}
                     onClick={()=>navigate("/offer")}
                     >Offer</li>
                    <li className={` cursor-pointer py-3 text-semibold
                     text-gray-400 border-b-[3px] border-b-transparent 
                     ${(pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) && "text-black !border-b-red-500"}`}
                     onClick={()=>navigate("/profile")}
                     >
                        {pageName}
                     </li>

                </ul>
            </div>
        </header>
    </div>
  )
}
