// Example setting up a GSAP ScrollTrigger animation on a React App

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Scroll() {
  const main = useRef();

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray('.box');
      boxes.forEach(box => {
        gsap.to(box, {
          x: 150,
          scrollTrigger: {
            trigger: box,
            start: 'bottom bottom',
            end: 'top 20%',
            scrub: true
            // markers: true,
          }
        });
      });
    },
    { scope: main }
  );

  return (
    <div>
      <section className='section flex-center column'>
        <h2>Basic ScrollTrigger with React</h2>
        <p>Scroll down to see the magic happen!!</p>
      </section>
      <div className='section flex-center column' ref={main}>
        <div className='box blue'>box</div>
        <div className='box blue'>box</div>
        <div className='box blue'>box</div>
      </div>
      <section className='section'></section>
    </div>
  );
}
