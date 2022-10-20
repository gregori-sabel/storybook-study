import React from "react";

interface ButtonPorps{
  tailwindStyle?: string;
  color: string
}

export default function Button( {
   tailwindStyle = ' hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
   color
}: ButtonPorps) {
  console.log(tailwindStyle)
  
  return (
    <button 
      className={
        tailwindStyle
        +' '+ color
      } 
    >greg</button>

  )
}