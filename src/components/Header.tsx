import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <Link to="/">Travel Blog</Link>
        </div>
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          {menuOpen && (
            <button className="close-menu" onClick={toggleMenu}>
              ✕
            </button>
          )}
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Trang chủ</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>Giới thiệu</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Liên hệ</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
