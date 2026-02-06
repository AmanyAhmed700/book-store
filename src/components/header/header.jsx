import './header.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import BookStoreContext from '../../context/bookStorContext';
import HeaderMiddle from './HeaderMiddle';

const Header = () => {
  const { cartInfoLength } = useContext(BookStoreContext);
  
  return (
    <header className="header">
      <div className="header-top">
        {/* Left: Logo */}
        <div className="logo">
          <span>e</span>Books
        </div>

        {/* Center: Nav Links */}
        <Navbar />

        {/* Right: Login + Cart */}
        <div className="header-top-actions">
          <div className="cart">
    
          </div>
          <div className="header-top-link">
            <Link to="/login"><i className="bi bi-person-fill"></i> Login</Link>
          </div>
        </div>
      </div>
      <HeaderMiddle />
    </header>
  );
};

export default Header;
