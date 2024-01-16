import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';

export default function HeaderFlix() {
  let { user } = useSelector(state => state.userSlice);
  console.log('user: ', user);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // todo: handle click for open mobile menu
  const handleOpenMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  }
  
  //Đăng xuất
  let handleLogout = () => {
    localStorage.removeItem("USER_LOGIN");
    window.location.reload();
  }

  let renderMenu = () => {
    //CSS button
    let cssBtn = "px-5 py-2 rounded-lg border-2 border-white text-white bg-blue-500";
    let cssUserName = "px-5 py-2 rounded-lg border-2 border-sky-500 lg:bg-white lg:border-white lg:mb-3 lg:text-sm lg:text-center"

    // Nếu đã đăng nhập
    if (user) {
      return (
        <>
          <span className={cssUserName}>{user.hoTen}</span>
          <button className={cssBtn} onClick={handleLogout}>Đăng xuất</button>
        </>
      )
    }
    //Nếu chưa đăng nhập
    else {
      return (
        <>
          {/* <NavLink to={"/register"} className={cssBtn}>Đăng kí</NavLink>
          <button className={cssBtn} onClick={() => { window.location.href = "/login" }}>Đăng nhập</button> */}
          <NavLink className={`${cssBtn} account__item`} to={"/register"}>
            <button>Đăng kí</button>
          </NavLink>
          <NavLink className={`${cssBtn} account__item`} to={"/login"}>
            <button>Đăng nhập</button>
          </NavLink>
        </>
      )
    }
  }

  return (
    <>
      {/* Header responsive */}
      <div className='headerFlix h-20'>
        <div className='fixed w-full top-0 left-0 z-30 bg-white shadow-xl'>
          <div className='headerFlix__content h-20 px-4 flex justify-between items-center'>
            <NavLink to={"/"} className='text-3xl font-bold text-blue-500'>CyberFlix</NavLink>
            <div className='headerFlix__menu lg:hidden'>
              <a href='#' className='menu__item mx-4'>Lịch chiếu</a>
              <a href='#' className='menu__item mx-4'>Cụm rạp</a>
              <a href='#' className='menu__item mx-4'>Tin tức</a>
              <a href='#' className='menu__item mx-4'>Ứng dụng</a>
            </div>
            <div className='headerFlix__register space-x-3 lg:hidden flex justify-between'>
              {renderMenu()}
            </div>


            {/* Button bars for mobile phone & tablets screen */}
            <div className='headerHome__bars lg:block hidden' onClick={handleOpenMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
              </svg>
            </div>
            {/* Mobile menu */}
            <div className={`showMobileMenu absolute top-0 left-0 ${mobileMenuOpen ? "block" : "hidden"}`}>
              <div id='mobile-menu'>
                <div className='headerFlix__account ml-6 mr-9 my-4'>
                  {renderMenu()}
                </div>
                <hr />
                <div className='headerFlix__menu flex flex-col ml-6 my-4'>
                  <a href='#' className='menu__item my-4'>Lịch chiếu</a>
                  <a href='#' className='menu__item my-4'>Cụm rạp</a>
                  <a href='#' className='menu__item my-4'>Tin tức</a>
                  <a href='#' className='menu__item my-4'>Ứng dụng</a>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}
