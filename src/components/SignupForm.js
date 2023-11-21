import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";

const SignupForm = () => {

    const [formData,setFormData]=useState({
        firstname:"",lastname:"",email:"",
        password:"",confirmPassword:""
    })

    const [showPassword,setShowPassword]=useState(false);

    function changeHandler(event){
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

  return (
    <div>
        {/* Student-instructor tab */}

        <div>
            <button>Student</button>
            <button>Instructor</button>
        </div>

        <form>
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

                <label>
                    <p>Current Password <sup>*</sup></p>
                    <input required type='text' name='lastname' 
                    onChange={changeHandler} placeholder='Enter Last Name'
                    value={formData.lastname} />
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

            {/* confirm password */}

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
                    type={showPassword ? ("text"):("password")}
                    onChange={changeHandler} placeholder='Confirm Password'
                    value={formData.confirmPassword} />

                <span onClick={()=> setShowPassword((prev)=> !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                </span>
                </label>

            </div>

            <button>Create Account</button>
            
        </form>
    </div>
  )
}

export default SignupForm