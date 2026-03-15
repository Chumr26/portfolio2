import svgPaths from "../../imports/svg-nyhfy7xnj9";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import cSharpCertificateImage from "../../assets/c_sharp.png";
import { useRouteScrollMemory } from "../hooks/useRouteScrollMemory";

function ArrowIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_9_6106)" id="arrow">
          <path d={svgPaths.p3589c00} fill="#D3E97A" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_9_6106">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CertificateCard({
  title,
  issuer,
  date,
  description,
  credentialId,
  skills,
  image,
}: {
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialId?: string;
  skills: string[];
  image: string;
}) {
  return (
    <div className="bg-[#1a1a1a] rounded-[16px] overflow-hidden hover:bg-[#222] transition-colors border border-[#484848]/30">
      {/* Certificate Image */}
      <div className="relative w-full h-[340px] bg-[#0a0a0a] overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={`${title} certificate`}
          className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
      </div>

      {/* Certificate Content */}
      <div className="p-6 md:p-8 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="font-medium leading-[1.3] text-[24px] md:text-[28px] text-white">
              {title}
            </h3>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <p className="font-semibold leading-[1.5] text-[#d3e97a] text-[18px]">{issuer}</p>
              <p className="font-normal leading-[1.5] text-[#c7c7c7] text-[16px]">{date}</p>
            </div>
          </div>
          
          <p className="font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
            {description}
          </p>

          {credentialId && (
            <div className="flex flex-col gap-2">
              <p className="font-medium leading-[1.5] text-[14px] text-[#c7c7c7] uppercase">
                Credential ID
              </p>
              <p className="font-normal leading-[1.5] text-[14px] text-white">
                {credentialId}
              </p>
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#0a0a0a] px-4 py-2 rounded-full border border-[#484848]"
              >
                <p className="font-medium leading-none text-[14px] text-white">{skill}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 pt-2">
          <a href="#" className="flex flex-col gap-[4px] group">
            <div className="flex gap-[4px] items-center">
              <p className="font-bold leading-[1.5] text-[#d3e97a] text-[14px] uppercase">
                View Certificate
              </p>
              <ArrowIcon />
            </div>
            <div className="h-[2px] bg-[#d3e97a] w-full" />
          </a>
        </div>
      </div>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-[#1a1a1a] rounded-[16px] p-8 flex flex-col gap-2 border border-[#484848]/30">
      <p className="leading-none text-[56px] md:text-[72px] text-[#d3e97a]">{number}</p>
      <p className="font-medium leading-[1.5] text-[16px] md:text-[18px] text-[#c7c7c7]">
        {label}
      </p>
    </div>
  );
}

export default function Certificates() {
  useRouteScrollMemory();

  const certificates = [
    {
      title: "Advanced React Development",
      issuer: "Meta",
      date: "Jan 2024",
      description:
        "Completed comprehensive training in advanced React patterns, hooks, performance optimization, and testing strategies. Gained expertise in building scalable and maintainable React applications.",
      credentialId: "CERT-ADV-REACT-2024-0125",
      skills: ["React", "Hooks", "Performance", "Testing"],
      image: cSharpCertificateImage,
    },
    {
      title: "Web Accessibility Specialist",
      issuer: "W3C",
      date: "Nov 2023",
      description:
        "Achieved certification in creating accessible web experiences following WCAG 2.1 guidelines. Learned to implement ARIA, semantic HTML, and keyboard navigation for inclusive design.",
      credentialId: "W3C-ACCESS-2023-1118",
      skills: ["WCAG", "ARIA", "Accessibility", "Semantic HTML"],
      image: "https://images.unsplash.com/photo-1638636241638-aef5120c5153?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBjb3Vyc2UlMjBjZXJ0aWZpY2F0ZSUyMGRpcGxvbWF8ZW58MXx8fHwxNzczMzA2NTg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Front-End Web Developer Professional",
      issuer: "Google",
      date: "Sep 2023",
      description:
        "Comprehensive program covering HTML, CSS, JavaScript, responsive design, and modern frameworks. Built multiple projects demonstrating proficiency in front-end development.",
      credentialId: "GOOG-FE-DEV-2023-0922",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      image: "https://images.unsplash.com/photo-1644926054948-8c1155eeb0e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNlcnRpZmljYXRpb24lMjBiYWRnZXxlbnwxfHx8fDE3NzMzMDY1ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "Jul 2023",
      description:
        "Completed 300+ hours of coursework covering ES6, regular expressions, debugging, object-oriented programming, functional programming, and algorithmic thinking.",
      credentialId: "FCC-JS-ALGO-2023-0715",
      skills: ["JavaScript", "Algorithms", "Data Structures", "ES6"],
      image: "https://images.unsplash.com/photo-1604403428907-673e7f4cd341?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNlcnRpZmljYXRlfGVufDF8fHx8MTc3MzIxNTM2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "May 2023",
      description:
        "Mastered responsive web design principles including CSS Grid, Flexbox, and media queries. Built multiple responsive projects following best practices.",
      credentialId: "FCC-RWD-2023-0510",
      skills: ["CSS", "Flexbox", "CSS Grid", "Mobile-First"],
      image: "https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBjZXJ0aWZpY2F0aW9uJTIwZGlnaXRhbHxlbnwxfHx8fDE3NzMzMDY1OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "UI/UX Design Fundamentals",
      issuer: "Interaction Design Foundation",
      date: "Mar 2023",
      description:
        "Gained foundational knowledge in user interface and user experience design. Learned design principles, prototyping, and user research methodologies.",
      credentialId: "IDF-UIUX-2023-0320",
      skills: ["UI Design", "UX Research", "Prototyping", "Figma"],
      image: "https://images.unsplash.com/photo-1673515334717-da4d85aaf38b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXZhc2NyaXB0JTIwbGVhcm5pbmclMjBjb3Vyc2V8ZW58MXx8fHwxNzczMzA2NTk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen w-full">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-[60px] pt-[100px] md:pt-[160px] pb-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[80px] items-start">
          <div className="flex flex-col gap-[24px]">
            <h1 className="leading-[0.9] text-[60px] md:text-[80px] lg:text-[101px] text-white">
              Certificates
            </h1>
            <p className="font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
              Continuous learning and professional development
            </p>
          </div>
          <div className="flex flex-col gap-[16px]">
            <h2 className="font-medium leading-[1.4] text-[24px] md:text-[32px] text-white">
              Committed to continuous growth and staying current with industry standards.
            </h2>
            <p className="font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
              I believe in lifelong learning and regularly pursue certifications to enhance my skills and knowledge. Each certification represents dedication to mastering new technologies and best practices in web development.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 md:px-[60px] pb-[80px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard number="6+" label="Certifications Earned" />
          <StatCard number="800+" label="Learning Hours" />
          <StatCard number="15+" label="Skills Mastered" />
          <StatCard number="2024" label="Most Recent" />
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#484848]" />

      {/* Certificates Grid */}
      <section className="container mx-auto px-4 md:px-[60px] py-[80px]">
        <div className="flex flex-col gap-[8px] mb-[48px]">
          <h2 className="leading-none text-[56px] md:text-[76px] text-white">
            All Certificates
          </h2>
          <p className="font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
            A collection of professional certifications and completed courses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} {...cert} />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#484848]" />

      {/* Learning Path Section */}
      <section className="container mx-auto px-4 md:px-[60px] py-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[80px]">
          <h2 className="leading-none text-[56px] md:text-[76px] text-white">
            Currently Learning
          </h2>
          <div className="flex flex-col gap-[32px]">
            <div className="flex flex-col gap-[16px]">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-medium leading-[1.3] text-[20px] md:text-[24px] text-white">
                  Advanced TypeScript Patterns
                </h3>
                <span className="bg-[#d3e97a] text-[#0a0a0a] px-3 py-1 rounded-full font-bold text-[12px] uppercase whitespace-nowrap">
                  In Progress
                </span>
              </div>
              <p className="font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
                Diving deep into TypeScript's advanced type system, generics, conditional types, and building type-safe applications.
              </p>
            </div>

            <div className="flex flex-col gap-[16px]">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-medium leading-[1.3] text-[20px] md:text-[24px] text-white">
                  Web Performance Optimization
                </h3>
                <span className="bg-[#d3e97a] text-[#0a0a0a] px-3 py-1 rounded-full font-bold text-[12px] uppercase whitespace-nowrap">
                  In Progress
                </span>
              </div>
              <p className="font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
                Learning advanced techniques for optimizing web application performance, including code splitting, lazy loading, and caching strategies.
              </p>
            </div>

            <div className="flex flex-col gap-[16px]">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-medium leading-[1.3] text-[20px] md:text-[24px] text-white">
                  Next.js 14 & Server Components
                </h3>
                <span className="bg-[#484848] text-white px-3 py-1 rounded-full font-bold text-[12px] uppercase whitespace-nowrap">
                  Planned
                </span>
              </div>
              <p className="font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
                Exploring the latest features in Next.js including Server Components, Server Actions, and the App Router.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#484848]" />

      {/* Footer */}
      <Footer />
    </div>
  );
}