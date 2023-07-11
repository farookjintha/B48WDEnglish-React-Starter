import Logo from '../../assets/logos/logo.png';
import './Header.css';

const Header = () => {
    const username = 'Farook J';
    return (
        <div className="header-container">
            <div className="header-left">
                <img src={Logo} width='50' alt='Logo' />
            </div>
            <div className="header-right">
                <div>Welcome, {username}</div>
            </div>
        </div>
    )
};

export default Header;