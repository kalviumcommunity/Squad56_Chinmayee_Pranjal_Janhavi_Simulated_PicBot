import React from 'react';
import { useInView } from 'react-intersection-observer';
import Navbar from '../Components/Navbar';
import chinmayee from "../assets/chinmayee.jpg";
import janhavi from "../assets/janhavi.jpg";
import pranjal from "../assets/pranjal.jpg";
import { SocialIcon } from 'react-social-icons';
import '../Pages/Creators.css';

function Creators() {
    const { ref: firstRef, inView: firstInView } = useInView({ triggerOnce: true });
    const { ref: secondRef, inView: secondInView } = useInView({ triggerOnce: true });
    const { ref: thirdRef, inView: thirdInView } = useInView({ triggerOnce: true });

    return (
        <>
            <Navbar />
            <h2 className='heading'>Our team: The Architects of Imagination❤️</h2>
            <div className="container">
                <div ref={firstRef} className={`firstbox ${firstInView ? 'animate' : ''}`}>
                    <img width={300} className='janhaviPhoto' src={janhavi} alt="Janhavi" />
                    <div className="text">
                        <h3 className='name'>Janhavi Hivarekar</h3>
                        <p className='selfIntro'>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    </div>
                    <div className='icon'>
                        <SocialIcon target='_blank' network='github' url='https://github.com/Janhavi003' />
                        <SocialIcon target='_blank' network='linkedin' url='https://www.linkedin.com/in/janhavi-hivarekar-1b74a028b/' />
                        <SocialIcon target='_blank' network='instagram' url='https://www.instagram.com/_janhavi_.05/' />
                    </div>
                </div>

                <div ref={secondRef} className={`secondbox ${secondInView ? 'animate' : ''}`}>
                    <img className='chinmayeePhoto' width={300} src={chinmayee} alt="Chinmayee" />
                    <div className="text">
                        <h3 className='name'>Chinmayee Harane</h3>
                        <p className='selfIntro'>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    </div>
                    <div className='icon'>
                        <SocialIcon target='_blank' network='github' url='https://github.com/CHINMAYEEHARANE58' />
                        <SocialIcon target='_blank' network='linkedin' url='https://www.linkedin.com/in/chinmayee-harane-568896287/' />
                        <SocialIcon target='_blank' network='instagram' url='https://www.instagram.com/chinmayeeharane_02/' />
                    </div>
                </div>

                <div ref={thirdRef} className={`thirdbox ${thirdInView ? 'animate' : ''}`}>
                    <img className='pranjalPhoto' width={300} src={pranjal} alt="Pranjal" />
                    <div className="text">
                        <h3 className='name'>Pranjal Gosavi</h3>
                        <p className='selfIntro'>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    </div>
                    <div className='icon'>
                        <SocialIcon target='_blank' network='github' url='https://github.com/pranjal-2507' />
                        <SocialIcon target='_blank' network='linkedin' url='https://www.linkedin.com/in/pranjal-gosavi-21b182292/' />
                        <SocialIcon target='_blank' network='instagram' url='https://www.instagram.com/pranjalgosavi_25/' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Creators;
