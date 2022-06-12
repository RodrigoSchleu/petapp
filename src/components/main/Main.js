import './Main.css';
import banner from '../../assets/banner.png';
import caoputo from '../../assets/caoputo.png';
import vetpet from '../../assets/vetpet.png';

const Main = () => {
    return (
        <main>
            <div className='main__container'>
                <div className='main__banner'>
                    <img src={banner} alt="Anúncio" />
                    <span>Publicidade</span>
                </div>
                <div className='main_spaces'>
                    <div className='space_left'>
                        <div className='space_titlo'>
                            Últimos Agendamentos
                        </div>
                        <div className='space_services'>
                            <div className='box-service'>
                                <div className='box-icon' style={{ background: "#FBBB00" }}>
                                    <i class="fa-solid fa-dog"></i>
                                </div>
                                <div className='box-info'>
                                    <div className='box-title'>Passeios com Paulo Pulo</div>
                                    <div className='box-date'>31/10 - 12:30</div>
                                </div>
                            </div>
                            <div className='box-service'>
                                <div className='box-icon' style={{ background: "#2594E4" }}>
                                    <i class="fa-solid fa-bone"></i>
                                </div>
                                <div className='box-info'>
                                    <div className='box-title'>Adestramento Cão Puto</div>
                                    <div className='box-date'>31/10 - 12:30</div>
                                </div>
                            </div>
                            <div className='box-service'>
                                <div className='box-icon' style={{ background: "#F14336" }}>
                                    <i class="fa-solid fa-bell-concierge"></i>
                                </div>
                                <div className='box-info'>
                                    <div className='box-title'>Hotel Cantinho Feliz</div>
                                    <div className='box-date'>31/10 - 12:30</div>
                                </div>
                            </div>
                            <div className='box-service'>
                                <div className='box-icon' style={{ background: "#00AFBB" }}>
                                    <i class="fa-solid fa-house-chimney-medical"></i>
                                </div>
                                <div className='box-info'>
                                    <div className='box-title'>Amepet - Hospital Veterinário</div>
                                    <div className='box-date'>31/10 - 12:30</div>
                                </div>
                            </div>
                            <div className='box-service'>
                                <div className='box-icon' style={{ background: "#28B446" }}>
                                    <i class="fa-solid fa-hand-holding-heart"></i>
                                </div>
                                <div className='box-info'>
                                    <div className='box-title'>Cuidados da Titia</div>
                                    <div className='box-date'>31/10 - 12:30</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main__line' />
                    <div className='space_right'>
                        <div className='space_titlo'>
                            Serviços Disponíveis
                        </div>
                        <div className='space_services'>
                            <div className='ad-service'>
                                <div className='ad-img'>
                                    <img src={vetpet} alt='' />
                                </div>
                                <div className='ad-info'>
                                    <div className='ad-title'>Amepet - Hospital Veterinário</div>
                                    <div className='ad-button'>
                                        <i class="fa-solid fa-house-chimney-medical"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='ad-service'>
                                <div className='ad-img'>
                                    <img src={caoputo} alt='' />
                                </div>
                                <div className='ad-info'>
                                    <div className='ad-title'>Adestramento Cão Puto</div>
                                    <div className='ad-button'>
                                        <i class="fa-solid fa-bone"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='ad-service'>
                                <div className='ad-img'>
                                    <img src={banner} alt='' />
                                </div>
                                <div className='ad-info'>
                                    <div className='ad-title'>Petz - Loja</div>
                                    <div className='ad-button'>
                                        <i class="fa-solid fa-paw"></i>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='menu-bottom'>
                <i class="fa-solid fa-paw"></i>
                <div class="menu-bottom-img">
                    <img src="/static/media/avatar.29a56ea42088a237517c.png" alt="logo" />
                </div>
                <i class="fa-solid fa-basket-shopping"></i>
            </div>
        </main>
    );
}

export default Main;