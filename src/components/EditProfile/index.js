import './styles.css';

import { Form } from '@unform/web';
import React from 'react';

import Button from '../Button';
import Input from '../Input';
import InputMask from '../InputMask';

import { Link } from 'react-router-dom';

const EditProfile = () => {
    function handleSubmit(data) {
        alert(JSON.stringify(data))
        // { email: 'test@example.com', password: '123456' }
    }
    return (
        <main>
            <div className='main__container'>
                <Form className='form' onSubmit={handleSubmit}>
                <h1>Dados Pessoais</h1>
                    <div className='form-group'>
                        <label>Nome</label>
                        <Input name="petownername" type="text" className='input' />
                    </div>

                    <div className='form-group'>
                        <label>Sobrenome</label>
                        <Input name="lastname" type="text" className='input' />
                    </div>

                    <div className='form-group'>
                        <label>Telefone</label>
                        <InputMask mask="(99) 99999-9999" name="phone" type="text" className='input' />
                    </div>

                    <div className='form-group'>
                        <label>CPF</label>
                        <InputMask mask="999.999.999-99" name="cpf" type="text" className='input' />
                    </div>
                    <div className='form-group'>
                        <label>RG</label>
                        <InputMask mask="99.999.999-99" name="rg" type="text" className='input' />
                    </div>
                    <div className='form-group'>
                        <label>Data de Nascimento</label>
                        <Input name="borndate" type="date" className='input' />
                    </div>
                    <h1>Endereço</h1>
                    <div className='form-group'>
                        <label>Estado</label>
                        <Input name="state" type="text" className='input' />
                    </div>
                    <div className='form-group'>
                        <label>Cidade</label>
                        <Input name="city" type="text" className='input' />
                    </div>
                    <div className='form-group'>
                        <label>Bairro</label>
                        <Input name="district" type="text" className='input' />
                    </div>
                    <div className='form-group'>
                        <label>Rua</label>
                        <Input name="street" type="text" className='input' />
                    </div>
                    <div className='form-group'>
                        <label>Número</label>
                        <Input name="number" type="text" className='input' />
                    </div>
                    <div className='form-group'>
                        <label>CEP</label>
                        <InputMask mask="99.999-999" name="cep" type="text" className='input' />
                    </div>
                    <div className='form-group'>
                        <label>Complemento</label>
                        <Input name="complement" type="text" className='input' />
                    </div>
                    <Button type="submit">Atualizar Dados</Button>

                    <a><Link to="/profile"><Button styleType='footer'>Voltar</Button></Link></a>

                </Form>

            </div>
        </main>
    );
}

export default EditProfile;