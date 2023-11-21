import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {

    const navigate=useNavigate();

    const [formData,setFormData]=useState({
        firstname:"",lastname:"",email:"",
        password:"",confirmPassword:""
    })

    const [showPassword,setShowPassword]=useState(false);
    const [showConfPassword,setShowConfPassword]=useState(false);

    function changeHandler(event){
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password != formData.confirmPassword){
            toast.error("Password do not match");
            return ;
        }

        setIsLoggedIn(true);
        toast.success("Account Created");

        const accountData={
            ...formData
        };

        // console.log("printing form data ");
        // console.log(formData);

        navigate("/dashboard");
    }

  return (
    <div>
        {/* Student-instructor tab */}

        <div>
            <button>Student</button>
            <button>Instructor</button>
        </div>

        <form onSubmit={submitHandler}>
            {/* first name and lastname */}
            <div>
                <label>
                    <p>First Name <sup>*</sup></p>
                    <input required type='text' name='firstname' 
                    onChange={changeHandler} placeholder='Enter First Name'
                    value={formData.firstname} />
                </label>

                <label>
                    <p>Last Name <sup>*</sup></p>
                    <input required type='text' name='lastname' 
                    onChange={changeHandler} placeholder='Enter Last Name'
                    value={formData.lastname} />
                </label>

            </div>

            {/* email address */}
            <label>
                <p>Email Address <sup>*</sup></p>
                <input required type='email' name='email' 
                onChange={changeHandler} placeholder='Enter Email Address'
                value={formData.email} />
            </label>

            {/* create and confirm password */}

            <div>
                <label>
                    <p>Create Password <sup>*</sup></p>
                    <input required name='password' 
                    type={showPassword ? ("text"):("password")}
                    onChange={changeHandler} placeholder='Enter Password'
                    value={formData.password} />
                </label>

                <span onClick={()=> setShowPassword((prev)=> !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                </span>

                <label>
                    <p>Confirm Password <sup>*</sup></p>
                    <input required name='confirmPassword' 
                    type={showConfPassword ? ("text"):("password")}
                    onChange={changeHandler} placeholder='Confirm Password'
                    value={formData.confirmPassword} />

                <span onClick={()=> setShowConfPassword((prev)=> !prev)}>
                    {showConfPassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                </span>
                </label>

            </div>

            <button>Create Account</button>
            
        </form>
    </div>
  )
}

export default SignupForm