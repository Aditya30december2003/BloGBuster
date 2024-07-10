"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
const Page = () => {
  const route = useRouter()
//   const [user , setUser] = useState({
//     name:"",
//     email:"",
//     password:"",
//   })
//  const [show , setShow] = useState(true)

  // const onSignup = async()=>{
  //   await axios.post("/api/auth/signup" , user)
  //   .then((res)=>{
  //     const response = res.data;
  //     if(response.status == 200){
  //      console.log("User successfully signed up")
  //      route.push("/login")
  //     }else if(response.status == 400){
  //      console.log("Error signing up the user")
  //     }
  //   }).catch((err)=>{
  //     console.log("Error in signing up the user" , err)
  //   })
  // }

  const githubLogin = async()=>{
    await signIn("github",{
      callback:"/",
      redirect:true,
    })
  }
  const googleLogin=async()=>{
    await signIn("google",{
        callbackUrl:"/",
        redirect:true,
      })
  }
  return (
    <div>
      {/* <h1 className='text-[2rem] font-bold'>Sign Up</h1> */}
      <div className='top-0 left-0 w-full h-full'>
       <div className='bg-white w-[80%] lg:w-[50%] mx-auto p-3  rounded-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
       {/* <p className='font-semibold p-2 text-[0.8rem] mt-1 text-black'>Already have an account? <Link href='/login' className='cursor-pointer hover:underline-3'> Log in</Link></p> */}
        {/* <div className='flex flex-col gap-1 mt-2'>
          <input value={user.name} onChange={(e)=>setUser({...user , name:e.target.value})} id='username' className='border-gray-300 text-black border-2 w-[95%] p-2 outline-none rounded-sm mx-auto font-semibold' type="text" placeholder='Name' />
          {user.name.length < 2 ? <div className='py-1 px-3 text-[0.8rem] font-semibold text-red-600'>*name should contain least 2 characters</div> : <></>}
          
          <div className='border-gray-300 text-black border-2 w-[95%]  rounded-sm mx-auto font-semibold flex items-center justify-between'>
          <input value={user.email} onChange={(e)=>setUser({...user , email:e.target.value})} className='email p-2 outline-none w-full' id='email'  type="text" placeholder='Email' />
          </div>
          {user.email.includes("@gmail.com")|| user.email.includes("@yahoo.co.in")?<></>:<div><div className='py-1 px-3 text-[0.8rem] font-semibold text-red-600'>*enter a valid email</div></div>}
          
          <div  className='border-gray-300 text-black border-2 w-[95%] p-2 rounded-sm mx-auto font-semibold flex items-center justify-between'>
          <input value={user.password} onChange={(e)=>setUser({...user , password:e.target.value})} id='password' className=' w-full outline-none' type={show?"password":"text"} placeholder='Password' />
          {user.password.length>0 ?<div>{show?<div onClick={()=>setShow(!show)} className='text-black/40 text-[0.8rem] cursor-pointer'>SHOW</div>:<div onClick={()=>setShow(!show)} className='cursor-pointer text-[0.8rem] text-black/40'>HIDE</div>}</div> : <></>}
          </div>
          {user.password.length < 6?<div className='text-[0.8rem] font-semibold text-red-600 py-1 px-3'>*password should contain at least 6 characters</div>:<></>}

          {user.name.length < 2 ||user.password.length < 6 ?<button className='mt-2 w-[95%] bg-blue-500 text-black/20 py-1 rounded-sm mx-auto font-bold'>Join Now</button>:<button  onClick={onSignup} className='w-[95%] bg-blue-500 py-1 rounded-sm mx-auto font-bold'>Join Now</button> }
        </div>

        <div className='w-[100%] mt-5 flex items-center gap-1'>
        <div className='w-[45%] h-[0.1rem] bg-black mx-auto'></div>
        <p className='text-black text-center'>OR</p>
        <hr className='w-[45%] h-[0.1rem] bg-black'/>
       </div> */}
       
        <div className='mt-5 flex w-[50%] lg:w-[95%] flex-col mx-auto my-[1%] text-[0.9rem] gap-2 mb-3'>
        <button onClick={githubLogin} className='bg-blue-900  text-white font-semibold p-3 rounded-sm flex items-center w-full'>
            <div className='flex items-center mx-auto gap-3'><Image className='' src='/github.png' width={20} height={20} alt="" />
            <div  className=''>Sign in with Github</div> </div>
        </button>
        <button onClick={googleLogin} className=' bg-red-500 text-white font-semibold p-3 rounded-sm flex items-center w-full'>
            <div className='flex items-center mx-auto gap-3'><Image className='' src='/google.png' width={22} height={22} alt="" />
            <div className=''>Sign in with Google</div> </div>
        </button>
      </div>
       </div>
      </div>
    </div>
  )
}

export default Page
