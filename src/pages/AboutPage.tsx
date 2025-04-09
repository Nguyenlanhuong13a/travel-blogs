import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <Layout>
      <div className="about-page">
        <h1>Giới Thiệu Về Blog Du Lịch</h1>

        <div className="about-content">
          <div className="about-image">
            <img src="/assets/images/about/about.jpg" alt="Người sáng lập blog" />
          </div>

          <div className="about-text">
            <h2>Chào Mừng Đến Với Blog Du Lịch!</h2>

            <p>
              Blog Du Lịch được thành lập vào năm 2023 với mục tiêu chia sẻ những trải nghiệm du lịch
              thực tế, hữu ích và đáng tin cậy đến với cộng đồng yêu thích khám phá và du lịch.
            </p>

            <p>
              Chúng tôi là những người đam mê du lịch, luôn khao khát được khám phá những vùng đất mới,
              trải nghiệm những nền văn hóa khác nhau và ghi lại những khoảnh khắc tuyệt vời trên hành trình.
              Với niềm đam mê và kinh nghiệm nhiều năm, chúng tôi mong muốn mang đến cho bạn những thông tin
              chất lượng và đáng tin cậy nhất.
            </p>

            <p>
              Tại Blog Du Lịch, bạn sẽ tìm thấy:
            </p>

            <ul>
              <li>Những bài viết chi tiết về các điểm đến hấp dẫn trong nước và quốc tế</li>
              <li>Kinh nghiệm du lịch thực tế và hữu ích từ những người đã từng đi</li>
              <li>Gợi ý lịch trình chi tiết và ngân sách hợp lý cho chuyến đi</li>
              <li>Những câu chuyện thú vị, hình ảnh đẹp và cảm xúc chân thực trên đường đi</li>
            </ul>

            <p>
              Chúng tôi tin rằng mỗi chuyến đi đều mang lại những bài học và trải nghiệm quý giá,
              và chúng tôi muốn chia sẻ điều đó với bạn. Hãy để chúng tôi trở thành người bạn đồng hành
              đáng tin cậy trong những chuyến phiêu lưu sắp tới của bạn.
            </p>
          </div>
        </div>

        <div className="team-section">
          <h2>Đội Ngũ Của Chúng Tôi</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="team-member-image">
                <img src="/assets/images/team/team1.jpg" alt="Thành viên 1" />
              </div>
              <h3>Nguyễn Văn A</h3>
              <p>Người sáng lập & Biên tập viên</p>
              <div className="social-icons">
                <a href="#" className="social-icon" aria-label="Facebook">f</a>
                <a href="#" className="social-icon" aria-label="Twitter">t</a>
                <a href="#" className="social-icon" aria-label="Instagram">i</a>
              </div>
            </div>

            <div className="team-member">
              <div className="team-member-image">
                <img src="/assets/images/team/team2.jpg" alt="Thành viên 2" />
              </div>
              <h3>Trần Thị B</h3>
              <p>Nhà văn du lịch</p>
              <div className="social-icons">
                <a href="#" className="social-icon" aria-label="Facebook">f</a>
                <a href="#" className="social-icon" aria-label="Twitter">t</a>
                <a href="#" className="social-icon" aria-label="Instagram">i</a>
              </div>
            </div>

            <div className="team-member">
              <div className="team-member-image">
                <img src="/assets/images/team/team3.jpg" alt="Thành viên 3" />
              </div>
              <h3>Lê Văn C</h3>
              <p>Nhiếp ảnh gia</p>
              <div className="social-icons">
                <a href="#" className="social-icon" aria-label="Facebook">f</a>
                <a href="#" className="social-icon" aria-label="Twitter">t</a>
                <a href="#" className="social-icon" aria-label="Instagram">i</a>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <Link to="/contact" className="hero-cta">Liên hệ với chúng tôi</Link>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
