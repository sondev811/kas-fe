import { IAboutUs, ILocation, INavbar } from "@interfaces/index";
import aboutUsImg from "@assets/img/aboutus-01.webp";
import ourHistory from "@assets/img/aboutus-02.webp";
import faqImg from "@assets/img/aboutus-03.webp";

export const scrollDirection = {
  down: "down",
  up: "up",
};

export const navbarName = {
  home: "Home",
  aboutUs: "About us",
  blog: "Blog",
  contactUs: "Contact us",
  notFound: "Error 404",
};

export const navbar: INavbar[] = [
  {
    link: "/",
    name: navbarName.home,
  },
  {
    link: "/about-us",
    name: navbarName.aboutUs,
  },
  {
    link: "/blog",
    name: navbarName.blog,
  },
  {
    link: "/contact-us",
    name: navbarName.contactUs,
  },
];

export const locationDefault = {
  center: { lat: -27.46852, lng: 153.024534 },
  zoom: 13,
};

export const locations: ILocation[] = [
  { lat: -27.46852, lng: 153.024534, name: "Kashy Brisbane" },
  { lat: -27.480333, lng: 153.012397, name: "Kashy West End" },
  { lat: -27.457996, lng: 152.99953, name: "Kashy Paddington" },
  { lat: -27.482406, lng: 152.983549, name: "Kashy Toowong" },
  { lat: -27.447629, lng: 153.043158, name: "Kashy Newstead" },
  { lat: -27.431232, lng: 153.042852, name: "Kashy Albion" },
  { lat: -27.426431, lng: 153.016007, name: "Kashy Grange" },
  { lat: -27.39944, lng: 153.059152, name: "Kashy Nundah" },
  { lat: -27.494477, lng: 153.059211, name: "Kashy Coorparoo" },
  { lat: -27.53568, lng: 153.067233, name: "Kashy Mount Gravatt" },
  { lat: -27.520361, lng: 153.112029, name: "Kashy Carindale" },
  { lat: -27.484407, lng: 153.096764, name: "Kashy Carina" },
  { lat: -27.475792, lng: 153.128687, name: "Kashy Tingalpa" },
];

export const aboutUsContents: IAboutUs[] = [
  {
    name: "About Us",
    content: [
      {
        type: "paragraph",
        content:
          "Kashy is a groundbreaking startup revolutionizing the auto industry with its convenient mobile mechanics service. Our unique approach prioritizes exceptional customer experience, streamlining the process of car maintenance and repairs.",
      },
      {
        type: "paragraph",
        content:
          "At Kashy, we understand the value of effective communication. That's why we facilitate direct interaction between our customers and hand-selected mobile mechanics. This ensures your concerns and needs are understood and addressed accurately, eliminating any uncertainties.",
      },
      {
        type: "paragraph",
        content:
          "With a strong commitment to innovation, Kashy was selected for the QUT (Queensland University of Technology) Bluebox Accelerator to drive positive change within the industry. By actively addressing industry issues (such as honesty and convenience) and prioritizing the well-being of our customers and mechanics, we're making auto care better for all.",
      },
      {
        type: "paragraph",
        content:
          "Experience the convenience and honesty of a Kashy mechanic today. Say goodbye to traditional mechanics and embrace a new era of hassle-free car maintenance and repairs. Contact us now to discover the difference Kashy can make for all your automotive needs.",
      },
    ],
    bookUrl: "/",
    findMoreUrl: "https://www.kashy.com.au/blog-1",
    backgroundImage: aboutUsImg,
  },

  {
    name: "OUR HISTORY",
    content: [
      {
        type: "paragraph",
        content:
          "Kashy was founded in July 2018 by Lachlan Palmer, as a fresh take on an old concept where apprentices and mechanics would take on extra work for family and friends as a way to make ends meet. So called 'cash jobs', or 'cashies'.",
      },
      {
        type: "paragraph",
        content:
          "After leaving school, Lachlan followed his love for cars into a job as an apprentice mechanic earning a just $300 per week. With very few of his family and friends owning a car he didn’t have the same access to extra jobs as his fellow mechanics. This was when the first idea of Kashy came to fruition.",
      },
      {
        type: "paragraph",
        content:
          "After working in the industry for 4.5 years and becoming a fully qualified mechanic Lachlan became frustrated by the way the current system works. Seeing many major and minor companies in the auto industry to be a 'bad deal' for both vehicle owners and mechanics alike  – with vehicle owners paying exorbitant prices for services, while mechanics are paid as little as a tenth of what dealers charge per hour.",
      },
      {
        type: "paragraph",
        content:
          "Since then he has put his effort into building Kashy, a business that shines a light on the current issues in the auto industry and solves them by creating an ethical and fair trade for all.",
      },
    ],
    bookUrl: "/",
    findMoreUrl: "https://www.kashy.com.au/blog-1",
    backgroundImage: ourHistory,
  },
  {
    name: "FAQ",
    content: [
      {
        type: "paragraph",
        content:
          "We understand that you might have a couple of questions about Kashy. Before you send us an email, here are some of the more common questions we receive.",
      },
      {
        type: "header",
        content: "Do you need a workshop?",
      },
      {
        type: "paragraph",
        content:
          "You might be surprised to find out that our Kashy mechanics don't need a workshop for most of your repairs, and is why our Kashy mechanics can look after you at home or even while you work.",
      },
      {
        type: "header",
        content: "How does Kashy vet their mechanics?",
      },
      {
        type: "paragraph",
        content:
          "We are incredibly selective about the mechanics we use and check their work before they start, and their ratings after each service. ",
      },
      {
        type: "header",
        content: "What if I need to cancel?",
      },
      {
        type: "paragraph",
        content:
          "No worries! Our mechanics are usually super flexible and so long as you give us reasonable warning, we will try to accomodate.",
      },
      {
        type: "header",
        content: "Are there charges for cancelling?",
      },
      {
        type: "paragraph",
        content:
          "Not usually, the only time we request a cancellation fee is when we're unable to return the parts booked for your car, however this is rare.",
      },
      {
        type: "header",
        content: "How do I pay for my service?",
      },
      {
        type: "paragraph",
        content:
          "We offer bank transfer, credit card, ZipPay and PayPal options after your service that means cashless and contactless service.",
      },
    ],
    bookUrl: "/",
    findMoreUrl: "https://www.kashy.com.au/blog-1",
    backgroundImage: faqImg,
  },

];
