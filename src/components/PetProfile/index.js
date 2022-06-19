import './styles.css';

import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';


const PetProfile = () => {
    const [pet,setPet] = useState({
        nome:"Chulé",
        tipo:"Cachorro",
        raça:"SRD",
        sexo:"Macho",
        tamanho:"pequeno",
        dataDeNascimento:"20/03/1995",
        anotacao:"Tem alergia a amendoin"
    });
    
    return (
        <main>
            <div className='main__container'>
            {Object.keys(pet).map((a, i) => {
                return(
                    <div>
                        <div>{a}</div>
                        <div>{pet[a]}</div>
                    </div>
                );
            })}
            </div>
            
            <div className="sidebar__menu">
                <a><Link reloadDocument to="editPetProfile"><Button styleType='dark' active={true}>Editar Perfil</Button></Link></a>
            </div>
        </main>
    );
}

export default PetProfile;