import './styles.css';

import { Form } from '@unform/web';
import React from 'react';

import Button from '../Button';
import Input from '../Input';
import { Link } from 'react-router-dom';

const CreatePet = () => {
    function handleSubmit(data) {
        alert(JSON.stringify(data))
    }
    return (
        <main>
            <div className='main__container'>

                <Form className='form' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>Nome</label>
                        <Input name="name" type="text" className='input' />
                    </div>

                    <div className='form-group'>
                        <label>Tipo de Animal</label>
                        <Input name="pettype" type="text" className='input' />
                    </div>

                    <div className='form-group'>
                        <label>Raça</label>
                        <Input name="breed" type="text" className='input' />
                    </div>

                    <div className='form-group'>
                        <label>Sexo</label>
                        <Input name="sex" type="text" className='input' />
                    </div>

                    <div className='form-group'>
                        <label>Porte</label>
                        <Input name="size" type="text" className='input' />
                    </div>

                    <div className='form-group'>
                        <label>Data de Nascimento</label>
                        <Input name="borndate" type="date" className='input' />
                    </div>

                    <div className='form-group'>
                        <label>Observações</label>
                        <Input name="note" type="text" className='input' />
                    </div>


                    <Button type="submit">Criar Pet</Button>
                    <a><Link to="/profilePet"><Button styleType='footer'>Voltar</Button></Link></a>
                </Form>

            </div>


        </main>
    );
}

export default CreatePet;