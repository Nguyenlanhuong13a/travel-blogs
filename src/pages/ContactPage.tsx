import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Animation effect when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });

    // Reset submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  const handleSocialShare = (platform: string) => {
    // In a real application, this would open share dialogs
    console.log(`Sharing on ${platform}`);
    alert(`Chia sẻ trên ${platform}`);
  };

  return (
    <Layout>
      <div className="contact-page">
        <h1>Liên Hệ Với Chúng Tôi</h1>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Thông Tin Liên Hệ</h2>

            <div className="info-item">
              <div className="info-icon">@</div>
              <div className="info-content">
                <h3>Email</h3>
                <p>info@travelblog.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">☎</div>
              <div className="info-content">
                <h3>Điện Thoại</h3>
                <p>+84 123 456 789</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">⌂</div>
              <div className="info-content">
                <h3>Địa Chỉ</h3>
                <p>123 Đường ABC, Quận XYZ<br />Thành phố Hồ Chí Minh, Việt Nam</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">⏰</div>
              <div className="info-content">
                <h3>Giờ Làm Việc</h3>
                <p>Thứ Hai - Thứ Sáu: 9:00 - 17:00<br />Thứ Bảy: 9:00 - 12:00</p>
              </div>
            </div>

            <div className="contact-map">
              Bản đồ sẽ được hiển thị ở đây
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Gửi Tin Nhắn Cho Chúng Tôi</h2>

            {formSubmitted && (
              <div className="form-success">
                Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Họ và tên</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nhập họ tên của bạn"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Số điện thoại</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+84 xxx xxx xxx"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Chủ đề</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Chọn chủ đề --</option>
                    <option value="general">Thông tin chung</option>
                    <option value="collaboration">Hợp tác</option>
                    <option value="feedback">Góp ý</option>
                    <option value="other">Khác</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Tin nhắn</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Nhập nội dung tin nhắn của bạn..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">Gửi tin nhắn</button>
            </form>
          </div>
        </div>

        <div className="contact-social">
          <h3>Kết nối với chúng tôi</h3>
          <div className="social-buttons">
            <button
              className="social-button facebook"
              onClick={() => handleSocialShare('Facebook')}
              aria-label="Facebook"
            >
              f
            </button>
            <button
              className="social-button twitter"
              onClick={() => handleSocialShare('Twitter')}
              aria-label="Twitter"
            >
              t
            </button>
            <button
              className="social-button instagram"
              onClick={() => handleSocialShare('Instagram')}
              aria-label="Instagram"
            >
              i
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
