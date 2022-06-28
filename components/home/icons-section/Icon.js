import React from 'react'
import Image from 'next/image'

export default function Icon({ src, text }) {


    return (
            <li className='floating-icon'>
                <Image src={src} alt='icon' width={50} height={50} />
                <h3>{text}</h3>
            </li>
    )
}
