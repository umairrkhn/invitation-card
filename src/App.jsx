import React from 'react';
import Hero from './components/Hero';
import Details from './components/Details';

function App() {
  return (
    <main style={{
      backgroundColor: 'white',
      width: '100%',
      maxWidth: '800px', // Restrict max width for card-like feel on desktop
      minHeight: '100vh',
      boxShadow: '0 0 50px rgba(0,0,0,0.05)',
      position: 'relative'
    }}>
      {/* Decorative Border Container for the whole card effect */}
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        right: '10px',
        bottom: '10px',
        border: '1px solid var(--color-primary)',
        pointerEvents: 'none',
        zIndex: 10,
        opacity: 0.5
      }}></div>

      <Hero />
      <Details />
      
      <footer style={{
        padding: '2rem',
        textAlign: 'center',
        fontSize: '0.8rem',
        color: 'var(--color-text-light)',
        fontFamily: 'var(--font-sans)'
      }}>
        <p>With Love, The Parents</p>
      </footer>
    </main>
  );
}

export default App;
