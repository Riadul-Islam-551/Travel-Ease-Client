import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../../components/Navbar/Navbar'

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <Outlet></Outlet>
      <footer></footer>
    </div>
  )
}

export default HomeLayout
