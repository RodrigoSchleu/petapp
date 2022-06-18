import './styles.css';

import vetpet from '../../assets/vetpet.png';

import Banner from '../Banner';
import Box from '../Box';

const Servico = () => {
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
                            Sobre o serviço
                        </div>
                        <div className='space_services'>
                            <Box><div className='caixa-texto'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper tincidunt turpis, et ornare felis feugiat vel. Ut dictum ante nec dictum condimentum. Donec elementum, nunc sodales vestibulum mattis, mi diam vestibulum eros, convallis malesuada nibh ipsum et lacus. Duis ornare dictum dolor, vitae varius mi pulvinar sed. Nunc arcu mi, maximus id lorem quis, tristique condimentum nulla. Etiam in nunc neque. Nulla facilisi. Phasellus eget faucibus tellus. Nam consectetur turpis mauris, in aliquam neque lacinia eu.
                            </div></Box>
                            <Box>
                                <div className='box-icon box-icon-price'>
                                    Preço
                                </div>
                                <div className='price-service'>31/10 - 12:30</div>
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
                                <div className='data-service'>31/10/2022 - 12:30</div>
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}


export default Servico;