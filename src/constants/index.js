import greenBikini from "../assets/Images/green bikini.png";
import bikiniParis from "../assets/Images/bikini paris.png";
import blueBikini from "../assets/Images/blue bikini.png";
import phone from "../assets/Images/phone.png";
import dollar from "../assets/Images/dollar.png";
import automation from "../assets/Images/automation.png";
import community from "../assets/Images/community.png";
import prize from "../assets/Images/prize.png";

export const ELEVATE_CRAFT = [
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
    id: 1,
    icon: automation,
    title: "Save Time with Automation and Efficiency",
    text: "Supercharge your content creation with ABC's automation tools. Streamline scheduling, multi-platform management, and more. Save time on repetitive tasks, focus on exceptional content.",
  },
  {
    id: 2,
    icon: community,
    title: "Join a Supportive Community",
    text: "Join ABC's vibrant creator community. Connect with like-minded individuals, collaborate, and share experiences. Access mental health services and resources for personal and professional growth.",
  },
  {
    id: 1,
    icon: prize,
    title: "SUnlock Exclusive Opportunities and Prizes",
    text: "Enjoy ABC contests and challenges for valuable prizes. Showcase your exceptional talent and win business grants, scholarships, and more. Thrive on our platform with recognition and rewards.",
  },
];

export const FOOTER_CONTENT = [
  {
    title: "Company",
    content: ["About Us", "Support", "Blog", "Login", "Signup", "Contact Us"],
  },
  {
    title: "Programs",
    content: ["Affiliate Program", "Ambassador Program", "Partnership Program"],
  },
  {
    title: "Policy",
    content: [
      "Legal",
      "DMCA",
      "USC 2257",
      "Privacy Policy",
      "Terms and Conditions",
    ],
  },
];
