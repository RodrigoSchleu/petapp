import './styles.css';

import { Form } from '@unform/web';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import avatar from '../../assets/avatar.png';
import vetpet from '../../assets/vetpet.png';
import Banner from '../Banner';
import Box from '../Box';
import Button from '../Button';
import Select from '../Select';
import Input from '../Input';
import Api from '../../Api';


const Servico = () => {
    const [usuario, setUsuario] = useState({

        Nome: "Francelo",
        Sobrenome: "Passos de Moraes",
        Telefone: "(71) 99324-5289",

    });

    const [service, setService] = useState(
        {
            nome: "Passeio", tipo: "Passeios", range: "Barra", description: "Passeio individual com cachorro no porto da Barra durante 30 minutos",
            preco: 150, data: { valor: "17/06 - 10:00", usuario: null, icon: "fa-solid fa-calendar-plus" }, nomeUsuario: "Marcelo"
        }
    );

    const [pet, setPet] = useState(
        { nomePet: "Chulé" }

    )

    function handleSubmit(data) {
        var usuarioid = JSON.parse(localStorage.getItem("usuario")).Id
        var serviceid = JSON.parse(localStorage.getItem("usuario")).Id
        data.serviceId = serviceid
        data.petOwnerId = usuarioid
        alert(JSON.stringify(data))

        // { email: 'test@example.com', password: '123456' }
    }

    return (

        <main>
            <div className='main__container'>
                <Banner>
                    <div className='box-icon box-icon-service'>
                        <i className='fa-solid fa-bone'></i>
                    </div>
                    <img src={vetpet} alt="Anúncio" />
                </Banner>
                <div className='main_spaces'>
                    <div className='space_left'>
                        <div className='space_titlo'>
                            {service.tipo} com {service.nomeUsuario}
                        </div>
                        <div className='space_services'>
                            <Box><div className='caixa-texto'>
                                {service.description}
                            </div></Box>
                            <Box>
                                <div className='box-icon box-icon-price'>
                                    Preço
                                </div>
                                <div className='price-service'>R$: {service.preco}</div>
                            </Box>
                            <Box>
                                <div className='box-icon box-icon-price'>
                                    Região
                                </div>
                                <div className='price-service'>{service.range}</div>
                            </Box>
                            <Box>
                                <div className='box-icon box-icon-price'>
                                    <img src={avatar} alt="logo" />
                                </div>
                                <div className='info-profile-box'>
                                    {Object.keys(usuario).map((a, i) => {
                                        return (
                                            <div className='profile-box-text'>
                                                <div className='profile-text'>
                                                    {a}:<br />
                                                    <span>{usuario[a]}</span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </Box>
                        </div>
                    </div>
                    <div className='main__line line-size' />
                    <div className='space_right'>
                        <div className='space_titlo'>
                            Informações
                        </div>
                        <Form className='form' onSubmit={handleSubmit}>
                            <div className='space_services'>
                                <Box>
                                    <div className='box-icon-date'>
                                        <i class="fa-solid fa-calendar-check"></i>
                                    </div>
                                    <div className='data-service'>{service.data.valor}</div>
                                </Box>
                                <Box>
                                    <div className='box-icon-date'>
                                        <i class="fa-solid fa-paw"></i>
                                    </div>
                                    <div className='data-service'>{pet.nomePet}</div>
                                </Box>
                                <div className='form-group'>
                                    <label>Nota</label>
                                    <Input name="score" type="number" className='input' />
                                </div>
                                <div className='form-group'>
                                    <label>Feedback</label>
                                    <Input name="feedback" type="text" className='input' />
                                </div>

                            </div>
                            <div className='line'>
                                <Button type="submit">Enviar Feedback</Button>
                            </div>
                        </Form>

                    </div>




                </div>
            </div>
        </main>
    );
}


export default Servico;