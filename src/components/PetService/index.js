import './styles.css';

import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';





const PetService = () => {
    const [servico,setServico] = useState([
        {nome:"Passeios com Marcelo", regiao:"Barra", preco:150},
        {nome:"Consulta AmePet", regiao:"Armação", preco:100},
        {nome:"Creche da Titia", regiao:"Brotas", preco:125}
    ]
       );
    
    return (
        <main>



{servico.map((a, i) => {
    return(
        <div>
            <div className='main__container'>
                
                <div>
                    <div>Serviço</div>
                    <div>{a.nome}</div> 
                </div>  
                <div>
                    <div>Região: {a.regiao}</div> 
                </div>
                <div>
                    <div>Preço: R$:{a.preco},00</div> 
                </div>                  
                
            </div>
            <div className="sidebar__menu">
                <a><Link reloadDocument to="service"><Button styleType='dark' active={true}>Verificar Serviço</Button></Link></a>
            </div>
        </div>
    );
})}
                <br></br><a><Link to="/profilePet"><Button styleType='footer'>Voltar</Button></Link></a>
        
        </main>
    );
}

export default PetService;