import svgPaths from "../../imports/svg-3c6obhzfe4";
import img6Dd8E389A31 from "../../assets/b6b96aad2b8137858cdaeb7d1d8e14e4e0f0f752.png";
import imgPotrait from "../../assets/potrait.png";

import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { T } from "node_modules/react-router/dist/development/index-react-server-client-MKTlCGL3.mjs";
import { useRouteScrollMemory } from "../hooks/useRouteScrollMemory";

function SocialButton({ children, href }: { children: React.ReactNode; href?: string }) {
    return (
        <a
            href={href || "#"}
            target="_blank"
            className="bg-[#222] flex items-center justify-center rounded-full shrink-0 size-[54px] hover:bg-[#2d2d2d] transition-colors"
        >
            {children}
        </a>
    );
}

function LinkedInIcon() {
    return (
        <div className="relative shrink-0 size-[26px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
                <g id="bxl-linkedin.svg">
                    <path d={svgPaths.p282a2240} fill="#D3E97A" id="Vector" />
                    <path d={svgPaths.p31d7ad00} fill="#D3E97A" id="Vector_2" />
                </g>
            </svg>
        </div>
    );
}

function GitHubIcon() {
    return (
        <div className="relative shrink-0 size-[26px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
                <g id="bxl-github.svg">
                    <path clipRule="evenodd" d={svgPaths.p17e6c000} fill="#D3E97A" fillRule="evenodd" id="Vector" />
                </g>
            </svg>
        </div>
    );
}

function SkillTag({ text }: { text: string }) {
    return (
        <div className="flex items-center justify-center px-[40px] py-[20px] rounded-full border border-[#484848] hover:border-[#d3e97a] transition-colors">
            <p className="font-bold leading-none text-[16px] text-white uppercase">{text}</p>
        </div>
    );
}

function ExperienceItem({
    title,
    company,
    period,
    description,
}: {
    title: string;
    company?: string;
    period: string;
    description: string;
}) {
    return (
        <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[8px]">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <p className="font-medium leading-[1.3] text-[20px] md:text-[24px] text-white">{title}</p>
                    <p className="font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px] whitespace-nowrap">
                        {period}
                    </p>
                </div>
                {company && <p className="font-semibold leading-[1.6] text-[#d3e97a] text-[18px]">{company}</p>}
            </div>
            <p className="font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">{description}</p>
        </div>
    );
}

function TechStackLogo({ name, image }: { name: string; image: string }) {
    return (
        <div className="flex flex-col items-center justify-center gap-3 group">
            <div className="w-[64px] h-[64px] rounded-[8px] overflow-hidden bg-[#1a1a1a] flex items-center justify-center border border-[#484848]/30">
                <ImageWithFallback
                    src={image}
                    alt={`${name} logo`}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                />
            </div>
            <p className="font-normal leading-none text-[12px] text-[#c7c7c7] text-center">{name}</p>
        </div>
    );
}

export default function About() {
    useRouteScrollMemory();

    return (
        <div className="bg-[#0a0a0a] min-h-screen w-full">
            <Navigation />

            {/* Hero Section */}
            <section className="container mx-auto px-4 md:px-[60px] pt-[100px] md:pt-[160px] pb-[80px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="flex flex-col gap-[40px] order-2 lg:order-1">
                        <div className="flex flex-col gap-[8px]">
                            <h1 className="leading-[0.9] text-[60px] md:text-[80px] lg:text-[101px] text-white">
                                Hi, i am<br />Khoa.
                            </h1>
                            <p className="font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
                                An information technology college student passionate about developing robust and highly performant software.
                            </p>
                        </div>

                        <div className="flex gap-[16px] items-center flex-wrap">
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                className="bg-[#d3e97a] h-[54px] rounded-full flex items-center gap-[12px] pl-[24px] pr-[6px] py-[20px] hover:bg-[#c5db6e] transition-colors"
                            >
                                <p className="font-bold leading-none text-[#0a0a0a] text-[16px] uppercase">My Resume</p>
                                <div className="size-[42px] bg-[#0a0a0a] rounded-full flex items-center justify-center">
                                    <div className="size-[10px] bg-[#0a0a0a] rounded-full" />
                                </div>
                            </a>
                            <SocialButton href="https://www.linkedin.com/in/nguyen-anh-khoa-aka-cuchum" >
                                <LinkedInIcon />
                            </SocialButton>
                            <SocialButton href="https://github.com/chumr26">
                                <GitHubIcon />
                            </SocialButton>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="bg-[#c7c7c7] rounded-[16px] overflow-hidden relative aspect-[6/7] max-w-[600px] mx-auto">
                            <img
                                alt="Nguyen Anh Khoa Portrait"
                                className="absolute inset-0 w-full h-full object-cover object-top pt-[37px]"
                                src={imgPotrait}
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="container mx-auto px-4 md:px-[60px] pt-[100px] md:pt-[160px] pb-[80px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[80px] items-start">
                    <h1 className="leading-[0.9] text-[60px] md:text-[80px] lg:text-[101px] text-white">
                        About me
                    </h1>
                    <div className="flex flex-col gap-[48px]">
                        <div className="flex flex-col gap-[16px]">
                            <h2 className="font-medium leading-[1.4] text-[24px] md:text-[32px] text-white">
                                I am a front-end developer based in Sydney. Has Mechanical Engineering background.
                            </h2>
                            <p className="font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
                                I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I'm exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill
                            </p>
                        </div>

                        <div className="flex gap-[16px] items-center flex-wrap">
                            <a
                                href="#"
                                className="bg-[#d3e97a] h-[54px] rounded-full flex items-center gap-[12px] pl-[24px] pr-[6px] py-[20px] hover:bg-[#c5db6e] transition-colors"
                            >
                                <p className="font-bold leading-none text-[#0a0a0a] text-[16px] uppercase">Download Resume</p>
                                <div className="size-[42px] bg-[#0a0a0a] rounded-full flex items-center justify-center">
                                    <div className="size-[10px] bg-[#0a0a0a] rounded-full" />
                                </div>
                            </a>
                            <SocialButton href="https://linkedin.com">
                                <LinkedInIcon />
                            </SocialButton>
                            <SocialButton href="https://github.com">
                                <GitHubIcon />
                            </SocialButton>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* About Me */}
            <section className="container mx-auto px-4 md:px-[60px] py-[80px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[24px]">
                    <h2 className="leading-none text-[56px] md:text-[76px] text-white">About me</h2>
                    <div className="flex flex-col gap-[48px]">
                        <div className="flex flex-col gap-[32px]">
                            <h2 className="font-medium leading-[1.5] text-[24px] md:text-[32px] text-white">
                                I am passionate about computer science and want to become a software engineer.
                            </h2>
                            <p className="font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
                                Currently i am focusing on backend development, but i am always open to learning new technologies and exploring different areas of software development. I am a quick learner and a team player, and I am excited to contribute my skills and knowledge to a dynamic and innovative company.
                            </p>
                        </div>

                        {/* <div className="flex gap-[16px] items-center flex-wrap">
                            <a
                                href="#"
                                className="bg-[#d3e97a] h-[54px] rounded-full flex items-center gap-[12px] pl-[24px] pr-[6px] py-[20px] hover:bg-[#c5db6e] transition-colors"
                            >
                                <p className="font-bold leading-none text-[#0a0a0a] text-[16px] uppercase">Download Resume</p>
                                <div className="size-[42px] bg-[#0a0a0a] rounded-full flex items-center justify-center">
                                    <div className="size-[10px] bg-[#0a0a0a] rounded-full" />
                                </div>
                            </a>
                            <SocialButton href="https://linkedin.com">
                                <LinkedInIcon />
                            </SocialButton>
                            <SocialButton href="https://github.com">
                                <GitHubIcon />
                            </SocialButton>
                        </div> */}
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="w-full h-[1px] bg-[#484848]" />

            {/* My Capabilities Section */}
            <section className="container mx-auto px-4 md:px-[60px] py-[80px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[24px]">
                    <h2 className="leading-none text-[56px] md:text-[76px] text-white">Technical Skills</h2>
                    <div className="flex flex-col gap-[32px]">
                        <p className="font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
                            I am always looking to add more skills but also strengthen the ones I already have.
                        </p>
                        <div className="flex flex-wrap gap-[16px]">
                            <SkillTag text="Web Development" />
                            <SkillTag text="Mobile Development" />
                            <SkillTag text="System Analysis and Design" />
                            <SkillTag text="Database Design" />
                            <SkillTag text="DevOps" />
                            <SkillTag text="Cybersecurity" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="w-full h-[1px] bg-[#484848]" />

            {/* My Soft Skills Section */}
            <section className="container mx-auto px-4 md:px-[60px] py-[80px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[24px]">
                    <h2 className="leading-none text-[56px] md:text-[76px] text-white">Soft Skills</h2>
                    <div className="flex flex-col gap-[32px]">
                        <p className="font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
                            Beyond technical expertise, I bring strong interpersonal and professional skills that enable effective collaboration and project success.
                        </p>
                        <div className="flex flex-wrap gap-[16px]">
                            <SkillTag text="Communication" />
                            <SkillTag text="Team Collaboration" />
                            <SkillTag text="Problem Solving" />
                            <SkillTag text="Time Management" />
                            <SkillTag text="Adaptability" />
                            <SkillTag text="Logical Thinking" />
                            <SkillTag text="Attention to Detail" />
                            <SkillTag text="Self-Motivation" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="w-full h-[1px] bg-[#484848]" />

            {/* My Tech Stack Section */}
            <section className="container mx-auto px-4 md:px-[60px] py-[80px]">
                <div className="flex flex-col gap-[64px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[24px]">
                        <h2 className="leading-none text-[56px] md:text-[76px] text-white">Tech Stack</h2>
                        <p className="font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
                            I work with modern technologies and tools to build robust, scalable, and performant applications.
                        </p>
                    </div>
                    {/* Programming Languages */}
                    <div className="flex flex-col gap-[24px]">
                        <h3 className="font-semibold leading-[1.3] text-[20px] md:text-[24px] text-[#d3e97a] uppercase">
                            Programing Languages
                        </h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
                            <TechStackLogo
                                name="JavaScript"
                                image="/toolkit/javascript.png"
                            />
                            <TechStackLogo
                                name="TypeScript"
                                image="/toolkit/typescript.png"
                            />
                            <TechStackLogo
                                name="PHP"
                                image="/toolkit/php.png"
                            />
                            <TechStackLogo
                                name="C#"
                                image="/toolkit/c_sharp.png"
                            />
                            <TechStackLogo
                                name="Python"
                                image="/toolkit/python.webp"
                            />
                            <TechStackLogo
                                name="Java"
                                image="/toolkit/java.png"
                            />
                            <TechStackLogo
                                name="C"
                                image="/toolkit/c.png"
                            />
                            <TechStackLogo
                                name="C++"
                                image="/toolkit/c++.png"
                            />
                        </div>
                    </div>
                    {/* Frontend Development */}
                    <div className="flex flex-col gap-[24px]">
                        <h3 className="font-semibold leading-[1.3] text-[20px] md:text-[24px] text-[#d3e97a] uppercase">
                            Frontend Development
                        </h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
                            <TechStackLogo
                                name="React"
                                image="/toolkit/react.png"
                            />
                            <TechStackLogo
                                name="Redux"
                                image="/toolkit/redux.svg"
                            />
                            <TechStackLogo
                                name="Angular"
                                image="/toolkit/angular.png"
                            />
                            <TechStackLogo
                                name="Bootstrap"
                                image="/toolkit/bootstrap.png"
                            />
                            <TechStackLogo
                                name="Tailwind"
                                image="/toolkit/tailwind.png"
                            />
                            <TechStackLogo
                                name="Vite"
                                image="/toolkit/vite.png"
                            />
                            <TechStackLogo
                                name="Webpack"
                                image="/toolkit/webpack.png"
                            />
                            <TechStackLogo
                                name="Blazor"
                                image="/toolkit/blazor.png"
                            />
                        </div>
                    </div>

                    {/* Backend Development */}
                    <div className="flex flex-col gap-[24px]">
                        <h3 className="font-semibold leading-[1.3] text-[20px] md:text-[24px] text-[#d3e97a] uppercase">
                            Backend Development
                        </h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
                            <TechStackLogo
                                name="Node.js"
                                image="/toolkit/nodejs.webp"
                            />
                            <TechStackLogo
                                name="Express.js"
                                image="/toolkit/expressjs.png"
                            />
                            <TechStackLogo
                                name="Next.js"
                                image="/toolkit/nextjs.webp"
                            />
                            <TechStackLogo
                                name="Nest.js"
                                image="/toolkit/nestjs.svg"
                            />
                            <TechStackLogo
                                name=".NET"
                                image="/toolkit/dotnet.png"
                            />
                            <TechStackLogo
                                name="Flask"
                                image="/toolkit/flask.jpg"
                            />
                            <TechStackLogo
                                name="Nginx"
                                image="/toolkit/nginx.png"
                            />
                            <TechStackLogo
                                name="Apache"
                                image="/toolkit/apache.jpg"
                            />
                        </div>
                    </div>

                    {/* Mobile Development */}
                    <div className="flex flex-col gap-[24px]">
                        <h3 className="font-semibold leading-[1.3] text-[20px] md:text-[24px] text-[#d3e97a] uppercase">
                            Mobile Development
                        </h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
                            <TechStackLogo
                                name="React Native"
                                image="/toolkit/react_native.webp"
                            />
                            <TechStackLogo
                                name="Expo"
                                image="/toolkit/expo.png"
                            />
                            <TechStackLogo
                                name="Flutter"
                                image="/toolkit/flutter.png"
                            />
                        </div>
                    </div>

                    {/* Databases */}
                    <div className="flex flex-col gap-[24px]">
                        <h3 className="font-semibold leading-[1.3] text-[20px] md:text-[24px] text-[#d3e97a] uppercase">
                            Databases
                        </h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
                            <TechStackLogo
                                name="Microsoft SQL Server"
                                image="/toolkit/microsoft_sql_server.jpg"
                            />
                            <TechStackLogo
                                name="PostgreSQL"
                                image="/toolkit/postgresql.png"
                            />
                            <TechStackLogo
                                name="MariaDB"
                                image="/toolkit/mariadb.png"
                            />
                            <TechStackLogo
                                name="MongoDB"
                                image="/toolkit/mongodb.png"
                            />
                            <TechStackLogo
                                name="Redis"
                                image="/toolkit/redis.svg"
                            />
                            <TechStackLogo
                                name="Elasticsearch"
                                image="/toolkit/elasticsearch.svg"
                            />
                        </div>
                    </div>

                    {/* DevOps */}
                    <div className="flex flex-col gap-[24px]">
                        <h3 className="font-semibold leading-[1.3] text-[20px] md:text-[24px] text-[#d3e97a] uppercase">
                            DevOps
                        </h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
                            <TechStackLogo
                                name="Linux"
                                image="/toolkit/linux.jpg"
                            />
                            <TechStackLogo
                                name="Docker"
                                image="/toolkit/docker.png"
                            />
                            <TechStackLogo
                                name="Git"
                                image="/toolkit/git.png"
                            />
                            <TechStackLogo
                                name="GitHub"
                                image="/toolkit/github.webp"
                            />
                        </div>
                    </div>

                    {/* Cybersecurity */}
                    <div className="flex flex-col gap-[24px]">
                        <h3 className="font-semibold leading-[1.3] text-[20px] md:text-[24px] text-[#d3e97a] uppercase">
                            Cybersecurity
                        </h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
                            <TechStackLogo
                                name="Kali Linux"
                                image="/toolkit/kali_linux.png"
                            />
                            <TechStackLogo
                                name="Metasploit"
                                image="/toolkit/metasploit.png"
                            />
                            <TechStackLogo
                                name="Wireshark"
                                image="/toolkit/wireshark.png"
                            />
                            <TechStackLogo
                                name="Nmap"
                                image="/toolkit/nmap.png"
                            />
                            <TechStackLogo
                                name="Burp Suite"
                                image="/toolkit/burp_suite.jpg"
                            />
                            <TechStackLogo
                                name="OWASP"
                                image="/toolkit/owasp.webp"
                            />
                            <TechStackLogo
                                name="John the Ripper"
                                image="/toolkit/john_the_ripper.png"
                            />
                            <TechStackLogo
                                name="Hydra"
                                image="/toolkit/hydra.svg"
                            />
                            <TechStackLogo
                                name="SQLmap"
                                image="/toolkit/sqlmap.png"
                            />
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