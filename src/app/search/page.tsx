"use client"


import { Navbar } from "@/components/navbar/Navbar";
import { CardRegistration } from "@/components/cards/CardRegistration";
import { information } from "../fakeDatas/FakeRegistration";
import { HomeBody, PageContainer } from "./layout";
// import { listProjects } from "@/services/postsServices";
// import { useEffect, useState } from "react";


export default function SearchService() {

   // const [information, setInformation] = useState([])

   // async function findAllList() {
   //    const response = await listProjects();
   //    setInformation(response.data.results);
   // }

   // useEffect(() => {
   //    findAllList();
   // }, []);  

   return (      
      <PageContainer>
         <Navbar/>   
         <HomeBody>
            {information.map((item: { title: string; text: string; image: string; }, index: number) => {
               return(
                  <CardRegistration 
                     key={index}
                     information={item} 
                  />
               ) 
            })}        
         </HomeBody>                
      </PageContainer>
   );
}

