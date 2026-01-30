import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedCounter = ({ end = 100, duration = 2, prefix = '', suffix = '', delay = 0 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startValue = 0;
        const totalDuration = duration * 1000; // Convert to milliseconds
        const incrementTime = totalDuration / end;
        const timer = setInterval(() => {
            startValue += 1;
            if (startValue <= end) {
                setCount(startValue);
            } else {
                clearInterval(timer);
            }
        }, incrementTime);

        return () => clearInterval(timer);
    }, [end, duration]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <span>
                {prefix}{count}{suffix}
            </span>
        </motion.div>
    );
};

export default AnimatedCounter;
