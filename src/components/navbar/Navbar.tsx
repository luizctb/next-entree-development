"use client"

import Image from 'next/image'
import { Button, InputNameCompany, InputNameProject, InputSpace, Nav, RightContainer } from './NavbarLayout';
import { SearchIcon } from 'lucide-react';

export function Navbar() {
  return (
    <Nav>      
      <Button>CADASTRAR NOVO PROJETO</Button>   

      <InputNameProject>
        <input type="text" placeholder="Nome do projeto" />
      </InputNameProject>

        <RightContainer>
         <InputNameCompany className="search-company">
            <input type="text" placeholder="Nome da Instituição/empresa" />
         </InputNameCompany>

         <InputSpace>            
          <i>
            <SearchIcon/>  
          </i>  
          <input type="text" placeholder="BUSCAR" /> 
                       
         </InputSpace>        
      </RightContainer>
    </Nav>
  );
}


