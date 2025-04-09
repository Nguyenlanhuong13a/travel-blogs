import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-about">
            <div className="footer-logo">Wanderlust</div>
            <p>Khám phá những điểm đến tuyệt vời trên khắp thế giới cùng với những trải nghiệm độc đáo và những câu chuyện hấp dẫn.</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f">f</i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram">i</i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter">t</i>
              </a>
            </div>
          </div>

          <div className="footer-nav-container">
            <div className="footer-nav-section">
              <h3 className="footer-nav-title">Khám Phá</h3>
              <div className="footer-nav">
                <Link to="/">Trang chủ</Link>
                <Link to="/about">Điểm đến</Link>
                <Link to="/about">Trải nghiệm</Link>
                <Link to="/about">Hình ảnh</Link>
              </div>
            </div>

            <div className="footer-nav-section">
              <h3 className="footer-nav-title">Thông Tin</h3>
              <div className="footer-nav">
                <Link to="/about">Giới thiệu</Link>
                <Link to="/contact">Liên hệ</Link>
                <Link to="/about">Chính sách</Link>
                <Link to="/about">FAQ</Link>
              </div>
            </div>

            <div className="footer-nav-section">
              <h3 className="footer-nav-title">Liên Hệ</h3>
              <div className="footer-nav">
                <a href="mailto:info@wanderlust.com">info@wanderlust.com</a>
                <a href="tel:+84123456789">+84 123 456 789</a>
                <a href="#">Hà Nội, Việt Nam</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            &copy; {currentYear} Wanderlust. Tất cả quyền được bảo lưu. Thiết kế bởi <a href="#" className="underline-link">Wanderlust Team</a>
          </div>
        </div>
      </div>

      <div
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </div>
    </footer>
  );
};

export default Footer;
