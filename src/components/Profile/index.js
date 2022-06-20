import './styles.css';
import React from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../Button';


const Profile = () => {
    let { userId } = useParams();

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
            <div className='main__container'>
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
            </div>
            
            <div className="sidebar__menu">
                <Link reloadDocument to="editProfile"><Button styleType='dark' active={true}>Editar Perfil</Button></Link>
            </div>
        
        </main>
    );
}

export default Profile;