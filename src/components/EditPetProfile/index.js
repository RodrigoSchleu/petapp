import './styles.css';

import { Form } from '@unform/web';
import React, { useState } from 'react';

import Button from '../Button';
import Input from '../Input';
import { Link } from 'react-router-dom';

const EditPetProfile = () => {
    const [pet, setPet] = useState(JSON.parse(localStorage.getItem("pet")));

    function handleSubmit(data) {
        alert(JSON.stringify(data))
    }
    return (
        <main>
            <div className='main__container'>

                <h1>Editar dados do pet</h1>
                <Form className='form' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>Nome</label>
                        <Input name="name" type="text" className='input' placeholder={pet.name} disabled />
                    </div>

                    <div className='form-group'>
                        <label>Tipo de Animal</label>
                        <Input name="type" type="text" className='input' placeholder={pet.type} disabled />
                    </div>

                    <div className='form-group'>
                        <label>Raça</label>
                        <Input name="type" type="text" className='input' placeholder={pet.type} disabled />
                    </div>

                    <div className='form-group'>
                        <label>Sexo</label>
                        <Input name="sex" type="text" className='input' placeholder={pet.sex} disabled />
                    </div>

                    <div className='form-group'>
                        <label>Porte</label>
                        <Input name="size" type="text" className='input' placeholder={pet.size} disabled />
                    </div>

                    <div className='form-group'>
                        <label>Data de Nascimento</label>
                        <Input name="borndate" type="date" className='input' placeholder={pet.borndate} disabled />
                    </div>

                    <div className='form-group'>
                        <label>Observações</label>
                        <Input name="note" type="text" className='input' />
                    </div>
                    <div className="line-button-box">
                        <Button type="submit">Atualizar Dados</Button>
                        <Link to="/profilePet"><Button styleType='guide'>Voltar</Button></Link>
                    </div>
                </Form>

            </div>


        </main>
    );
}

export default EditPetProfile;