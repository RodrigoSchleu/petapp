import './styles.css';

import { Form } from '@unform/web';
import React from 'react';

import Button from '../Button';
import Input from '../Input';
import InputMask from '../InputMask';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import Api from '../../Api';



const EditProfile = () => {

    const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem("usuario")));

    const [endereco, setEndereco] = useState({
        estado: "BA",
        cidade: "Salvador",
        bairro: "Pituba",
        rua: "Alameda Florença",
        numero: "56",
        cep: "41830-460",
        complemento: "Edifício Tulio, Apartamento 904"
    });

    function handleSubmit(data) {
        alert(JSON.stringify(data))
        // { email: 'test@example.com', password: '123456' }
    }
    return (
        <main>
            <div className='main__container'>
                <h1>Editar Dados Pessoais</h1>
                <Form className='form' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>Nome</label>
                        <Input name="petownername" type="text" className='input' />
                    </div>

                    <div className='form-group'>
                        <label>Sobrenome</label>
                        <Input name="lastname" type="text" className='input' />
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <Input name="email" type="text" className='input' />
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
                    <div className="line-button-box">
                        <Button type="submit">Atualizar Dados</Button>
                        <Link to="/profile"><Button styleType='guide'>Voltar</Button></Link>
                    </div>
                </Form>

            </div>
        </main>
    );
}

export default EditProfile;