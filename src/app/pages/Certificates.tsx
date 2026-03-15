import { useTranslation } from 'react-i18next';
import svgPaths from '../../imports/svg-nyhfy7xnj9';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useRouteScrollMemory } from '../hooks/useRouteScrollMemory';
import { withBase } from '@/lib/asset';

function ArrowIcon() {
    return (
        <div className="relative shrink-0 size-[24px]">
            <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
            >
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
    hours,
    skills,
    image,
    url,
}: {
    title: string;
    issuer: string;
    date: string;
    description: string;
    hours: number;
    skills: string[];
    image: string;
    url: string;
}) {
    const { t } = useTranslation();
    return (
        <div className="bg-[#1a1a1a] rounded-[16px] overflow-hidden hover:bg-[#222] transition-colors border border-[#484848]/30">
            {/* Certificate Image */}
            <div className="relative w-full h-[340px] bg-[#0a0a0a] overflow-hidden">
                <ImageWithFallback
                    src={withBase(image)}
                    alt={`${title} ${t("certificates.altSuffix", { defaultValue: "certificate" })}`}
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
                            <p className="font-semibold leading-[1.5] text-[#d3e97a] text-[18px]">
                                {issuer}
                            </p>
                            <p className="font-normal leading-[1.5] text-[#c7c7c7] text-[16px]">
                                {date}
                            </p>
                        </div>
                    </div>

                    <p className="font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
                        {description}
                    </p>

                    {/* {credentialId && (
                        <div className="flex flex-col gap-2">
                            <p className="font-medium leading-[1.5] text-[14px] text-[#c7c7c7] uppercase">
                                Credential ID
                            </p>
                            <p className="font-normal leading-[1.5] text-[14px] text-white">
                                {credentialId}
                            </p>
                        </div>
                    )} */}

                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="bg-[#0a0a0a] px-4 py-2 rounded-full border border-[#484848]"
                            >
                                <p className="font-medium leading-none text-[14px] text-white">
                                    {skill}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex gap-4 pt-2">
                    <a
                        href={url}
                        target="_blank"
                        className="flex flex-col gap-[4px] group"
                    >
                        <div className="flex gap-[4px] items-center">
                            <p className="font-bold leading-[1.5] text-[#d3e97a] text-[14px] uppercase">
                                {t("certificates.viewCertificate", { defaultValue: "View Certificate" })}
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
            <p className="leading-none text-[56px] md:text-[72px] text-[#d3e97a]">
                {number}
            </p>
            <p className="font-medium leading-[1.5] text-[16px] md:text-[18px] text-[#c7c7c7]">
                {label}
            </p>
        </div>
    );
}

export default function Certificates() {
    useRouteScrollMemory();
    const { t } = useTranslation();

    const certificates = [
        {
            title: 'Understanding the Internet',
            issuer: 'Keio University and APIE Program',
            date: '01/2026 - 02/2026 ',
            description:
                'An introductory course on the architecture and operation of the Internet, exploring routing, packets, and fundamental networking concepts.',
            hours: 10,
            skills: [
                'Internet Architecture',
                'Networking Basics',
                'Routing',
                'TCP/IP',
            ],
            image: '/certs/apie.png',
            url: 'https://www.futurelearn.com/certificates/2tf1sem',
        },
        {
            title: 'Cyber Security 101',
            issuer: 'Try Hack Me',
            date: '10/2025 - 12/2025',
            description:
                'An introduction to core cybersecurity concepts, covering the basics of offensive and defensive security, web application security, and network vulnerabilities.',
            hours: 6,
            skills: [
                'Offensive Security',
                'Defensive Security',
                'Vulnerability Assessment',
                'Information Security',
            ],
            image: '/certs/cyber_security_101.png',
            url: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-GEDH6GRXCX.pdf',
        },
        {
            title: 'Pre Security',
            issuer: 'Try Hack Me',
            date: '09/2025 - 10/2025',
            description:
                'A foundational learning path covering the prerequisite knowledge for cybersecurity, including networking, web fundamentals, and Linux operating systems.',
            hours: 40,
            skills: [
                'Networking Fundamentals',
                'Web Applications',
                'Linux Basics',
                'Windows Basics',
            ],
            image: '/certs/pre_security.png',
            url: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-FP6SLIVL5L.pdf',
        },
        {
            title: 'Foundational C# ',
            issuer: 'Microsoft & FreeCodeCamp',
            date: '07/2024 - 08/2024',
            description:
                'A comprehensive guide to foundational C# programming concepts, covering core syntax, arrays, logic parsing, and debugging console applications.',
            hours: 35,
            skills: [
                'C# Syntax',
                'Object-Oriented Programming',
                'Debugging',
                '.NET Console Apps',
            ],
            image: '/certs/c_sharp.png',
            url: 'https://www.freecodecamp.org/certification/fcc54d4eb3c-bf34-4587-b77b-14358f2f1418/foundational-c-sharp-with-microsoft',
        },
        {
            title: 'JavaScript Advanced',
            issuer: 'F8',
            date: '08/2023 - 09/2023',
            description:
                'An advanced deep dive into the underlying mechanics of JavaScript, covering complex topics like closures, hoisting, the "this" keyword, and strict mode.',
            hours: 12,
            skills: ['Closures', 'IIFE', 'Hoisting', 'Strict Mode'],
            image: '/certs/js_advanced.png',
            url: 'https://f8.edu.vn/certificates/3s80s',
        },
        {
            title: 'JavaScript Basic',
            issuer: 'F8',
            date: '07/2023 - 08/2023',
            description:
                'A beginner-friendly course on fundamental JavaScript programming, focusing on variables, functions, DOM manipulation, and basic algorithms.',
            hours: 20,
            skills: [
                'JS Syntax',
                'DOM Manipulation',
                'Event Handling',
                'Basic Algorithms',
            ],
            image: '/certs/js_basic.png',
            url: 'https://f8.edu.vn/certificates/lzuly',
        },
        {
            title: 'Introduction to Programming with Python',
            issuer: "Harvard University's CS50",
            date: '03/2023 - 04/2023',
            description:
                'An introduction to programming using Python, focusing on functions, variables, conditionals, loops, exceptions, and regular expressions.',
            hours: 30,
            skills: [
                'Python',
                'Regular Expressions',
                'Object-Oriented Programming',
                'Testing/Debugging',
            ],
            image: '/certs/cs50p.png',
            url: 'https://certificates.cs50.io/e96de8c2-5ba0-42a6-b8fd-4529574260c2.pdf',
        },
        {
            title: 'Introduction to Computer Science',
            issuer: "Harvard University's CS50",
            date: '01/2023 - 04/2023',
            description:
                'A broad and robust introduction to the intellectual enterprises of computer science and the art of programming, teaching algorithmic thinking and problem-solving.',
            hours: 120,
            skills: ['C', 'Python', 'SQL', 'Data Structures'],
            image: '/certs/cs50x.png',
            url: 'https://certificates.cs50.io/400d7974-1b0b-4d23-802d-b6365402ffbf.pdf',
        },
    ];

    const certificationsEarned = certificates.length;
    const totalLearningHours = certificates.reduce(
        (total, certificate) => total + certificate.hours,
        0,
    );
    const skillsMastered = new Set(
        certificates.flatMap((certificate) => certificate.skills),
    ).size;
    const mostRecentYear = certificates
        .flatMap((certificate) => {
            const yearMatches = certificate.date.match(/\b(?:19|20)\d{2}\b/g);
            return yearMatches ? yearMatches.map(Number) : [];
        })
        .reduce((latestYear, year) => Math.max(latestYear, year), 0);

    return (
        <div className="bg-[#0a0a0a] min-h-screen w-full">
            <Navigation />

            {/* Hero Section */}
            <section className="container mx-auto px-4 md:px-[60px] pt-[100px] md:pt-[160px] pb-[80px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[80px] items-start">
                    <div className="flex flex-col gap-[24px]">
                        {/* <h1 className="leading-[0.9] text-[60px] md:text-[80px] lg:text-[101px] text-white">
              Certificates
            </h1> */}
                        <h2 className="leading-none text-[56px] md:text-[76px] text-white">
                            {t("certificates.hero.title", { defaultValue: "Certificates" })}
                        </h2>
                        <p className="font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
                            {t("certificates.hero.subtitle", { defaultValue: "Continuous learning and professional development" })}
                        </p>
                    </div>
                    <div className="flex flex-col gap-[16px]">
                        <h2 className="font-medium leading-[1.4] text-[24px] md:text-[32px] text-white">
                            {t("certificates.hero.heading", { defaultValue: "Committed to continuous growth and staying current with industry standards." })}
                        </h2>
                        <p className="font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
                            {t("certificates.hero.description", { defaultValue: "I believe in lifelong learning and regularly pursue certifications to enhance my skills and knowledge. Each certification represents dedication to mastering new technologies and best practices in sofware development." })}
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="container mx-auto px-4 md:px-[60px] pb-[80px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <StatCard
                        number={`${certificationsEarned}+`}
                        label={t("certificates.stats.earned", { defaultValue: "Certifications Earned" })}
                    />
                    <StatCard
                        number={`${totalLearningHours}+`}
                        label={t("certificates.stats.hours", { defaultValue: "Learning Hours" })}
                    />
                    <StatCard number={`${skillsMastered}+`} label={t("certificates.stats.skills", { defaultValue: "Skills Mastered" })} />
                    <StatCard
                        number={mostRecentYear > 0 ? `${mostRecentYear}` : t("certificates.stats.na", { defaultValue: "N/A" })}
                        label={t("certificates.stats.recent", { defaultValue: "Most Recent" })}
                    />
                </div>
            </section>

            {/* Divider */}
            <div className="w-full h-[1px] bg-[#484848]" />

            {/* Certificates Grid */}
            <section className="container mx-auto px-4 md:px-[60px] py-[80px]">
                <div className="flex flex-col gap-[8px] mb-[48px]">
                    <h2 className="leading-none text-[56px] md:text-[76px] text-white">
                        {t("certificates.all.title", { defaultValue: "All Certificates" })}
                    </h2>
                    <p className="font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
                        {t("certificates.all.subtitle", { defaultValue: "A collection of professional certifications and completed courses." })}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {certificates.map((cert, index) => (
                        <CertificateCard 
                            key={index} 
                            {...cert} 
                            title={t(`certificates.list.${index}.title`, { defaultValue: cert.title })}
                            issuer={t(`certificates.list.${index}.issuer`, { defaultValue: cert.issuer })}
                            description={t(`certificates.list.${index}.description`, { defaultValue: cert.description })}
                            skills={cert.skills.map((skill, skillIndex) =>
                                t(`certificates.list.${index}.skills.${skillIndex}`, { defaultValue: skill }),
                            )}
                        />
                    ))}
                </div>
            </section>

            {/* Divider */}
            <div className="w-full h-[1px] bg-[#484848]" />

            {/* Learning Path Section */}
            <section className="container mx-auto px-4 md:px-[60px] py-[80px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[80px]">
                    <h2 className="leading-none text-[56px] md:text-[76px] text-white">
                        {t("certificates.learning.title", { defaultValue: "Currently Learning" })}
                    </h2>
                    <div className="flex flex-col gap-[32px]">
                        {[
                            {
                                title: 'International English Language Testing System (IELTS)',
                                status: 'In Progress',
                                description: 'Preparing for the IELTS exam to achieve a high score in all four language skills: Listening, Reading, Writing, and Speaking.'
                            },
                            {
                                title: 'CompTIA Security+',
                                status: 'Planned',
                                description: 'Planning to pursue the CompTIA Security+ certification to validate foundational cybersecurity skills and knowledge.'
                            }
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col gap-[16px]">
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="font-medium leading-[1.3] text-[20px] md:text-[24px] text-white">
                                        {t(`certificates.learning.list.${index}.title`, { defaultValue: item.title })}
                                    </h3>
                                    <span className={item.status === 'In Progress' ? "bg-[#d3e97a] text-[#0a0a0a] px-3 py-1 rounded-full font-bold text-[12px] uppercase whitespace-nowrap" : "bg-[#484848] text-white px-3 py-1 rounded-full font-bold text-[12px] uppercase whitespace-nowrap"}>
                                        {t(`certificates.learning.status.${item.status.replace(' ', '')}`, { defaultValue: item.status })}
                                    </span>
                                </div>
                                <p className="font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
                                    {t(`certificates.learning.list.${index}.description`, { defaultValue: item.description })}
                                </p>
                            </div>
                        ))}
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
