import React from 'react'
import About1 from '../assets/images/About1.jpg'
import About2 from '../assets/images/About2.jpg'

export default function About() {
return (
    <div className='p-10 max-w-6xl mx-auto'>
        <h1 className='text-4xl text-emerald-700 font-semibold mt-7'>About Us</h1>
        <div className='flex flex-row max-lg:flex-col'>
            <p className='p-3 text-justify text-zinc-500 text-xl max-[400px]:text-sm'>
                Welcome to <span className='font-semibold'>PropertyProvision</span>, your trusted partner in property provision and real estate solutions. 
                At <span className='font-semibold'>PropertyProvision</span>, we understand that finding the perfect property or managing real estate assets can be a complex and significant endeavor. 
                That's why we are dedicated to providing tailored solutions that meet the unique needs of our clients. We invite you to explore the world of real estate with <span className='font-semibold'>PropertyProvision</span>. 
                Contact us today to discuss your property needs, and let us guide you through a seamless and rewarding experience.
                Thank you for considering <span className='font-semibold'>PropertyProvision</span> as your trusted partner in property provision. We look forward to serving you.
            </p>
            <img src={About1} alt="Home" className='mx-auto my-auto w-full h-full lg:h-60 max-[400px]:w-[300px]'/>
        </div>
        <h1 className='text-4xl text-emerald-700 font-semibold mt-7 text-right max-lg:text-left'>Our Mission and Team</h1>
        <div className='flex flex-row max-lg:flex-col-reverse'>
            <img src={About2} alt="Home" className='mx-auto my-auto w-full h-full lg:h-60 max-[400px]:w-[300px]'/>
            <p className='p-3 text-justify text-zinc-500 text-xl max-[400px]:text-sm'>
                At the heart of <span className='font-semibold'>PropertyProvision</span> is our unwavering commitment to excellence. 
                Our mission is to empower individuals and businesses to make informed and successful real estate decisions by delivering high-quality property provision services. 
                We strive to build lasting relationships based on trust, integrity, and professionalism. Meet the dedicated professionals behind <span className='font-semibold'>PropertyProvision</span>. 
                Our team is comprised of passionate individuals who bring diverse skills and perspectives to the table. 
                Together, we work seamlessly to deliver exceptional service and results.
            </p>
        </div>
    </div>
);
}
