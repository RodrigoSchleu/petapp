import './styles.css';

import { Form } from '@unform/web';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../Button';
import Input from '../Input';


export default function SingIn() {
    let navigate = useNavigate();

    function handleSubmit(data) {
        navigate("main");
        //alert(JSON.stringify(data))
        // { email: 'test@example.com', password: '123456' }
    }

    return (
        <Form className='form' onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>E-mail</label>
                <Input name="email" type="email" className='input'/>
            </div>

            <div className='form-group'>
                <label>Senha</label>
                <Input name="password" type="password" className='input'/>
            </div>
            <Button type="submit">Fazer Login</Button>
            <p>Ainda não tem um cadastro? <Link to="register">inscreva-se aqui</Link></p>
        </Form>
    )
}