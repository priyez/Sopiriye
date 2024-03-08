import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis'
import { Page } from '../components/Page/index'
import {HeroComponent} from '../components/Hero/index'
import { removeLoader } from "../animation/index"
import { sanityClient } from "../sanity";
import { Todo } from "../typings";
import {Hero} from "../typings";

interface Props {
  todos: Todo[];
  heros: Hero[];
}

export default function IndexPage({ todos, heros }: Props) {

  const [loading, setLoading] = useState<number>(0); 
  const [complete, setComplete] = useState<boolean>(false); 


  
  useEffect(() => {
    const count = setInterval(() => {
      setLoading(loading => {
        if (loading < 10) {
          return loading + 1; // Return the updated loading value
        } else {
          clearInterval(count)
          removeLoader(setComplete)
          return 10;
        }
      })
    }, 30)


    const lenis = new Lenis();
   
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // Cleanup function if needed
    };
  }, []);

  return (
    <main className='main'>
      <div className="preloader">
        <div className="load"></div>
        <div className="progress" style={{width: `${loading}%` }}></div>
        <div className="counter">{loading}%</div>
        <div className="bground"></div>
      </div>
      {complete &&
      <>
      <HeroComponent  heros={heros}/>
      <Page todos={todos}/>
      </> }
    </main>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "todo" && featured != true] {
    _id,
    task,
    status,
  }`;
  const heroQuery = `*[_type == "hero"] {
    _id,
    title,
    subTitle,
  }`;

  const todos: Todo[] = await sanityClient.fetch(query);
  const heros: Hero[] = await sanityClient.fetch(heroQuery);
  
  return {
    props: {
      todos,
      heros,
    },
  };
};
