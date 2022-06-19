import './styles.css';

import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';





const PetProfile = () => {
    const [pet,setPet] = useState([
        {nome:"Chulé",tipo:"Cachorro",raça:"SRD",sexo:"Macho",tamanho:"pequeno",
        dataDeNascimento:"20/03/1995",anotacao:"Tem alergia a amendoin"},
        {nome:"Gato",tipo:"Gato",raça:"Persa",sexo:"Macho",tamanho:"pequeno",
        dataDeNascimento:"12/07/2020",anotacao:"Tem alergia a Areia de praia"},
        {nome:"Milo",tipo:"Cachorro",raça:"SRD",sexo:"Macho",tamanho:"Médio",
        dataDeNascimento:"24/12/2018",anotacao:"Tem pele Sensivel, evitar areia e terra"},
        {nome:"Patolino",tipo:"Cachorro",raça:"Pincher",sexo:"Macho",tamanho:"pequeno",
        dataDeNascimento:"24/12/2018",anotacao:"Não é sociável com outros cachorros"}
    ]
       );
    
    return (
        <main>



{pet.map((a, i) => {
    return(
        <div>
            <div className='main__container'>
                
                <div>
                    <div>Nome</div>
                    <div>{a.nome}</div> 
                </div>
                <div>
                    <div>Tipo</div>
                    <div>{a.tipo}</div> 
                </div>
                <div>
                    <div>Raça</div>
                    <div>{a.raça}</div> 
                </div>
                <div>
                    <div>Sexo</div>
                    <div>{a.sexo}</div> 
                </div>
                <div>
                    <div>Porte</div>
                    <div>{a.tamanho}</div> 
                </div>
                <div>
                    <div>Data de Nacimento</div>
                    <div>{a.dataDeNascimento}</div> 
                </div>
                <div>
                    <div>Anotações</div>
                    <div>{a.anotacao}</div> 
                </div>
                        
                
            </div>
            <div className="sidebar__menu">
                <a><Link reloadDocument to="editPetProfile"><Button styleType='dark' active={true}>Editar Perfil</Button></Link></a>
            </div>
            <div className="sidebar__menu">
                <a><Link reloadDocument to="petService"><Button styleType='dark' active={true}>Contratar Serviço</Button></Link></a>
            </div>
        </div>
    );
})}

            <div className="sidebar__menu">
                <a><Link reloadDocument to="newPet"><Button styleType='dark' active={true}>Adicionar Pet</Button></Link></a>
            </div>
        
        </main>
    );
}

export default PetProfile;