import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const MenuListItem = ({ itemText, itemLink }) => {

  const router = useRouter()

  return (
    <span className='menu-list__item-container'>
      <Link href={itemLink}>
        <p className={'menu-list__item' + (router.pathname == itemLink? ' active' : '') }>
          {itemText}
        </p>
      </Link>
    </span>
  )
}

export default MenuListItem