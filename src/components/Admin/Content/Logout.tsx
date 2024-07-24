import { useAppDispatch, useAppSelector } from '@/lib/hook';
import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/navigation';
import React from 'react'
import  { logoutRed } from '@/lib/slices/loginSlice';

function Logout() {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const cliclkHandler=()=>{

        deleteCookie("token");
        router.push("/login");
        dispatch(logoutRed())

    }
  return (
    <div>
      <button onClick={()=>cliclkHandler()} >logaout</button>
    </div>
  )
}

export default Logout
