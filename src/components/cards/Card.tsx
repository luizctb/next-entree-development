"use client"
import { information } from "@/app/FakeDatas";
import Image from "next/image";

export function Card() {
   console.log(information)

   return (
      <div>
         <h2>{information[0].title}</h2>
         <p>{information[0].text}</p>
         <Image src={information[0].image} alt="Imagem" width={500} height={500} />
         <span>{information[0].text1}</span>
      </div>
   )
  
}