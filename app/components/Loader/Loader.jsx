"use client"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);
    const [count, setCount] = useState(0);
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [showCoords, setShowCoords] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (isLoading) {
                setCount(prevCount => {
                    if (prevCount < 27) {
                        return prevCount + 1;
                    } else if (prevCount === 27) {
                        setLatitude(40.9168);
                        setLongitude(-74.1718);
                        setTimeout(() => setCount(97), 500);
                        return prevCount;
                    } else if (prevCount === 97) {
                        setTimeout(() => setCount(prevCount + 1), 500);
                        return prevCount;
                    } else if (prevCount < 100) {
                        return prevCount + 1;
                    } else {
                        setIsLoading(false);
                    }
                    return prevCount;
                });

                setLatitude(prevLat => {
                    if (prevLat < 40.9168) {
                        return Math.min(prevLat + (40.9168 / 100), 40.9168);
                    } else {
                        return prevLat;
                    }
                });

                setLongitude(prevLong => {
                    if (prevLong > -74.1718) {
                        return Math.max(prevLong - (74.1718 / 100), -74.1718);
                    } else {
                        return prevLong;
                    }
                });

                if (count < 27) {
                    setShowCoords(prev => !prev);
                } else {
                    setShowCoords(true);
                }
            }
        }, 100);

        return () => clearInterval(interval);
    }, [isLoading, count]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="loader w-full h-screen mx-auto flex justify-center items-center bg-black px-4 overflow-hidden no-scrollbar"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                >
                    <div className="loader_container w-full h-full mx-auto relative">
                        <div className="loader_text absolute top-0 right-0 xl:right-[27%]">
                            <h1 className="text-8xl xl:text-[300px] text-[#F8F6F2] font-bold">{count}</h1>
                        </div>
                        <div className="loader_content absolute inset-0 flex justify-center items-center">
                            <div className="coords">
                                <motion.p
                                    className="text-[#F8F6F2] text-xs"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: count < 27 ? (showCoords ? 1 : 0) : 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {latitude.toFixed(4)}° N, {longitude.toFixed(4)}° W
                                </motion.p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}   