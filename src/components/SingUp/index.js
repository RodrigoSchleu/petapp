import './styles.css';

import { Form } from '@unform/web';
import React from 'react';
import { useEffect, useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import InputMask from '../InputMask';
import { Link } from 'react-router-dom';
import Api from '../../Api';

export default function SingIn() {

    const [cpf, setCpf] = useState()
    const [rg, setRg] = useState()
    const [nome, setNome] = useState()
    const [sobrenome, setSobrenome] = useState()
    const [telefone, setTelefone] = useState()
    const [email, setEmail] = useState()
    const [nascimento, setNascimento] = useState()
    const [senha, setSenha] = useState()

    function handleSubmit(data) {
        
            alert(JSON.stringify(data))
 
    }

    return (
        <Form className='form' onSubmit={handleSubmit}>
            <div className='line'>
                <div className='form-group'>
                    <label>Nome</label>
                    <Input onTextChange={text => setNome(text)} name="nome" type="text" className='input' />
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
                    <label>RG</label>
                    <InputMask mask="99999999-99" name="rg" type="text" className='input' />

                </div>
            </div>
            <div className='line'>
                <div className='form-group'>
                    <label>Data de Nascimento</label>

                    <InputMask mask="99-99-9999" name="bornDate" type="text" className='input' />
                </div>
            </div>
            {/* <div className='line'>
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
            </div> */}
            <div className="line-button-box">
                <Button type="submit">Cadastrar</Button>
                <Link to="/"><Button styleType='guide'>Voltar</Button></Link>
            </div>
        </Form>
    )
}