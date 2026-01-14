import React from 'react';
import { motion } from 'framer-motion';
import floralBottom from '../assets/floral-bottom.png';

const Details = () => {
    // Event Details
    const eventDate = "Saturday, January 31st, 2026";
    const eventTime = "7 - 11 PM";
    const eventVenue = "At our residence";

    return (
        <section style={{
            position: 'relative',
            width: '100%',
            padding: '4rem 0 0', // Padding bottom handled by footer/image
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            overflow: 'hidden'
        }}>
            {/* Divider Line */}
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100px' }}
                transition={{ duration: 1 }}
                style={{
                    height: '2px',
                    backgroundColor: 'var(--color-accent)',
                    marginBottom: '3rem'
                }}
            />

            {/* Date & Time */}
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ marginBottom: '2rem' }}
            >
                <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.2rem',
                    color: 'var(--color-text-main)',
                    fontWeight: 500,
                    marginBottom: '0.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '2px'
                }}>
                    {eventDate}
                </p>
                <p style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.5rem',
                    color: 'var(--color-primary)'
                }}>
                    {eventTime}
                </p>
            </motion.div>

            {/* Venue */}
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ marginBottom: '4rem' }}
            >
                 <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    color: 'var(--color-text-light)',
                    marginBottom: '0.5rem'
                }}>
                    Venue
                </p>
                <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2rem',
                    color: 'var(--color-secondary)'
                }}>
                    {eventVenue}
                </h3>
            </motion.div>

            {/* Bottom Floral */}
            <motion.img
                src={floralBottom}
                alt="Floral Decoration Bottom"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                style={{
                    width: '100%',
                    maxWidth: '800px',
                    height: 'auto',
                    pointerEvents: 'none'
                }}
            />
        </section>
    );
};

export default Details;
