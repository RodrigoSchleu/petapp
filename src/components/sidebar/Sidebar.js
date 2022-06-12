import '../sidebar/Sidebar.css';
import Button from '../Button'
import logo from '../../assets/avatar.png';

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
                    <a><Button styleType='dark' active={true}>Home</Button></a>
                    <a><Button styleType='dark'>Perfil Pet</Button></a>
                    <a><Button styleType='dark'>Histórico de serviçoos</Button></a>
                    <a><Button styleType='dark'></Button></a>
                </div>
            </div>
            <div className='sidebar__footer'>
                <a><Button styleType='guide'>Guia do Usuário</Button></a>
                <div className='footer__line' />
                <a><Button styleType='footer'>Sair</Button></a>
            </div>
        </section>
    );
}
export default Sidebar;