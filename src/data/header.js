import icon from "@/images/icons/close-1-1.png";
import logo4 from "@/images/logo-2.png";
import logo3 from "@/images/logo-3.png";
import logo2 from "@/images/logo-dark.png";
import logo1 from "@/images/logo.png";
import lMobile from "@/images/zaco/Zaco_LOGO.png";
import logo6 from "@/images/zaco/Zacow1 (1) (1).png";
import logo7 from "@/images/update-01-10-2021/logo-7-dark.png";
import logo8 from "@/images/update-01-10-2021/logo-8-light.png";
import logo5 from "@/images/update-09-06-2021/logo-5.png";
import logo10 from "@/images/update-09-06-2021/logo-6.png";
import zacologo from "@/images/zaco/Zaco_LOGO (1).png";

const home = {
  id: 1,
  name: "Home",
  href: "/",
  // subNavItems: [
  //   {
  //     id: 1,
  //     name: "Home Style 01",
  //     href: "/index-main",
  //   },
  //   {
  //     id: 2,
  //     name: "Home Style 02",
  //     href: "/index-2",
  //   },
  //   {
  //     id: 3,
  //     name: "Home Style 03",
  //     href: "/index-3",
  //   },
  //   {
  //     id: 4,
  //     name: "Home One Page",
  //     href: "/one-page",
  //   },
  //   {
  //     id: 5,
  //     name: "Home Style 04",
  //     href: "/index-4",
  //   },
  //   {
  //     id: 6,
  //     name: "Home Style 05",
  //     href: "/index-5",
  //   },
  //   {
  //     id: 7,
  //     name: "Home Style 06",
  //     href: "/index-6",
  //     isNew: true,
  //   },
  //   {
  //     id: 8,
  //     name: "Home Style 07",
  //     href: "/index-7",
  //     isNew: true,
  //   },
  //   {
  //     id: 9,
  //     name: "Home Style 08",
  //     href: "/index-8",
  //     isNew: true,
  //   },
  //   {
  //     id: 10,
  //     name: "Portfolio Home",
  //     href: "/index-portfolio",
  //   },
  //   {
  //     id: 11,
  //     name: "Portfolio Home 02",
  //     href: "/index-portfolio-2",
  //   },
  //   {
  //     id: 12,
  //     name: "Portfolio Home 03",
  //     href: "/index-portfolio-3",
  //   },
  //   {
  //     id: 13,
  //     name: "Parallax Home",
  //     href: "/index-parallax",
  //   },
  //   {
  //     id: 14,
  //     name: "Dark Home",
  //     href: "/index-dark",
  //   },
  //   {
  //     id: 15,
  //     name: "Boxed Home",
  //     href: "/index-boxed",
  //   },
  // ],
};

const navItemsTwo = [
  { ...home, href: "#home" },
  {
    id: 2,
    name: "About",
    href: "/about",
  },
  {
    id: 3,
    name: "Services",
    href: "/services",
  },
  {
    id: 4,
    name: "Online Store",
    href: "/portfolio",
  },
  {
    id: 5,
    name: "Team",
    href: "/team",
  },
  {
    id: 6,
    name: "Testimonials",
    href: "/testimonials",
  },
  {
    id: 7,
    name: "Blog",
    href: "/blog",
  },
  {
    id: 8,
    name: "Contact",
    href: "/contact",
  },
];

const navItems = [
  home,
  {
    id: 1,
    name: "About Us",
    href: "/about",

  },

  {
    id: 2,
    name: "Services",
    href: "/services",
    subNavItems: [
      { id: 1, name: "Server maintenance", href: "/server-maintenance" },
      { id: 2, name: "Storage maintenance", href: "/storage-maintenance"},
      { id: 3, name: "Network maintenance", href: "/network-maintenance" },
      { id: 4, name: "Rental Services", href: "/rental-services" },
      { id: 5, name: "Infrastructure Managed Services (IMS)", href: "/ims" },
      { id: 6, name: "IT Hardware Solution & Services", href: "/it-hardware-solution" },
   
    ],
  },

  {
    id: 3,
    name: "ITAD Services",
    href: "/it-equipment-buyback",

  },

  {
    id: 4,
    name: "Contact Us",
    href: "/contact",
  
  },

];
const navItems1 = [
  home,
  {
    id: 1,
    name: "About Us",
    href: "/about",

  },

  {
    id: 2,
    name: "Services",
    href: "/services",
    subNavItems: [
      { id: 1, name: "Server maintenance", href: "/server-maintenance" },
      { id: 2, name: "Storage maintenance", href: "/storage-maintenance"},
      { id: 3, name: "Network maintenance", href: "/network-maintenance" },
      { id: 4, name: "Rental Services", href: "/rental-services" },
      { id: 5, name: "Infrastructure Managed Services (IMS)", href: "/ims" },
      { id: 6, name: "IT Hardware Solution & Services", href: "/it-hardware-solution" },
   
    ],
  },

  {
    id: 3,
    name: "ITAD Services",
    href: "/it-equipment-buyback",

  },

  {
    id: 4,
    name: "Contact Us",
    href: "/contact",
  
  },
  {
    id: 5,
    name: "Blog",
    href: "/blog",
 
  },
  {
    id: 6,
    name: "Eosl Library",
    href: "/eosl",

  },
];
const navItemsGlobal = [
  // home,
  // {
  //   id: 1,
  //   name: "About Us",
  //   href: "/about",

  // },

  // {
  //   id: 2,
  //   name: "Services",
  //   href: "/services",
  //   subNavItems: [
  //     { id: 1, name: "Server maintenance", href: "/server-maintenance" },
  //     { id: 2, name: "Storage maintenance", href: "/storage-maintenance"},
  //     { id: 3, name: "Network maintenance", href: "/network-maintenance" },
  //     { id: 4, name: "Rental Services", href: "/rental-services" },
  //     { id: 5, name: "Infrastructure Managed Services (IMS)", href: "/ims" },
  //     { id: 6, name: "IT Hardware Solution & Services", href: "/it-hardware-solution" },
   
  //   ],
  // },

  // {
  //   id: 3,
  //   name: "ITAD Services",
  //   href: "/it-equipment-buyback",

  // },

  // {
  //   id: 4,
  //   name: "Contact Us",
  //   href: "/contact",
  
  // },
  {
    id: 5,
    name: "Blog",
    href: "/blog",
 
  },
  {
    id: 6,
    name: "Eosl Library",
    href: "/eosl",

  },
];




export const socials = [



  {
    id: 1,
    href: "https://www.facebook.com/zacoitsolved",
    icon: "fab fa-facebook-square",
  },
  {
    id: 2,
    href: "https://www.linkedin.com/company/zaco-computer-pvt.-ltd/",
    icon: "fab fa-linkedin",
  },
  {
    id: 3,
    href: "https://www.instagram.com/zacoitsolutions/",
    icon: "fab fa-instagram",
  },
  {
    id: 4,
    href: "https://www.pinterest.com/zacoitsolved/",
    icon: "fab fa-pinterest-p",
  },
];

const headerData = {
  title: "Refurbished Servers In India From DELL, HPE & IBM",
  title2: "Refurbished Servers In India From DELL, HPE & IBM",
  title3: "Refurbished Servers In India From DELL, HPE & IBM",
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  lMobile,
  logo7,
  logo8,
  zacologo,
  logo10,
  navItems,
  navItemsGlobal,
  navItems1,
  navItemsTwo,
  address: "Suite 20 Golden Street USA",
  phone: "+91-22-69288800",
  phone2: "+ 44 203 815 8028",
  email: "info@zacocomputer.com",
  blog:"Blog",
  abb:"Case Studies",
  eosl:"EOSL Library",
  gc:"Global Locations ",
  icon,
  socials,
  text: "Linoor is a premium Template for Digital Agencies, Start Ups, Small Business and a wide range of other agencies.",
};

export default headerData;
