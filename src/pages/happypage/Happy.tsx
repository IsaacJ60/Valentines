/* eslint-disable */
import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import './Happy.css';
import { OrbitControls, useGLTF, Html, useProgress } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ValentinesCard } from '../card/card';

// Loading Component
function Loader() {
  const { progress } = useProgress(); // Get loading progress

  if (progress === 100) {
    return <Html center><div></div></Html>;
  }

  return (
    <Html center>
      <div className="loading-container">
        <p>Loading... {Math.round(progress)}%</p>
        <div className="loading-spinner"></div>
      </div>
    </Html>
  );
}

// Custom Model Component
function MyModel(props: JSX.IntrinsicElements['group']) {
  const { scene } = useGLTF('/models/valentinescene10.glb');
  return <primitive object={scene} {...props} />;
}

export const Three: React.FC = () => {

  const [showCard, setShowCard] = useState(true);

  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 5, ease: "easeInOut" }}
    >
        {showCard && <ValentinesCard onClose={() => setShowCard(false)} />}
        <div className='three-container'>
        <Canvas>
          <ambientLight intensity={0.2} />
          <pointLight intensity={5} position={[0, 1, 0.9]} />
          <OrbitControls enableZoom={true} enablePan={false} maxPolarAngle={Math.PI/2} minDistance={2} maxDistance={10} />
          <Loader />
          <MyModel position={[-2, -1, 1]} scale={2} />
        </Canvas>
      </div>
    </motion.div>
  );
};
