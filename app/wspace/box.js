import React from 'react';
import Image from 'next/image';
import Markdown from 'react-markdown';

function Box(props) {
  return (
    <div
className="
  flex-shrink-0
  w-full max-w-[90vw] sm:max-w-[300px] lg:max-w-[500px]
  h-auto
  shadow-xl bg-white rounded-2xl
  p-4
  
  snap-center
"

    >
      <Image
        className="mx-auto"
        src={props.image}
        alt="Image"
        width={100}
        height={100}
      />
      <div className="font-sans whitespace-pre-wrap break-words mt-4">
        <Markdown>{props.text}</Markdown>
      </div>
    </div>
  );
}

export default Box;
