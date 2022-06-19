import './styles.css';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Input from '../Input';
import InputMask from '../InputMask';
import { Form } from '@unform/web';


const Profile = () => {

    const [usuario,setUsuario] = useState(JSON.parse(localStorage.getItem("usuario")));

    const [endereco,setEndereco] = useState({
        estado:"BA",
        cidade:"Salvador",
        bairro:"Pituba",
        rua:"Alameda Florença",
        numero:"56",
        cep:"41830-460",
        complemento:"Edifício Tulio, Apartamento 904"
    });
    return (
        <main>
            {/* <div className='main__container'>
            {Object.keys(usuario).map((a, i) => {
                return(
                    <div className='profile-box-text'>
                        <div>
                        {a}:<br/>
                        <span>{usuario[a]}</span>
                        </div>
                    </div>
                );
            })}
            </div>

            <div className='main__container'>
            {Object.keys(endereco).map((a, i) => {
                return(
                    <div>
                        <div>{a}</div>
                        <div>{endereco[a]}</div>
                    </div>
                );
            })}
            </div> */}
            <div className='main__container'>
                <Form className='form'>
                <h1>Dados Pessoais</h1>
                    <div className='form-group'>
                        <label>Nome</label>
                        <Input name="petownername" type="text" className='input' placeholder={usuario.Nome} disabled />
                    </div>

                    <div className='form-group'>
                        <label>Sobrenome</label>
                        <Input name="lastname" type="text" className='input' placeholder={usuario.Sobrenome} disabled  />
                    </div>

                    <div className='form-group'>
                        <label>Telefone</label>
                        <InputMask mask="(99) 99999-9999" name="phone" type="text" className='input' placeholder={usuario.Telefone} disabled />
                    </div>

                    <div className='form-group'>
                        <label>CPF</label>
                        <InputMask mask="999.999.999-99" name="cpf" type="text" className='input' placeholder={usuario.Cpf} disabled />
                    </div>
                    <div className='form-group'>
                        <label>RG</label>
                        <InputMask mask="99.999.999-99" name="rg" type="text" className='input' placeholder={usuario.Rg} disabled />
                    </div>
                    <div className='form-group'>
                        <label>Data de Nascimento</label>
                        <Input name="borndate" type="text" className='input' placeholder={usuario.DataDeNascimento} disabled />
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <Input name="email" type="text" className='input' placeholder={usuario.Mail} disabled />
                    </div>
                    <h1>Endereço</h1>
                    <div className='form-group'>
                        <label>Estado</label>
                        <Input name="city" type="text" className='input' placeholder={endereco.estado} disabled />
                    </div>
                    <div className='form-group'>
                        <label>Cidade</label>
                        <Input name="city" type="text" className='input' placeholder={endereco.cidade} disabled />
                    </div>
                    <div className='form-group'>
                        <label>Bairro</label>
                        <Input name="district" type="text" className='input' placeholder={endereco.bairro} disabled />
                    </div>
                    <div className='form-group'>
                        <label>Rua</label>
                        <Input name="street" type="text" className='input' placeholder={endereco.rua} disabled />
                    </div>
                    <div className='form-group'>
                        <label>Número</label>
                        <Input name="number" type="text" className='input' placeholder={endereco.numero} disabled />
                    </div>
                    <div className='form-group'>
                        <label>CEP</label>
                        <InputMask mask="99.999-999" name="cep" type="text" className='input' placeholder={endereco.cep} disabled />
                    </div>
                    <div className='form-group'>
                        <label>Complemento</label>
                        <Input name="complement" type="text" className='input' placeholder={endereco.complemento} disabled />
                    </div>

                </Form>
            <br></br>
            
            <div className="sidebar__menu">
                <a><Link reloadDocument to="editProfile"><Button styleType='dark' active={true}>Editar Perfil</Button></Link></a>
            </div>
            </div>
        
        </main>
    );
}

export default Profile;