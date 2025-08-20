'use client';
import { useState, useEffect, useRef } from 'react';
import Script from 'next/script';
import Box from './box.js';
import Lottie from 'lottie-react';
import animationData from '/public/videos/background.json';
import { useGSAP } from '@gsap/react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [ques, setQues] = useState("");
  const [gpt, setGpt] = useState("gpt-4.1-nano");
  const [dsk, setDsk] = useState("deepseek-chat");
  const [grk, setGrk] = useState("grok-4");
  const [gmni, setGmni] = useState("gemini-2.0-flash-lite-001");
  const [mta, setMta] = useState("llama-4-maverick");

  const boxRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGpt("Loading...");
    setDsk("Loading...");
    setGrk("Loading...");
    setGmni("Loading...");
    setMta("Loading...");

    if (!window.puter) {
      const fallback = "Puter script not loaded.";
      setGpt(fallback);
      setDsk(fallback);
      setGrk(fallback);
      setGmni(fallback);
      setMta(fallback);
      return;
    }

    const fetchResponse = async (model, setter) => {
      try {
        const response = await window.puter.ai.chat(ques, { model });
        setter(response.message.content);
      } catch (error) {
        const errorMsg = error?.message || JSON.stringify(error) || "Unknown error";
        console.error("Fetch failed:", errorMsg);
        setter("Error fetching response.");
      }
    };

    fetchResponse("gpt-4.1-nano", setGpt);
    fetchResponse("deepseek-chat", setDsk);
    fetchResponse("x-ai/grok-4", setGrk);
    fetchResponse("google/gemini-2.0-flash-lite-001", setGmni);
    fetchResponse("meta-llama/llama-4-maverick", setMta);
  };




  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css"
        integrity="sha512-DxV+EoADOkOygM4IR9yXP8Sb2qwgidEmeqAEmDKIOfPRQZOWbXCzLC6vjbZyy0vPisbH2SyW27+ddLVCN+OMzQ=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <Script src="https://js.puter.com/v2/" strategy="afterInteractive" />

   <form
  onSubmit={handleSubmit}
  id="form"
  className="flex flex-col sm:flex-row gap-4 mt-20 relative z-10 shadow-xl bg-white rounded-[20px] p-2"
>
  <textarea
    id="question"
    value={ques}
    onChange={(e) => setQues(e.target.value)}
    className="resize overflow-auto focus:outline-none p-2 sm:w-96 w-80 rounded-xl"
    required
    name="story"
    rows="5"
    placeholder="Type your question here..."
  />
  <button
    type="submit"
    className="absolute bottom-3 right-3 bg-zinc-100 hover:bg-zinc-200 rounded-2xl px-5 py-3 text-black active:text-white flex items-center justify-center self-end sm:self-start"
  >
    <i className="fa-solid fa-paper-plane"></i>
  </button>
</form>


      <div
        className="h-fit flex items-start py-10 w-full overflow-x-auto overflow-y-hidden mt-10 gap-10 relative z-10 snap-x snap-mandatory"
      >


          <Box image="/images/gptrec.png" text={gpt} />
         <Box image="/images/dsrec.png" text={dsk} />
          <Box image="/images/grkrec.png" text={grk} />
         <Box image="/images/gmnirec.png" text={gmni} />
       <Box image="/images/mtarec.png" text={mta} />
      </div>


      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden flex items-center justify-center">
        <Lottie animationData={animationData} loop />
      </div>
    </div>
  );
}
