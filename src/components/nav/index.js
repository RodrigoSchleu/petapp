import './Navbar.css';

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
                <a href='#'>
                    <i class="fa-solid fa-bell"></i>
                </a>
                <a href='#'>
                    <i class="fa-solid fa-gear"></i>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;