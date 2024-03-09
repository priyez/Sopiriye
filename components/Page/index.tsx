import React from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Todo from '../Component/Todo/index';
import CodingPlaylist from '../Component/CodingPlaylist';
import BlogImg from  '../Utils/index';



export const Page=({todos})=>{
    // console.log(todos);
    // if (!todos || !Array.isArray(todos)) {
    //     return <div>No data available</div>;
    //   }
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);


    return (
        <div ref={container} className='container'>
            <div className='sticky'>
                <motion.div style={{ scale: scale5 }} className='el'>
                    <div className='cardContainer'>
                  
                       <Todo todos={todos} />
                     
                       <div className='bg'></div>
                    </div>
                </motion.div>
                <motion.div style={{ scale: scale4 }} className='el'>
                    <div className='sectionContainer'>
                        <div className='cardContainer'>
                           <CodingPlaylist />
<div className='bg'></div>
                        </div>

                    </div>
                </motion.div>
                 <motion.div style={{ scale: scale6 }} className='el'>
                    <div className='sectionContainer'>

                        <div className='cardContainer'>
                            <div className="blog-card">
<BlogImg/>
                                <a href="#" className="blog-details">
                                    <h2 className="blog-title">My <br className='hideDesktop' />  Blog</h2>
                                    <p>I like sharing learnings and knowledge with others.. </p>
                                    
                                </a>
                            </div>
                            <div className='bg'></div>
                        </div>

                    </div>
                </motion.div>
                <motion.div style={{ scale: scale8 }} className='el'>
                    <div className='sectionContainer'>

                        <div className='cardContainer'>
                            <div className="portfolio-card">
                            <svg width="25" height="25" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white" />
          </svg>
          <a href="#"  className="portfolio-details">
                                    <h2 className="portfolio-title">My <br className='hideDesktop' />  Portfolio</h2>
                                    <p>
Check out my portfolio and explore more about me. </p>
                                   


                                </a>
                            </div>
                            <div className='bg'></div>
                        </div>
                    </div>
                </motion.div>
                <motion.div style={{ scale: scale9 }} className='el'>
                    <div className='sectionContainer'>
                      
                        <div className='cardContainer'>
                        <div className="contact-card">
                                <img
                                    src="/images/dp.jpg"
                                    alt=""
                                    width="30"
                                    height="30"
                                    className="contact-image"
                                // placeholder='blur'
                                />

                                <div className="contact-details">
                                    <h2 className="contact-title">@Sopiriye</h2>
                            
                                    <a href='https://www.linkedin.com/in/sopiriye-jamabo-14b314151' >Connect</a>
                                </div>
                            </div>
                            <div className='bg'></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}



