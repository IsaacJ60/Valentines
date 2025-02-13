import React from 'react'
import { useState } from 'react'
import './Home.css'
import { motion } from 'framer-motion'
import { Animator, ScrollContainer, ScrollPage } from 'react-scroll-motion'
import { batch } from 'react-scroll-motion'
import { Fade, MoveOut, MoveIn, Sticky } from 'react-scroll-motion'
import { useNavigate } from 'react-router-dom'

interface nameProps {
  name: String;
  setName: React.Dispatch<React.SetStateAction<String>>; // Function to update the player list
}

export const Home: React.FC<nameProps> = ( {name, setName} ) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/question');
    }

    name = String(name).charAt(0).toUpperCase() + String(name).slice(1);
    
  return (
    <motion.div
      initial={{  opacity: 0 }}
      animate={{  opacity: 1 }}
      exit={{ opacity: 0}}
      transition={{ duration: 1 }}
    >
        <div className='home-container'>
            <ScrollContainer>
                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(-100, 500), MoveOut(0, -500))}>
                    <h1>Hey,&nbsp;&nbsp;{name}! &nbsp; (- ‿◦ )</h1>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(100, 500), MoveOut(-100, -500))}>
                    <h1>Are you ready to hear my second favour?</h1>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(-100, 500), MoveOut(100, -500))}>
                    <h1><i>TBH</i>, it's more of a question. <br/><br/> Welp, here goes nothing...</h1>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 1000), MoveOut(0, -500))}>
                    <button className='home-button' onClick={handleClick}>My question is...</button>
                    </Animator>
                </ScrollPage>
                </ScrollContainer>
            </div>
            
    </motion.div>
  )
}
