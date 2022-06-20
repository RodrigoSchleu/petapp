import './styles.css';

import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';
import Box from '../Box';
import image from '../../assets/caoputo.png';

const PetService = () => {
    const [servico, setServico] = useState([
        { nome: "Passeios com Marcelo", regiao: "Barra", preco: 150 },
        { nome: "Consulta AmePet", regiao: "Armação", preco: 100 },
        { nome: "Creche da Titia", regiao: "Brotas", preco: 125 }
    ]
    );

    return (
        <main>
            <div className='main__container'>
                <div className='box-space-services'>
                    {servico.map((a, i) => {
                        return (
                            <Box>
                                <div className='ad-img'>
                                    <img src={image} alt='' />
                                </div>
                                <div className='ad-info'>
                                    <div className='ad-title'>{a.nome}</div>
                                    <Link reloadDocument to="service"><Button styleType='default'>Verificar Informações</Button></Link>
                                </div>
                            </Box>
                        );
                    })}
                </div>
                <div className="line-button-box">
                        <Link to="/profilePet"><Button styleType='guide'>Voltar</Button></Link>
                    </div>
            </div>
        </main>
    );
}

export default PetService;