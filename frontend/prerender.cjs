const fs = require("fs");
const path = require("path");

const blogs = [
  {
    slug: "best-jewellery-shop-madhurawada-vizag",
    title: "Best Jewellery Shop in Madhurawada, Vizag — Gold, Silver & Traditional Designs",
    meta: "Looking for a trusted jewellery shop in Madhurawada? Srivatsala Silver House offers BIS hallmarked gold, authentic silver jewellery & Andhra traditional designs. Visit us today.",
    keyword: "jewellery shop in Madhurawada",
    date: "2026-05-17",
    readTime: "8 min read",
    image: "/og-image.jpg",
    imageAlt: "Srivatsala Silver House jewellery shop in Madhurawada, Visakhapatnam — gold and silver collections",
    faq: [
      { q: "Which is the best jewellery shop in Madhurawada?", a: "Srivatsala Silver House is widely trusted by local families in Madhurawada and surrounding areas like Kommadi, PM Palem, Carshed, Midhilapuri Colony, and Yendada. We offer BIS hallmarked gold, 92.5 hallmark silver, and authentic Andhra traditional designs." },
      { q: "Does Srivatsala Silver House sell BIS hallmarked gold?", a: "Yes. Every gold piece we sell comes with BIS hallmark certification. You get guaranteed purity on every purchase — from a simple gold ring to a complete bridal set." },
      { q: "What traditional Andhra jewellery designs do you have?", a: "We specialise in Vaddanam (bridal waist belt), Kasulaperu (Lakshmi coin necklace), Gundla Haram, Jhumkas, Mango Mala, Nethichutti, Vanki, Mattelu (toe rings), and Buttalu. These are authentic South Indian temple-style designs." },
      { q: "Do you sell silver jewellery in Madhurawada?", a: "Yes, we have a wide silver jewellery collection including anklets, bangles, toe rings, pendants, chains, and pooja articles. All our silver is 92.5 hallmarked." },
      { q: "What are your store hours in Madhurawada?", a: "We are open Monday to Sunday, 10:30 AM to 9:00 PM. No weekly off. You can walk in any day." },
      { q: "Can I custom order bridal jewellery?", a: "Absolutely. Our master jewellers can create custom bridal jewellery including vaddanam, kasulaperu, and complete wedding sets. WhatsApp us at +91 97041 10147 to book a consultation." },
    ],
  },
  {
    slug: "gold-silver-jewellery-kommadi-pm-palem-madhurawada",
    title: "Gold & Silver Jewellery in Kommadi, PM Palem & Madhurawada — BIS Hallmarked at Srivatsala Silver House",
    meta: "Looking for gold jewellery in Kommadi or PM Palem? Srivatsala Silver House in Madhurawada offers BIS hallmarked gold, silver, and traditional Andhra designs just minutes from your home.",
    keyword: "gold jewellery Kommadi PM Palem",
    date: "2026-05-24",
    readTime: "6 min read",
    image: "/og-image.jpg",
    imageAlt: "Srivatsala Silver House — gold and silver jewellery showroom in Madhurawada, serving Kommadi and PM Palem",
    faq: [
      { q: "How far is Srivatsala Silver House from Kommadi?", a: "About 2.5 km. A 5-7 minute drive from Kommadi to our showroom on Revallapalem Road in Madhurawada." },
      { q: "Do you sell lightweight gold for daily wear?", a: "Yes. We stock lightweight earrings, chains, and rings from 2 grams upward. Ideal for young professionals in Kommadi and daily wear for women in PM Palem." },
      { q: "Is your silver jewellery hallmarked?", a: "Silver jewellery in India does not require mandatory BIS hallmarking like gold. However, we source from trusted suppliers and are transparent about purity on every purchase." },
      { q: "Can I exchange jewellery bought at another shop?", a: "Yes. We accept old gold jewellery regardless of where you bought it. We assess purity and offer a fair exchange value based on the day's gold rate." },
      { q: "Do you have a gold savings plan?", a: "We do not have a formal scheme, but many local families use us informally — paying monthly and collecting jewellery during wedding season or Diwali. Talk to us in person." },
      { q: "What are your store hours?", a: "We are open every day from 10:30 AM to 9:00 PM. No weekly off. Weekday afternoons (2 PM to 5 PM) are usually the least crowded." },
    ],
  },
  {
    slug: "silver-jewellery-madhurawada-vizag",
    title: "Silver Jewellery in Madhurawada, Vizag — Complete Buying Guide with Price, Quality & Designs",
    meta: "Looking for silver jewellery in Madhurawada? Srivatsala Silver House offers 92.5 hallmark silver anklets, bangles, earrings & pooja items at fair prices. Visit our Madhurawada showroom or call +91 97041 10147.",
    keyword: "silver jewellery near Madhurawada Vizag",
    date: "2026-05-31",
    readTime: "7 min read",
    image: "/og-image.jpg",
    imageAlt: "Srivatsala Silver House — silver jewellery collection in Madhurawada, Visakhapatnam",
    faq: [
      { q: "Where can I buy silver jewellery in Madhurawada?", a: "Srivatsala Silver House on Revallapalem Road, opposite Gayathri Clinic, is the most trusted silver jewellery shop in Madhurawada. We have been serving local families for over 15 years with 92.5 hallmark silver anklets, bangles, earrings, toe rings, and pooja articles." },
      { q: "Is silver jewellery hallmarked in India?", a: "Silver hallmarking is voluntary in India (unlike gold which requires BIS hallmark). However, quality silver is 92.5% pure. At Srivatsala, we are transparent about purity on every purchase." },
      { q: "What is the price of silver anklets in Vizag?", a: "Silver anklet prices depend on design and weight. At Srivatsala Silver House in Madhurawada, our anklets range from ₹1,500 to ₹8,000. Fancy jhalar anklets with bells cost more than simple chain-style payal." },
      { q: "Do you sell silver pooja items in Madhurawada?", a: "Yes. We stock silver kalash, lamps, trays, small vigrahas, and gift articles for pooja and festivals. Prices range from ₹1,000 to ₹25,000 depending on size and craftsmanship." },
      { q: "Can I custom order silver jewellery in Vizag?", a: "Absolutely. Our master jeweller works from the Madhurawada showroom. Bring a photo or just an idea — we will quote the price and delivery date before you commit." },
      { q: "Do you offer zero making charges on silver?", a: "Yes, we run zero-making-charge offers on selected silver items periodically. Call us at +91 97041 10147 to ask what is currently on offer at our Madhurawada showroom." },
      { q: "What is the difference between 92.5 silver and sterling silver?", a: "They are the same. 92.5% pure silver is also called sterling silver. The remaining 7.5% is usually copper, added for strength. Pure 99.9% silver is too soft for jewellery." },
    ],
  },
  {
    slug: "silver-pooja-items-madhurawada-vizag",
    title: "Essential Pure Silver Pooja Items Every Home in Madhurawada Needs",
    meta: "Looking for pure silver pooja items in Madhurawada? From silver diyas and kalash to pooja thalis and idols — find everything at Srivatsala Silver House. Visit our showroom or call +91 97041 10147.",
    keyword: "silver pooja items Madhurawada",
    date: "2026-06-07",
    readTime: "9 min read",
    image: "/og-image.jpg",
    imageAlt: "Srivatsala Silver House — pure silver pooja items collection in Madhurawada, Visakhapatnam",
    faq: [
      { q: "What are the essential silver pooja items for a home temple?", a: "The essential silver pooja items every home needs are: a silver diya (lamp), silver kalash, silver bell, silver pooja thali, panchapatra set with spoon, kumkum box, incense stand, and optionally a silver idol of your chosen deity. All of these are available at Srivatsala Silver House in Madhurawada." },
      { q: "Is 925 silver good for pooja items?", a: "Yes. 925 sterling silver (92.5% pure) is the ideal choice for pooja items. It is strong enough for daily handling, holds intricate designs well, and is the standard for quality silverware in India. 999 fine silver is too soft for regular use." },
      { q: "What is the difference between 999 and 925 silver?", a: "999 silver is 99.9% pure — very soft, used mainly for coins and investment bars. 925 silver (sterling silver) is 92.5% pure with 7.5% copper added for strength — ideal for pooja items and jewellery that need daily handling. Always look for the 925 hallmark." },
      { q: "Where can I buy pure silver pooja items in Madhurawada?", a: "Srivatsala Silver House on Revallapalem Road, opposite Gayathri Clinic, Madhurawada, has been selling pure silver pooja items to local families for over 15 years. We stock silver thalis, diyas, kalash, bells, idols, and more at fair prices with transparent purity certification." },
      { q: "Which silver pooja items are best for gifting?", a: "Silver diyas and kalash are the most popular gifting items for housewarmings and weddings. Silver pooja thali sets make excellent wedding gifts. Silver Ganesh or Lakshmi idols are ideal for festive occasions like Diwali and Ugadi. All are available at our Madhurawada showroom." },
      { q: "How do I check if silver pooja items are pure?", a: "Look for the 925 hallmark stamp on the item. Check the weight — silver is priced by gram, so the weight should match the price. Test with a magnet — pure silver is non-magnetic. Buy from a trusted local jeweller like Srivatsala Silver House that has been serving Madhurawada for years." },
      { q: "Can I use a silver diya for daily pooja?", a: "Absolutely. Silver diyas are designed for daily use. They hold ghee or oil well, do not heat up excessively on the base, and are easy to clean after each use. We recommend keeping a dedicated silver diya for daily Sandhya Vandanam — it develops a beautiful patina over years of use." },
    ],
  },
  {
    slug: "bridal-jewellery-vaddanam-kasulaperu-gundla-haram-visakhapatnam",
    title: "Traditional Andhra Bridal Jewellery Set — Vaddanam, Kasulaperu & Gundla Haram Price Guide 2026",
    meta: "Planning your bridal jewellery in Visakhapatnam? Learn about Vaddanam, Kasulaperu & Gundla Haram — authentic Andhra bridal sets at Srivatsala Silver House, Madhurawada. Book a bridal consultation today.",
    keyword: "bridal jewellery Visakhapatnam",
    date: "2026-06-14",
    readTime: "9 min read",
    image: "/og-image.jpg",
    imageAlt: "Traditional Andhra bridal jewellery set with Vaddanam, Kasulaperu and Gundla Haram at Srivatsala Silver House, Madhurawada",
    faq: [
      { q: "What is the difference between Vaddanam, Kasulaperu and Gundla Haram?", a: "Vaddanam is a gold waist belt worn over the saree during the wedding. Kasulaperu is a long necklace strung with Lakshmi-coin pendants. Gundla Haram is a beaded necklace made of small gold beads, usually layered with the Kasulaperu. Together they form the core of a traditional Andhra bridal set." },
      { q: "How much does a bridal jewellery set cost in Visakhapatnam?", a: "Bridal set pricing depends on the day's gold rate, total weight, purity, and design complexity, so it varies from bride to bride. Visit our Madhurawada showroom or WhatsApp us your requirements at +91 97041 10147 for a personalised quote based on the current gold rate." },
      { q: "Can I get a Vaddanam or Kasulaperu custom made?", a: "Yes. Our karigars work from the Madhurawada showroom and can custom-make a Vaddanam, Kasulaperu, or Gundla Haram to your design, including converting old family gold into a new bridal piece. Bring a photo, sketch, or heirloom for reference." },
      { q: "How far in advance should I start bridal jewellery shopping?", a: "We recommend starting two to three months before the wedding date for custom or heavily detailed pieces, and at least three to four weeks ahead even for in-stock designs, to allow time for resizing or additions." },
      { q: "Is your bridal gold BIS hallmarked?", a: "Yes. Every gold piece we sell, including full bridal sets, is BIS hallmarked, so the purity is certified and stamped on the metal — protecting the resale and exchange value of your jewellery for years." },
      { q: "Do you make complete bridal sets or only individual pieces?", a: "Both. We can put together a complete coordinated set — Vaddanam, Kasulaperu, Gundla Haram, jhumkas, mangalsutra, Vanki, Nethichutti and Mattelu — or make individual pieces if you already have some jewellery and want to add to it." },
      { q: "Where can I see bridal jewellery designs before my wedding?", a: "Visit Srivatsala Silver House on Revallapalem Road, opposite Gayathri Clinic, Madhurawada. We are open every day from 10:30 AM to 9:00 PM, no appointment needed. You can also WhatsApp us at +91 97041 10147 and tell us your wedding date so we have relevant designs ready when you arrive." },
    ],
  },
  {
    slug: "certified-gold-silver-jewellery-madhurawada-vizag",
    title: "Certified Gold & 92.5 Silver Jewellery in Madhurawada, Vizag — BIS Hallmarked with Custom Designs",
    meta: "Looking for BIS hallmarked gold and 92.5 silver jewellery in Madhurawada? Srivatsala Silver House offers certified purity, custom bridal designs, and transparent pricing. Visit us on Revallapalem Road or call +91 97041 10147.",
    keyword: "gold silver jewellery Madhurawada certified",
    date: "2026-06-14",
    readTime: "9 min read",
    image: "/og-image.jpg",
    imageAlt: "Srivatsala Silver House — certified gold and 92.5 silver jewellery showroom in Madhurawada, Visakhapatnam",
    faq: [
      { q: "Which is the most trusted gold and silver shop in Madhurawada?", a: "Srivatsala Silver House on Revallapalem Road, opposite Gayatri Clinic, is the most trusted jewellery shop in Madhurawada. We have been serving local families for over 15 years with 100% BIS hallmarked gold and 92.5 hallmark silver jewellery." },
      { q: "Do you offer custom bridal jewellery design services?", a: "Yes. Our on-site workshop works directly with master craftsmen to create custom bridal jewellery. Bring a photo, sketch, or just an idea — we will quote the price and delivery before you commit. WhatsApp us at +91 97041 10147." },
      { q: "What purity certification do your gold and silver items carry?", a: "All our gold jewellery carries BIS hallmark certification. Our silver items are 92.5% pure sterling silver. We are transparent about purity, weight, and making charges on every purchase." },
      { q: "Is your pricing really lower than VIP Road showrooms?", a: "Yes. We are a family-run showroom with lower overheads — no VIP Road rent, no corporate marketing budget. Our making charges are transparent and competitive. You pay for the metal and the craftsmanship, not the brand name." },
      { q: "Can I exchange old jewellery at Srivatsala Silver House?", a: "Absolutely. We accept old gold and silver jewellery regardless of where you bought it. We assess purity and offer a fair exchange value based on the day's market rate." },
      { q: "What are your store hours and location?", a: "We are open every day from 10:30 AM to 9:00 PM. No weekly off. Located opposite Gayatri Clinic on Revallapalem Road, Madhurawada, near DMART. Walk in any time." },
      { q: "Do you offer free delivery in Visakhapatnam?", a: "Yes, we offer free home shipping within Visakhapatnam for valuable purchases. You can also visit our showroom in person to see and try before you buy." },
    ],
  },
  {
    slug: "ai-website-design-jewellery-shop-vizag",
    title: "How Srivatsala Silver House Got a Modern Website — AI-Powered Design for Vizag Jewellers",
    meta: "Srivatsala Silver House in Madhurawada partnered with Vyzma AI to build a fast, modern website. How AI-powered website design is helping traditional jewellery shops in Vizag attract more customers online.",
    keyword: "website design for jewellery shop Vizag",
    date: "2026-07-04",
    readTime: "6 min read",
    image: "/og-image.jpg",
    imageAlt: "AI-powered website design for Srivatsala Silver House jewellery shop Madhurawada Vizag by Vyzma AI",
    faq: [
      { q: "Who built the Srivatsala Silver House website?", a: "The Srivatsala Silver House website was built by Vyzma AI, a Visakhapatnam-based AI agency specialising in website design and digital marketing for Indian businesses. Vyzma AI is located in Madhurawada, Vizag." },
      { q: "How much does a website cost for a jewellery shop in Vizag?", a: "Website design for a jewellery shop in Vizag starts at affordable prices depending on the features required. Vyzma AI offers website design packages for local businesses in Visakhapatnam. Contact vyzma.in for pricing." },
      { q: "Can a small jewellery shop benefit from having a website?", a: "Yes. Most customers in Vizag now search Google before visiting any shop. A well-built website with proper SEO helps local shops appear in those searches and attract new customers from nearby areas." },
      { q: "What is Vyzma AI?", a: "Vyzma AI is India's premier AI agency, headquartered in Visakhapatnam (Vizag). They build websites, AI chatbots, automation systems, and run digital marketing for Indian businesses. Website: vyzma.in. Phone: +91-8886720908." },
    ],
  },
];

const distDir = path.join(__dirname, "dist");
const indexPath = path.join(distDir, "index.html");

function escapeAttr(str) {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function buildArticleSchema(post) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.meta,
    image: `https://srivatsalasilverhouse.in${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: "Srivatsala Silver House" },
    publisher: { "@type": "Organization", name: "Srivatsala Silver House", logo: { "@type": "ImageObject", url: "https://srivatsalasilverhouse.in/og-image.jpg" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://srivatsalasilverhouse.in/blog/${post.slug}` },
    keywords: post.keyword,
  });
}

function buildFAQSchema(faq) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  });
}

function buildBlogHTML(post, shellHtml) {
  const baseUrl = "https://srivatsalasilverhouse.in";
  const blogUrl = `${baseUrl}/blog/${post.slug}`;
  const imageUrl = `${baseUrl}${post.image}`;
  const title = escapeAttr(post.title);
  const desc = escapeAttr(post.meta);
  const imgAlt = escapeAttr(post.imageAlt);

  const articleSchema = buildArticleSchema(post);
  const faqSchema = buildFAQSchema(post.faq);

  let result = shellHtml;

  result = result.replace(/<title>.*?<\/title>/i, `<title>${title}</title>`);
  result = result.replace(/<meta\s+name="description"\s+[^>]*\/?>/i, `<meta name="description" content="${desc}" />`);
  result = result.replace(/<meta\s+property="og:title"\s+[^>]*\/?>/i, `<meta property="og:title" content="${title}" />`);
  result = result.replace(/<meta\s+property="og:description"\s+[^>]*\/?>/i, `<meta property="og:description" content="${desc}" />`);
  result = result.replace(/<meta\s+property="og:url"\s+[^>]*\/?>/i, `<meta property="og:url" content="${blogUrl}" />`);
  result = result.replace(/<meta\s+property="og:type"\s+[^>]*\/?>/i, `<meta property="og:type" content="article" />`);
  result = result.replace(/<meta\s+property="og:image"\s+[^>]*\/?>/i, `<meta property="og:image" content="${imageUrl}" />`);
  result = result.replace(/<meta\s+property="og:image:alt"\s+[^>]*\/?>/i, `<meta property="og:image:alt" content="${imgAlt}" />`);
  result = result.replace(/<meta\s+property="og:image:width"[^>]*\/?>/i, "");
  result = result.replace(/<meta\s+property="og:image:height"[^>]*\/?>/i, "");
  result = result.replace(/<meta\s+name="twitter:title"\s+[^>]*\/?>/i, `<meta name="twitter:title" content="${title}" />`);
  result = result.replace(/<meta\s+name="twitter:description"\s+[^>]*\/?>/i, `<meta name="twitter:description" content="${desc}" />`);
  result = result.replace(/<meta\s+name="twitter:image"\s+[^>]*\/?>/i, `<meta name="twitter:image" content="${imageUrl}" />`);

  result = result.replace(/<article:published_time[^>]*\/?>/i, "");
  result = result.replace(/<meta\s+property="article:published_time"[^>]*\/?>/i, `<meta property="article:published_time" content="${post.date}" />`);

  result = result.replace(/<link\s+rel="canonical"\s+[^>]*\/?>/i, `<link rel="canonical" href="${blogUrl}" />`);
  if (!result.includes('rel="canonical"')) {
    result = result.replace("</head>", `  <link rel="canonical" href="${blogUrl}" />\n  </head>`);
  }

  result = result.replace(/<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/gi, "");

  const schemas = `
    <script type="application/ld+json">${articleSchema}</script>
    <script type="application/ld+json">${faqSchema}</script>`;

  result = result.replace("</head>", `  ${schemas}\n  </head>`);

  return result;
}

function main() {
  if (!fs.existsSync(indexPath)) {
    console.error("dist/index.html not found. Run 'vite build' first.");
    process.exit(1);
  }

  const shellHtml = fs.readFileSync(indexPath, "utf-8");

  for (const post of blogs) {
    const blogDir = path.join(distDir, "blog", post.slug);
    fs.mkdirSync(blogDir, { recursive: true });
    const html = buildBlogHTML(post, shellHtml);
    fs.writeFileSync(path.join(blogDir, "index.html"), html, "utf-8");
    console.log(`  ✓ prerendered → blog/${post.slug}/index.html`);
  }

  console.log(`\n✔ All ${blogs.length} blog pages prerendered.`);
}

main();
