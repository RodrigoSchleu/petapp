import './styles.css';

import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';


const Profile = () => {
    const [usuario,setUsuario] = useState({
        Nome:"Felipe",
        Sobrenome:"Costa Tavares",
        Telefone:"(71) 99324-5289",
        Cpf:"016.391.555-54",
        Rg:"12.791.402-16",
        DataDeNascimento:"20/03/1995"
    });
    return (
        <main>
            
            <div className='main__container tc_container'>
                <h1>Dados Pessoais</h1>
            {Object.keys(usuario).map((a, i) => {
                return(
                    <div className='type_content'>
                        <div className='type'>{a}</div>
                        <div className='content'>{usuario[a]}</div>
    });}
    const [endereco,setEndereco] = useState({
        estado:"BA",
        cidade:"Salvador",
        bairro:"Pituba",
        rua:"Alameda Florença",
        numero:"56",
        cep:"41830-460",
        complemento:"Edifício Tulio, Apartamento 904"
    });
    return (
        <main>
            <div className='main__container tc_container'>
            <h1>Endereço</h1>
            {Object.keys(endereco).map((a, i) => {
                return(
                    <div className='type_content'>
                        <div className='type'>{a}</div>
                        <div className='content'>{endereco[a]}</div>
            <div className="sidebar__menu">
                <a><Link reloadDocument to="editProfile"><Button styleType='dark' active={true}>Editar Perfil</Button></Link></a>
            </div>
        </main>
    );
}

export default Profile;