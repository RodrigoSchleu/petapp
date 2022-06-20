import './styles.css';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import banner from '../../assets/banner.png';
import caoputo from '../../assets/caoputo.png';
import vetpet from '../../assets/vetpet.png';
import Agromix from '../../assets/Agromix.png';
import petshoppertodemim from '../../assets/petshoppertodemim.png';
import amepet from '../../assets/amepet.png';
import Banner from '../Banner';


const Main = () => {
    const [servicosContratados, setServicosContratados] = useState([
        { nomeUsuario: "Roger", tipo: "Passeios", data: "17/06 - 10:00" },
        { nomeUsuario: "João", tipo: "Adestramento Cão Puto", data: "20/06 - 10:00" },
        { nomeUsuario: "Dog House 4.0", tipo: "Hotel", data: "17/06 - 10:00" },
        { nomeUsuario: "Hostel Pet", tipo: "Hospital Veterinário", data: "17/06 - 10:00" },
        { nomeUsuario: "Maria", tipo: "Cuidados da titia", data: "17/06 - 10:00" }
    ]);
    const [parceiros, setParceiros] = useState([
        { nomeParceiro: "amepet", tipo: "clinica" },
        { nomeParceiro: "petperto", tipo: "petshop" },
        { nomeParceiro: "agromix", tipo: "petcenter" }
    ]);
    return (
        <main>
            <div className='main__container'>
                <Banner>
                    <img src={banner} alt="Anúncio" />
                    <span>Publicidade</span>
                </Banner>
                <div className='main_spaces'>
                    <div className='space_left'>
                        <div className='space_titlo'>
                            Últimos Agendamentos
                        </div>
                        <div className='space_services'>
                            {servicosContratados.map((a, i) => {
                                var icone;
                                var descricao;
                                var color;
                                switch (a.tipo) {
                                    case "Hospital Veterinário":
                                        descricao = a.nomeUsuario + " - " + a.tipo;
                                        color = "#00AFBB";
                                        icone = "fa-solid fa-house-chimney-medical";
                                        break;
                                    case "Adestramento Cão Puto":
                                        descricao = a.tipo + " com " + a.nomeUsuario;
                                        color = "#2594E4";
                                        icone = "fa-solid fa-bone";
                                        break;
                                    case "Passeios":
                                        descricao = a.tipo + " com " + a.nomeUsuario;
                                        color = "#FBBB00";
                                        icone = "fa-solid fa-dog";
                                        break;
                                    case "Hotel":
                                        descricao = a.nomeUsuario + " - " + a.tipo;
                                        color = "#F14336";
                                        icone = "fa-solid fa-bell-concierge";
                                        break;
                                    case "Cuidados da titia":
                                        descricao = a.tipo + " com " + a.nomeUsuario;
                                        color = "#28B446";
                                        icone = "fa-solid fa-hand-holding-heart";
                                        break;
                                }
                                return (
                                    <Link to="contract">
                                        <div className='box-service'>
                                            <div className='box-icon' style={{ background: color }}>
                                                <i class={icone}></i>
                                            </div>
                                            <div className='box-info'>
                                                <div className='box-title'>{descricao}</div>
                                                <div className='box-date'>{a.data}</div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <div className='main__line' />
                    <div className='space_right'>
                        <div className='space_titlo'>
                            Conheça Nossos Parceiros!!
                        </div>
                        <div className='space_services'>
                            {parceiros.map((a, i) => {
                                var imagem;


                                switch (a.tipo) {
                                    case "petcenter":
                                        imagem = Agromix;
                                        break;
                                    case "petshop":
                                        imagem = petshoppertodemim;
                                        break;
                                    case "clinica":
                                        imagem = amepet;
                                        break;
                                }
                                return (<div className='ad-service'>
                                    <div className='ad-img'>
                                        <img src={imagem} />
                                    </div>
                                </div>);
                            })}
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