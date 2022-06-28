import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import MenuListItem from './MenuListItem'
import MobileMenuBtn from './MobileMenuBtn'
import MobileNavBar from './MobileNavBar'

const Header = () => {
  const { windowSize } = useContext(Context)


  return (
    <div className='header home-page__header'>
      {
        windowSize < 700 &&
        <>
          <MobileMenuBtn />
          <MobileNavBar />
        </>
      }
      <a className='logo-text__container' href='/'>
        <div className='logo__container'>
          <img src='./svg/v.svg' className='logo' alt='logo' />
        </div>
        <p>The Vegan Munch</p>
      </a>
      {windowSize > 700 && <div className='nav-menu-links'>
        <MenuListItem itemText='Home' itemLink='/' />
        <MenuListItem itemText='link2' itemLink='/2' />
        <MenuListItem itemText='link3' itemLink='/3' />
        <MenuListItem itemText='About' itemLink='/about' />
      </div>}
    </div>
  )
}

export default Header