import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ sidebarOpen, openSidebar }) => {
    return (
        <nav className='navbar' id='navbar'>
            <div className='nav_icon' onClick={() => openSidebar()}>
                <i class="fa-solid fa-bars"></i>
            </div>

            <div className='navbar__left'>
                <div>Painel de Gerenciamento</div>
            </div>

            <div className='navbar__right'>
                <Link to='profile'><i class="fa-solid fa-user"></i></Link>
                <Link to='profilePet'><i class="fa-solid fa-paw"></i></Link>
                <Link to='profile/editProfile'><i class="fa-solid fa-gear"></i></Link>
            </div>
        </nav>
    );
}

export default Navbar;