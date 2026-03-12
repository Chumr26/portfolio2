import { Link } from "react-router";
import imgWork from "../../assets/5dcd97dc5eedd121a4e28d7d486be0fccd32ffb8.png";
import svgPaths from "../../imports/svg-nyhfy7xnj9";
import imgPotrait from "../../assets/potrait.png";
import imgImage10 from "../../assets/b4ad9145f503384fa2e01584bf6a2e40a529a372.png";
import imgImage9 from "../../assets/ada6183f66559558faf021a9606a30839d13d925.png";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

function SocialButton({ children, href }: { children: React.ReactNode; href?: string }) {
  return (
    <a
      href={href || "#"}
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

function ProjectCard({ image, tag, className }: { image: string; tag?: string; className?: string }) {
  return (
    <div className={`bg-[#1a1a1a] overflow-clip relative rounded-[12px] shrink-0 ${className || "w-full h-[400px] lg:w-[600px] lg:h-[600px]"}`}>
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <img alt="" className="max-w-full max-h-full object-contain rounded-[12px]" src={image} />
      </div>
      {tag && (
        <div className="absolute bg-[#0a0a0a] flex items-center justify-center left-[16px] px-[16px] py-[8px] rounded-full top-[16px]">
          <p className="font-['JetBrains_Mono'] font-medium leading-[1.5] text-[14px] text-white whitespace-nowrap">{tag}</p>
        </div>
      )}
    </div>
  );
}

function ProjectInfo({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-[16px] border-t border-[#484848] w-full">
      <p className="font-['JetBrains_Mono'] font-medium leading-[1.6] text-[16px] text-white">{label}</p>
      <p className="font-['JetBrains_Mono'] font-medium leading-[1.6] text-[#c7c7c7] text-[16px]">{value}</p>
    </div>
  );
}

function ProjectLink({ text, icon }: { text: string; icon?: React.ReactNode }) {
  return (
    <a href="#" className="flex flex-col gap-[4px] group">
      <div className="flex gap-[4px] items-center">
        <p className="font-['JetBrains_Mono'] font-bold leading-[1.5] text-[#d3e97a] text-[16px] uppercase">{text}</p>
        {icon}
      </div>
      <div className="h-[2px] bg-[#d3e97a] w-full" />
    </a>
  );
}

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

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen w-full">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-[60px] pt-[100px] md:pt-[160px] pb-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex flex-col gap-[40px] order-2 lg:order-1">
            <div className="flex flex-col gap-[8px]">
              <h1 className="font-['JetBrains_Mono'] leading-[0.9] text-[60px] md:text-[80px] lg:text-[101px] text-white">
                hi, i am<br />robert garcia.
              </h1>
              <p className="font-['JetBrains_Mono'] font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
                A Sydney based front-end developer passionate about building accessible and user friendly websites.
              </p>
            </div>

            <div className="flex gap-[16px] items-center flex-wrap">
              <a
                href="#contact"
                className="bg-[#d3e97a] h-[54px] rounded-full flex items-center gap-[12px] pl-[24px] pr-[6px] py-[20px] hover:bg-[#c5db6e] transition-colors"
              >
                <p className="font-['JetBrains_Mono'] font-bold leading-none text-[#0a0a0a] text-[16px] uppercase">Contact Me</p>
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

          <div className="order-1 lg:order-2">
            <div className="bg-[#c7c7c7] rounded-[16px] overflow-hidden relative aspect-[6/7] max-w-[600px] mx-auto">
              <img
                alt="Robert Garcia Portrait"
                className="absolute inset-0 w-full h-full object-cover object-top pt-[37px]"
                src={imgPotrait}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#484848]" />

      {/* Featured Projects Section */}
      <section className="container mx-auto px-4 md:px-[60px] py-[80px]">
        <div className="flex flex-col gap-[8px] mb-[80px]">
          <h2 className="font-['JetBrains_Mono'] leading-none text-[56px] md:text-[76px] text-white">Featured Projects</h2>
          <p className="font-['JetBrains_Mono'] font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
            Here are some of the selected projects that showcase my passion for front-end development.
          </p>
        </div>

        <div className="flex flex-col gap-[80px] md:gap-[120px]">
          {/* Project 1 */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[48px] items-start lg:items-center">
            <ProjectCard image={imgWork} tag="Conceptual Work" />
            <div className="flex flex-col gap-[48px] flex-1 min-w-0">
              <div className="flex flex-col gap-[32px]">
                <div className="flex flex-col gap-[16px]">
                  <h3 className="font-['JetBrains_Mono'] font-medium leading-[1.4] text-[28px] md:text-[32px] text-white">
                    Promotional landing page for our favorite show
                  </h3>
                  <p className="font-['JetBrains_Mono'] font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
                    Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.
                  </p>
                </div>
                <div className="flex flex-col gap-[16px]">
                  <p className="font-['JetBrains_Mono'] font-semibold leading-[1.5] text-[16px] text-white uppercase">Project Info</p>
                  <div className="border-b border-[#484848]">
                    <ProjectInfo label="Year" value="2023" />
                    <ProjectInfo label="Role" value="Front-end Developer" />
                  </div>
                </div>
              </div>
              <div className="flex gap-[24px] flex-wrap">
                <ProjectLink text="Live Demo" icon={<ArrowIcon />} />
                <ProjectLink text="See on Github" icon={<GitHubIcon />} />
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[48px] items-start lg:items-center">
            <ProjectCard image={imgImage10} />
            <div className="flex flex-col gap-[48px] flex-1 min-w-0">
              <div className="flex flex-col gap-[32px]">
                <div className="flex flex-col gap-[16px]">
                  <h3 className="font-['JetBrains_Mono'] font-medium leading-[1.4] text-[28px] md:text-[32px] text-white">
                    Blog site for World News
                  </h3>
                  <p className="font-['JetBrains_Mono'] font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
                    Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in front-end development.
                  </p>
                </div>
                <div className="flex flex-col gap-[16px]">
                  <p className="font-['JetBrains_Mono'] font-semibold leading-[1.5] text-[16px] text-white uppercase">Project Info</p>
                  <div className="border-b border-[#484848]">
                    <ProjectInfo label="Client" value="World News" />
                    <ProjectInfo label="Year" value="2022" />
                    <ProjectInfo label="Role" value="Front-end Developer" />
                  </div>
                </div>
              </div>
              <div className="flex gap-[24px]">
                <ProjectLink text="View project" icon={<ArrowIcon />} />
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[48px] items-start lg:items-center">
            <ProjectCard image={imgImage9} tag="Challenge" />
            <div className="flex flex-col gap-[48px] flex-1 min-w-0">
              <div className="flex flex-col gap-[32px]">
                <div className="flex flex-col gap-[16px]">
                  <h3 className="font-['JetBrains_Mono'] font-medium leading-[1.4] text-[28px] md:text-[32px] text-white">
                    E-commerce product page
                  </h3>
                  <p className="font-['JetBrains_Mono'] font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
                    Successfully crafted an engaging product page featuring a dynamic lightbox gallery and seamless cart functionality, showcasing proficiency in JavaScript development.
                  </p>
                </div>
                <div className="flex flex-col gap-[16px]">
                  <p className="font-['JetBrains_Mono'] font-semibold leading-[1.5] text-[16px] text-white uppercase">Project Info</p>
                  <div className="border-b border-[#484848]">
                    <ProjectInfo label="Year" value="2022" />
                    <ProjectInfo label="Role" value="Front-end Developer" />
                  </div>
                </div>
              </div>
              <div className="flex gap-[24px] flex-wrap">
                <ProjectLink text="Live Demo" icon={<ArrowIcon />} />
                <ProjectLink text="See on Github" icon={<GitHubIcon />} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#484848]" />

      {/* About Me Section */}
      <section className="container mx-auto px-4 md:px-[60px] py-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[80px]">
          <h2 className="font-['JetBrains_Mono'] leading-[0.9] text-[60px] md:text-[80px] lg:text-[101px] text-white">
            About me
          </h2>
          <div className="flex flex-col gap-[16px]">
            <h3 className="font-['JetBrains_Mono'] font-medium leading-[1.4] text-[24px] md:text-[32px] text-white">
              I am a front-end developer based in Sydney. Has Mechanical Engineering background.
            </h3>
            <p className="font-['JetBrains_Mono'] font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
              I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I'm exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.
            </p>
            <Link to="/about" className="flex flex-col gap-[4px] mt-[24px] w-fit group">
              <p className="font-['JetBrains_Mono'] font-bold leading-[1.5] text-[#d3e97a] text-[16px] uppercase">More about me</p>
              <div className="h-[2px] bg-[#d3e97a] w-full" />
            </Link>
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
