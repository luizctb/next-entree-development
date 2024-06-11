"use client"


import { Navbar } from "@/components/navbar/Navbar";
import { CardRegistration } from "@/components/cards/CardRegistration";
import { information } from "../fakeDatas/FakeRegistration";
import { HomeBody, PageContainer } from "./layout";


export default function SearchResult() {
   const name = "SearchResult";

   return (      
      <PageContainer>
         <Navbar/>   
         <HomeBody>
            {information.map((item: { title: string; text: string; image: string; }, index: number) => {
               return(
                  <CardRegistration key={index} information={item} />
               ) 
            })}        
         </HomeBody>                
      </PageContainer>
   );
}

