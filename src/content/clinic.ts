/**
 * Single source of content for the Maheshwari Polyclinic site.
 * Lines marked CONFIRM came from the design brief or the clinic's current website and
 * must be confirmed with Dr. Maheshwari before launch. The design mock-ups contained
 * placeholder details (phone "9XXXX", "XYZ Circle", invented credentials and patient
 * names); none of those are used here.
 */
import {
  Activity,
  BadgeCheck,
  BedDouble,
  BriefcaseMedical,
  CalendarCheck,
  ClipboardCheck,
  Clock,
  FileText,
  Globe,
  GraduationCap,
  Heart,
  HeartPulse,
  Leaf,
  Lock,
  Moon,
  Plane,
  Siren,
  Stethoscope,
  Sunrise,
  Syringe,
  Trophy,
  Users,
  Video,
  Activity as Pulse,
  type LucideIcon,
} from "lucide-react";

export const CLINIC = {
  name: "Maheshwari Polyclinic",
  legalName: "Maheshwari Multi Speciality Polyclinic",
  doctor: "Dr. Munesh Maheshwari",
  title: "Physician & Critical Care Specialist",
  tagline: "Compassion • Care • Healthier Tomorrows",
  phoneDisplay: "+91 97848 00627",
  phoneHref: "tel:+919784800627",
  whatsapp: "919784800627",
  email: "muneshc007@yahoo.com",
  addressName: "Maheshwari Polyclinic",
  address: "150-10-B Scheme, Gopalpura Bypass, near Triveni Nagar, Jaipur, Rajasthan 302018",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Maheshwari+Polyclinic+Gopalpura+Bypass+Jaipur",
  mapsEmbed: "https://www.google.com/maps?q=26.867789,75.782601&z=16&output=embed",
  googleReviewsUrl: "https://www.google.com/search?q=Maheshwari+Polyclinic+Jaipur+reviews",
  rating: "5.0",
  reviewCount: "239+",
  experience: "26+",
} as const;

export const NAV = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#stories", label: "Patient Stories" },
  { href: "#hours", label: "Clinic Hours" },
  { href: "#book", label: "Contact" },
];

export interface IconItem {
  icon: LucideIcon;
  title: string;
  body: string;
}

export const HIGHLIGHTS: IconItem[] = [
  { icon: Users, title: "Physician consultation", body: "Personal care for every age group" },
  { icon: BadgeCheck, title: "Critical care expertise", body: "Trained for complex conditions" },
  { icon: Heart, title: "Patient-first approach", body: "Clear, honest, unhurried guidance" },
  { icon: BriefcaseMedical, title: "Emergency support", body: "Help available around the clock" }, // CONFIRM 24/7
];

export const SERVICES: IconItem[] = [
  {
    icon: Stethoscope,
    title: "General Physician Consultation",
    body: "Comprehensive evaluation, accurate diagnosis and personalised treatment for all age groups.",
  },
  {
    icon: HeartPulse,
    title: "Chronic Disease Management",
    body: "Long-term care for diabetes, hypertension, thyroid and other chronic conditions.",
  },
  {
    icon: BedDouble,
    title: "Critical Care Consultation",
    body: "Expert critical care management with timely decisions and hospital coordination.",
  },
  {
    icon: ClipboardCheck,
    title: "Preventive Health Checkups",
    body: "Early detection and prevention through tailored health screening programmes.",
  },
  {
    icon: Syringe,
    title: "Infection & Fever Management",
    body: "Prompt and effective treatment for seasonal infections, viral fevers and other acute illnesses.",
  },
  {
    icon: Plane,
    title: "Travel Health Consultation",
    body: "Pre-travel medical advice, vaccinations and health guidance for international travellers.",
  },
];

export const QUALIFICATIONS: { icon: LucideIcon; label: string }[] = [
  { icon: GraduationCap, label: "Trained at Johns Hopkins University Hospital" },
  { icon: BadgeCheck, label: "FCCS certified, Society of Critical Care Medicine, USA" },
  { icon: Clock, label: "26+ years of clinical practice" },
  { icon: Trophy, label: "Award-winning multi-speciality clinic" }, // CONFIRM
];

export type CredentialKind = "certification" | "international" | "national";

export const CREDENTIAL_COUNTS = { all: 34, certification: 3, international: 7, national: 24 } as const;

/** Only items the clinic's own website lists. The full list of 34 goes on a dedicated page. */
export const CREDENTIALS: {
  kind: CredentialKind;
  icon: LucideIcon;
  title: string;
  detail: string;
  place: string;
  year: string;
}[] = [
  {
    kind: "certification",
    icon: BadgeCheck,
    title: "FCCS: Fundamental Critical Care Support",
    detail: "Society of Critical Care Medicine certification in critical care.",
    place: "SCCM, USA",
    year: "FCCS",
  },
  {
    kind: "certification",
    icon: Activity,
    title: "BLS & ACLS Course",
    detail: "Advanced cardiac life support and basic life support certification.",
    place: "American Heart Association",
    year: "2018",
  },
  {
    kind: "international",
    icon: Globe,
    title: "National Trauma Management Course (NTMC)",
    detail: "Specialist trauma management training.",
    place: "South Africa",
    year: "2019",
  },
  {
    kind: "international",
    icon: Globe,
    title: "International Coronary Congress",
    detail: "Latest advancements in cardiac care.",
    place: "USA",
    year: "2016",
  },
  {
    kind: "national",
    icon: Users,
    title: "ISCCM Expert Committee: ICU Guidelines",
    detail: "National guidelines for planning and designing ICUs in India.",
    place: "New Delhi, India",
    year: "2017",
  },
];

export const STORIES = [
  {
    category: "Critical care",
    icon: Pulse,
    title: "Recovered from severe hypoxia",
    quote: "Recovered remarkably well from severe hypoxia with home-based treatment.",
    who: "87-year-old patient",
    detail: "H1N1 positive",
  },
  {
    category: "Infection & fever",
    icon: Syringe,
    title: "Quick recovery from seasonal flu",
    quote: "Prompt treatment for seasonal flu ensured a quick and comfortable recovery.",
    who: "International traveller",
    detail: "Seasonal flu",
  },
  {
    category: "Travel health",
    icon: Plane,
    title: "Care during a stay in Jaipur",
    quote: "Excellent care and guidance during our hotel stay in Jaipur. Truly supportive and kind.",
    who: "US tourist",
    detail: "Dehydration",
  },
];

export const REVIEWS = [
  {
    initials: "VK",
    name: "Vikram K.",
    when: "2 months ago",
    tags: ["In-depth knowledge", "Fair treatment"],
    text: "Excellent doctor. In-depth knowledge, always talks to the patient to give them confidence. Fair treatment with proper medication.",
  },
  {
    initials: "SM",
    name: "Suneel M.",
    when: "5 months ago",
    tags: ["Most trusted", "Personally caring"],
    text: "Dr. Munesh Maheshwari is one of the best doctors. Most trusted, very helpful and personally caring.",
  },
];

export const TECHNOLOGY: (IconItem & { number: string })[] = [
  {
    number: "01",
    icon: FileText,
    title: "Digital Prescriptions",
    body: "Clear, paperless prescriptions you can keep on your phone, with medication guidance and follow-ups.",
  },
  {
    number: "02",
    icon: Lock,
    title: "Secure Patient Records",
    body: "Your history in one place, with easy access to past consultations, reports and prescriptions.", // CONFIRM security claim
  },
  {
    number: "03",
    icon: Pulse,
    title: "Efficient Care Management",
    body: "Organised tools for monitoring, coordinating care and reducing waiting time.",
  },
  {
    number: "04",
    icon: Video,
    title: "Faster Consultations",
    body: "Quick access to online and follow-up consultations when you cannot visit in person.",
  },
];

export const WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as const;
export const MORNING_HOURS = "7:00 – 8:00 am";
export const EVENING_HOURS = "4:00 – 9:00 pm";

export const HOURS_SUMMARY: { icon: LucideIcon; label: string; note: string; time: string }[] = [
  { icon: Sunrise, label: "Morning OPD", note: "Monday – Sunday", time: MORNING_HOURS },
  { icon: Moon, label: "Evening OPD", note: "Monday – Sunday", time: EVENING_HOURS },
  { icon: Siren, label: "Emergency", note: "No appointment needed", time: "24 hours" }, // CONFIRM
];

export const CONSULTATION_TYPES = [
  "General physician consultation",
  "Chronic disease management",
  "Critical care consultation",
  "Preventive health check-up",
  "Infection & fever",
  "Travel health consultation",
  "Online consultation",
];

export const BOOKING_BENEFITS: { icon: LucideIcon; label: string }[] = [
  { icon: CalendarCheck, label: "Quick appointment" },
  { icon: Users, label: "Minimal waiting time" },
  { icon: Stethoscope, label: "Personalised consultation" },
  { icon: FileText, label: "Follow-up support" },
];

export const FOOTER = {
  pillars: [
    { icon: Users, label: "Experienced Care" },
    { icon: BadgeCheck, label: "Trusted by Patients" },
    { icon: Heart, label: "Modern Facilities" },
    { icon: Leaf, label: "Holistic Approach" },
  ],
  quickLinks: [
    { href: "#top", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Our Services" },
    { href: "#stories", label: "Patient Stories" },
    { href: "#reviews", label: "Reviews" },
    { href: "#book", label: "Contact Us" },
    { href: "#book", label: "Book Appointment" },
  ],
  services: [
    "General Consultation",
    "Fever & Infection Care",
    "Respiratory Care",
    "Diabetes & Lifestyle Care",
    "Preventive Health Checkups",
    "Travel Health",
  ],
} as const;
