import React from 'react'
import { styles } from '../style';
import Computer from "../components/canvas/computer";
import { motion } from "framer-motion"
export default function Hero() {
    return (
        <section className='relative w-full h-screen mx-auto'>
            <div className={`${styles.paddingX} absolute inset-0 top-[120px] xs:top-[80px] max-w-7xl mx-auto flex flex-row
            items-start gap-5
            `}>
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-violet-900' />
                    <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-violet-900 to-violet-100'></div>
                </div>
                <div >
                    <h1 className='font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px]  mt-2'>Hi, I'm <span className='text-[#915eff]'>Bikkey</span></h1>
                    <p className='text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]'>I develop website, mobile<br className='sm:hidden block' /> application and web application</p>
                </div>
            </div>
            <Computer />
            <div className='absolute bottom-3 right-1/2 flex justify-center items-center'>
                <a href="#about" >
                    <div className='border-4 border-slate-400 h-[55px] w-[35px] rounded-3xl flex justify-center items-start p-2'>
                        <motion.div
                            animate={{ y: [0, 22, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: 'loop'
                            }}
                            className="w-3 h-3 rounded-full bg-slate-400 mb-1"></motion.div>

                    </div>

                </a>
            </div>
        </section>
    )

}