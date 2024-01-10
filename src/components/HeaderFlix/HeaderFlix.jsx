import React from 'react'
import { useSelector } from 'react-redux'

export default function HeaderFlix() {
    let {user} = useSelector(state=>state.userSlice)
    console.log('user: ', user);
   
    let renderMenu = () => {
     //CSS button
    let cssBtn = "px-5 py-2 rounded-lg border-2 border-white  text-white bg-blue-500"
    // Nếu đã đăng nhập
    if(user){
        return(
          <>
            <span className={cssBtn}>{user.hoTen}</span>
            <button className={cssBtn}>Đăng xuất</button>
        </>  
        )  
    }
    //Nếu chưa đăng nhập
    else{
        return(
            <>
            <button className={cssBtn}>Đăng kí</button>
            <button className={cssBtn}>Đăng nhập</button>
            </>
        )
    }
    }
  return (
    <div className='flex justify-between items-center containerCss'>
        <span className='text-2xl font-bold text-blue-500'>CyberFlix</span>
        <div className='space-x-3'>{renderMenu()}</div>
    </div>
  )
}
