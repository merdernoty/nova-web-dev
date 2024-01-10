'use client'


//import styled from "styled-components";

// const HeadLi = styled.li`
// p-8 cursor-pointer hover:text-indigo-700 text-lg opacity-70 transition duration-300
// `;
//Доведите до ума, плиззззз!!!

import React, { useState } from 'react'
import Link from 'next/link'

const HeaderText: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('')

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <div className='flex m-auto'>
      <ul className='flex'>
        <Link href='/'>
          <li
            className={`p-8 cursor-pointer hover:text-indigo-700 text-lg opacity-70 transition duration-300 ${
              activeTab === 'Home' ? 'text-indigo-700' : ''
            }`}
            onClick={() => handleTabClick('Home')}
          >
            Home
          </li>
        </Link>
        <Link href='/'>
          <li
            className={`p-8 cursor-pointer hover:text-indigo-700 text-lg opacity-70 transition duration-300 ${
              activeTab === 'Services' ? 'text-indigo-700' : ''
            }`}
            onClick={() => handleTabClick('Services')}
          >
            Services
          </li>
        </Link>
        <Link href='/'>
          <li
            className={`p-8 cursor-pointer hover:text-indigo-700 text-lg opacity-70 transition duration-300 ${
              activeTab === 'Our Project' ? 'text-indigo-700' : ''
            }`}
            onClick={() => handleTabClick('Our Project')}
          >
            Our Project
          </li>
        </Link>
        <Link href='/about'>
          <li
            className={`p-8 cursor-pointer hover:text-indigo-700 text-lg opacity-70 transition duration-300 ${
              activeTab === 'About Us' ? 'text-indigo-700' : ''
            }`}
            onClick={() => handleTabClick('About Us')}
          >
            About Us
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default HeaderText
