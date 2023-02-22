import React, { useState } from 'react'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {db} from '../firebase';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function SignUp() {
  const [showPassword,setShowPassword] = useState(true);

  const [formData,setFormData] = useState({
    name:"",
    email: "",
    passWord: "",
  });
  
  const {name, email,passWord} = formData;
  const navigate = useNavigate();

  function onChange(e){
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }
 
  async function onSubmit(e){
    e.preventDefault();

    try {
      const auth = getAuth(); 
      const userCredential = await createUserWithEmailAndPassword(auth,email,passWord);
      const user = userCredential.user;
      const formDataCopy = {...formData}
      delete formDataCopy.passWord;

      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db,"users",user.uid), formDataCopy);
      console.log(user);
      
      updateProfile(auth.currentUser, {
         displayName: name
      });
      toast.success("Sign up successfully");
      navigate("/");
    }
    catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      toast.error("Something went wrong with registration")
    }
  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign Up</h1>
      <div className="flex justify-center flex-wrap items-center py-12 px-6 max-w-6xl mx-auto">
        <div className="md:w-[50%] lg:w=[50%] mb-12 md:mb-6">
          <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
           alt='key'
           className='w-full rounded-2xl'
           />
        </div>
        <div className="w-full md:w-[50%] lg:w-[40%] lg:ml-20"> 
          <form  onSubmit={onSubmit}>
          <input 
              type="text" 
              name="" 
              id="name"
              value={name} 
              onChange={onChange}
              placeholder ="Full name"
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white
               border-gray-300 rounded transition ease-in-out
               mb-6" 
            />
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
            <div className="flex justify-between whitespace-nowrap text-sm 
              sm:text-lg
            ">
              <p className='mb-6'> Don't have a account? 
                <Link 
                  to="/sign-in"
                  className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1'
                >
                  Sign in
                  </Link>
              </p>
              <p>
              <Link to="/forgot-password"
                className='text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out'
              >Forgot password?</Link>
              </p>
            </div>
            <button className='w-full bg-blue-600 text-white px-7 py-3 font-medium uppercase rounded
              shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg
           active:bg-blue-800 
          ' 
          type="submit">Sign Up</button>
          <div className='flex items-center my-4 
            before:border-t before:flex-1 before:border-gray-300 
            after:border-t after:flex-1 after:border-gray-300 
            '>
            <p className='text-center font-semibold mx-4'>OR</p>
          </div>
          <OAuth></OAuth>
          </form>         
        </div>

      </div>
    </section>
  )
}
