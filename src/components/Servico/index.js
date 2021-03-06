import './styles.css';

import { Form } from '@unform/web';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import vetpet from '../../assets/vetpet.png';
import avatar from '../../assets/avatar.png';
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

    const [data, setData] = useState([{data:"20-04-2023 "},{data:"21-04-2023 "},{data:"22-04-2023 "},])
    const [dataSubmit, setDataSubmit] = useState();

    const listaData = () => {
        var lista = [];

        data.forEach(datahora => {
            const selectValue = {
                value:datahora.data,
                label:datahora.data
            }
            lista.push(selectValue)
        })
        return lista;
    }

    const [hora, sethora] = useState([{hora:"12:00"},{hora:"14:00"},{hora:"16:00"}])
    const [horaSubmit, setHoraSubmit] = useState();

    const listaHora = () => {
        var lista = [];

        hora.forEach(horadata => {
            const selectValue = {
                value:horadata.hora,
                label:horadata.hora
            }
            lista.push(selectValue)
        })
        return lista;
    }


    

    function handleSubmit(data) {
        if (dataSubmit!=null && horaSubmit!=null){

            console.log(dataSubmit)
            const dataJSON = {
    
                data:dataSubmit.value+horaSubmit.va
            }
            alert(JSON.stringify(dataJSON))
        }
        else {
            alert("Selecione todos os campos")
        }
        
 
    }

    return (


        <main>
            <div className='main__container'>
                <Banner>
                    <div className='box-icon box-icon-service'>
                        <i className='fa-solid fa-paw'></i>
                    </div>
                    <img src={vetpet} alt="Anúncio"></img>
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
                                <div className='form-group'>
                                    <label>Selecionar Data</label>
                                    <Select onChange={value => setDataSubmit(value)} name="data" type="text" placeholder='Escolha a data de agendamento'  options={listaData()} />
                                </div>
                                <div className='form-group'>
                                    <label>Selecionar Hora</label>
                                    <Select onChange={value => setHoraSubmit(value)} name="hora" type="text" placeholder='Escolha o horário de agendamento'  options={listaHora()} />
                                </div>
                                
                                <Button  type="submit">Solicitar Agendamento</Button>
                            </Form>
                        </div>

                    </div>


                </div>
            </div>
        </main>
    );
}


export default Servico;