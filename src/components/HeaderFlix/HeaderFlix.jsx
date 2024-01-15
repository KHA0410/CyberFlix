import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';

export default function HeaderFlix() {
  let { user } = useSelector(state => state.userSlice)
  console.log('user: ', user);
  //Đăng xuất
  let handleLogout = () => {
    localStorage.removeItem("USER_LOGIN")
    window.location.reload()
  }

  let renderMenu = () => {
    //CSS button
    let cssBtn = "px-5 py-2 rounded-lg border-2 border-white  text-white bg-blue-500"
    // Nếu đã đăng nhập
    if (user) {
      return (
        <>
          <span className={cssBtn}>{user.hoTen}</span>
          <button className={cssBtn} onClick={handleLogout}>Đăng xuất</button>
        </>
      )
    }
    //Nếu chưa đăng nhập
    else {
      return (
        <>
          <NavLink to={"/register"} className={cssBtn}>Đăng kí</NavLink>
          <button className={cssBtn} onClick={() => { window.location.href = "/login" }}>Đăng nhập</button>
        </>
      )
    }
  }
  return (
    <div className='h-20'>
      <div className='h-20 flex justify-between items-center px-4 shadow-xl fixed z-10 bg-white w-full'>
        <NavLink to={"/"} className='text-3xl font-bold text-blue-500'>CyberFlix</NavLink>

        <div className='space-x-3'>{renderMenu()}</div>

      </div>
      <hr />
    </div>

  )
}
