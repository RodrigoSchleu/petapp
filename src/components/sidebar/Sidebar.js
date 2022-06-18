import '../sidebar/Sidebar.css';

import { Link } from 'react-router-dom';

import logo from '../../assets/avatar.png';
import Button from '../Button';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <section className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div id='topbar' className='topbar' style={{ marginBottom: "90px", height: "65px", padding: "10px 0 0" }}>
                <i onClick={() => closeSidebar()} className="fa-solid fa-x" id="sidebarIcon" aria-hidden="true"></i>
                <div className="sidebar__profile">
                    <div className="sidebar__img">
                        <img src={logo} alt="logo" />
                    </div>
                </div>
            </div>
            <div className='sidebar__area'>
                <div className="sidebar__menu">
                    <a><Link to="/"><Button styleType='dark' active={true}>Home</Button></Link></a>
                    <a><Link to="profile"><Button styleType='dark'>Perfil</Button></Link></a>
                    <a><Link to="editPet"><Button styleType='dark'>Perfil Pet</Button></Link></a>
                    <a><Link to="historico"><Button styleType='dark'>Histórico de serviçoos</Button></Link></a>
                </div>
            </div>
            <div className='sidebar__footer'>
                <a><Button styleType='footer'>Sair</Button></a>
            </div>
        </section>
    );
}
export default Sidebar;