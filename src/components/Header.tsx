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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector('.nav');
      const mobileMenuBtn = document.querySelector('.mobile-menu-btn');

      if (menuOpen && nav && !nav.contains(event.target as Node) &&
          mobileMenuBtn && !mobileMenuBtn.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <Link to="/">Wanderlust</Link>
        </div>

        <button className={`mobile-menu-btn ${menuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          {menuOpen && (
            <button className="close-menu" onClick={toggleMenu} aria-label="Close menu">
              ✕
            </button>
          )}

          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Trang chủ</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>Điểm đến</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>Trải nghiệm</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>Giới thiệu</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Liên hệ</Link></li>
          </ul>

          {menuOpen && (
            <div className="mobile-nav-footer">
              <button className="nav-button">Đăng ký nhận tin</button>
            </div>
          )}
        </nav>

        <button className="nav-button">Đăng ký nhận tin</button>
      </div>
    </header>
  );
};

export default Header;
