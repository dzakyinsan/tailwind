import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { customer1, customer2, pink, white, yellow, gray, iphone1, iphone2, iphone3, iphone4 } from "../assets/images";

export const navLinks = [
  { href: "#mac", label: "Mac" },
  { href: "#iphone", label: "iPhone" },
  { href: "#watch", label: "Watch" },
  { href: "#airpods", label: "AipPods" },
];

export const shoes = [
  {
    thumbnail: iphone1,
    bigShoe: iphone1,
  },
  {
    thumbnail: iphone2,
    bigShoe: iphone2,
  },
  {
    thumbnail: iphone3,
    bigShoe: iphone3,
  },
  {
    thumbnail: iphone4,
    bigShoe: iphone4,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: gray,
    name: "Apple iPhone 15 Pro Natural Titanium",
    price: "IDR 19,050,000",
  },
  {
    imgURL: yellow,
    name: "Apple iPhone 15 Yellow",
    price: "IDR 13,950,000",
  },
  {
    imgURL: white,
    name: "Apple iPhone 15 Pro Max White Titanium",
    price: "IDR 22,950,000",
  },
  {
    imgURL: pink,
    name: "Apple iPhone 15 Plus Pink",
    price: "IDR 15,950,000",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext: "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Mac", link: "/" },
      { name: "iPhone", link: "/" },
      { name: "Watch", link: "/" },
      { name: "AipPods", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@apple.com", link: "mailto:customer@apple.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
