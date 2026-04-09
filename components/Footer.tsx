"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { FaInstagram, FaTiktok, FaPhone } from 'react-icons/fa6'
import TermsModal from './ui/TermsModal'

const socialMedia = [
    {
        id: 1,
        icon: <FaInstagram size={18} />,
        link: "https://www.instagram.com/kendits_studio",
        name: "Instagram",
    },
    {
        id: 2,
        icon: <FaTiktok size={18} />,
        link: "https://www.tiktok.com/@kendits.studio",
        name: "TikTok",
    },
    {
        id: 3,
        icon: <FaPhone size={18} />,
        link: "tel:+233246601022",
        name: "+233 (0) 24 660 1022 / +233 (0) 50 563 3152",
    },
];

const Footer = () => {
    const [isTermsOpen, setIsTermsOpen] = useState(false);

    return (
        <footer className='w-full pt-20 pb-10 sm:mb-[100px] relative' id='contact'>
            <div className='w-full absolute left-0 -bottom-72 min-h-96 pointer-events-none'>
                <img src="/footer-grid.svg" alt="" className='w-full h-full opacity-50' />
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='heading lg:max-w-[45vw] '>
                    Ready to take <span className='text-purple'>your ideas</span> to the next level?
                </h1>
                <p className='text-white-200 md:mt-10 my-5 mx-3 text-center'>
                    Reach out to us today and let's discuss how we can help you achieve your goals
                </p>
                <a href="mailto:opokuacheampongkenneth360@gmail.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                </a>
            </div>
            <div className='flex mt-16 md:flex-row flex-col justify-between items-center px-3 w-full gap-8'>
                <p className='md:text-base text-sm md:font-normal font-light mb-1 md:w-1/3 text-center md:text-left'>
                    Copyright ©️ 2026 Kendits Studios
                </p>

                <div className="flex justify-center items-center md:w-1/3">
                    <motion.button
                        onClick={() => setIsTermsOpen(true)}
                        className="text-sm md:text-base text-white-200 cursor-pointer underline decoration-purple/20 underline-offset-4 relative group"
                        whileHover={{
                            scale: 1.05,
                            color: "#CBACF9",
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        Terms & Conditions
                    </motion.button>
                </div>

                <div className='flex items-center md:gap-3 gap-6 md:w-1/3 md:justify-end justify-center'>
                    {socialMedia.map((profile) => (
                        <a key={profile.id} href={profile.link} target="_blank" rel="noreferrer" className='group h-10 px-3 cursor-pointer flex justify-center items-center backdrop-blur-lg backdrop-filter saturate-180 bg-opacity-75 bg-black-200 rounded-lg border transform transition-all duration-500 ease-in-out hover:-translate-y-2 border-black-300 overflow-hidden'>
                            <div className="flex items-center justify-center">
                                {profile.icon}
                            </div>
                            <span className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2 transition-all duration-500 ease-in-out text-sm font-medium whitespace-nowrap text-white text-opacity-80">
                                {profile.name}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
            <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
        </footer>
    )
}

export default Footer