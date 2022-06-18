import './styles.css';
import vetpet from '../../assets/vetpet.png';
import { useState } from 'react';
import Banner from '../Banner';
import Box from '../Box';

const Servico = () => {
    
    const [service, setService] = useState([
        { nome: "Passeio", tipo: "Passeios",range:"Barra",description:"Passeio individual com cachorro no porto da Barra durante 30 minutos", 
        preco:150 ,data: "17/06 - 10:00", nomeUsuario: "Marcelo" },
    ]);
    
    return (
        <main>
            {service.map((a, i) => {
                return(
                    
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
                                    Sobre o serviço
                                </div>
                                <div className='space_services'>
                                    <Box><div className='caixa-texto'>
                                        {a.description}
                                    </div></Box>
                                    <Box>
                                        <div className='box-icon box-icon-price'>
                                            Preço
                                        </div>
                                        <div className='price-service'>R$: {a.preco}</div>
                                        <div className='box-icon box-icon-price'>
                                            Colaborador
                                        </div>
                                        <div className='price-service'>{a.nomeUsuario}</div>
                                    </Box>
                                </div>
                            </div>
                            <div className='main__line line-size'/>
                            <div className='space_right'>
                                <div className='space_titlo'>
                                    Agendar serviço
                                </div>
                                <div className='space_services'>
                                <Box>
                                        <div className='box-icon-date'>
                                        <i class="fa-solid fa-calendar-plus"></i>
                                        </div>
                                        <div className='data-service'>{a.data}</div>
                                    </Box>
                                </div>
                            </div>
                        </div>
                    </div>
                );    
            })}
        </main>
    );
}


export default Servico;