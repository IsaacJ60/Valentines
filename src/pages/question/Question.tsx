import React, { useEffect } from 'react'
import { useState } from 'react'
import './Question.css'
import { motion } from 'framer-motion'
import { Animator, ScrollContainer, ScrollPage } from 'react-scroll-motion'
import { batch } from 'react-scroll-motion'
import { Fade, MoveOut, MoveIn, Sticky } from 'react-scroll-motion'
import { useNavigate } from 'react-router-dom'
import image1 from '../../assets/image1.gif'
import image2 from '../../assets/image2.gif'
import image3 from '../../assets/image3.gif'
import image4 from '../../assets/image4.gif'
import image5 from '../../assets/image5.gif'


interface nameProps {
  name: String;
  setName: React.Dispatch<React.SetStateAction<String>>; // Function to update the player list
}

export const Question: React.FC<nameProps> = ( {name, setName} ) => {
    const navigate = useNavigate();
    const [noButtonSize, setNoButtonSize] = useState(1); // Initial size
    const [noButtonPosition, setNoButtonPosition] = useState({x: 0, y: 0}); // Initial position

    name = String(name).toUpperCase();

    const handleNo = () => {
        globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        setNoButtonSize(noButtonSize*0.5); // Change size
    }

    const handleYes = () => {
        navigate('/happy');
    }

    useEffect(() => {
        globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    // Mouse move effect to move the button away from the cursor
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setNoButtonPosition({
                x: e.clientX - window.innerWidth/2, // Adjust the offset to center the button
                y: e.clientY - window.innerHeight/2,  // Adjust the offset to center the button
              });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0}}
      transition={{ duration: 1 }}
    >
        <div>
       

    
<div className='question-container'>
<img className="image1-down" src={image5} />
        <img className="image2-down" src={image2} />
        <img className="image3-down" src={image3} />
        <img className="image4-down" src={image4} />
        <img className="image5-down" src={image5} />
        <img className="image6-down" src={image2} />
        <img className="image1" src={image5} />
        <img className="image2" src={image2} />
        <img className="image3" src={image3} />
        <img className="image4" src={image4} />
        <img className="image5" src={image5} />
        <img className="image6" src={image2} />

    <ScrollContainer>
        <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), MoveIn(-100, 500), MoveOut(0, -500))}>
            <div>
                    <h1>{name}... &nbsp;WILL YOU BE MY</h1>
                </div>
                <div className='valentine'>
                    <span>V</span>
                    <span>A</span>
                    <span>L</span>
                    <span>E</span>
                    <span>N</span>
                    <span>T</span>
                    <span>I</span>
                    <span>N</span>
                    <span>E</span>
                    <span>?</span>
                    <div className='clear-thing'></div>
                </div>
            </Animator>
        </ScrollPage>
        <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 1000), MoveOut(0, -500))}>
                <div className='question-buttons'>
                    <button className='question-button-yes' onClick={handleYes} style={{
            position: 'absolute', // Absolute positioning to move freely
            left: `${noButtonPosition.x}px`,
            top: `${noButtonPosition.y}px`,
          }}>YES</button>
                    <button className='question-button-no' onClick={handleNo} style={{scale: `${noButtonSize}`, transition: `all 0.3s ease`}}>no.</button>
                </div>
            
            </Animator>
        </ScrollPage>
        </ScrollContainer>
    </div>
        </div>
            
    </motion.div>
  )
}
