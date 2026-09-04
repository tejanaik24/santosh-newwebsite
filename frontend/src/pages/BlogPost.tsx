import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getBlogBySlug, blogs } from "@/data/blogs";
import { SITE, waLink } from "@/lib/site";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;

function renderWithLinks(text: string) {
  const parts: (string | JSX.Element)[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  linkPattern.lastIndex = 0;
  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    parts.push(
      <a key={match.index} href={match[2]} target="_blank" rel="noopener noreferrer" className="text-rose-gold underline">
        {match[1]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogBySlug(slug) : undefined;
  const url = post ? `https://srivatsalasilverhouse.in/blog/${post.slug}` : "https://srivatsalasilverhouse.in/";
  const image = post?.image || "/og-image.jpg";
  const fullImage = image.startsWith("http") ? image : `https://srivatsalasilverhouse.in${image}`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-lg px-6">
          <h1 className="font-display text-4xl text-silver mb-4">Blog Not Found</h1>
          <p className="text-silver/70 mb-8">This blog post does not exist or may have been moved.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/blog" className="btn-gold">View All Blogs</Link>
            <Link to="/" className="btn-ghost-gold">Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  const schemaArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.meta,
    image: fullImage,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: "Srivatsala Silver House" },
    publisher: { "@type": "Organization", name: SITE.name },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://srivatsalasilverhouse.in/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://srivatsalasilverhouse.in/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const schemaFAQ = post.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  } : null;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{`${post.title} — ${SITE.name}`}</title>
        <meta name="description" content={post.meta} />
        <link rel="canonical" href={url} />

        <meta property="og:title" content={`${post.title} — ${SITE.name}`} />
        <meta property="og:description" content={post.meta} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={fullImage} />
        <meta property="og:image:alt" content={post.imageAlt} />
        <meta property="og:site_name" content={SITE.name} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} — ${SITE.name}`} />
        <meta name="twitter:description" content={post.meta} />
        <meta name="twitter:image" content={fullImage} />

        <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        {schemaFAQ && <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>}
      </Helmet>
      <Nav />
      <article className="container py-32 max-w-3xl mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-gold-light hover:text-gold-light/80 transition mb-8">
          ← Back to Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 text-xs text-silver/50 mb-4">
            <time dateTime={post.date}>{post.date}</time>
            <span>·</span>
            <span>{post.readTime}</span>
            <span>·</span>
            <span className="text-rose-gold">{post.keyword}</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-silver leading-tight">
            {post.title}
          </h1>
        </header>

        <div className="prose prose-invert max-w-none">
          {post.sections.map((section, i) => {
            const Component = section.level === "h2" ? "h2" : "h3";
            return (
              <div key={i} className="mb-6">
                <Component className={`font-display text-silver mt-8 mb-4 ${section.level === "h2" ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl text-gold-light"}`}>
                  {section.heading}
                </Component>
                {section.image && (
                  <img
                    src={section.image}
                    alt={section.imageAlt || section.heading}
                    className="w-full rounded-xl mb-6 object-cover"
                    loading="lazy"
                  />
                )}
                {section.content.split("\n\n").map((para, j) => (
                  <p key={j} className="text-silver/80 leading-relaxed mb-4">
                    {renderWithLinks(para)}
                  </p>
                ))}
              </div>
            );
          })}

          {post.faq.length > 0 && (
            <div className="mt-16 pt-12 border-t border-[hsl(var(--gold)/0.2)]">
              <h2 className="font-display text-2xl sm:text-3xl text-silver mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {post.faq.map((item, i) => (
                  <div key={i} className="luxury-card rounded-xl p-6 gold-border">
                    <h3 className="font-display text-lg text-gold-light mb-3">{item.question}</h3>
                    <p className="text-silver/75 text-sm leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {post.relatedSlugs && post.relatedSlugs.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[hsl(var(--gold)/0.2)]">
            <h2 className="font-display text-2xl sm:text-3xl text-silver mb-8">
              Related Articles
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {post.relatedSlugs.map((slug) => {
                const related = blogs.find((b) => b.slug === slug);
                if (!related) return null;
                return (
                  <Link
                    key={slug}
                    to={`/blog/${slug}`}
                    className="luxury-card rounded-xl p-5 gold-border hover:border-[hsl(var(--gold-light)/0.5)] transition group"
                  >
                    <span className="text-xs text-rose-gold uppercase tracking-wider">{related.keyword}</span>
                    <h3 className="font-display text-base text-silver group-hover:text-gold-light transition mt-1">{related.title}</h3>
                    <span className="text-xs text-silver/50 mt-2 block">{related.date} · {related.readTime}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        <div className="mt-16 pt-10 border-t border-[hsl(var(--gold)/0.2)] text-center">
          <p className="text-silver/60 text-sm mb-6">
            Have questions? Talk to our team directly.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={waLink(`Hi, I read your blog about "${post.title}" and have a question.`)} target="_blank" rel="noopener" className="btn-gold">
              Ask on WhatsApp
            </a>
            <Link to="/" className="btn-ghost-gold">
              Visit Srivatsala Silver House
            </Link>
          </div>
        </div>
      </article>
      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default BlogPost;
