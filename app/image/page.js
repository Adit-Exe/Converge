"use client"
// Make sure this script is available in _app.js or directly in this component if needed
import { useEffect, useRef } from 'react';

export default function GeneratedImage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const prompt = 'A futuristic city skyline at sunset with flying cars';

    // Load Puter script dynamically if needed
    const script = document.createElement('script');
    script.src = 'https://cdn.puter.com/puter.js';
    script.onload = () => {
      window.puter.ai.txt2img(prompt, false).then((image) => {
        image.classList.add(
          'rounded-xl',
          'shadow-lg',
          'border',
          'border-gray-300',
          'max-w-full'
        );

        if (containerRef.current) {
          containerRef.current.innerHTML = '';
          containerRef.current.appendChild(image);
        }
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-xl font-semibold mb-4">🖼️ AI Image Generator</h1>
      <div
        ref={containerRef}
        className="w-full max-w-4xl h-[300px] flex items-center justify-center border-2 border-dashed border-gray-400 bg-white p-4"
      >
        Loading your image...
      </div>
    </div>
  );
}
