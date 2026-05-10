export type BlogPost = {
  slug: string;
  title: string;
  meta: string;
  keyword: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  sections: BlogSection[];
  faq: BlogFAQ[];
};

export type BlogSection = {
  heading: string;
  level: "h2" | "h3";
  content: string;
};

export type BlogFAQ = {
  question: string;
  answer: string;
};

export const blogs: BlogPost[] = [
  {
    slug: "best-jewellery-shop-madhurawada-vizag",
    title: "Best Jewellery Shop in Madhurawada, Vizag — Gold, Silver & Traditional Designs",
    meta: "Looking for a trusted jewellery shop in Madhurawada? Srivatsala Silver House offers BIS hallmarked gold, authentic silver jewellery & Andhra traditional designs. Visit us today.",
    keyword: "jewellery shop in Madhurawada",
    date: "2026-05-17",
    readTime: "8 min read",
    image: "/og-image.jpg",
    imageAlt: "Srivatsala Silver House jewellery shop in Madhurawada, Visakhapatnam — gold and silver collections",
    sections: [
      {
        heading: "Where Is the Best Jewellery Shop in Madhurawada?",
        level: "h2",
        content:
          "If you are searching for a jewellery shop in Madhurawada, stop scrolling. Srivatsala Silver House has been serving families right here on Revallapalem Road for over fifteen years. We are opposite Gayathri Clinic, just down the road from the Carshed junction. No need to travel all the way to Dwaraka Nagar or VIP Road. The best gold and silver jewellery in this part of Vizag is walking distance from your home."
          + "\n\n"
          + "We understand Madhurawada because we live here too. When you walk into our showroom, you are not walking into a big corporate store. You are walking into a family-run shop where the person helping you might be the same person who crafted your mother's mangalsutra fifteen years ago."
      },
      {
        heading: "Why Local Families Choose Srivatsala Silver House",
        level: "h2",
        content:
          "There are many jewellery shops in Visakhapatnam. But families in Madhurawada, Kommadi, PM Palem, Midhilapuri Colony, and Yendada keep coming back to us. Here is why."
      },
      {
        heading: "BIS Hallmarked Gold — Nothing Less",
        level: "h3",
        content:
          "Every single piece of gold jewellery we sell is BIS hallmarked. That means the purity is certified by the Bureau of Indian Standards. You are not taking our word for it. You get a guarantee stamped right on the metal. Whether you buy a 2-gram gold ring or a 165-gram bridal vaddanam, the hallmark is your proof."
      },
      {
        heading: "Real Andhra Traditional Designs",
        level: "h3",
        content:
          "We specialise in designs that big-brand showrooms do not stock. Vaddanam (bridal waist belt), Kasulaperu (Lakshmi coin necklace), Gundla Haram (long beaded necklace), Jhumkas, Mango Mala, Nethichutti, Vanki, Mattelu — these are not just names to us. These are the pieces our grandmothers wore and our daughters will wear. We keep the tradition alive."
      },
      {
        heading: "Silver Jewellery for Every Budget",
        level: "h3",
        content:
          "Gold gets the attention, but our silver collection is equally loved. From daily-wear anklets and toe rings to pooja articles and gift items, we stock 92.5 hallmark silver jewellery that fits every budget. Many families in Madhurawada come to us specifically for silver — and they have been doing so for years."
      },
      {
        heading: "Covering All Areas Around Madhurawada",
        level: "h2",
        content:
          "We are located in Madhurawada, but our customers come from the entire surrounding area. Within a 6 to 7 kilometre radius, we serve families from Kommadi, PM Palem, Carshed, Midhilapuri Colony, Yendada, Rushikonda and beyond. Here is what people in each area ask us most."
      },
      {
        heading: "Kommadi — Gold for Weddings & Festivals",
        level: "h3",
        content:
          "Kommadi families often come to us for wedding jewellery. Bridal sets, gold necklaces, and mangalsutras are our most requested pieces from this area. The short distance from Kommadi to our Madhurawada showroom means you can visit us multiple times before making your final choice — and most families do."
      },
      {
        heading: "PM Palem — Silver & Daily Wear Favourites",
        level: "h3",
        content:
          "From PM Palem, we see a lot of daily-wear jewellery buyers. Lightweight gold earrings, silver anklets, and toe rings (mattelu) are popular. Many working women from PM Palem visit us during their lunch break or after work because we are open until 9 PM every day."
      },
      {
        heading: "Carshed & Midhilapuri Colony — Walk-in Neighbours",
        level: "h3",
        content:
          "Being just minutes from the Carshed junction, we get many walk-in customers from Carshed and Midhilapuri Colony. These are our neighbours — people who come in for a quick gold chain, a last-minute gift, or to check the day's gold rate. We love serving our immediate community."
      },
      {
        heading: "Yendada & Rushikonda — Custom Orders & Bridal",
        level: "h3",
        content:
          "Yendada and Rushikonda residents often come to us for custom bridal jewellery. They want something unique — not the same designs every other bride is wearing. Our karigars (master craftsmen) work with you to create exactly what you imagined. From the first sketch to the final polish, the piece is made right here in Vizag."
      },
      {
        heading: "What Jewellery Can You Buy at Our Madhurawada Shop?",
        level: "h2",
        content:
          "Our showroom on Revallapalem Road carries a wide range of jewellery for every occasion."
      },
      {
        heading: "Gold Jewellery",
        level: "h3",
        content:
          "Necklaces, bangles, earrings, rings, chains, pendants, mangalsutras, nose pins. All BIS hallmarked 22-carat and 18-carat gold. From lightweight daily wear to heavy bridal pieces."
      },
      {
        heading: "Silver Jewellery",
        level: "h3",
        content:
          "Anklets, bangles, toe rings (mattelu), pendants, chains, pooja articles, gift items. 92.5 hallmark silver at fair prices with zero making charges on selected collections."
      },
      {
        heading: "Andhra Traditional Jewellery",
        level: "h3",
        content:
          "Vaddanam, Kasulaperu, Gundla Haram, Jhumkas, Mango Mala, Nethichutti, Vanki, Buttalu. These are our speciality — designs you will not easily find at big-brand stores in Vizag."
      },
      {
        heading: "Bridal Jewellery Sets",
        level: "h3",
        content:
          "Complete bridal sets including vaddanam, kasulaperu, jhumkas, gundla haram, and mangalsutra. Custom-made to match your wedding outfit and personal style. Book a bridal consultation with us."
      },
      {
        heading: "How to Find Srivatsala Silver House in Madhurawada",
        level: "h2",
        content:
          "Our address is Opposite Gayathri Clinic, Revallapalem Road, Madhurawada, Visakhapatnam-530048. We are open Monday to Sunday from 10:30 AM to 9:00 PM. No weekly off. You can walk in any day."
          + "\n\n"
          + "Coming from Kommadi: Take the Madhurawada road towards Carshed junction. We are about 2 minutes from the junction, on your left."
          + "\n\n"
          + "Coming from PM Palem: Head towards Madhurawada main road. We are opposite Gayathri Clinic, easy to spot."
          + "\n\n"
          + "Coming from Yendada or Rushikonda: Take the beach road to Madhurawada. The drive takes about 10 minutes."
          + "\n\n"
          + "Prefer to call ahead? WhatsApp us at +91 97041 10147. We can keep your shortlist ready before you arrive."
      },
    ],
    faq: [
      {
        question: "Which is the best jewellery shop in Madhurawada?",
        answer: "Srivatsala Silver House is widely trusted by local families in Madhurawada and surrounding areas like Kommadi, PM Palem, Carshed, Midhilapuri Colony, and Yendada. We offer BIS hallmarked gold, 92.5 hallmark silver, and authentic Andhra traditional designs."
      },
      {
        question: "Does Srivatsala Silver House sell BIS hallmarked gold?",
        answer: "Yes. Every gold piece we sell comes with BIS hallmark certification. You get guaranteed purity on every purchase — from a simple gold ring to a complete bridal set."
      },
      {
        question: "What traditional Andhra jewellery designs do you have?",
        answer: "We specialise in Vaddanam (bridal waist belt), Kasulaperu (Lakshmi coin necklace), Gundla Haram, Jhumkas, Mango Mala, Nethichutti, Vanki, Mattelu (toe rings), and Buttalu. These are authentic South Indian temple-style designs."
      },
      {
        question: "Do you sell silver jewellery in Madhurawada?",
        answer: "Yes, we have a wide silver jewellery collection including anklets, bangles, toe rings, pendants, chains, and pooja articles. All our silver is 92.5 hallmarked."
      },
      {
        question: "What are your store hours in Madhurawada?",
        answer: "We are open Monday to Sunday, 10:30 AM to 9:00 PM. No weekly off. You can walk in any day."
      },
      {
        question: "Can I custom order bridal jewellery?",
        answer: "Absolutely. Our master jewellers can create custom bridal jewellery including vaddanam, kasulaperu, and complete wedding sets. WhatsApp us at +91 97041 10147 to book a consultation."
      },
    ],
  },
];

export const getBlogBySlug = (slug: string): BlogPost | undefined =>
  blogs.find((b) => b.slug === slug);
