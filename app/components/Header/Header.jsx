"use client"
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
    const [time, setTime] = useState("");
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
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
        <header>
            <div className="header_container flex flex-col border-b border-black w-full px-4 md:px-8">
                <div className="header_top flex justify-between items-center">
                    <Button
                        variant="link"
                        className="hover:no-underline p-0 font-normal lowercase"
                        onClick={handleExpand}
                    >
                        Info
                    </Button>
                    <Link href="/" className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </Link>
                    <p className="text-sm lowercase">{time}</p>
                </div>
                {expanded && (
                <div className="info flex flex-row justify-between items-center flex-wrap py-8 gap-4">
                    <div className="about max-w-[600px]">
                        <p className="text-sm text-pretty">
                            <span className="pr-2 font-bold">about me</span>
                            hey! i'm a frontend dev with a passion for collaborating with cross-functional 
                            teams to deliver seamless user experiences. i'm on the lookout for new opportunities 
                            to grow and expand my skills. i'm currently in new jersey and open to remote positions or 
                            local to nyc & chicago.
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
                                <Link href="https://www.linkedin.com/in/emmanueleperez/" className="font-normal">@emmanueleperez</Link>
                            </li>
                            <li className="flex flex-row justify-between items-center text-xs">
                                <p className="font-medium">github</p>
                                <Link href="https://github.com/emmperez" className="font-normal">emmperez</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                )}
            </div>
            
        </header>
    );
}