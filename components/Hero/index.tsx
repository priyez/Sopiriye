import React,{useEffect} from 'react';
import {heroAnim} from '../../animation/index'




export const HeroComponent=({heros})=>{
    
  useEffect(() => {
  heroAnim()
  }, []);

    return (
        <div className='hero'>
          {heros.map((item, index) =>(

                <div key={index}>
                    <span className="ov-h">
<span className='hero-text' >{item.title .split(' ').map((word)=>{
    return word === '' ? <h1>&nbsp;</h1>
 : <h1>{word }</h1>
 
 })}</span>
</span>
<span className="ov-h">
            <p>{item.subTitle}</p>
            </span>
                </div>
                 
                       ))}
           
        </div>
        
    )
}