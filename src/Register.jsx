import React, { useContext, useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import { UserContext } from './App';

const Register = () => {
  const [ isLog, setIsLog ] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [user, setUser]= useContext(UserContext);

  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const handleSignUp = ()=>{
           let Email = email.current.value;
           let Password = password.current.value;
           if((email.current.value!=="")&&( password.current.value!=="")){
            axios.post("https://intern-task-api.bravo68web.workers.dev/auth/signup",{email: Email, password: Password})
            .then((res)=>{
                setIsLog(true);
                setUser(Email);
                navigate("/body");
            })
            .catch((err)=>{
              setErrorMessage(err.message);
            });
           }
          
         
}

const handleLogin = ()=>{
       let Email = email.current.value;
       let Password = password.current.value;
       console.log(Email, Password);
       if((email.current.value!=="")&&( password.current.value!=="")){
         axios.post("https://intern-task-api.bravo68web.workers.dev/auth/login",{email: Email, password: Password})
        .then((res)=>{
             navigate("/body");
             setUser(Email);
          })
        .catch((err)=>{
             setErrorMessage(err.message);
       })
       }
}
        
  return (
    <div className="h-[70%] w-full sm:w-6/12  md:w-6/12 lg:w-4/12 bg-white sm:m-auto  md:m-auto lg:m-auto my-[40%] sm:my-[16%]  md:my-[16%] 
          lg:my-[10%] md:shadow md:shadow-orange-500 lg:shadow lg:shadow-orange-500 p-8">
            <h1 className='text-4xl py-4 font-bold'>Register</h1>
          <div>
                   <p className="text-lg">
                       <b className="text-2xl lg:text-3xl py-2">{isLog ? "Log in" : "Sign up"}</b><br />
                       or <span className="text-orange-500 font-bold text-base cursor-pointer"
                                onClick={()=>setIsLog(!isLog)}>
                                { isLog ? "create an account" : "login to your account"}
                          </span>
                   </p>
                   
          </div>
           <span>
                  <input type="text" 
                           id="email" 
                           name="email"
                           required
                           ref={email} 
                           placeholder="Email"
                           className="inline-block outline-none h-10  w-full sm:w-[96%] md:w-[96%] lg:w-[85%] border 
                                    border-zinc-200 shadow-lg shadow-gray-200 rounded-lg my-1 px-2"
                       />
                       <input type="password" 
                           id="password" 
                           name="password" 
                           ref={password}
                           required
                           placeholder="Password"
                           className="inline-block outline-none h-10 w-full  sm:w-[96%] md:w-[96%] lg:w-[85%] border 
                                    border-zinc-200 shadow-lg shadow-gray-200 rounded-lg my-1 px-2"
                       />
                   </span>
                 
                 <p className="text-orange-500 text-center font-bold px-2">{errorMessage ? errorMessage : null}</p>
                 { isLog ? <span className="rounded-lg text-center p-2 block h-10 w-full sm:w-[96%]  md:w-[96%] lg:w-[85%] 
                                 font-semibold bg-orange-500 cursor-pointer text-white my-4 hover:bg-orange-600" 
                                       onClick={handleLogin} >
                                    Login
                                </span>
                          : <span className="rounded-lg text-center p-2 block h-10 w-full sm:w-[96%]  md:w-[96%]  lg:w-[85%] 
                                 font-semibold bg-orange-500 text-white my-4 hover:bg-orange-600 cursor-pointer"  onClick={handleSignUp}>
                                 SignUp </span>
                  }
      </div>
  )
}

export default Register;
