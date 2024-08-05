import bg from "@/images/background/image-3.jpg";
import image from "@/images/resource/featured-image-13.jpg";
import image2 from "@/images/update-26-02-2021/resources/feature-2-1.jpg";
import image3 from "@/images/zaco/SERVER-MAINTENANCE-SERVICES/READY-TO-EXPERIENCE-THE-BENEFITS-OF-RELIABLE-SERVER-MAINTENANCE.png";
import netorksupport from "@/images/zaco/NETWORK-SUPPORT-AND-MAINTENANCE/WHY-CHOOSE-ZACO-NETWORK-SUPPORT-&SERVICES.png";

const featuresSection = {
  bg,
  title: "Grow With Community & Experience Endless Possibilities",
  features: [
    {
      id: 1,
      icon: "flaticon-design-tools",
      title: "latest\ntechnology",
    },
    {
      id: 2,
      icon: "flaticon-idea",
      title: "amazing\nfree support",
    },
    {
      id: 3,
      icon: "flaticon-clock",
      title: "quick\nservices",
    },
  ],
};

export default featuresSection;

export const featuresSectionTwo = {
  image,
  title: "Linoor all core features",
  title2: "Total design freedom for everyone",
  features: [
    {
      id: 1,
      title: "Professional Staff",
      text: "There are many variations of passages of lorem ipsum majority have suffered.",
    },
    {
      id: 2,
      title: "100% Satisfaction",
      text: "There are many variations of passages of lorem ipsum majority have suffered.",
    },
    {
      id: 3,
      title: "Quality designing",
      text: "There are many variations of passages of lorem ipsum majority have suffered.",
    },
  ],
};

export const featureSix = {
  image: image2,
  imageCaption: "Total design freedom \n for everyone",
  title: "Linoor place a very strong impact",
  text: "There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form injected humour, or randomised words.",
  items: [
    "Self-contained, state-of-the-art time clock",
    "Scalability of up to 500 employees per time clock",
    "The ability to connect up to 32 time clocks",
    "Employee self-enrollment",
  ],
};

export const featureSeven = {
  title: "planning and strategy",
  features: [
    {
      id: 1,
      image: "strategy-1-1.jpg",
      title: "Take a look around our business growth",
      text: "Sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro.",
      href: "/services",
    },
    {
      id: 2,
      image: "strategy-1-2.jpg",
      title: "Our Mission and unique vissions",
      text: "Sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro.",
      href: "/about",
    },
    {
      id: 3,
      image: "strategy-1-3.jpg",
      title: "Finance advice and a global solution",
      text: "Sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro.",
      href: "/services",
    },
  ],
};

export const featureEight = {
  image: image3,
   netorksupport,

  title: "Zaco’s IT Hardware Collection Centers",
  text: "Zaco is India’s leading comprehensive buyer for IT equipment from all brands namely Dell, HPE, IBM, Cisco, Sun Microsystems, Lenovo and many more in major metro cities of India!",
  text1:"Our Mumbai, Delhi, Chennai, Bengaluru, Hyderabad and Kolkata pickup centers offer triple advantage under our buyback program:",
  text2:"Easy for customers all over India to get their IT hardware picked up at one of our collection centers.",
  text3:"Zaco offers the best price for your used or outdated (End-of-Life) hardware and IT equipment inclusive of servers, storage, workstations, server accessories, routers, switches and more.",
  text4:"Peace of mind as IT equipment disposal is not your worry but our responsibility.",
  barTitle: "Digital marketing",
  percent: 70,
};
