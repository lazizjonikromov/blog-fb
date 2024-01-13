import React from 'react'
import Input from '../../../utils/Input'
import { MdKeyboardArrowLeft } from "react-icons/md";

const SignUp = ({setSignReq}) => {
  return (
    <div className='size mt-[6rem] text-center'>
        <h2 className='text-3xl'>Sign up with email</h2>
        <p className='w-full sm:w-[25rem] mx-auto py-[3rem]'>Enter the email address associated with your account, and we’ll send a magic link to your inbox.</p>
        <form className='flex flex-col gap-4'>
            <Input type="text" title="username"/>
            <Input type="email" title="email"/>
            <Input type="password" title="password"/>
            <Input type="password" title="rePassword"/>
            <button className='px-4 py-1 text-sm rounded-full bg-green-700 hover:bg-green-800 text-white w-fit mx-auto'>
                Sign Up
            </button>
        </form>
        <button onClick={() => setSignReq("")} className='mt-5 text-sm text-green-600 hover:text-green-700 flex items-center mx-auto'>
            <MdKeyboardArrowLeft />
            All Sign Up Options
        </button>
    </div>
  )
}

export default SignUp