import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Home", href: "hero" },
  { label: "Features", href: "features" },
  { label: "Workflow", href: "workflow" },
  { label: "Pricing", href: "pricing" },
  { label: "Testimonials", href: "testimonials" },
  { label: "Contact", href: "contact" },
];


export const testimonials = [
  {
  user: "Ethan Miller",
  company: "CodeCrafters Inc.",
  image: user1,
  text: "AI Cloud made coding faster and smarter for our team. Their AI-powered tools streamlined our workflow and boosted productivity beyond expectations.",
},
{
  user: "Olivia Bennett",
  company: "NextWave Solutions",
  image: user2,
  text: "I'm incredibly impressed by how AI Cloud simplified our development process. Their intuitive interface and smart features brought our ideas to life effortlessly.",
},
{
  user: "Liam Turner",
  company: "Innovexa Labs",
  image: user3,
  text: "Working with AI Cloud was a game-changer. Their platform offered powerful AI assistance that helped us write cleaner code and deliver faster.",
},
{
  user: "Sophia Mitchell",
  company: "AlphaCode Dynamics",
  image: user4,
  text: "AI Cloud's tools revolutionized the way we develop software. Their smart suggestions and real-time collaboration features saved us time and enhanced our team’s performance.",
},
{
  user: "Noah Brooks",
  company: "BrightEdge Creators",
  image: user5,
  text: "I’m blown away by the innovation behind AI Cloud. Their AI assistant helped us debug, refactor, and build our app faster than ever.",
},
{
  user: "Ava Reynolds",
  company: "CoreSync Systems",
  image: user6,
  text: "From start to finish, AI Cloud supported our development journey. Their platform's intelligence and ease of use make them an essential tool for any modern developer.",
},
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Effortlessly design and structure your code with our intuitive AI-powered drag-and-drop interface, built to simplify development for every developer.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build AI-powered applications that run seamlessly across multiple platforms, including mobile, desktop, and the cloud.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your AI development with a variety of built-in templates tailored for different types of applications and coding environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your AI-powered application in real-time as you code, enabling rapid iterations and seamless adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Collaborate with your team in real-time on AI projects, enabling seamless teamwork, code sharing, and faster innovation.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into code performance and user behavior with an integrated AI analytics dashboard, helping you optimize your applications effectively.",
  },
];

export const checklistItems = [
  {
  title: "Code merge made easy",
  description:
    "Simplify version control and streamline code merges with intelligent AI suggestions and conflict resolution.",
},
{
  title: "Review code without worry",
  description:
    "Leverage AI to automatically detect bugs, improve readability, and accelerate peer code reviews.",
},
{
  title: "AI assistance to reduce time",
  description:
    "Boost development speed with real-time AI-powered coding help, smart autocompletion, and optimization tips.",
},
{
  title: "Share work in minutes",
  description:
    "Easily collaborate and share your code with teammates using built-in tools for real-time syncing and deployment.",
},
];

export const pricingOptions = [
  {
  title: "Free",
  price: "$0",
  features: [
    "Basic AI-assisted code suggestions",
    "5 GB secure cloud storage",
    "Limited real-time collaboration tools",
    "Access to public code templates",
  ],
},
{
  title: "Pro",
  price: "$10",
  features: [
    "Advanced AI coding support and tips",
    "10 GB secure cloud storage",
    "Full real-time team collaboration",
    "Integrated version control system",
    "TCS employees get 500 bonus credits",
  ],
},
{
  title: "Enterprise",
  price: "$200",
  features: [
    "Complete AI development environment",
    "Unlimited secure cloud storage",
    "High-speed performance infrastructure",
    "Enterprise-grade security features",
  ],
},
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
