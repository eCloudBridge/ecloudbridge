import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { blogPosts } from '@/data/blogs';
import { ArrowLeft, Calendar, Clock, ChevronRight, Share2, BookOpen, Tag, ArrowRight } from 'lucide-react';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  const relatedPosts = post ? blogPosts.filter(p => p.slug !== slug && p.category === post.category).slice(0, 3) : [];
  const otherPosts = post ? blogPosts.filter(p => p.slug !== slug && p.category !== post.category).slice(0, 3 - relatedPosts.length) : [];
  const suggestedPosts = [...relatedPosts, ...otherPosts].slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: post.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

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

      {/* ── HERO BANNER ── */}
      <div className="relative w-full h-[55vh] min-h-[400px] overflow-hidden bg-gray-900">
        <img
          src={post.coverImage}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/20" />
        
        <div className="relative h-full flex flex-col justify-end max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          {/* Breadcrumb */}
          <nav className="flex items-center text-sm font-medium text-gray-400 mb-5 space-x-1.5">
            <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/blog" className="hover:text-orange-400 transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-orange-400">{post.category}</span>
          </nav>

          {/* Category pill */}
          <span className="inline-flex items-center gap-1.5 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-5 w-fit">
            <Tag className="w-3 h-3" /> {post.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6 max-w-3xl">
            {post.title}
          </h1>

          {/* Author + meta row */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full border-2 border-orange-400 object-cover"
              />
              <div>
                <p className="font-semibold text-white">{post.author.name}</p>
                <p className="text-xs text-gray-400">Engineering Team, eCloudBridge</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 ml-0 sm:ml-4">
              <Calendar className="w-4 h-4 text-orange-400" />
              <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-orange-400" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-orange-400" />
              <span>In-depth analysis</span>
            </div>
            <button
              onClick={handleShare}
              className="ml-auto flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg transition-colors text-xs font-medium"
            >
              <Share2 className="w-3.5 h-3.5" /> Share
            </button>
          </div>
        </div>
      </div>

      {/* ── TWO-COLUMN LAYOUT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">

          {/* ── MAIN CONTENT ── */}
          <article>
            {/* Excerpt pull-quote */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-6 rounded-r-xl mb-10">
              <p className="text-lg text-gray-700 font-medium italic leading-relaxed">{post.excerpt}</p>
            </div>

            {/* Body content */}
            <div 
              className="prose prose-lg max-w-none
                prose-headings:font-extrabold prose-headings:text-gray-900 prose-headings:tracking-tight
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-3 prose-h2:border-b prose-h2:border-gray-200
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-orange-700
                prose-p:text-gray-700 prose-p:leading-[1.9] prose-p:mb-5
                prose-a:text-orange-600 prose-a:font-medium hover:prose-a:text-orange-500 prose-a:no-underline hover:prose-a:underline
                prose-ul:my-4 prose-li:text-gray-700 prose-li:leading-relaxed
                prose-ol:my-4
                prose-strong:text-gray-900 prose-strong:font-bold
                prose-code:bg-gray-100 prose-code:text-orange-700 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
                prose-pre:bg-gray-900 prose-pre:text-green-400 prose-pre:rounded-xl prose-pre:p-5 prose-pre:overflow-x-auto
                prose-blockquote:border-l-4 prose-blockquote:border-orange-500 prose-blockquote:bg-orange-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:my-8
                prose-blockquote:text-gray-700 prose-blockquote:font-medium
                prose-img:rounded-2xl prose-img:shadow-xl prose-img:my-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags / category */}
            <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-gray-500 mr-2">Filed under:</span>
              <span className="bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-semibold">{post.category}</span>
              <span className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium">DevOps</span>
              <span className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium">eCloudBridge</span>
            </div>

            {/* Author card */}
            <div className="mt-10 p-8 bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl text-white flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-20 h-20 rounded-full border-4 border-orange-400 object-cover flex-shrink-0"
              />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-1">Written by</p>
                <h3 className="text-xl font-extrabold mb-2">{post.author.name}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  The eCloudBridge engineering team is composed of certified cloud architects, SREs, and DevSecOps experts with deep hands-on experience across AWS, Azure, GCP, Kubernetes, and modern platform engineering.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-1.5 mt-4 text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors">
                  Work with us <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Back link */}
            <div className="mt-10">
              <Link to="/blog" className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors group">
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to all articles
              </Link>
            </div>
          </article>

          {/* ── SIDEBAR ── */}
          <aside className="space-y-8">
            {/* Table of contents stub */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sticky top-24">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">In this article</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="font-medium text-orange-600 text-base mb-3">{post.title}</p>
                <div className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5 text-gray-400" /><span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span></div>
                <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-gray-400" /><span>{post.readTime}</span></div>
                <div className="flex items-center gap-2"><Tag className="w-3.5 h-3.5 text-gray-400" /><span className="text-orange-600 font-medium">{post.category}</span></div>
              </div>
              
              <hr className="my-5 border-gray-200" />
              
              <button
                onClick={handleShare}
                className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors text-sm"
              >
                <Share2 className="w-4 h-4" /> Share this article
              </button>

              <Link
                to="/contact"
                className="mt-3 w-full flex items-center justify-center gap-2 border border-orange-500 text-orange-600 hover:bg-orange-50 font-semibold py-3 px-4 rounded-xl transition-colors text-sm"
              >
                Talk to our experts <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Related posts */}
            {suggestedPosts.length > 0 && (
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">More articles</h3>
                <div className="space-y-4">
                  {suggestedPosts.map(p => (
                    <Link
                      key={p.id}
                      to={`/blog/${p.slug}`}
                      className="flex gap-3 group"
                    >
                      <img
                        src={p.coverImage}
                        alt={p.title}
                        className="w-20 h-16 object-cover rounded-lg flex-shrink-0 group-hover:opacity-80 transition-opacity"
                      />
                      <div>
                        <span className="text-xs font-semibold text-orange-500 uppercase">{p.category}</span>
                        <p className="text-sm font-semibold text-gray-800 group-hover:text-orange-600 transition-colors leading-snug mt-0.5 line-clamp-2">{p.title}</p>
                        <p className="text-xs text-gray-400 mt-1">{p.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>

      {/* ── NEXT ARTICLE CTA ── */}
      <div className="bg-gradient-to-br from-gray-900 to-blue-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-400 text-sm font-bold uppercase tracking-widest mb-3">Continue reading</p>
          <h2 className="text-3xl font-extrabold text-white mb-6">More from eCloudBridge Engineering</h2>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
          >
            Browse all articles <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
