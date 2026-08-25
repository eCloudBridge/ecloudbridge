import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { blogPosts, BlogPost } from '@/data/blogs';
import { Calendar, Clock, User } from 'lucide-react';

const BlogCard = ({ post }: { post: BlogPost }) => (
  <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full border border-gray-100">
    <Link to={`/blog/${post.slug}`} className="block relative overflow-hidden h-60">
      <img
        src={post.coverImage}
        alt={post.title}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 text-sm font-semibold rounded-full shadow-md">
        {post.category}
      </div>
    </Link>
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </div>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          {post.readTime}
        </div>
      </div>
      <Link to={`/blog/${post.slug}`} className="block mb-3">
        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2">
          {post.title}
        </h3>
      </Link>
      <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
        {post.excerpt}
      </p>
      <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-orange-100"
        />
        <span className="font-semibold text-gray-900">{post.author.name}</span>
      </div>
    </div>
  </article>
);

const BlogPage = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  const filteredPosts = filter === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <SEO 
        title="Blog - Insights & Resources | eCloudBridge"
        description="Explore the latest insights, tutorials, and deep-dives into DevOps, Cloud Architecture, and Security from the engineering team at eCloudBridge."
      />
      <Navigation />
      
      {/* Blog Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Engineering Insights</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            Deep technical dives, industry trends, and best practices from the experts at eCloudBridge.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={\`px-6 py-2 rounded-full font-medium transition-all duration-300 \${
                  filter === category 
                    ? 'bg-orange-500 text-white shadow-md transform scale-105' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200'
                }\`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-gray-600">No posts found for this category.</h3>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
