'use client';

import Image from "next/image";
import Link from 'next/link';
import Lottie from 'lottie-react';
import blob from '/public/videos/blob.json';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const pRef = useRef(null);
  const lottieRef = useRef(null);

  useGSAP(() => {
    // Animate all images inside the container with stagger
    const images = containerRef.current.querySelectorAll('img');
    gsap.from(images, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    // Fade-in for button and paragraph
    gsap.from([buttonRef.current, pRef.current], {
      y: 30,
      delay: 2,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      stagger: 1,
      // scrollTrigger: {
      //   trigger: pRef.current,
      //   start: 'top 90%',
      // },
    });

    // Fade-in for Lottie background on load
    gsap.from(lottieRef.current, {
      opacity: 0,
      duration: 2,
      ease: 'power1.out',
    });

    // Fade-in for H1 tag with id "logo"
    gsap.from("#logo", {
      y: -50,
      duration: 2,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#logo",
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <>
      {/* Animated Image Container */}
      <div
        ref={containerRef}
        className="relative z-20 w-full max-w-screen-lg sm:h-[700px] h-[500px] mx-auto flex items-center justify-center"
      >
        <Image className="sm:w-16 sm:h-16 w-10 h-10 absolute top-12 left-24 rounded-2xl bg-white p-1" src="/images/dssqr.png" alt="dssqr" width={90} height={90} />
        <Image className="sm:w-16 sm:h-16 w-10 h-10 absolute top-12 right-24 rounded-2xl" src="/images/gmnisqr.png" alt="gmnisqr" width={90} height={90} />
        <Image className="sm:w-16 sm:h-16 w-10 h-10 absolute top-1/2 left-8 transform -translate-y-3/2 rounded-2xl bg-white p-1" src="/images/gptsqr.png" alt="gptsqr" width={90} height={90} />
        <img id="logo" className="relative bottom-16  z-10 sm:w-96 w-40"  src="/images/logo.png" alt="grksqr" />
        <Image className="sm:w-16 sm:h-16 w-10 h-10 absolute top-1/2 right-8 transform -translate-y-3/2  rounded-2xl" src="/images/grksqr.png" alt="grksqr" width={90} height={90} />
        <Image className="sm:w-16 sm:h-16 w-10 h-10 absolute sm:bottom-20 bottom-40 left-1/2 transform -translate-x-1/2 rounded-2xl" src="/images/mtasqr.png" alt="mtasqr" width={90} height={90} />
      </div>

      {/* Button and Paragraph Section */}
      <div className="sm:w-2xl w-96 flex flex-col items-center justify-self-center-safe absolute z-20">
        <button ref={buttonRef} className="bg-black text-white px-5 py-3 rounded-4xl mb-10 relative z-10">
          <Link href="/wspace">Get started</Link>
        </button>

        <p ref={pRef} className="text-wrap mx-5 p-5 bg-white shadow-2xl rounded-4xl ">
          Tumhaare sang aawaargi bhi
          Aawaargi bhi deti hai jaise sukoon
          Tumhaare sang har ek lamha
          Har ek lamha yaadein nayi main bunu
          Tum ho to subah nayi hai
          Tum ho to shaamein haseen hain
          Ek duniya sapno si hai
          Tum ho to is pe yaqeen hai
          Tum ho to sab achha hai
          Tum ho to waqt thama hai
          Tum ho to ye lamha hai
          Tum ho to iss mein sadaa hai
        </p>
      </div>

      {/* Lottie Background */}
      <div
        ref={lottieRef}
        className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden flex items-center justify-center"
      >
        <Lottie animationData={blob} loop />
      </div>
    </>
  );
}
