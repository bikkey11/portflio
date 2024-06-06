import React, { useEffect, useState } from 'react'
import { styles } from '../style'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

const Navbar = () => {
    const [toggle, settoggle] = useState(false)
    return (
        <nav className={`${styles.paddingX} bg-primary w-full felx items-center py-5  top-0 z-20 fixed`}>
            <div className='flex justify-between items-center max-w-7xl w-full mx-auto'>
                <Link to="/" className='flex items-center'
                    onClick={() => {
                        window.scrollTo(0, 0)
                    }}>
                    <h1 className=' font-bold bg-red-800 rounded-full text-xl px-2 '>B</h1>
                    <p className='font-thin font-serif text-slate-300 px-2'>Bikkey</p>
                </Link>
                <ul className='list-none text-secondary hidden sm:flex flex-row gap-10'>
                    <li className='hover:text-white text-[18px] active:text-white'
                    // onClick={setActive()}
                    >
                        <a href="#about">About</a>
                    </li>
                    <li className='hover:text-white text-[18px]'>
                        <a href="#work">Work</a>
                    </li>
                    <li className='hover:text-white text-[18px]'>
                        <a href="#contact">Contact</a>
                    </li>

                </ul>
                {/* mobile navigation */}
                <div className='sm:hidden flex flex-1 justify-end'
                    onClick={() => {
                        settoggle(!toggle)
                    }}
                >
                    {toggle ? <AiOutlineClose className='cursor-pointer' /> : <AiOutlineMenu className='cursor-pointer'></AiOutlineMenu>}
                    <div className={`${!toggle ? 'hidden' : "flex"}
                    p-6 bg-gradient-to-r from-slate-700 to-slate-950 absolute top-16 right-0  mx-4 my-2 min-w-[130px] rounded-xl z-10 cursor-pointer `}>
                        <ul className='list-none text-secondary flex-col flex gap-4 justify-end items-start'>
                            <li className='hover:text-white text-[14px] active:text-white'>
                                <a href="#about">About</a>
                            </li>
                            <li className='hover:text-white text-[14px]'>
                                <a href="#work">Work</a>
                            </li>
                            <li className='hover:text-white text-[14px]'>
                                <a href="#contact">Contact</a>
                            </li>

                        </ul>
                    </div>


                </div>

            </div>
        </nav>
    )
}

export default Navbar