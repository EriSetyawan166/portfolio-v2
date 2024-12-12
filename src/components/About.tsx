import React from 'react';
import profilePic from '../assets/img/me.jpg';

const About: React.FC = () => {
    return (
        <div id="about-section" className='pt-40 md:pt-20 h-screen flex flex-col justify-center' >
            <p className='font-medium text-[#7b75a3] text-5xl md:text-6xl text-center mb-20'>About Me</p>
            <div className='flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10'>
                <div className='flex flex-col basis-1/2 gap-2'>
                    <p className='font-semibold'>Hello I'm</p>
                    <p className='font-bold text-rose-300 text-2xl md:text-4xl'>MUHAMMAD ERI SETYAWAN</p>
                    <p className='font-medium text-rose-300 text-base md:text-2xl'>A Frontend Developer and AI Enthusiast</p>
                    <p className='text-gray-500 text-sm md:text-base font-semibold'><span className='font-bold text-black'>About Me:</span> a curious person who loves learning new things, especially in Web Developing and Machine Learning. enjoy experimenting with algorithms and problem-solving. I also have various experience in web development.</p>
                    <p className='text-gray-500 text-sm md:text-base font-semibold'><span className='font-bold text-black'>Location:</span> Jakarta, Indonesia</p>
                    <a href="" className='font-medium underline w-fit'>View cv PDF</a>
                </div>
                <div className='order-first md:order-last'>
                    <img src={profilePic} className='rounded-full w-[250px] md:w-[300px]' alt="hey this is me!" />
                </div>
            </div>
        </div >
    )
};

export default About;
