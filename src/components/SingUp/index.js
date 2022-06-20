import './styles.css';

import { Form } from '@unform/web';
import React from 'react';
import Button from '../Button';
import Input from '../Input';
import InputMask from '../InputMask';
import { Link } from 'react-router-dom';

export default function SingIn() {

    function handleSubmit(data) {
        alert(JSON.stringify(data))
        // { email: 'test@example.com', password: '123456' }
    }

    return (
        <Form className='form' onSubmit={handleSubmit}>
            <div className='line'>
                <div className='form-group'>
                    <label>Nome</label>
                    <Input name="nome" type="text" className='input' />
                </div>
                <div className='form-group'>
                    <label>Sobrenome</label>
                    <Input name="sobrenome" type="text" className='input' />
                </div>
            </div>
            <div className='line'>
                <div className='form-group'>
                    <label>E-mail</label>
                    <Input name="email" type="email" className='input' />
                </div>
                <div className='form-group'>
                    <label>Telefone</label>

                    <InputMask mask="(99) 99999-9999" name="phone" type="text" className='input' />

                </div>
            </div>
            <div className='line'>
                <div className='form-group'>
                    <label>Senha</label>
                    <Input name="password" type="password" className='input' />
                </div>
                <div className='form-group'>
                    <label>Confirmar Senha</label>
                    <Input name="confirmPassword" type="password" className='input' />
                </div>
            </div>
            <div className='line'>
                <div className='form-group'>
                    <label>Cpf</label>

                    <InputMask mask="999.999.999-99" name="cpf" type="text" className='input' />
                </div>
                <div className='form-group'>
                    <label>Cep</label>
                    <InputMask mask="99.999-999" name="cep" type="text" className='input' />

                </div>
            </div>
            <div className='line'>
                <div className='form-group'>
                    <label>Estado</label>
                    <Input name="estado" type="text" className='input' />
                </div>
                <div className='form-group'>
                    <label>Cidade</label>
                    <Input name="cidade" type="text" className='input' />
                </div>
            </div>
            <div className='line'>
                <div className='form-group'>
                    <label>Bairro</label>
                    <Input name="bairro" type="text" className='input' />
                </div>
                <div className='form-group'>
                    <label>Complemento</label>
                    <Input name="complemento" type="text" className='input' />
                </div>
            </div>
            <div className="line-button-box">
                <Button type="submit">Cadastrar</Button>
                <Link to="/"><Button styleType='guide'>Voltar</Button></Link>
            </div>
        </Form>
    )
}