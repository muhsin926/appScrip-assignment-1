import greenBikini from "../assets/Images/green bikini.png";
import bikiniParis from "../assets/Images/bikini paris.png";
import blueBikini from "../assets/Images/blue bikini.png";
import phone from '../assets/Images/phone.png';
import dollar from '../assets/Images/dollar.png';

export const elevateCraft = [
  {
    id: 1,
    title: "Unlock Your ABC Earning Potential",
    description:
      "Are you ready to take your earning potential to the next level? With ABC, you have multiple avenues to monetize your content seamlessly. From subscriptions and tips to merchandise sales and NFTS, ABC helps you diversify your revenue streams and maximize your income.",
    singleImg: true,
    images: [phone, dollar],
  },
  {
    id: 2,
    title: "Boost Your Sales with Built-in E-commerce",
    description:
    "Take control of your brand and boost your sales with ABC's built-in e-commerce functionality. Showcase and sell your exclusive products, whether it's merchandise, digital downloads, or personalized experiences. Integrate your store effortlessly and turn your creative ideas into profitable ventures.",
    singleImg: false,
    cards: [
      {
        image: greenBikini,
        name: "Green modern bikini",
        price: "$100",
        rate: 4.3,
      },
      {
        image: bikiniParis,
        name: "Bikini pairs",
        price: "$100",
        rate: 4.3,
      },
      {
        image: blueBikini,
        name: "Blue Bikini",
        price: "$100",
        rate: 4.3,
      },
      {
        image: greenBikini,
        name: "Green modern bikini",
        price: "$100",
        rate: 4.3,
      },
      {
        image: bikiniParis,
        name: "Bikini Paris",
        price: "$100",
        rate: 4.3,
      },
    ],
  },
];

export const MINI_CARDS = [
    {
        
    }
]