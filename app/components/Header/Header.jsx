"use client"
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [time, setTime] = useState("");
    const [expanded, setExpanded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        setTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
        
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleExpand = function() {
        setExpanded(!expanded);
    }

    return (
        isLoading ? (
            null
        ) : (
            <header>
                <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, ease: "easeInOut"}}
                style={{ height: expanded ? '100vh' : '35px' }}
                className="header_container flex flex-col w-full px-4 md:px-8 fixed top-0 z-50 border-b border-black">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 bg-white/60 backdrop-blur-md -z-10"
                    />
                    <div className="header_top flex justify-between items-center z-10">
                        <Button
                            variant="link"
                            className="hover:no-underline p-0 font-normal lowercase"
                            onClick={handleExpand}
                        >
                            Info
                        </Button>
                        <p className="text-sm lowercase">{time}</p>
                    </div>
                    <AnimatePresence mode="wait">
                        {expanded && (
                            <motion.div
                                layout
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}  
                                exit={{ 
                                    opacity: 0, 
                                    y: 10, 
                                    transition: { duration: 0.5 }
                                }}
                                className="info flex flex-row justify-between items-center flex-wrap py-8 gap-4"
                            >
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                                    className="flex flex-row justify-between items-center flex-wrap w-full gap-4 z-20"
                                >
                                    <div className="about max-w-[600px]">
                                        <p className="text-sm text-pretty">
                                            <span className="pr-2 font-bold">about me</span>
                                            hey! i'm a frontend dev with a passion for delivering seamless user experiences. 
                                            i'm on the lookout for new opportunities to grow and expand my skills. i'm currently in 
                                            new jersey and open to remote positions or local to nyc & chicago.
                                        </p>
                                        <p className="text-xs italic pt-2 font-thin">this site was built with next.js, tailwind, and framer motion <Link 
                                            className="underline font-normal" 
                                            href="mailto:emmanueleperez@icloud.com">
                                                lmk what you think?
                                            </Link>
                                        </p>
                                    </div>
                                    <div className="experience">
                                        <ul className="[counter-reset:list-counter] [&>li]:pl-[2em] [&>li]:relative text-xs">
                                            <li className="[counter-increment:list-counter] before:content-[counter(list-counter,decimal-leading-zero)'\00a0\00a0\00a0'] before:absolute before:left-0 pb-4">
                                                web developer @ fiserv
                                                <br />
                                                (from 2022-present)
                                            </li>
                                            <li className="[counter-increment:list-counter] before:content-[counter(list-counter,decimal-leading-zero)'\00a0\00a0\00a0'] before:absolute before:left-0 pb-4">
                                                web developer @ real chemistry
                                                <br />
                                                (from 2021-2022)
                                            </li>
                                            <li className="[counter-increment:list-counter] before:content-[counter(list-counter,decimal-leading-zero)'\00a0\00a0\00a0'] before:absolute before:left-0 pb-4">
                                                b.s. in computer science
                                                <br />
                                                (graduated 2020)
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="links w-full lg:max-w-[400px]">
                                        <ul className="flex flex-col gap-2 ">
                                            <li className="flex flex-row justify-between items-center text-xs">
                                                <p className="font-medium">location</p>
                                                <p>new jersey, usa</p>
                                            </li>
                                            <li className="flex flex-row justify-between items-center text-xs">
                                                <p className="font-medium">email</p>
                                                <Link href="mailto:emmanueleperez@icloud.com" className="font-normal">emmanueleperez@icloud.com</Link>
                                            </li>
                                            <li className="flex flex-row justify-between items-center text-xs">
                                                <p className="font-medium">linkedin</p>
                                                <Link href="https://www.linkedin.com/in/emmanueleperez/" className="font-normal" target="_blank">@emmanueleperez</Link>
                                            </li>
                                            <li className="flex flex-row justify-between items-center text-xs">
                                                <p className="font-medium">github</p>
                                                <Link href="https://github.com/emmperez" className="font-normal" target="_blank">emmperez</Link>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </header>
        )   
    );
}