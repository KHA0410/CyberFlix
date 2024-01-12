import React from 'react'
import HeaderFlix from '../components/HeaderFlix/HeaderFlix'
import { Outlet } from 'react-router'
import FooterFlix from '../components/FooterFlix/FooterFlix'

export default function Layout() {
  return (
    <div className='space-y-5'>
        <HeaderFlix/>
        <Outlet/>
        <FooterFlix />
    </div>
  )
}
