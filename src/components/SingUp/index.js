import './styles.css';

import { Form } from '@unform/web';
import React from 'react';

import Button from '../Button';
import Input from '../Input';

export default function SingIn() {

    function handleSubmit(data) {
        alert(JSON.stringify(data))
        // { email: 'test@example.com', password: '123456' }
    }

    return (
        <Form className='form' onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Nome</label>
                <Input name="nome" className='input'/>
            </div>
            <div className='form-group'>
                <label>E-mail</label>
                <Input name="email" type="email" className='input'/>
            </div>

            <div className='form-group'>
                <label>Senha</label>
                <Input name="password" type="password" className='input'/>
            </div>
            <Button type="submit">Fazer Login</Button>
        </Form>
    )
}