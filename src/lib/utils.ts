export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export const servicesList = [
  {
    id: "ai-web-development",
    title: "AI Web Development",
    description: "Modern, AI-powered websites built with Next.js that convert visitors into clients.",
    icon: "code",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Data-driven marketing strategies amplified by AI to grow your brand and revenue.",
    icon: "trending",
    color: "from-brand-400 to-orange-500",
  },
  {
    id: "branding",
    title: "Branding & Identity",
    description: "Premium brand identity design that positions your business for recognition and trust.",
    icon: "palette",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "video-editing",
    title: "Video Editing",
    description: "Professional video content powered by AI workflows for maximum engagement.",
    icon: "video",
    color: "from-red-500 to-rose-500",
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description: "Stunning visual assets for your brand, from social media to print.",
    icon: "pen",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "youtube-automation",
    title: "YouTube Automation",
    description: "AI-driven YouTube channel growth, content strategy, and automation systems.",
    icon: "youtube",
    color: "from-red-600 to-red-700",
  },
];

export const coursesList = [
  {
    id: "ai-workflows",
    title: "AI Workflows Mastery",
    description: "Learn to leverage AI tools for content creation, automation, and business growth.",
    level: "Beginner to Advanced",
    duration: "8 Weeks",
    students: 240,
  },
  {
    id: "fiverr-mentorship",
    title: "Fiverr Freelancing Mentorship",
    description: "From zero to full-time freelancer. Learn client acquisition, delivery, and scaling.",
    level: "All Levels",
    duration: "12 Weeks",
    students: 180,
  },
  {
    id: "web-dev",
    title: "AI Web Development Bootcamp",
    description: "Build modern websites with Next.js, Tailwind, and AI-assisted development.",
    level: "Beginner to Intermediate",
    duration: "10 Weeks",
    students: 150,
  },
  {
    id: "kids-coding",
    title: "Coding for Kids (Ages 8-16)",
    description: "Fun, interactive coding classes enhanced with AI learning assistants.",
    level: "Beginner Friendly",
    duration: "Ongoing",
    students: 90,
  },
];

export const portfolioItems = [
  {
    category: "website",
    title: "E-Commerce Website Redesign",
    description: "Complete redesign for a fashion brand with 3x conversion improvement.",
    image: "/uploads/website-designs/",
    tags: ["Web Design", "UI/UX", "Development"],
  },
  {
    category: "facebook",
    title: "Social Media Campaign",
    description: "Facebook ad creative series for a tech startup launch.",
    image: "/uploads/facebook-posts/",
    tags: ["Social Media", "Ads", "Design"],
  },
  {
    category: "business-card",
    title: "Premium Business Cards",
    description: "Luxury business card design for a consulting firm.",
    image: "/uploads/business-cards/",
    tags: ["Print", "Branding", "Identity"],
  },
  {
    category: "youtube",
    title: "YouTube Thumbnail Series",
    description: "High-CTR thumbnail designs for a tech review channel.",
    image: "/uploads/youtube-thumbnails/",
    tags: ["YouTube", "Thumbnails", "Graphics"],
  },
  {
    category: "fiverr",
    title: "Fiverr Gig Thumbnails",
    description: "Eye-catching gig images that increased clicks by 200%.",
    image: "/uploads/fiverr-gig-thumbnails/",
    tags: ["Fiverr", "Thumbnails", "Marketing"],
  },
  {
    category: "facebook",
    title: "LinkedIn Professional Posts",
    description: "Professional social media content for B2B brand positioning.",
    image: "/uploads/facebook-posts/",
    tags: ["LinkedIn", "B2B", "Content"],
  },
];

export const testimonialsList = [
  {
    name: "Sarah Johnson",
    role: "Freelancer",
    content: "The Fiverr mentorship completely transformed my freelancing career. I went from zero to $3k/month in just 3 months.",
    rating: 5,
  },
  {
    name: "Ahmed Hassan",
    role: "Student",
    content: "The AI workflows course opened my eyes to what's possible with modern tools. Highly recommended for anyone looking to future-proof their skills.",
    rating: 5,
  },
  {
    name: "Maria Lopez",
    role: "Small Business Owner",
    content: "Mac Digital Agency redesigned our website and the results were immediate — 40% increase in conversions within the first month.",
    rating: 5,
  },
  {
    name: "James Chen",
    role: "Content Creator",
    content: "The YouTube automation system they built for me runs entirely on autopilot. My channel grew by 15k subs in 2 months.",
    rating: 5,
  },
];

export const metrics = [
  { label: "Students Trained", value: 560, suffix: "+" },
  { label: "Projects Completed", value: 180, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
  { label: "Revenue Generated", value: "$2.4M", suffix: "+" },
];

export const faqItems = [
  {
    category: "Services",
    items: [
      { q: "What services does Mac Digital Agency offer?", a: "We offer AI web development, digital marketing, branding, video editing, graphic design, and YouTube automation services. Each service is enhanced with modern AI workflows for maximum results." },
      { q: "How do I get started with a service?", a: "Simply book a free consultation through our contact form or WhatsApp. We'll discuss your needs, provide a tailored proposal, and get started within 48 hours." },
      { q: "Do you offer custom packages?", a: "Yes, every client receives a customized solution based on their specific goals, budget, and timeline. We believe in tailored strategies, not one-size-fits-all packages." },
    ],
  },
  {
    category: "Courses",
    items: [
      { q: "Are the courses beginner-friendly?", a: "Absolutely. Our courses range from beginner to advanced levels. Each course includes step-by-step guidance, practical projects, and mentorship support." },
      { q: "Do I get a certificate after completion?", a: "Yes, upon completing any of our courses, you'll receive a verified certificate that you can add to your LinkedIn profile and resume." },
      { q: "What is the time commitment per week?", a: "Most courses require 5-8 hours per week, including video lessons, practical exercises, and community discussions. Learn at your own pace with lifetime access." },
    ],
  },
  {
    category: "Pricing",
    items: [
      { q: "How much do your services cost?", a: "Our pricing varies based on project scope, complexity, and timeline. We offer transparent pricing packages starting from $500 for basic services. Contact us for a detailed quote." },
      { q: "Do you offer payment plans?", a: "Yes, we offer flexible payment plans for both services and courses. We believe in making quality education and services accessible to everyone." },
    ],
  },
  {
    category: "Consultations",
    items: [
      { q: "How do I book a consultation?", a: "You can book a free consultation by filling out our contact form, sending us a WhatsApp message, or emailing us directly. We typically respond within 2-4 hours." },
      { q: "Is the initial consultation really free?", a: "Yes, your first consultation is completely free with no obligation. We use this time to understand your needs and determine if we're the right fit for each other." },
    ],
  },
];
