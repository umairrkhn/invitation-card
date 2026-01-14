import React from 'react';
import { motion } from 'framer-motion';
import floralTop from '../assets/floral-top.png';

const Hero = () => {
  return (
    <section style={{ 
      position: 'relative', 
      width: '100%', 
      minHeight: '60vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      paddingTop: '6rem',
      textAlign: 'center'
    }}>
      {/* Top Floral Decoration - Flipped for top right as well if desired, or just one main one */}
      <motion.img 
        src={floralTop} 
        alt="Floral Decoration" 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '300px', 
          maxWidth: '50vw',
          zIndex: 1 
        }} 
      />
      
      {/* "Engaged" Heading */}
      <motion.h1
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        style={{
          fontFamily: 'var(--font-script)',
          fontSize: 'clamp(4rem, 15vw, 8rem)',
          color: 'var(--color-primary)',
          lineHeight: 1.2,
          marginBottom: '1rem',
          zIndex: 2
        }}
      >
        Engaged
      </motion.h1>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        style={{ zIndex: 2, padding: '0 2rem' }}
      >
        <div style={{ fontSize: '3rem', color: 'var(--color-accent)', marginBottom: '1rem' }}>
           {/* Heart Icon or similar decoration could go here */}
           ♥
        </div>
      </motion.div>

      {/* Invitation Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(1rem, 3vw, 1.2rem)',
          maxWidth: '600px',
          margin: '0 auto 2rem',
          padding: '0 1.5rem',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          color: 'var(--color-text-light)'
        }}
      >
        With great joy, we invite you to celebrate our son's engagement at our home. Your presence and blessings would mean the world to us
      </motion.p>

      {/* Couple Names */}
      <motion.h2
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 2 }}
        style={{
          fontFamily: 'var(--font-script)',
          fontSize: 'clamp(3rem, 10vw, 5rem)',
          color: 'var(--color-secondary)',
          margin: 0
        }}
      >
        Uzair & Maisara
      </motion.h2>
    </section>
  );
};

export default Hero;
