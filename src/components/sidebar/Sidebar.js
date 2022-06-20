import '../sidebar/Sidebar.css';

import { Link, useNavigate } from 'react-router-dom';

import logo from '../../assets/avatar.png';
import Button from '../Button';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    let navigate = useNavigate();
    return (
        <section className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div id='topbar' className='topbar' style={{ marginBottom: "90px", height: "65px", padding: "10px 0 0" }}>
                <i onClick={() => closeSidebar()} className="fa-solid fa-x" id="sidebarIcon" aria-hidden="true"></i>
                <div className="sidebar__profile">
                    <div className="sidebar__img">
                        <img src={logo} alt="logo"/>
                    </div>
                </div>
            </div>
            <div className='sidebar__area'>
                <div className="sidebar__menu">
                    <a><Link to="/" onClick={() => closeSidebar()}><Button styleType='dark' active={true}>Home</Button></Link></a>
                    <a><Link to="profile" onClick={() => closeSidebar()}><Button styleType='dark'>Meu Perfil</Button></Link></a>
                    <a><Link to="profilePet" onClick={() => closeSidebar()}><Button styleType='dark'>Meus Pets</Button></Link></a>
                </div>
            </div>
            <div className='sidebar__footer'>
                <div className='footer__line' />
                <Button onClick={()=>{
                    localStorage.removeItem("usuario");
                    navigate('/');
                    document.location.reload(true);
                }} styleType='footer'>Sair</Button>
            </div>
        </section>
    );
}
export default Sidebar;