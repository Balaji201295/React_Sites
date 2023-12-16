import {
  AppleWatch,
  Biceps,
  CheckMarkColor,
  CloseMark,
  Davis,
  Dumbbell_1,
  Dumbbell_2,
  Esprit,
  HeartCheck,
  Heart_White,
  Image_1,
  Image_2,
  Image_3,
  Image_4,
  Image_5,
  NewBalance,
  Nike,
  SlimWaist,
  Star,
  Team_1,
  Team_2,
  Team_3,
  Team_4,
  Team_5,
  Team_6,
  Timer,
} from "../assets";

import { LuTimer } from "react-icons/lu";
import { CiStar } from "react-icons/ci";
import { RiMedalLine } from "react-icons/ri";
import { IoCalendarOutline } from "react-icons/io5";
import {
  FiPhone,
  FiMail,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
  FiLinkedin,
} from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

// home page

export const navItems = [
  {
    id: "/",
    title: "home",
  },
  {
    id: "programs",
    title: "programs",
  },
  {
    id: "trainers",
    title: "trainers",
  },
  {
    id: "membership",
    title: "membership",
  },
  {
    id: "contact-us",
    title: "contact",
  },
];

export const brands = [
  {
    imgUrl: Nike,
  },
  {
    imgUrl: Esprit,
  },
  {
    imgUrl: AppleWatch,
  },
  {
    imgUrl: NewBalance,
  },
];

export const programs = [
  {
    icon: Biceps,
    title: "Personal Training",
    navigation: "/program-details",
    content:
      "It’s a long established fact that a reader will be distracted by the readable content",
  },
  {
    icon: Dumbbell_1,
    title: "Workout Programs",
    content:
      "It’s a long established fact that a reader will be distracted by the readable content",
  },
  {
    icon: SlimWaist,
    title: "Program & Diet",
    content:
      "It’s a long established fact that a reader will be distracted by the readable content",
  },
];

export const sessions = [
  {
    icon: Biceps,
    title: "Crush any strength program with our suite of strength equipment",
    points: [
      "Fully fitted power lifting and strongman section",
      "Olympic lifting platforms, weights, and bars",
      "Dumbbells ranging 5lbs-250lbs",
    ],
    imgUrl: Image_1,
  },
  {
    icon: HeartCheck,
    title:
      "Be guided every step of the way with one of our world class coaches",
    points: ["Weight loss", "Competitive CrossFit", "Power lifting"],
    imgUrl: Image_2,
  },
];

export const plans = [
  {
    price: 0,
    planType: "Free Plan",
    content:
      "It’s a long established fact that a reader will be distracted by the readable content",
    points: [
      "1 classes per month",
      "Access to online classes",
      "10 health & fitness guides",
    ],
  },
  {
    price: 149,
    planType: "Basic Plan",
    navigation: "/membership-details",
    content:
      "It’s a long established fact that a reader will be distracted by the readable content",
    points: [
      "8 classes per month",
      "All in basic package",
      "1-on-1 personal training",
    ],
  },
  {
    price: 289,
    planType: "Professional Plan",
    content:
      "It’s a long established fact that a reader will be distracted by the readable content",
    points: [
      "20 classes per month",
      "All in Intermediate package",
      "Access to my online tutorials",
    ],
  },
];

export const reviews = [
  {
    reviewer: "Member",
    content:
      "Eget aliquet sit at lacinia. Magna consequat consectetur maecenas amet sagittis mi. Mattis cursus dolor amet quam commodo amet in sed dui. Risus risus sed sed lectus.",
    profileImg: Davis,
    profileName: "Davis Rosser",
    designation: "Member",
  },
  {
    reviewer: "Associate",
    content:
      "Eget aliquet sit at lacinia. Magna consequat consectetur maecenas amet sagittis mi. Mattis cursus dolor amet quam commodo amet in sed dui.",
    profileImg: Davis,
    profileName: "John Abraham",
    designation: "Associate",
  },
  {
    reviewer: "Manager",
    content:
      "Eget aliquet sit at lacinia. Magna consequat consectetur maecenas amet sagittis mi. Mattis cursus dolor amet quam commodo amet in sed dui. Risus risus sed sed lectus. Risus risus sed sed lectus.",
    profileImg: Davis,
    profileName: "Michael Marsh",
    designation: "Manager",
  },
  {
    reviewer: "Senior Manager",
    content:
      "Eget aliquet sit at lacinia. Magna consequat consectetur maecenas amet sagittis mi. Mattis cursus dolor amet quam commodo amet in sed dui. Risus risus sed sed lectus. Risus risus sed sed lectus.",
    profileImg: Davis,
    profileName: "Michael Marsh",
    designation: "Senior Manager",
  },
  {
    reviewer: "CEO",
    content:
      "Eget aliquet sit at lacinia. Magna consequat consectetur maecenas amet sagittis mi. Mattis cursus dolor amet quam commodo amet in sed dui. Risus risus sed sed lectus. Risus risus sed sed lectus.",
    profileImg: Davis,
    profileName: "Michael Marsh",
    designation: "CEO",
  },
];

export const footerLinks = [
  {
    id: "/",
    title: "home",
  },
  {
    id: "programs",
    title: "programs",
  },
  {
    id: "membership",
    title: "membership",
  },
  {
    id: "blogs",
    title: "blogs",
  },
  {
    id: "contact-us",
    title: "contact",
  },
  {
    id: "about-us",
    title: "about us",
  },
];

export const socialMedia = [
  {
    icon: FiFacebook,
    link: "https://www.facebook.com",
  },
  {
    icon: FiLinkedin,
    link: "https://www.linkedin.com",
  },
  {
    icon: FiTwitter,
    link: "https://www.twitter.com",
  },
  {
    icon: FiYoutube,
    link: "https://www.youtube.com",
  },
  {
    icon: FiInstagram,
    link: "https://www.instagram.com",
  },
];

// program detail

export const programDetails = [
  {
    icon: LuTimer,
    label: "Duration:",
    content: "60 minutes",
  },
  {
    icon: CiStar,
    label: "Intensity:",
    content: "High",
  },
  {
    icon: RiMedalLine,
    label: "Fitness Level:",
    content: "Intermediate",
  },
  {
    icon: IoCalendarOutline,
    label: "Schedule:",
    content: "Monday, Friday",
  },
];

export const personalTrainingSpecs = [
  {
    icon: Biceps,
    value: 1,
    title: "Power Up",
  },
  {
    icon: Timer,
    value: 2,
    title: "Be Flexible",
  },
  {
    icon: Dumbbell_2,
    value: 3,
    title: "Super Body Toning",
  },
];

// membership

export const overview = [
  {
    access: "Classes per month",
    free: 1,
    basics: 8,
    professional: 20,
  },
  {
    access: "Access to online classes",
    free: CheckMarkColor,
    basics: CheckMarkColor,
    professional: CheckMarkColor,
  },
  {
    access: "Health & fitness guides",
    free: CheckMarkColor,
    basics: CheckMarkColor,
    professional: CheckMarkColor,
  },
  {
    access: "Full Warmup guide",
    free: CheckMarkColor,
    basics: CheckMarkColor,
    professional: CheckMarkColor,
  },
  {
    access: "Access video Link",
    free: CloseMark,
    basics: CheckMarkColor,
    professional: CheckMarkColor,
  },
  {
    access: "Full diet plan",
    free: CloseMark,
    basics: CheckMarkColor,
    professional: CheckMarkColor,
  },
  {
    access: "Nutritional support",
    free: CloseMark,
    basics: CheckMarkColor,
    professional: CheckMarkColor,
  },
  {
    access: "Full customize plan",
    free: CloseMark,
    basics: CloseMark,
    professional: CheckMarkColor,
  },
  {
    access: "Daily progress check up",
    free: CloseMark,
    basics: CloseMark,
    professional: CheckMarkColor,
  },
  {
    access: "All Intermediate package",
    free: CloseMark,
    basics: CloseMark,
    professional: CheckMarkColor,
  },
];

// membership detail

export const packageDetails = [
  {
    label: "8 classes per month",
  },
  {
    label: "All in basic package",
  },
  {
    label: "1-on-1 personal trainning",
  },
];

// about us

export const workouts = [
  {
    icon: Biceps,
    title: "Commitment",
    content:
      "Cras tellus ac dui at sed. Suspendisse feugiat scelerisque et, viverra urna imperdiet non malesuada. Inol massa id tellus natoque augue in et.",
    imgUrl: Image_3,
  },
  {
    icon: HeartCheck,
    title: "Motivation",
    content:
      "Cras tellus ac dui at sed. Suspendisse feugiat scelerisque et, viverra urna imperdiet non malesuada. Inol massa id tellus natoque augue in et.",
    imgUrl: Image_4,
  },
  {
    icon: Star,
    title: "Passion",
    content:
      "Cras tellus ac dui at sed. Suspendisse feugiat scelerisque et, viverra urna imperdiet non malesuada. Inol massa id tellus natoque augue in et.",
    imgUrl: Image_5,
  },
];

// contact

export const contactDetails = [
  {
    icon: FiPhone,
    content: "+1 432 1234 234",
  },
  {
    icon: FiMail,
    content: "hello@nguli.com",
  },
  {
    icon: GrLocation,
    content: "105 Street, Seatle-US",
  },
];

// trainers

export const trainers = [
  {
    imgUrl: Team_1,
    trainerName: "Jakob Curtis",
    position: "Founder & Owners",
    links: [
      {
        icon: FiFacebook,
        href: "https://www.facebook.com",
      },
      {
        icon: FiInstagram,
        href: "https://www.instagram.com",
      },
      {
        icon: FiTwitter,
        href: "https://www.twitter.com",
      },
    ],
  },
  {
    imgUrl: Team_2,
    trainerName: "Ryan Vetrovs",
    position: "Coach",
    links: [
      {
        icon: FiFacebook,
        href: "https://www.facebook.com",
      },
      {
        icon: FiInstagram,
        href: "https://www.instagram.com",
      },
      {
        icon: FiTwitter,
        href: "https://www.twitter.com",
      },
    ],
  },
  {
    imgUrl: Team_3,
    trainerName: "Marcus Levin",
    position: "Coach",
    links: [
      {
        icon: FiFacebook,
        href: "https://www.facebook.com",
      },
      {
        icon: FiInstagram,
        href: "https://www.instagram.com",
      },
      {
        icon: FiTwitter,
        href: "https://www.twitter.com",
      },
    ],
  },
  {
    imgUrl: Team_4,
    trainerName: "Ahmad Saris",
    position: "Coach",
    links: [
      {
        icon: FiFacebook,
        href: "https://www.facebook.com",
      },
      {
        icon: FiInstagram,
        href: "https://www.instagram.com",
      },
      {
        icon: FiTwitter,
        href: "https://www.twitter.com",
      },
    ],
  },
  {
    imgUrl: Team_5,
    trainerName: "Phillip Mango",
    position: "Coach",
    links: [
      {
        icon: FiFacebook,
        href: "https://www.facebook.com",
      },
      {
        icon: FiInstagram,
        href: "https://www.instagram.com",
      },
      {
        icon: FiTwitter,
        href: "https://www.twitter.com",
      },
    ],
  },
  {
    imgUrl: Team_6,
    trainerName: "Martin Calzoni",
    position: "Coach",
    links: [
      {
        icon: FiFacebook,
        href: "https://www.facebook.com",
      },
      {
        icon: FiInstagram,
        href: "https://www.instagram.com",
      },
      {
        icon: FiTwitter,
        href: "https://www.twitter.com",
      },
    ],
  },
];

export const coreWorks = [
  {
    icon: Biceps,
    title: "Commitment",
    content:
      "Cras tellus ac dui at sed. Suspendisse feugiat scelerisque et, viverra urna imperdiet non malesuada. Inol massa id tellus natoque augue in et.",
  },
  {
    icon: Heart_White,
    title: "Motivation",
    content:
      "Cras tellus ac dui at sed. Suspendisse feugiat scelerisque et, viverra urna imperdiet non malesuada. Inol massa id tellus natoque augue in et.",
  },
  {
    icon: Star,
    title: "Passion",
    content:
      "Cras tellus ac dui at sed. Suspendisse feugiat scelerisque et, viverra urna imperdiet non malesuada. Inol massa id tellus natoque augue in et.",
  },
];

export const Faqs = [
  {
    question: "Do I need previous experience for your classes?",
    answer:
      " Convallis quis sem nulla ipsum sed enim quam ultricies vivamus. Dictum vehicula amet tristique imperdiet. Aliquam nullam quis aenean arcu blandit non sit amet dui. ",
  },
  {
    question: "Do you offer a trial class for any of your classes?",
    answer:
      " Convallis quis sem nulla ipsum sed enim quam ultricies vivamus. Dictum vehicula amet tristique imperdiet. Aliquam nullam quis aenean arcu blandit non sit amet dui. ",
  },
  {
    question: "How long is the class duration?",
    answer:
      " Convallis quis sem nulla ipsum sed enim quam ultricies vivamus. Dictum vehicula amet tristique imperdiet. Aliquam nullam quis aenean arcu blandit non sit amet dui. ",
  },
  {
    question: "Do you offer on-site classes, or just virtual classes?",
    answer:
      " Convallis quis sem nulla ipsum sed enim quam ultricies vivamus. Dictum vehicula amet tristique imperdiet. Aliquam nullam quis aenean arcu blandit non sit amet dui. ",
  },
  {
    question: "Do you offer 1-on-1 classes and personal training?",
    answer:
      " Convallis quis sem nulla ipsum sed enim quam ultricies vivamus. Dictum vehicula amet tristique imperdiet. Aliquam nullam quis aenean arcu blandit non sit amet dui. ",
  },
  {
    question: "Can I customize my workout plan on this website?",
    answer:
      " Convallis quis sem nulla ipsum sed enim quam ultricies vivamus. Dictum vehicula amet tristique imperdiet. Aliquam nullam quis aenean arcu blandit non sit amet dui. ",
  },
  {
    question: "Are the workouts on this website suitable for beginners?",
    answer:
      " Convallis quis sem nulla ipsum sed enim quam ultricies vivamus. Dictum vehicula amet tristique imperdiet. Aliquam nullam quis aenean arcu blandit non sit amet dui. ",
  },
  {
    question: "Are there any cost associated with using this website?",
    answer:
      " Convallis quis sem nulla ipsum sed enim quam ultricies vivamus. Dictum vehicula amet tristique imperdiet. Aliquam nullam quis aenean arcu blandit non sit amet dui. ",
  },
  {
    question: "Are there any cost associated with using this website?",
    answer:
      " Convallis quis sem nulla ipsum sed enim quam ultricies vivamus. Dictum vehicula amet tristique imperdiet. Aliquam nullam quis aenean arcu blandit non sit amet dui. ",
  },
  {
    question: "Are there any personal trainers available on this website?",
    answer:
      " Convallis quis sem nulla ipsum sed enim quam ultricies vivamus. Dictum vehicula amet tristique imperdiet. Aliquam nullam quis aenean arcu blandit non sit amet dui. ",
  },
  {
    question: "Are there any videos available on this website?",
    answer:
      " Convallis quis sem nulla ipsum sed enim quam ultricies vivamus. Dictum vehicula amet tristique imperdiet. Aliquam nullam quis aenean arcu blandit non sit amet dui. ",
  },
  {
    question: "Is this website available on mobile?",
    answer:
      " Convallis quis sem nulla ipsum sed enim quam ultricies vivamus. Dictum vehicula amet tristique imperdiet. Aliquam nullam quis aenean arcu blandit non sit amet dui. ",
  },
  {
    question: "What is the best way to start a fitness routine?",
    answer:
      " Convallis quis sem nulla ipsum sed enim quam ultricies vivamus. Dictum vehicula amet tristique imperdiet. Aliquam nullam quis aenean arcu blandit non sit amet dui. ",
  },
  {
    question: "How often should I exercise?",
    answer:
      " Convallis quis sem nulla ipsum sed enim quam ultricies vivamus. Dictum vehicula amet tristique imperdiet. Aliquam nullam quis aenean arcu blandit non sit amet dui. ",
  },
  {
    question: "What are the best exercises for weight loss?",
    answer:
      " Convallis quis sem nulla ipsum sed enim quam ultricies vivamus. Dictum vehicula amet tristique imperdiet. Aliquam nullam quis aenean arcu blandit non sit amet dui. ",
  },
  {
    question: "How can I stay motivated to exercise?",
    answer:
      " Convallis quis sem nulla ipsum sed enim quam ultricies vivamus. Dictum vehicula amet tristique imperdiet. Aliquam nullam quis aenean arcu blandit non sit amet dui. ",
  },
  {
    question:
      "What are some common mistakes people make when starting a fitness routine?",
    answer:
      " Convallis quis sem nulla ipsum sed enim quam ultricies vivamus. Dictum vehicula amet tristique imperdiet. Aliquam nullam quis aenean arcu blandit non sit amet dui. ",
  },
  {
    question: "How can I prevent injury while exercising?",
    answer:
      " Convallis quis sem nulla ipsum sed enim quam ultricies vivamus. Dictum vehicula amet tristique imperdiet. Aliquam nullam quis aenean arcu blandit non sit amet dui. ",
  },
];
