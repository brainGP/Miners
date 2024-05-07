import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  benefitImage3,
  benefitImage4,
  benefitImage5,
  benefitImage6,
  benefitImage7,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Бидний давуу талууд",
    url: "/#features",
  },
  {
    id: "1",
    title: "Үнийн мэдээлэл",
    url: "/#pricing",
  },
  {
    id: "2",
    title: "Хэрхэн ашиглах вэ",
    url: "/#how-to-use",
  },
  {
    id: "3",
    title: "Алсын хараа",
    url: "/#vision",
  },
  // {
  //   id: "4",
  //   title: "New account",
  //   url: "#signup",
  //   onlyMobile: true,
  // },
  // {
  //   id: "5",
  //   title: "Sign in",
  //   url: "#login",
  //   onlyMobile: true,
  // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Тусламж",
  "Зөвөлгөө",
  "Мэдээлэл",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Олон хэлний сонголт",
    text: "Монгол гэлтгүй олон хэлний сонголттой манай платформыг ашиглаж, программ хангамжийн мэдлэг, мэдээлэлтэй болно.",
    date: "May 2024",
    status: "Sep",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Автоматжуулалт",
    text: "Таны программ хангамжийн мэдлэгээс хамаараад танд тохирсон асуулт, даалгавар бэлдэж өгөх.",
    date: "Jan 2025",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Чатбот тохируулга",
    text: "Өөрийн мэдэхгүй болон, эргэлзээтэй асуулт, даалгавар гарч ирэх үед туслалцаа үзүүлэх Чатбот үйлчилгээ.",
    date: "May 2024",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Зэрэглэлийн систем",
    text: "Манай платформ ашигладаг хэрэглэгчдийн дунд тэмцээн уралдаан, өрсөлдөөн зохион байгуулж зэрэглэл тогтоох. Үүгээрээ өөрсдийн мэдлэгээ батлах.",
    date: "Sep 2024",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Ойлгомжтойгоор хүссэн программ хангамжаа, хүссэн цагтаа, хаана ч сурч болох Miners Платформ.";

export const collabContent = [
  {
    id: "0",
    title: "Үр дүнтэй",
    text: collabText,
  },
  {
    id: "1",
    title: "Бодитоор ашиглаж болохуйц",
  },
  {
    id: "2",
    title: "Шинэлэг арга барилаар",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Хэрэглэхэд хялбар",
    description: "Ашиглахад хялбар, ойлгомжтой, сонирхолтой заана",
    price: null,
    features: [
      "Таны хүссэн программ хэлийг зааж өгч чадна.",
      "Ашиглаж үзвэл дахин ашигламаар санагдуулна",
      // "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Суурь мэдлэг",
    description: "Программийн хэлийг анхан шатнаас нь зөв суурьтай заана.",
    price: null,
    features: [
      "Хурдан, Чанартай, Сонирхолтой аргаар сурна.",
      // "An analytics dashboard to track your conversations",
      // "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Олон хэл",
    description:
      "Монгол хэл болон өөр олон хэлээр программийн хэлийг сурах боломжтой.",
    price: null,
    features: [
      "Хүссэн орны хэлээрээ мэдлэгээ өргөжүүлнэ.",
      // "Personalized recommendations based on your preferences",
      // "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Python",
    text: "Анхлан суралцагч нарт тохиромжтой хэл бөгөөд хамгийн шилдэг хиймэл оюун ухаан хөгжүүлэхэд ашиглагддаг хэл юм.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage3,
  },
  {
    id: "1",
    title: "Figma",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage4,
    light: true,
  },
  {
    id: "2",
    title: "Next.js",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage5,
  },
  {
    id: "3",
    title: "React.js",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage6,
    light: true,
  },
  {
    id: "4",
    title: "Flutter",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage7,

  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
