import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WelcomePage } from './pages/welcome/WelcomePage';
import { Home } from './pages/home/Home';
import { Three } from './pages/happypage/Happy';
import { Question } from './pages/question/Question';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';

export const App: React.FC = () => {

  const [name, setName] = useState<String>('');
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  
  const musicToggle = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
        const newAudio = new Audio('https://audio.jukehost.co.uk/Zru1RJVZabt5ts0ZN0he5kNSCy8vyTOh');
        setAudio(newAudio);
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      const newAudio = new Audio('https://audio.jukehost.co.uk/Zru1RJVZabt5ts0ZN0he5kNSCy8vyTOh');
      newAudio.play();
      setAudio(newAudio);
      setIsPlaying(true);
    }
  };
  
  
  return (
    <div className='app-container'>
          <button onClick={musicToggle} className='music-player'>MUSIC</button>
          <p className='credits-text'>Made with love, by <a href='https://www.isaacjiang.ca/' target="_blank" rel="noopener noreferrer">Isaac Jiang</a></p>

      <AnimatePresence  >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage name={ name } setName={ setName } />} />
        <Route path="/home" element={<Home name={ name } setName={ setName } />} />
        <Route path="/question" element={<Question name={ name } setName={ setName } />} />
        <Route path="/happy" element={<Three />} />
      </Routes>
    </BrowserRouter>
    </AnimatePresence>
  </div>
    
  );
};

export default App;
