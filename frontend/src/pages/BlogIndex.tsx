import { useEffect } from "react";
import { Link } from "react-router-dom";
import { blogs } from "@/data/blogs";
import { SITE } from "@/lib/site";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

const BlogIndex = () => {
  useEffect(() => {
    document.title = `Blog — ${SITE.name} | Jewellery Tips & Guides`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", `Read jewellery buying guides, bridal tips and gold rate updates from ${SITE.name}, the trusted jewellery shop in Madhurawada, Vizag.`);
    window.scrollTo(0, 0);
  }, []);

  if (blogs.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-lg px-6">
          <h1 className="font-display text-4xl text-silver mb-4">Blog Coming Soon</h1>
          <p className="text-silver/70 mb-8">We are writing helpful jewellery guides. Check back soon.</p>
          <Link to="/" className="btn-gold">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="container py-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-rose-gold">Srivatsala Silver House</span>
          <h1 className="font-display text-4xl sm:text-5xl mt-4 text-silver">
            Jewellery <span className="text-gradient-gold">Blog</span>
          </h1>
          <p className="text-silver/70 mt-5">
            Buying guides, bridal tips, gold rate updates and stories from your trusted jewellery shop in Madhurawada, Vizag.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((post) => (
            <article key={post.slug} className="luxury-card rounded-2xl overflow-hidden gold-border group hover:-translate-y-1 transition-all duration-500">
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="aspect-[16/9] bg-[hsl(var(--bg-dark))] flex items-center justify-center overflow-hidden">
                  <div className="text-center p-6">
                    <p className="font-display text-2xl text-gold-light group-hover:scale-105 transition-transform">✦</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-silver/50 mb-3">
                    <time dateTime={post.date}>{post.date}</time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-display text-xl text-silver group-hover:text-gold-light transition leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-silver/65 text-sm mt-3 line-clamp-2">{post.meta}</p>
                  <div className="mt-5 flex items-center gap-2 text-sm text-gold-light group/link">
                    Read More
                    <span className="transition-transform group-hover/link:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/" className="btn-ghost-gold">
            ← Back to Home
          </Link>
        </div>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default BlogIndex;
