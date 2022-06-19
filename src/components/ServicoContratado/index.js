import './styles.css';

import { Form } from '@unform/web';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import vetpet from '../../assets/vetpet.png';
import Banner from '../Banner';
import Box from '../Box';
import Button from '../Button';
import Select from '../Select';
import Input from '../Input';


const Servico = () => {
    

    const [service, setService] = useState(
        { nome: "Passeio", tipo: "Passeios",range:"Barra",description:"Passeio individual com cachorro no porto da Barra durante 30 minutos", 
    preco:150 ,data:{valor:"17/06 - 10:00",usuario:null, icon:"fa-solid fa-calendar-plus"}, nomeUsuario: "Marcelo" }
    );

    const [pet, setPet] = useState(
       {nomePet:"Chulé"}
    
    )

    function handleSubmit(data) {
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
                                    Colaborador
                                </div>
                                <div className='price-service'>{service.nomeUsuario}</div>
                                <div className="sidebar__menu">
                                    <a><Link reloadDocument to="profilePetCaretaker"><Button styleType='dark' active={true}>Ver Colaborador</Button></Link></a>
                                </div>
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
                            Informações
                        </div>
                            <Box>
                                <div className='box-icon box-icon-price'>
                                    Hora
                                </div>
                                <div className='price-service'>{service.data.valor}</div>
                            </Box>
                            <Box>
                                <div className='box-icon box-icon-price'>
                                    Pet
                                </div>
                                <div className='price-service'>{pet.nomePet}</div>
                            </Box>
                            <Form className='form' onSubmit={handleSubmit}>
                                <div className='space_titlo'>
                                    Nota
                                </div>
                                <div className='form-group'>
                                    <Input name="score" type="number" className='input' />
                                </div>
                            
                                <div className='space_titlo'>
                                    Feedback
                                </div>
                                <div className='space_services'>
                                    
                                        <div className='form-group'>
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