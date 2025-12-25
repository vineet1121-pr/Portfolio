import React, { useState } from 'react';
import './Blog.css';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
  link: string;
}

type Category = 'All' | 'React' | 'TypeScript' | 'Angular' | 'CSS' | 'Development';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Building Scalable React Applications',
      excerpt: 'Learn best practices for structuring large-scale React applications with proper component architecture, state management, and performance optimization.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop',
      category: 'React',
      date: 'Dec 20, 2025',
      readTime: '5 min read',
      tags: ['React', 'Architecture', 'Best Practices'],
      link: 'https://react.dev/learn/thinking-in-react'
    },
    {
      id: 2,
      title: 'TypeScript Tips for Frontend Developers',
      excerpt: 'Discover advanced TypeScript patterns and techniques to write more robust and maintainable frontend code with strong typing.',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=500&fit=crop',
      category: 'TypeScript',
      date: 'Dec 15, 2025',
      readTime: '7 min read',
      tags: ['TypeScript', 'JavaScript', 'Development'],
      link: 'https://www.typescriptlang.org/docs/handbook/intro.html'
    },
    {
      id: 3,
      title: 'Modern CSS Techniques for 2025',
      excerpt: 'Explore the latest CSS features including container queries, cascade layers, and modern layout techniques that are revolutionizing web design.',
      image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=500&fit=crop',
      category: 'CSS',
      date: 'Dec 10, 2025',
      readTime: '6 min read',
      tags: ['CSS', 'Design', 'Web Development'],
      link: 'https://web.dev/articles/css-container-queries'
    },
    {
      id: 4,
      title: 'Optimizing Performance in Angular Apps',
      excerpt: 'Deep dive into Angular performance optimization strategies including lazy loading, change detection, and bundle size reduction.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop',
      category: 'Angular',
      date: 'Dec 5, 2025',
      readTime: '8 min read',
      tags: ['Angular', 'Performance', 'Optimization'],
      link: 'https://angular.dev/best-practices/runtime-performance'
    },
    {
      id: 5,
      title: 'RESTful API Integration Best Practices',
      excerpt: 'Master the art of integrating RESTful APIs in your frontend applications with proper error handling, caching, and state management.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop',
      category: 'Development',
      date: 'Nov 28, 2025',
      readTime: '6 min read',
      tags: ['API', 'REST', 'Integration'],
      link: 'https://restfulapi.net/'
    },
    {
      id: 6,
      title: 'Accessibility in Modern Web Apps',
      excerpt: 'Learn how to build inclusive and accessible web applications that work for everyone, following WCAG guidelines and best practices.',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=500&fit=crop',
      category: 'Development',
      date: 'Nov 20, 2025',
      readTime: '5 min read',
      tags: ['Accessibility', 'WCAG', 'Best Practices'],
      link: 'https://www.w3.org/WAI/WCAG21/quickref/'
    }
  ];

  const categories: Category[] = ['All', 'React', 'TypeScript', 'Angular', 'CSS', 'Development'];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section id="blog" className="blog">
      <div className="container">
        <h2 className="section-title">Blog & Insights</h2>
        <p className="blog-intro">
          Sharing my knowledge and experiences in frontend development
        </p>

        <div className="blog-filters">
          {categories.map((category: Category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">
                    <i className="far fa-calendar"></i>
                    {post.date}
                  </span>
                  <span className="blog-read-time">
                    <i className="far fa-clock"></i>
                    {post.readTime}
                  </span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-tags">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="blog-tag">#{tag}</span>
                  ))}
                </div>
                <a 
                  href={post.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="read-more-btn"
                >
                  Read More
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
