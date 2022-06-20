import './styles.css';

import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';
import image from '../../assets/caoputo.png';
import Box from '../Box';
import Api from '../../Api';


const PetProfile = () => {
    const [pet, setPet] = useState([
        {
            nome: "Chulé", tipo: "Cachorro", raça: "SRD", sexo: "Macho", tamanho: "pequeno",
            dataDeNascimento: "20/03/1995", anotacao: "Tem alergia a amendoin"
        },
        {
            nome: "Gato do pitagoras", tipo: "Gato", raça: "Persa da alemanha", sexo: "Femea", tamanho: "pequeno",
            dataDeNascimento: "12/07/2020", anotacao: "Tem alergia a Areia de praia"
        },
        {
            nome: "Milo", tipo: "Cachorro", raça: "SRD", sexo: "Macho", tamanho: "Médio",
            dataDeNascimento: "24/12/2018", anotacao: "Tem pele Sensivel, evitar areia e terra"
        },
        {
            nome: "Patolino", tipo: "Cachorro", raça: "Pincher", sexo: "Macho", tamanho: "pequeno",
            dataDeNascimento: "24/12/2018", anotacao: "Não é sociável com outros cachorros Não é sociável com outros cachorros"
        }
    ]
    );

    return (
        <main>
            <div className='main__container'>
                <div className='box-space-pets'>
                    <Link reloadDocument to="newPet">
                        <Button styleType='guide'>Adicionar novo Pet</Button>
                    </Link>
                    <h1 style={{margin: 0}}>Meus Pets</h1>
                    {pet.map((a, i) => {
                        return (
                            <Box>
                                <div className='box-icon' id='box-icon-pet'>
                                    <img src={image} alt="logo" />
                                </div>
                                <div className='pet-column'>
                                    <div className='profile-row-text'>
                                        <div className='profile-text'>
                                            Nome:<br />
                                            <span>{a.nome}</span>
                                        </div>
                                        <div className='profile-text'>
                                            Raça:<br />
                                            <span>{a.raça}</span>
                                        </div>
                                        <div className='profile-text'>
                                            Tipo:<br />
                                            <span>{a.tipo}</span>
                                        </div>
                                    </div>
                                    <div className='profile-row-text'>
                                        <div className='profile-text'>
                                            Data de Nacimento:<br />
                                            <span>{a.dataDeNascimento}</span>
                                        </div>
                                        <div className='profile-text'>
                                            Sexo:<br />
                                            <span>{a.sexo}</span>
                                        </div>
                                        <div className='profile-text'>
                                            Porte:<br />
                                            <span>{a.tamanho}</span>
                                        </div>
                                    </div>
                                    <div className='profile-row-text'>
                                        <div className='profile-text'>
                                            Anotações:<br />
                                            <span>{a.anotacao}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="line-button-pet">
                                    <Link reloadDocument to="editPetProfile">
                                        <Button styleType='dark'>Editar Perfil</Button>
                                    </Link>
                                    <Button styleType='delete'>Deletar Perfil</Button>
                                    <Link reloadDocument to="petService">
                                        <Button styleType='contratar'>Contratar Serviço</Button>
                                    </Link>
                                </div>
                            </Box>
                        );
                    })}
                </div>
            </div >
        </main >
    );
}

export default PetProfile;