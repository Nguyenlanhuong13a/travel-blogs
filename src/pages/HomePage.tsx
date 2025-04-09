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
          <div className="hero-content">
            <h1>Khám Phá Thế Giới Qua Blog Du Lịch</h1>
            <p>
              Chia sẻ những trải nghiệm du lịch độc đáo, địa điểm tuyệt vời và những mẹo hữu ích
              cho chuyến đi tiếp theo của bạn.
            </p>
            <Link to="/about" className="hero-cta">Tìm hiểu thêm</Link>
          </div>
        </section>

        <section className="featured-destinations">
          <h2 className="section-title">Điểm Đến Nổi Bật</h2>
          <div className="featured-grid">
            <div className="featured-item">
              <img src="/assets/images/featured/featured1.jpg" alt="Điểm đến nổi bật 1" />
              <div className="featured-content">
                <h3>Sapa - Vẻ đẹp miền sơn cước</h3>
                <p>Khám phá vẻ đẹp hùng vĩ của núi rừng Tây Bắc</p>
              </div>
            </div>
            <div className="featured-item">
              <img src="/assets/images/featured/featured2.jpg" alt="Điểm đến nổi bật 2" />
              <div className="featured-content">
                <h3>Phú Quốc - Đảo ngọc phương Nam</h3>
                <p>Tận hưởng biển xanh, cát trắng và nắng vàng</p>
              </div>
            </div>
            <div className="featured-item">
              <img src="/assets/images/featured/featured3.jpg" alt="Điểm đến nổi bật 3" />
              <div className="featured-content">
                <h3>Hội An - Phố cổ đèn lồng</h3>
                <p>Đắm chìm trong không gian cổ kính đầy màu sắc</p>
              </div>
            </div>
          </div>
        </section>

        <section className="posts-section">
          <h2>Bài Viết Mới Nhất</h2>
          <div className="posts-grid">
            {posts.map((post) => (
              <div className="post-item" key={post.id}>
                <BlogCard
                  id={post.id}
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
        </section>

        <section className="newsletter">
          <h3>Đăng Ký Nhận Bản Tin</h3>
          <p>Để không bỏ lỡ những bài viết mới và những địa điểm du lịch hấp dẫn, hãy đăng ký nhận bản tin của chúng tôi.</p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="newsletter-input"
              placeholder="Email của bạn"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter-button">Đăng ký</button>
          </form>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
