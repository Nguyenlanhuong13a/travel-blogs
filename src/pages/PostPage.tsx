import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import BlogCard from '../components/BlogCard';
import postsData from '../data/posts.json';
import './PostPage.css';

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

const PostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when post changes
    window.scrollTo(0, 0);

    // In a real application, this would be an API call
    const foundPost = postsData.find((p) => p.slug === slug);

    if (foundPost) {
      setPost(foundPost);

      // Get related posts (excluding current post)
      const related = postsData
        .filter(p => p.id !== foundPost.id)
        .slice(0, 2); // Get 2 related posts

      setRelatedPosts(related);
    }

    setLoading(false);
  }, [slug]);

  const handleShare = (platform: string) => {
    // In a real application, this would open share dialogs
    console.log(`Sharing on ${platform}`);
    alert(`Chia sẻ bài viết trên ${platform}`);
  };

  if (loading) {
    return (
      <Layout>
        <div className="loading">Đang tải...</div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="not-found">
          <h2>Không tìm thấy bài viết</h2>
          <p>Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
          <Link to="/" className="back-link">Quay lại trang chủ</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="post-page">
        <article className="post">
          <button className="back-button" onClick={() => navigate(-1)}>
            Quay lại
          </button>

          <header className="post-header">
            <h1 className="post-title">{post.title}</h1>
            <div className="post-meta">
              <span className="post-date">{post.date}</span>
              <span className="post-author">bởi {post.author}</span>
            </div>
          </header>

          <div className="post-featured-image">
            <img src={post.imageUrl.replace('-thumb', '')} alt={post.title} />
          </div>

          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="post-tags">
            <span className="post-tag">Du lịch</span>
            <span className="post-tag">{post.slug.includes('kyoto') ? 'Nhật Bản' : 'Việt Nam'}</span>
            <span className="post-tag">{post.slug.includes('phuot') ? 'Phượt' : 'Khám phá'}</span>
          </div>

          <div className="post-share">
            <h3>Chia sẻ bài viết</h3>
            <div className="share-buttons">
              <button
                className="share-button facebook"
                onClick={() => handleShare('Facebook')}
                aria-label="Share on Facebook"
              >
                f
              </button>
              <button
                className="share-button twitter"
                onClick={() => handleShare('Twitter')}
                aria-label="Share on Twitter"
              >
                t
              </button>
              <button
                className="share-button linkedin"
                onClick={() => handleShare('LinkedIn')}
                aria-label="Share on LinkedIn"
              >
                in
              </button>
            </div>
          </div>

          {relatedPosts.length > 0 && (
            <div className="related-posts">
              <h3>Bài viết liên quan</h3>
              <div className="related-posts-grid">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard
                    key={relatedPost.id}
                    id={relatedPost.id}
                    slug={relatedPost.slug}
                    title={relatedPost.title}
                    date={relatedPost.date}
                    author={relatedPost.author}
                    excerpt={relatedPost.excerpt}
                    imageUrl={relatedPost.imageUrl}
                  />
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </Layout>
  );
};

export default PostPage;
