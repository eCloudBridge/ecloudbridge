import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { blogPosts } from '@/data/blogs';
import { ArrowLeft, Calendar, Clock, ChevronRight } from 'lucide-react';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO 
        title={post.title}
        description={post.excerpt}
        image={post.coverImage}
        type="article"
        publishedAt={post.publishedAt}
        author="eCloudBridge Technology Team"
        keywords={`${post.category}, DevOps, Cloud, eCloudBridge, ${post.title}`}
        canonical={`https://ecloudbridge.com/blog/${post.slug}`}
        url={`https://ecloudbridge.com/blog/${post.slug}`}
      />
      <Navigation />
      
      {/* Article Header */}
      <div className="pt-24 pb-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center text-sm font-medium text-gray-500 mb-8 space-x-2">
            <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/blog" className="hover:text-orange-500 transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">{post.category}</span>
          </nav>
          
          <div className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold mb-6">
            {post.category}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-600 gap-6">
            <div className="flex items-center">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full mr-4 border border-gray-200"
              />
              <div>
                <p className="font-semibold text-gray-900">{post.author.name}</p>
                <p className="text-sm">Engineering Team</p>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm ml-auto">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-gray-400" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <img 
          src={post.coverImage} 
          alt={post.title}
          className="w-full h-auto max-h-[600px] object-cover rounded-2xl shadow-2xl"
        />
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div 
          className="prose prose-lg md:prose-xl max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-orange-600 hover:prose-a:text-orange-500 prose-img:rounded-xl prose-blockquote:border-orange-500 prose-blockquote:bg-orange-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:italic"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link to="/blog" className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors group">
            <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to all articles
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
