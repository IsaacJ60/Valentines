import React, { useState } from "react";
import "./card.css";
import { motion } from "framer-motion";

interface ValentinesCardProps {
  onClose: () => void;
}

export const ValentinesCard: React.FC<ValentinesCardProps> = ({ onClose }) => {
  return (
    <div className="card-overlay">
      <motion.div
        className="valentines-card"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h2>Happy Valentine's Day! 💖</h2>
        <p>THANKS FOR SAYING YES :D</p>
        <p>Now, since you have agreed to be my valentine, I prepared a little spot for us to relax a bit! I hope you like it...</p>
        <button onClick={onClose} className="close-button">LEMME SEE!</button>
      </motion.div>
    </div>
  );
};
