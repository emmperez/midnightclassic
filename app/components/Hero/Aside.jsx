"use client"
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { selectedWorks, miniSideProjects } from "@/app/data";

export default function Hero() {
    const [openFeatured, setOpenFeatured] = useState(false);
    const [openProjectId, setOpenProjectId] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 5000);
    }, []);


    const handleOpen = (id) => {
        setOpenProjectId(openProjectId === id ? null : id);
        setOpenFeatured(false);
    }

    const handleFeaturedClick = (id) => {
        if (openFeatured === id) {
            setTimeout(() => {
                setOpenFeatured(null);
                setOpenProjectId(false);
            }, 500); // Adjust the timeout duration as needed
        } else {
            setOpenFeatured(id);
            setOpenProjectId(false);
        }
    }

    return (        
        isLoading ? (
            null
        ) : (
            <section className="hero flex flex-wrap xl:flex-nowrap justify-center h-screen">
                <div className="hero-content flex-1 p-4 overflow-hidden">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ 
                            opacity: 0, 
                            y: 10, 
                            transition: { duration: 1 }
                        }}
                        className="heading w-full xl:w-auto xl:h-full px-4 md:px-8 flex justify-start items-end mb-4 mt-24 xl:mt-0">
                            <h1 className="text-6xl md:text-[100px] lg:text-[150px] xl:text-[200px] leading-none xl:leading-[160px] font-bold">
                                Emmanuel<br /> Perez
                            </h1>
                    </motion.div>   
                </div>
                <aside className="sidebar max-w-[600px] h-auto overflow-y-auto p-4">
                    <div className="sidebar-scroll">
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10, transition: { duration: 1 }}}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="featured-work flex flex-col gap-4 float-right w-full xl:max-w-[500px] my-24"
                        >
                            <ul className="[counter-reset:list-counter] [&>li]:pl-[2em] [&>li]:relative w-full lg:float-right lg:w-auto">
                                <h3 className="text-sm pb-4">selected works</h3>
                                {selectedWorks.map((project) => (
                                    <li key={project.id} className="flex flex-col justify-between items-start gap-4 pb-4 xl:max-w-[400px] xl:min-w-[500px] [counter-increment:list-counter] before:content-[counter(list-counter,decimal-leading-zero)'\00a0\00a0\00a0'] before:absolute before:left-0 before:text-xs xl:text-md">
                                        <div className="info flex flex-row justify-between items-start w-full">
                                            <div className="info flex gap-2">
                                                <h3 className="text-xs xl:text-md">{project.title}</h3>
                                                <p className="text-xs xl:text-md">{project.year}</p>
                                            </div>
                                            <Image 
                                                src={project.image}
                                                alt={project.title}
                                                width={1280}
                                                height={720}
                                                priority
                                                onClick={() => handleFeaturedClick(project.id)}
                                                className="w-full h-full object-cover max-w-[128px] lg:max-w-[256px] lg:max-h-[144px] filter grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
                                            />
                                        </div>
                                        <AnimatePresence>
                                            {openFeatured === project.id && (
                                                <motion.div 
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ 
                                                        opacity: 0, 
                                                        y: 10, 
                                                        transition: { duration: 1 }
                                                    }}
                                                    className="desc w-full pb-4"
                                                >
                                                    <p className="text-xs">{project.description}</p>
                                                    <ul className="flex flex-row gap-2 pt-4">
                                                        {project.tech.map((tech) => (
                                                            <li key={tech} className="text-xs lowercase italic">
                                                                {tech}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    {project.disclaimer && (
                                                        <p className="text-xs pt-4">{project.disclaimer}</p>
                                                    )}
                                                    <Link href={project.link} target="_blank" className="text-xs underline float-right">View</Link>
                                                </motion.div>
                                            )}   
                                        </AnimatePresence>             
                                    </li>
                                ))}                
                            </ul>
                            <ul className="w-full lg:float-right lg:w-auto">
                                <h3 className="text-sm pb-2">mini side projects &mdash; <span className="text-xs">{miniSideProjects.length > 0 && `0${miniSideProjects.length}`}</span></h3>
                                {miniSideProjects.map((project) => (
                                    <li key={project.id} className="flex flex-row justify-between items-center flex-wrap border-b border-black xl:max-w-[400px] xl:min-w-[500px] before:text-xs xl:text-base">
                                        <div className="info flex justify-between w-full items-center">
                                            <Button variant="ghost" onClick={() => handleOpen(project.id)} className="p-0 hover:bg-transparent">
                                                <h3 className="text-xs">{project.title}</h3>
                                            </Button>
                                            <p className="text-xs">{project.year}</p>
                                        </div>
                                        <AnimatePresence>
                                            {openProjectId === project.id && (
                                                <motion.div 
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ 
                                                        opacity: 0, 
                                                        y: 10, 
                                                        transition: { duration: 1 }
                                                    }}
                                                    className="desc w-full pb-4"
                                                >
                                                    {project.video ? (
                                                        <video 
                                                            autoPlay
                                                            muted
                                                            loop
                                                            playsInline
                                                            className="w-full h-full object-cover pb-4"
                                                            width={1280} 
                                                            height={720}
                                                        >
                                                            <source src={project.video} type="video/mp4" />
                                                            Your browser does not support the video tag.
                                                            <Image 
                                                                src={project.image} 
                                                                alt={project.title} 
                                                                width={1280} 
                                                                height={720} 
                                                                priority
                                                                className="w-full h-full object-cover pb-4"
                                                            />
                                                        </video>
                                                    ) : (
                                                        <Image 
                                                            src={project.image} 
                                                            alt={project.title} 
                                                            width={1280} 
                                                            height={720} 
                                                            priority
                                                            className="w-full h-full object-cover pb-4"
                                                        />
                                                    )}
                                                    <p className="text-xs pb-2">{project.description}</p>
                                                    <Link href={project.link} target="_blank" className="text-xs underline float-right">View</Link>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </li>
                                ))}
                            </ul>
                            <div className="disclaimer">
                                <p className="text-xs">* this is just the start of what&rsquo;s coming. more projects and updates are on the way—stay tuned!</p>
                            </div>
                        </motion.div>
                    </div>
                </aside>
            </section>
        )
    );
}