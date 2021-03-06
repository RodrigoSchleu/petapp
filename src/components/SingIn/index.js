import './styles.css';

import { Form } from '@unform/web';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../Button';
import Input from '../Input';
import Api from '../../Api';


export default function SingIn() {

    

    let navigate = useNavigate();
    function handleSubmit(data) {

        localStorage.setItem("usuario", JSON.stringify({
            Id: 1,
            Nome: "Rodrigo",
            Sobrenome: "Schleu",
            Telefone: "(71) 99324-5289",
            Cpf: "016.391.555-54",
            Rg: "12.791.402-16",
            DataDeNascimento: "20/03/1995",
            Email: data.email
        }));
        document.location.reload(true);
        
    }

    return (
        <Form className='form' onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>E-mail</label>
                <Input name="email" type="email" className='input' />
            </div>
            <div className='form-group'>
                <label>Senha</label>
                <Input name="password" type="password" className='input' />
            </div>
            <Button type="submit">Fazer Login</Button>
            <p>Ainda não tem um cadastro? <Link to="register">inscreva-se aqui</Link></p>
        </Form>
    )
}