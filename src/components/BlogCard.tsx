import { Link } from 'react-router-dom';
import './BlogCard.css';

interface BlogCardProps {
  id?: number;
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  imageUrl: string;
  category?: string;
}

const BlogCard = ({ slug, title, date, author, excerpt, imageUrl, category = 'Du lịch' }: BlogCardProps) => {
  return (
    <div className="blog-card">
      <div className="blog-card-image">
        <img src={imageUrl} alt={title} />
        <span className="blog-card-category">{category}</span>
      </div>
      <div className="blog-card-content">
        <h2 className="blog-card-title">
          <Link to={`/post/${slug}`}>{title}</Link>
        </h2>
        <div className="blog-card-meta">
          <span className="blog-card-date">{date}</span>
          <span className="blog-card-author">bởi {author}</span>
        </div>
        <p className="blog-card-excerpt">{excerpt}</p>
        <Link to={`/post/${slug}`} className="read-more-link">
          Đọc thêm
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
