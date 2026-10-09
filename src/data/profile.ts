export interface SocialLink {
  id: string;
  name: string;
  subtitle: string;
  url: string;
  icon: string;
  variant: 'gold' | 'lavender' | 'cream' | 'whatsapp';
  actionLabel?: string;
}

export const PROFILE_DATA = {
  fullName: "Ashu Elisabeth Tambe",
  alias: "MSN Lisa 🌸🩺",
  credentials: "BNS · MSc",
  headline: "Medico-Surgical Nurse · Youth Leader · Content Creator · Entrepreneur",
  roles: [
    "Medico-Surgical Nurse",
    "Youth Leader",
    "Content Creator",
    "Healthcare Entrepreneur",
  ],
  contact: {
    phone: "+237 656 919 649",
    rawPhone: "237656919649",
    whatsappUrl: "https://wa.me/237656919649?text=Hello%20Elisabeth!%20It%20was%20wonderful%20meeting%20you%20at%20the%20networking%20event.",
    email: "lizziequineve@gmail.com",
    location: "Douala / Yaoundé, Cameroon",
  },
  note: {
    quote:
      "In the operating room, precision is my language. In the world of creativity, beauty is my canvas. I believe that professional excellence and personal passion shouldn't just coexist—they should thrive together. Whether caring for patients with gentle hands or inspiring youth to lead with conviction, my mission is to bring grace, healing, and purpose to every space I enter.",
    signature: "Ashu Elisabeth Tambe",
  },
  nursePersona: {
    title: "Clinical & Surgical Excellence",
    description: "Dedicated Medico-Surgical Nurse specializing in pre- and post-operative clinical care, patient advocacy, surgical asepsis, and youth health mentorship. Driven by clinical rigor, compassionate patient outcomes, and advancing modern nursing leadership.",
    tags: ["Surgical Nursing", "Patient Advocacy", "Clinical Rigor", "Youth Mentorship"],
  },
  beautyPersona: {
    title: "Beauty, Lifestyle & Digital Influence",
    description: "Content creator and entrepreneur blending the worlds of aesthetic elegance, wellness self-care, and professional empowerment. Showing the modern woman that intellect, medicine, and luxurious self-expression flourish together.",
    tags: ["Aesthetic Wellness", "Empowerment", "Digital Storytelling", "Brand Collaborations"],
  },
  socials: [
    {
      id: "whatsapp",
      name: "WhatsApp Me",
      subtitle: "Instant direct chat & collaboration",
      url: "https://wa.me/237656919649?text=Hello%20Elisabeth!%20Pleasure%20connecting%20with%20you.",
      icon: "whatsapp",
      variant: "gold",
      actionLabel: "Chat Now",
    },
    {
      id: "linkedin",
      name: "LinkedIn Profile",
      subtitle: "Professional CV, research & career",
      url: "https://www.linkedin.com/in/ashu-elisabeth-tambe-bns-msc-34280b377?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      icon: "linkedin",
      variant: "lavender",
      actionLabel: "Connect",
    },
    {
      id: "instagram",
      name: "Instagram Aesthetic",
      subtitle: "@_lisa_creates · Beauty, lifestyle & behind the scenes",
      url: "https://www.instagram.com/_lisa_creates?obrf=MThtOTB4eDBycmdtYg%3D%3D&utm_source=qr",
      icon: "instagram",
      variant: "cream",
      actionLabel: "Follow",
    },
    {
      id: "tiktok",
      name: "TikTok Content",
      subtitle: "@_lisa_creates · High-energy nursing & beauty videos",
      url: "https://www.tiktok.com/@_lisa_creates",
      icon: "tiktok",
      variant: "cream",
      actionLabel: "Watch",
    },
    {
      id: "facebook",
      name: "Facebook Community",
      subtitle: "Connect with my wider network & youth projects",
      url: "https://www.facebook.com/share/19ektcZHsX/?mibextid=wwXIfr",
      icon: "facebook",
      variant: "lavender",
      actionLabel: "Join",
    },
    {
      id: "email",
      name: "Send an Email",
      subtitle: "lizziequineve@gmail.com · Speaking & business inquiries",
      url: "mailto:lizziequineve@gmail.com?subject=Connecting%20via%20Networking%20Card&body=Hi%20Elisabeth,%0A%0AI%20connected%20with%20your%20networking%20card%20and%20would%20love%20to%20discuss...",
      icon: "mail",
      variant: "lavender",
      actionLabel: "Email",
    },
  ] as SocialLink[],
};
