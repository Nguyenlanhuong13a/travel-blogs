import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import BlogCard from '../components/BlogCard';
import postsData from '../data/posts.json';
import './HomePage.css';

interface Post {
  id: number;
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  imageUrl: string;
}

const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [email, setEmail] = useState('');

  useEffect(() => {
    // In a real application, this would be an API call
    setPosts(postsData);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the email to a server
    console.log('Subscribed with email:', email);
    alert('Cảm ơn bạn đã đăng ký nhận bản tin!');
    setEmail('');
  };

  return (
    <Layout>
      <div className="home-page">
        <section className="hero-section">
          <div className="hero-background">
            <img src="/assets/images/hero/hero-bg.jpg" alt="Hero background" />
          </div>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>Khám Phá Thế Giới Qua Blog Du Lịch</h1>
            <p>
              Chia sẻ những trải nghiệm du lịch độc đáo, địa điểm tuyệt vời và những mẹo hữu ích
              cho chuyến đi tiếp theo của bạn.
            </p>
            <div className="hero-buttons">
              <Link to="/about" className="hero-cta">Khám phá ngay</Link>
              <Link to="/contact" className="hero-secondary">Liên hệ với chúng tôi</Link>
            </div>
          </div>
        </section>

        <section className="featured-destinations">
          <div className="section-header">
            <span className="section-subtitle">Khám phá</span>
            <h2 className="section-title">Điểm Đến Nổi Bật</h2>
            <p className="section-description">Những địa điểm du lịch tuyệt vời nhất Việt Nam với cảnh quan thiên nhiên tuyệt đẹp và văn hóa độc đáo</p>
          </div>

          <div className="featured-grid">
            <div className="featured-item">
              <div className="featured-badge">Phổ biến</div>
              <div className="featured-item-image">
                <img src="/assets/images/featured/featured1.jpg" alt="Sapa - Vẻ đẹp miền sơn cước" />
              </div>
              <div className="featured-item-overlay"></div>
              <div className="featured-content">
                <h3>Sapa - Vẻ đẹp miền sơn cước</h3>
                <p>Khám phá vẻ đẹp hùng vĩ của núi rừng Tây Bắc</p>
              </div>
            </div>

            <div className="featured-item">
              <div className="featured-badge">Mới</div>
              <div className="featured-item-image">
                <img src="/assets/images/featured/featured2.jpg" alt="Phú Quốc - Đảo ngọc phương Nam" />
              </div>
              <div className="featured-item-overlay"></div>
              <div className="featured-content">
                <h3>Phú Quốc - Đảo ngọc phương Nam</h3>
                <p>Tận hưởng biển xanh, cát trắng và nắng vàng</p>
              </div>
            </div>

            <div className="featured-item">
              <div className="featured-badge">Đặc sắc</div>
              <div className="featured-item-image">
                <img src="/assets/images/featured/featured3.jpg" alt="Hội An - Phố cổ đèn lồng" />
              </div>
              <div className="featured-item-overlay"></div>
              <div className="featured-content">
                <h3>Hội An - Phố cổ đèn lồng</h3>
                <p>Đắm chìm trong không gian cổ kính đầy màu sắc</p>
              </div>
            </div>
          </div>
        </section>

        <section className="posts-section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Blog</span>
              <h2 className="section-title">Bài Viết Mới Nhất</h2>
              <p className="section-description">Những bài viết mới nhất về trải nghiệm du lịch, ẩm thực và văn hóa địa phương</p>
            </div>

            <div className="posts-grid">
              {posts.map((post) => (
                <div className="post-item" key={post.id}>
                  <BlogCard
                    slug={post.slug}
                    title={post.title}
                    date={post.date}
                    author={post.author}
                    excerpt={post.excerpt}
                    imageUrl={post.imageUrl}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="newsletter">
          <h3>Luôn Cập Nhật Thông Tin Du Lịch</h3>
          <p>Đăng ký nhận bản tin để không bỏ lỡ những bài viết mới, địa điểm du lịch hấp dẫn và ưu đãi độc quyền.</p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="newsletter-input"
              placeholder="Nhập địa chỉ email của bạn"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter-button">Đăng ký ngay</button>
          </form>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
