import React, { useState } from 'react'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
export default function SignIn() {
  const [showPassword,setShowPassword] = useState(true);

  const [formData,setFormData] = useState({
    email: "",
    passWord: "",
  });

  const {email,passWord} = formData;
  function onChange(e){
    console.log(e.target.value);

    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>
      <div className="flex justify-center flex-wrap items-center py-12 px-6 max-w-6xl mx-auto">
        <div className="md:w-[50%] lg:w=[50%] mb-12 md:mb-6">
          <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
           alt='key'
           className='w-full rounded-2xl'
           />
        </div>
        <div className="w-full md:w-[50%] lg:w-[40%] lg:ml-20"> 
          <form >
            <input 
              type="text" 
              name="" 
              id="email"
              value={email} 
              onChange={onChange}
              placeholder ="Email address"
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white
               border-gray-300 rounded transition ease-in-out
               mb-6" 
            />
            <div className="relative mb-6">
            <input 
              type={showPassword ? "text" : "password"}
              name="" 
              id="passWord"
              value={passWord} 
              onChange={onChange}
              placeholder ="Password"
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white
               border-gray-300 rounded transition ease-in-out" 
            />
             {
               showPassword ? 
               (
                <AiFillEyeInvisible className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={()=>setShowPassword((prevState)=> (!prevState))}
                />
                )
                : 
                (<AiFillEye className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={()=>setShowPassword((prevState)=> (!prevState))}
                />)
             }
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
