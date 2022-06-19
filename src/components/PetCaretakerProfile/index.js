import './styles.css';

import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';


const Profile = () => {
    const [usuario,setUsuario] = useState({
        Nome:"Marcelo",
        Sobrenome:"Passos de Moraes",
        Telefone:"(71) 99324-5289",
        
    });
    return (
        <main>
            
            <div className='main__container tc_container'>
                <h1>Dados do Colaborador</h1>
            {Object.keys(usuario).map((a, i) => {
                return(
                    <div className='type_content'>
                        <div className='type'>{a}</div>
                        <div className='content'>{usuario[a]}</div>
                    </div>
                );
            })}
            </div>
            
            
        </main>
    );
}

export default Profile;