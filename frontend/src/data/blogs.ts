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
  relatedSlugs?: string[];
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
    relatedSlugs: ["silver-jewellery-madhurawada-vizag"],
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
  {
    slug: "gold-silver-jewellery-kommadi-pm-palem-madhurawada",
    title: "Gold & Silver Jewellery in Kommadi, PM Palem & Madhurawada — BIS Hallmarked at Srivatsala Silver House",
    meta: "Looking for gold jewellery in Kommadi or PM Palem? Srivatsala Silver House in Madhurawada offers BIS hallmarked gold, silver, and traditional Andhra designs just minutes from your home.",
    keyword: "gold jewellery Kommadi PM Palem",
    date: "2026-05-24",
    readTime: "6 min read",
    image: "/og-image.jpg",
    imageAlt: "Srivatsala Silver House — gold and silver jewellery showroom in Madhurawada, serving Kommadi and PM Palem",
    sections: [
      {
        heading: "Tired of Driving to Dwaraka Nagar for Jewellery?",
        level: "h2",
        content:
          "If you live in Kommadi or PM Palem, every jewellery trip goes the same way. You get in the car at 11 AM. You hit traffic at Madhurawada junction. You sit through the signal near Yendada. By the time you reach Dwaraka Nagar, you have already spent 40 minutes on the road. Then you park, browse for 20 minutes, and drive 40 minutes back."
          + "\n\n"
          + "That is nearly two hours for a 20-minute shopping trip."
          + "\n\n"
          + "There is a better option. Srivatsala Silver House on Revallapalem Road in Madhurawada is 5 minutes from Kommadi and 2 minutes from PM Palem. We have been here for over fifteen years, and families from both areas have been our regulars for most of that time."
      },
      {
        heading: "Why Kommadi Families Prefer Shopping Local",
        level: "h2",
        content:
          "Kommadi has grown fast. New apartments, IT professionals moving in from outside Vizag, young families settling down. If you work at Rushikonda IT park, the last thing you want after a long day is a 40-minute drive to buy jewellery."
      },
      {
        heading: "The Convenience Factor",
        level: "h3",
        content:
          "Kommadi to Srivatsala takes under 10 minutes. You can stop by on your way home, pick up what you need, and still be home before 7 PM. No weekend special trip required."
      },
      {
        heading: "Lightweight Gold for Young Couples",
        level: "h3",
        content:
          "Gold prices have been high. Most young couples in Kommadi are not looking for heavy 50-gram necklaces. They want lightweight gold earrings (2-5 grams), thin gold chains (4-8 grams), simple gold rings (2-4 grams), and small silver pieces like anklets and pendants. We stock these specifically. Our lightweight collection is designed for budgets from ₹5,000 to ₹25,000."
      },
      {
        heading: "Gold as Investment — The Vizag Mindset",
        level: "h3",
        content:
          "Vizag families buy gold differently. It is not just jewellery — it is savings. When a couple in PM Palem buys a gold necklace for ₹40,000, they are thinking about their daughter's wedding or a future need. That is why BIS hallmark matters so much in this market. Every gram of gold you buy from us is verifiably pure."
      },
      {
        heading: "PM Palem: Where Family Traditions Matter",
        level: "h2",
        content:
          "PM Palem is different from Kommadi. It is an older, more established residential area. Families have been here for generations. The schools are good — St. Anns, Delhi Public School. The Cricket Stadium is nearby. And family functions happen year-round."
      },
      {
        heading: "What PM Palem Families Typically Need",
        level: "h3",
        content:
          "Bridal jewellery tops the list. PM Palem has a steady stream of weddings through the year. Traditional bridal sets, vaddanam, kasulaperu, gundla haram — these are our speciality. Silver for everyday is also in high demand. PM Palem women wear silver daily — anklets, toe rings, bangles. Gift jewellery for birthdays, anniversaries, and housewarmings is another frequent request."
      },
      {
        heading: "Gold Savings the Local Way",
        level: "h3",
        content:
          "Some of our best customers from PM Palem use informal gold savings. They come in monthly, pay what they can, and collect their jewellery during wedding season or Diwali. No paperwork. No pressure. Just a trusted local relationship."
      },
      {
        heading: "Srivatsala vs. Dwaraka Nagar Jewellers",
        level: "h2",
        content:
          "Here is how we compare against the big stores on VIP Road and Dwaraka Nagar:"
      },
      {
        heading: "Travel Time",
        level: "h3",
        content:
          "From Kommadi: 5 minutes to Srivatsala vs 30-40 minutes to Dwaraka Nagar. From PM Palem: 2 minutes vs 25-35 minutes."
      },
      {
        heading: "Making Charges",
        level: "h3",
        content:
          "Our making charges are transparent and lower than big chain stores because we do not have showroom overheads, large payrolls, or advertising budgets. You pay for the gold and the craftsmanship — not the brand markup."
      },
      {
        heading: "Personal Service",
        level: "h3",
        content:
          "The owner Santosh is in the shop most days. Want a custom design? Want to negotiate on a bulk order? Just ask. Big chains cannot offer that."
      },
      {
        heading: "The Srivatsala Difference",
        level: "h2",
        content:
          "We have been in Madhurawada for over fifteen years. Most people in the area know us by name. We do not charge for the showroom. We do not have pushy sales — if something does not suit you, we will tell you. We would rather you buy something you genuinely like than something we talked you into."
      },
      {
        heading: "Ready to Visit?",
        level: "h2",
        content:
          "Srivatsala Silver House, Opposite Gayathri Clinic, Revallapalem Road, Madhurawada, Visakhapatnam-530048."
          + "\n\n"
          + "Phone: +91 97041 10147. Open every day 10:30 AM to 9:00 PM. No appointment needed. Just walk in."
          + "\n\n"
          + "Or send us a WhatsApp message. We will send photos of our current collection, tell you the price, and keep it ready for you."
      },
    ],
    relatedSlugs: ["silver-jewellery-madhurawada-vizag"],
    faq: [
      {
        question: "How far is Srivatsala Silver House from Kommadi?",
        answer: "About 2.5 km. A 5-7 minute drive from Kommadi to our showroom on Revallapalem Road in Madhurawada."
      },
      {
        question: "Do you sell lightweight gold for daily wear?",
        answer: "Yes. We stock lightweight earrings, chains, and rings from 2 grams upward. Ideal for young professionals in Kommadi and daily wear for women in PM Palem."
      },
      {
        question: "Is your silver jewellery hallmarked?",
        answer: "Silver jewellery in India does not require mandatory BIS hallmarking like gold. However, we source from trusted suppliers and are transparent about purity on every purchase."
      },
      {
        question: "Can I exchange jewellery bought at another shop?",
        answer: "Yes. We accept old gold jewellery regardless of where you bought it. We assess purity and offer a fair exchange value based on the day's gold rate."
      },
      {
        question: "Do you have a gold savings plan?",
        answer: "We do not have a formal scheme, but many local families use us informally — paying monthly and collecting jewellery during wedding season or Diwali. Talk to us in person."
      },
      {
        question: "What are your store hours?",
        answer: "We are open every day from 10:30 AM to 9:00 PM. No weekly off. Weekday afternoons (2 PM to 5 PM) are usually the least crowded."
      },
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
    sections: [
      {
        heading: "Why Silver Is the Smartest Jewellery Buy in Vizag Right Now",
        level: "h2",
        content:
          "Gold prices have crossed ₹9,000 per gram. A simple 10-gram gold necklace costs nearly a lakh. But silver? Silver is still affordable, beautiful, and every bit as wearable."
          + "\n\n"
          + "In Madhurawada and the surrounding areas, women wear silver every single day. Anklets that jingle when they walk. Toe rings that never come off. Bangles that stack and clink as they cook, clean, and go about their day. Silver is not a special-occasion metal here. It is part of daily life."
          + "\n\n"
          + "At Srivatsala Silver House on Revallapalem Road, we have been selling silver jewellery to Madhurawada families for over fifteen years. Anklets for the women of PM Palem. Pooja items for the temples in Carshed. Gifts for the new brides of Yendada. If you search for silver jewellery near Madhurawada, you will find us — and after you visit once, you will keep coming back."
      },
      {
        heading: "The Silver Collection at Srivatsala Silver House",
        level: "h2",
        content:
          "Our silver section on Revallapalem Road has more variety than most people expect from a local Madhurawada showroom. Here is exactly what you will find when you walk in."
      },
      {
        heading: "Silver Anklets (Payal / Golusu)",
        level: "h3",
        content:
          "This is our most popular silver category. From simple everyday payal to heavy bridal anklets with bells. Fancy designs, traditional styles, lightweight chains, chunky jhalar anklets. Silver anklets in Vizag are worn by women of all ages — schoolgirls, college students, working women, grandmothers. Every woman in your family probably wears at least one pair."
          + "\n\n"
          + "Price range: ₹1,500 to ₹8,000 depending on weight and design."
      },
      {
        heading: "Silver Toe Rings (Mattelu / Mettelu)",
        level: "h3",
        content:
          "Toe rings are an essential part of South Indian married woman's jewellery. In Andhra culture, the toe ring (mettelu) is worn on the second toe of both feet — a symbol of marriage, never removed. We stock plain silver toe rings, design-cut varieties, and adjustable styles. Most women in Madhurawada and PM Palem buy their toe rings from us and come back every few years to replace or resize them."
          + "\n\n"
          + "Price: ₹300 to ₹1,500 per pair."
      },
      {
        heading: "Silver Bangles (Kadalu / Bangles)",
        level: "h3",
        content:
          "Silver bangles come in two types: solid and hollow. Solid bangles last longer but cost more. Hollow bangles are lighter on the wrist and lighter on the wallet. We stock both. Fancy carved bangles for festive wear. Plain polished bangles for daily wear. Stackable styles that look great when worn four to six at a time."
          + "\n\n"
          + "Price range: ₹2,000 to ₹15,000 per pair."
      },
      {
        heading: "Silver Earrings (Jhumkas, Studs, Drops)",
        level: "h3",
        content:
          "Silver earrings are perfect for women who want beautiful jewellery without the weight of gold. Traditional Chandbali earrings, lightweight studs for daily office wear, jhumka drops for festivals. We also carry silver earrings for little girls — small studs and rings that are comfortable for young ears."
          + "\n\n"
          + "Price: ₹500 to ₹5,000."
      },
      {
        heading: "Silver Chains & Pendants",
        level: "h3",
        content:
          "Silver chains are versatile. Wear them with a traditional pendant for puja or with a casual top for work. We have thin silver chains for daily wear and thicker rope chains for a statement look."
          + "\n\n"
          + "Price: ₹1,500 to ₹6,000."
      },
      {
        heading: "Silver Pooja Articles & Gifts",
        level: "h3",
        content:
          "This is a category most jewellery stores ignore — but we love it. Silver pooja items (kalash, lamps, trays, small vigrahas), silver tumblers, silver dinner sets, and silver gift articles. In Vizag, it is traditional to gift silver items for housewarmings, births, and festivals like Diwali and Ugadi."
          + "\n\n"
          + "Price: ₹1,000 to ₹25,000 depending on size and craft."
      },
      {
        heading: "Why Families Near Madhurawada Choose Us for Silver",
        level: "h2",
        content:
          "If you search for silver jewellery near Madhurawada Vizag, you will see a few options. CaratLane has a store in Midhilapuri. GRT has a showroom on NTR Road. BlueStone comes to Madhurawada too. So why do families from Kommadi, PM Palem, Carshed, and Yendada keep coming back to Srivatsala?"
      },
      {
        heading: "Better Prices, No Brand Markup",
        level: "h3",
        content:
          "We are a family-run showroom on Revallapalem Road. We do not pay rent for a VIP Road location. We do not have a corporate marketing budget. That means our silver prices are lower than the big chains. You pay for the silver and the craftsmanship — not the brand name."
      },
      {
        heading: "You Can See the Quality in Person",
        level: "h3",
        content:
          "Silver is best bought in person. The weight, the finish, the shine — you need to hold it. Online photos can hide a lot. When you walk into our Madhurawada showroom, you can touch every piece, try it on, and see exactly what you are paying for."
      },
      {
        heading: "Zero Making Charges on Selected Silver Collections",
        level: "h3",
        content:
          "We run zero-making-charge offers on selected silver items throughout the year. Anklets, toe rings, basic bangles — when the offer is active, you only pay for the silver weight. No extra. Call us at +91 97041 10147 to ask what is currently on offer."
      },
      {
        heading: "Custom Silver Orders Welcome",
        level: "h3",
        content:
          "Need a specific design? We can make it. Our master jeweller works from the showroom itself. Come in with a photo, a sketch, or just an idea. We will quote the price and delivery date before you commit."
      },
      {
        heading: "How to Check Silver Purity Before Buying",
        level: "h2",
        content:
          "Not all silver is the same. Here is how you can be confident about what you are buying."
          + "\n\n"
          + "1. Look for 92.5 hallmark. This means the silver is 92.5% pure — the standard for quality jewellery in India. 2. Check the weight. Silver is priced by gram. Ask for the exact weight before you pay. 3. Ask about making charges. Some stores hide charges in the final price. We tell you upfront. 4. Test with a magnet. Pure silver is non-magnetic. If a piece sticks to a magnet, it has mixed metals. 5. Trust a shop with a reputation. We have been on Revallapalem Road for over fifteen years. Our neighbours in Madhurawada, Carshed, and Midhilapuri Colony know us. You can ask anyone."
      },
      {
        heading: "Visit Our Silver Section in Madhurawada Today",
        level: "h2",
        content:
          "Your search for silver jewellery near Madhurawada ends at Srivatsala Silver House. Whether you need anklets for yourself, toe rings for a wedding, a pooja set for your home, or a gift for a loved one — come see our collection in person."
          + "\n\n"
          + "📍 Opposite Gayathri Clinic, Revallapalem Road, Madhurawada, Visakhapatnam-530048"
          + "\n\n"
          + "🕐 Open every day: 10:30 AM to 9:00 PM"
          + "\n\n"
          + "📞 Call or WhatsApp: +91 97041 10147"
          + "\n\n"
          + "No appointment needed. Just walk in."
      },
    ],
    relatedSlugs: ["best-jewellery-shop-madhurawada-vizag", "gold-silver-jewellery-kommadi-pm-palem-madhurawada"],
    faq: [
      {
        question: "Where can I buy silver jewellery in Madhurawada?",
        answer: "Srivatsala Silver House on Revallapalem Road, opposite Gayathri Clinic, is the most trusted silver jewellery shop in Madhurawada. We have been serving local families for over 15 years with 92.5 hallmark silver anklets, bangles, earrings, toe rings, and pooja articles."
      },
      {
        question: "Is silver jewellery hallmarked in India?",
        answer: "Silver hallmarking is voluntary in India (unlike gold which requires BIS hallmark). However, quality silver is 92.5% pure. At Srivatsala, we are transparent about purity on every purchase."
      },
      {
        question: "What is the price of silver anklets in Vizag?",
        answer: "Silver anklet prices depend on design and weight. At Srivatsala Silver House in Madhurawada, our anklets range from ₹1,500 to ₹8,000. Fancy jhalar anklets with bells cost more than simple chain-style payal."
      },
      {
        question: "Do you sell silver pooja items in Madhurawada?",
        answer: "Yes. We stock silver kalash, lamps, trays, small vigrahas, and gift articles for pooja and festivals. Prices range from ₹1,000 to ₹25,000 depending on size and craftsmanship."
      },
      {
        question: "Can I custom order silver jewellery in Vizag?",
        answer: "Absolutely. Our master jeweller works from the Madhurawada showroom. Bring a photo or just an idea — we will quote the price and delivery date before you commit."
      },
      {
        question: "Do you offer zero making charges on silver?",
        answer: "Yes, we run zero-making-charge offers on selected silver items periodically. Call us at +91 97041 10147 to ask what is currently on offer at our Madhurawada showroom."
      },
      {
        question: "What is the difference between 92.5 silver and sterling silver?",
        answer: "They are the same. 92.5% pure silver is also called sterling silver. The remaining 7.5% is usually copper, added for strength. Pure 99.9% silver is too soft for jewellery."
      },
    ],
  },
];

export const getBlogBySlug = (slug: string): BlogPost | undefined =>
  blogs.find((b) => b.slug === slug);
