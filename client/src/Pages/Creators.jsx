import React from 'react'
import Navbar from '../Components/Navbar'
import chinmayee from "../assets/chinmayee.jpg"
import janhavi from "../assets/janhavi.jpg"
import pranjal from "../assets/pranjal.jpg"
import { SocialIcon } from 'react-social-icons'


import "../Pages/Creators.css"

function Creators() {
    return (
        <>
            <Navbar/>
            <h2 className='heading'>Our team: The Architects of Imagination❤️</h2>
            <div className="container">
                <div className="firstbox">
                    <img width={300} className='janhaviPhoto' src={janhavi} alt="" />
                    <div className="text">
                    <h3 className='name'>Janhavi Hivarekar</h3>
                    <p className='selfIntro'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit perspiciatis illo, saepe eaque molestiae soluta voluptates optio numquam. Recusandae sunt iure dicta! Doloribus molestias maxime, amet quae maiores modi pariatur?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim doloribus, consequatur impedit accusamus necessitatibus veniam culpa! Beatae expedita unde nostrum pariatur, sunt ea cumque ipsa eligendi est cum voluptates obcaecati.</p>
                </div>
                <div className='icon'>
                    <SocialIcon target='blank' network='github' url='https://github.com/Janhavi003'/>
                    <SocialIcon target='blank ' network='linkedin' url='https://www.linkedin.com/in/janhavi-hivarekar-1b74a028b/'/>
                    <SocialIcon target='blank' network='instagram' url='https://www.instagram.com/_janhavi_.05/'/>
                    
                </div>
                </div>

                <div className="secondbox">
                    <img className='chinmayeePhoto' width={300} src={chinmayee} alt="" />
                    <div className="text">
                    <h3 className='name'>Chinmayee Harane</h3>
                    <p className='selfIntro'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit perspiciatis illo, saepe eaque molestiae soluta voluptates optio numquam. Recusandae sunt iure dicta! Doloribus molestias maxime, amet quae maiores modi pariatur?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim doloribus, consequatur impedit accusamus necessitatibus veniam culpa! Beatae expedita unde nostrum pariatur, sunt ea cumque ipsa eligendi est cum voluptates obcaecati.</p>
                    </div>
                    <div className='icon'>
                    <SocialIcon target='blank' network='github' url='https://github.com/CHINMAYEEHARANE58'/>
                    <SocialIcon target='blank' network='linkedin' url='https://www.linkedin.com/in/chinmayee-harane-568896287/'/>
                    <SocialIcon target='blank' network='instagram' url='https://www.instagram.com/chinmayeeharane_02/'/>
                </div>
                </div>

                <div className="thirdbox">
                    <img className='pranjalPhoto' width={300} src={pranjal} alt="" />
                    <div className="text">
                    <h3 className='name'>Pranjal Gosavi</h3>
                    <p className='selfIntro'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit perspiciatis illo, saepe eaque molestiae soluta voluptates optio numquam. Recusandae sunt iure dicta! Doloribus molestias maxime, amet quae maiores modi pariatur?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim doloribus, consequatur impedit accusamus necessitatibus veniam culpa! Beatae expedita unde nostrum pariatur, sunt ea cumque ipsa eligendi est cum voluptates obcaecati.</p>

                </div>
                <div className='icon'>
                    <SocialIcon target='blank' network='github' url='https://github.com/pranjal-2507'/>
                    <SocialIcon target='blank' network='linkedin' url='https://www.linkedin.com/in/pranjal-gosavi-21b182292/'/>
                    <SocialIcon target='blank' network='instagram' url='https://www.instagram.com/pranjalgosavi_25/'/>
                </div>
                </div>
            </div>
        </>
    
  )
}

export default Creators