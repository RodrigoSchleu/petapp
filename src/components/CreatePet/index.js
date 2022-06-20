import './styles.css';

import { Form } from '@unform/web';
import React, {useRef} from 'react';

import Button from '../Button';
import Input from '../Input';
import { Link } from 'react-router-dom';

const CreatePet = () => {
    const formRef = useRef(null);

    function handleSubmit(data) {
        var usuarioid = JSON.parse(localStorage.getItem("usuario")).Id
        data.petOwnerId = usuarioid
        alert(JSON.stringify(data))
    }
    return (
        <main>
            <div className='main__container'>

                <Form className='form' ref={formRef} onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>Nome</label>
                        <Input name="name" type="text" className='input' />
                    </div>

                    <div className='form-group'>
                        <label>Tipo de Animal</label>
                        <Input name="type" type="text" className='input' />
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
                        <Input name="bornDate" type="date" className='input' />
                    </div>

                    <div className='form-group'>
                        <label>Observações</label>
                        <Input name="note" type="text" className='input' />
                    </div>
                    <div className="line-button-box">
                        <Button type="submit">Adicionar Pet</Button>
                        <Link to="/profilePet"><Button styleType='guide'>Voltar</Button></Link>
                    </div>
                </Form>

            </div>


        </main>
    );
}

export default CreatePet;