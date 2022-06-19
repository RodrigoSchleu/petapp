import './styles.css';


import { Form } from '@unform/web';
import { useEffect, useState } from 'react';

import vetpet from '../../assets/vetpet.png';

import Banner from '../Banner';
import Box from '../Box';
import Select from '../Select';

const Servico = () => {
    

    const [service, setService] = useState(
        { nome: "Passeio", tipo: "Passeios",range:"Barra",description:"Passeio individual com cachorro no porto da Barra durante 30 minutos", 
    preco:150 ,data:[{valor:"17/06 - 10:00",usuario:null, icon:"fa-solid fa-calendar-plus"}], nomeUsuario: "Marcelo" }
    );

    const listaData = () => {
        var lista = [];
        service.data.map((a,i)=>{
            var obj = {value:a.valor,label:a.valor};
            lista.push(obj);
        });
        return lista;
    }

    const agendarHorario = (value) =>{
        var servico = service;
        var lista = servico.data;
        lista.map((a, i) => {
            if(a.valor === value.valor) {
                a.usuario = service.nomeUsuario;
            }
        })
        setService(servico);
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
                                    Colaborador
                                </div>
                                <div className='price-service'>{service.nomeUsuario}</div>
                            </Box>
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
                        </div>
                    </div>
                    <div className='main__line line-size'/>
                    <div className='space_right'>
                        <div className='space_titlo'>
                            Agendar serviço
                        </div>
                        <div className='space_services'>
                            {service.data.map((a, i) => {
                            return(
                                <Box>
                                    <div>
                                        <div onClick={()=>agendarHorario(a)} className='box-icon-date'>
                                        <i class={a.icon}></i>
                                        </div>
                                        <div className='data-service'>{a.valor}</div>
                                    </div>
                                </Box>
                                );
                            })}
                            <Form className='form'>
                                <div className='form-group'>
                                    <Select name="horario" options={listaData()} />
                                </div>
                            </Form>

                        </div>
                        
                    </div>

                    
                </div>
            </div>
        </main>
    );
}


export default Servico;