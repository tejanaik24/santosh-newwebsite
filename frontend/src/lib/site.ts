export const SITE = {
  name: "Srivatsala Silver House",
  tagline: "Gold & Silver Jewellery",
  address:
    "Opposite Gayathri Clinic, Revallapalem Road, Madhurawada, Visakhapatnam-530048, Andhra Pradesh",
  city: "Visakhapatnam",
  phone: "+91 97041 10147",
  phoneRaw: "919704110147",
  whatsappMessage:
    "Hi Srivatsala Silver House, I want to enquire about jewellery",
  hours: "Mon–Sun · 10:30 AM – 9:00 PM",
  // Social links — update with actual profile URLs
  social: {
    instagram: "https://www.instagram.com/srivatsalasilverhouse", // e.g. "https://instagram.com/srivatsalasilverhouse"
    facebook: "https://www.facebook.com/srivatsalasilverhouse",  // e.g. "https://facebook.com/srivatsalasilverhouse"
    youtube: "https://www.youtube.com/@srivatsalasilverhouse",   // e.g. "https://youtube.com/@srivatsalasilverhouse"
  },
};

export const waLink = (msg = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(msg)}`;
