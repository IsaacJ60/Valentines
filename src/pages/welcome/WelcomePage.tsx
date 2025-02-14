import React, { useState } from "react";
import "./WelcomePage.css";
import { Animator, ScrollContainer, ScrollPage } from 'react-scroll-motion';
import { batch } from 'react-scroll-motion';
import { Fade, MoveOut, MoveIn, Sticky } from 'react-scroll-motion';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface nameProps {
  name: String;
  setName: React.Dispatch<React.SetStateAction<String>>; // Function to update the player list
}

export const WelcomePage: React.FC<nameProps> = ( {name, setName} ) => {

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(name);
    if (name === '') {
      alert('Please enter a name');
      return;
    }
    navigate('/home');
  }

  return (

      <div className="welcome-page-container">
        <p className="scroll-text">Scroll Down ↓</p>


        <motion.div
      layout
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20 }}
      transition={{ duration: 2 }}
    >
      <ScrollContainer >
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky(), MoveIn(-100, 500), MoveOut(0, -500))}>
          <h1>Hey... It's <i>me ;)</i></h1>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky(), MoveIn(-50, 500), MoveOut(50, -500))}>
          <h1>Surely you know who <i>me</i> is, right?</h1>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky(), MoveIn(50, 500), MoveOut(-50, -500))}>
          <h1>Anyway, could I ask for just two favours?</h1>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky(), MoveIn(-50, 500), MoveOut(50, -500))}>
          <h1>First of all, pick a name for yourself. One that someone you <i><u>really, REALLY</u></i> like should call you.</h1>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky(), MoveIn(50, 500), MoveOut(0, -500))}>
        <form className="name-form">
         <input className="text-field" type="text" placeholder="What should I call you?" onChange={handleChange}/>
         <button className="submit-button" type="submit" onClick={handleSubmit}>SUBMIT</button>
        </form>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
    </motion.div>
    </div>
  );
};
