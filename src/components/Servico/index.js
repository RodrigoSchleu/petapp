import './styles.css';

import { Form } from '@unform/web';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import vetpet from '../../assets/vetpet.png';
import logo from '../../assets/avatar.png';
import Banner from '../Banner';
import Box from '../Box';
import Button from '../Button';
import Select from '../Select';
import Api from '../../Api';

const Servico = () => {


    const [service, setService] = useState(
        {
            nome: "Passeio", tipo: "Passeios", range: "Barra", description: "Passeio individual com cachorro no porto da Barra durante 30 minutos",

            preco: 150, data: [{ valor: "17/06 - 10:00", usuario: null, icon: "fa-solid fa-calendar-plus" }, { valor: "17/06 - 12:00", usuario: null, icon: "fa-solid fa-calendar-plus" }, { valor: "17/06 - 14:00", usuario: null, icon: "fa-solid fa-calendar-plus" }], nomeUsuario: "Marcelo"
        }
    );
    const [usuario, setUsuario] = useState({

        Nome: "Francelo",
        Sobrenome: "Passos de Moraes",
        Telefone: "(71) 99324-5289",


    });

    const [pet, setPet] = useState([
        { nomePet: "Chulé" }, { nomePet: "Milo" }, { nomePet: "Gato" }
    ])

    const listaData = () => {
        var lista = [];
        service.data.map((a, i) => {
            var obj = { value: a.valor, label: a.valor };
            lista.push(obj);
        });
        return lista;
    }


    const listaDataPet = () => {
        var lista = [];
        pet.map((a, i) => {
            var obj = { value: a.nomePet, label: a.nomePet };
            lista.push(obj);
        });
        return lista;
    }

    const agendarHorario = (value) => {
        var servico = service;
        var lista = servico.data;
        lista.map((a, i) => {
            if (a.valor === value.valor) {
                a.usuario = service.nomeUsuario;
            }
        })
        setService(servico);
    }

    function handleSubmit(data) {
        alert(JSON.stringify(data))
        // { email: 'test@example.com', password: '123456' }
    }

    return (


        <main>
            <div className='main__container'>
                <Banner>
                    <div className='box-icon box-icon-service'>
                        <i className='fa-solid fa-paw'></i>
                    </div>
                    <img src={vetpet} alt="Anúncio"></img>
                    <div className='service-sombra'><div className='box-service-title'>{service.tipo} com {service.nomeUsuario}</div></div>
                </Banner>
                <div className='main_spaces'>
                    <div className='space_left'>
                        <div className='space_titlo'>
                            Sobre o serviço
                        </div>
                        <div className='space_services'>
                            <Box><div className='caixa-texto'>
                                {service.description}
                            </div></Box>
                            <Box>
                                <div className='box-icon box-icon-price'>
                                    <img src={logo} alt="logo" />
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
                            <a href='https://api.whatsapp.com/send?phone=5571993245289&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20servi%C3%A7o%20na%20PetApp.' target='_blanck'><div className='button-whatsapp'>Entre em contato no whatsapp</div></a>
                        </div>
                    </div>
                    <div className='main__line line-size' />
                    <div className='space_right'>
                        <div className='space_titlo'>
                            Agendar este serviço
                        </div>
                        <div className='space_services'>
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
                            <Form className='form' onSubmit={handleSubmit}>
                                <Button type="submit">Solicitar Agendamento</Button>
                            </Form>
                        </div>

                    </div>


                </div>
            </div>
        </main>
    );
}


export default Servico;