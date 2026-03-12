import clsx from "clsx";
import imgWork from "figma:asset/5dcd97dc5eedd121a4e28d7d486be0fccd32ffb8.png";
import svgPaths from "./svg-nyhfy7xnj9";
import imgPotrait from "figma:asset/0d3630f0a8ce367183462cfffe8f59bdd44167c0.png";
import imgImage10 from "figma:asset/b4ad9145f503384fa2e01584bf6a2e40a529a372.png";
import imgImage9 from "figma:asset/ada6183f66559558faf021a9606a30839d13d925.png";

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        {children}
      </svg>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[26px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        {children}
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full">
      <div className="content-stretch flex items-start px-[16px] py-[12px] relative w-full">{children}</div>
    </div>
  );
}
type HomeHelperProps = {
  additionalClassNames?: string;
};

function HomeHelper({ additionalClassNames = "" }: HomeHelperProps) {
  return (
    <div className={clsx("absolute h-0 left-0 w-[1440px]", additionalClassNames)}>
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
          <line id="Line 4" stroke="var(--stroke-0, #484848)" x2="1440" y1="0.5" y2="0.5" />
        </svg>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[#c7c7c7] text-[16px] whitespace-nowrap">{text}</p>
      <Wrapper>
        <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] text-white whitespace-pre">{`    `}</p>
      </Wrapper>
    </div>
  );
}

function ViewProject1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
        <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#d3e97a] text-[16px] uppercase whitespace-nowrap">{"See on Github"}</p>
        <BxlGithubSvg />
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="underline">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149 2">
            <line id="underline" stroke="var(--stroke-0, #D3E97A)" strokeWidth="2" x2="149" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ViewProject() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <TitleAndArrowText text="Live Demo" />
      <div className="h-0 relative shrink-0 w-full" data-name="underline">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 111 2">
            <line id="underline" stroke="var(--stroke-0, #D3E97A)" strokeWidth="2" x2="111" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type TitleAndArrowTextProps = {
  text: string;
};

function TitleAndArrowText({ text }: TitleAndArrowTextProps) {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#d3e97a] text-[16px] uppercase whitespace-nowrap">{text}</p>
      <div className="relative shrink-0 size-[24px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g clipPath="url(#clip0_9_6106)" id="arrow">
            <path d={svgPaths.p3589c00} fill="var(--fill-0, #D3E97A)" id="Vector" />
          </g>
          <defs>
            <clipPath id="clip0_9_6106">
              <rect fill="white" height="24" width="24" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex items-center justify-between py-[16px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#484848] border-solid border-t inset-0 pointer-events-none" />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[16px] text-white whitespace-nowrap">{text}</p>
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[#c7c7c7] text-[16px] whitespace-nowrap">{text1}</p>
    </div>
  );
}
type TitleAndDescriptionProps = {
  text: string;
  text1: string;
};

function TitleAndDescription({ text, text1 }: TitleAndDescriptionProps) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[32px] text-white w-full">{text}</p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#c7c7c7] text-[18px] w-full">{text1}</p>
    </div>
  );
}

function BxlGithubSvg() {
  return (
    <Wrapper1>
      <g id="bxl-github.svg">
        <path clipRule="evenodd" d={svgPaths.p17e6c000} fill="var(--fill-0, #D3E97A)" fillRule="evenodd" id="Vector" />
      </g>
    </Wrapper1>
  );
}
type ColumnProps = {
  text: string;
  text1: string;
  text2: string;
};

function Column({ text, text1, text2 }: ColumnProps) {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[32px] items-start not-italic overflow-clip relative shrink-0 text-[#c7c7c7] text-[16px] tracking-[-0.48px] whitespace-nowrap">
      <p className="leading-[24px] relative shrink-0">{text}</p>
      <p className="leading-[1.5] relative shrink-0">{text1}</p>
      <p className="leading-[1.5] relative shrink-0">{text2}</p>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="absolute bg-[#0a0a0a] content-stretch flex items-center justify-center left-[16px] px-[16px] py-[8px] rounded-[100px] top-[16px]">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[14px] text-white whitespace-nowrap">{text}</p>
    </div>
  );
}
type ProjectCardProps = {
  className?: string;
  state?: "Default" | "hovered";
};

function ProjectCard({ className, state = "Default" }: ProjectCardProps) {
  const isHovered = state === "hovered";
  return (
    <div className={className || "relative size-[600px]"}>
      <div className={`-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip rounded-[12px] size-[600px] ${isHovered ? "bg-[#2d2d2d] top-[calc(50%-20px)]" : "bg-[#1a1a1a] top-1/2"}`} data-name="card">
        <div className={`-translate-x-1/2 -translate-y-1/2 absolute h-[347px] left-1/2 pointer-events-none rounded-[12px] w-[486px] ${isHovered ? "top-[calc(50%+0.5px)]" : "top-[calc(50%-0.5px)]"}`} data-name="work">
          <div className="absolute inset-0 overflow-hidden rounded-[12px]">
            <img alt="" className="absolute h-[378.34%] left-[-17.08%] max-w-none top-[-13.96%] w-[133.95%]" src={imgWork} />
          </div>
          <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-[-2px] rounded-[14px]" />
        </div>
        <Text text="Conceptual Work" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] relative size-full" data-name="Home">
      <div className="absolute content-stretch flex items-center justify-between left-0 overflow-clip px-[60px] py-[24px] top-0 w-[1440px]" data-name="Navigation">
        <p className="font-['Bebas_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#c7c7c7] text-[32px] tracking-[-0.32px] whitespace-nowrap">robert garcia</p>
        <div className="content-stretch flex gap-[32px] items-center justify-center relative shrink-0" data-name="Column">
          <Column text="Work" text1="About" text2="Contact" />
        </div>
      </div>
      <div className="absolute content-stretch flex items-center justify-between left-0 overflow-clip px-[60px] py-[24px] top-0 w-[1440px]" data-name="Navigation">
        <p className="font-['Bebas_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#c7c7c7] text-[32px] tracking-[-0.32px] whitespace-nowrap">robert garcia</p>
        <div className="content-stretch flex gap-[32px] items-center justify-center relative shrink-0" data-name="Column">
          <Column text="Work" text1="About" text2="Contact" />
        </div>
      </div>
      <div className="absolute contents left-[732px] top-[126px]" data-name="image">
        <div className="absolute bg-[#c7c7c7] h-[700px] left-[732px] rounded-[16px] top-[126px] w-[600px]" data-name="bg" />
        <div className="absolute h-[663px] left-[732px] top-[163px] w-[600px]" data-name="potrait">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPotrait} />
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[108px] pb-[22px] top-[286px] w-[544px]" data-name="hero content">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="header and sub header">
          <div className="font-['Bebas_Neue:Regular',sans-serif] leading-[0.9] not-italic relative shrink-0 text-[101px] text-white w-full whitespace-pre-wrap">
            <p className="mb-0">{`hi, i am `}</p>
            <p>robert garcia.</p>
          </div>
          <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#c7c7c7] text-[18px] w-full">A Sydney based front-end developer passionate about building accessible and user friendly websites.</p>
        </div>
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="action">
          <div className="bg-[#d3e97a] h-[54px] relative rounded-[100px] shrink-0" data-name="button">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[12px] h-full items-center justify-center pl-[24px] pr-[6px] py-[20px] relative">
                <p className="font-['Manrope:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#0a0a0a] text-[16px] uppercase whitespace-nowrap">Contact Me</p>
                <div className="relative shrink-0 size-[42px]" data-name="circle">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
                    <g id="circle">
                      <circle cx="21" cy="21" fill="var(--fill-0, #0A0A0A)" id="dot" r="5" />
                      <g clipPath="url(#clip0_9_6109)" id="arrow" opacity="0">
                        <path d={svgPaths.p23c4ec40} fill="var(--fill-0, white)" id="Vector" />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_9_6109">
                        <rect fill="white" height="16" transform="translate(13 13)" width="16" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#222] content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[54px]">
            <Wrapper1>
              <g id="bxl-linkedin.svg">
                <path d={svgPaths.p282a2240} fill="var(--fill-0, #D3E97A)" id="Vector" />
                <path d={svgPaths.p31d7ad00} fill="var(--fill-0, #D3E97A)" id="Vector_2" />
              </g>
            </Wrapper1>
          </div>
          <div className="bg-[#222] content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[54px]">
            <BxlGithubSvg />
          </div>
        </div>
      </div>
      <HomeHelper additionalClassNames="top-[906px]" />
      <HomeHelper additionalClassNames="top-[3324px]" />
      <HomeHelper additionalClassNames="top-[4184px]" />
      <div className="absolute content-stretch flex flex-col gap-[80px] items-start left-[108px] py-[80px] top-[906px]">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[600px]">
          <p className="font-['Bebas_Neue:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[76px] text-white whitespace-nowrap">Featured Projects</p>
          <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#c7c7c7] text-[18px] w-[min-content]">Here are some of the selected projects that showcase my passion for front-end development.</p>
        </div>
        <div className="content-stretch flex flex-col gap-[120px] items-start relative shrink-0" data-name="projects">
          <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-[1224px]" data-name="project">
            <ProjectCard className="relative shrink-0 size-[600px]" />
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start min-h-px min-w-px relative" data-name="project content">
              <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="information">
                <TitleAndDescription text="Promotional landing page for our favorite show" text1="Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures." />
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="project info">
                  <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-white uppercase whitespace-nowrap">Project Info</p>
                  <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="List">
                    <div aria-hidden="true" className="absolute border-[#484848] border-b border-solid inset-0 pointer-events-none" />
                    <Helper text="Year" text1="2023" />
                    <Helper text="Role" text1="Front-end Developer" />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[24px] items-start relative shrink-0">
                <ViewProject />
                <ViewProject1 />
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-[1224px]" data-name="project">
            <div className="bg-[#1a1a1a] overflow-clip relative rounded-[12px] shrink-0 size-[600px]" data-name="project image">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[347px] left-1/2 rounded-[12px] top-[calc(50%+0.5px)] w-[488px]" data-name="image 10">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage10} />
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start min-h-px min-w-px relative" data-name="project content">
              <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="information">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="title and description">
                  <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[32px] text-white w-full">Blog site for World News</p>
                  <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#c7c7c7] text-[18px] w-full whitespace-pre-wrap">{`Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in  front-end development.`}</p>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="project info">
                  <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-white uppercase whitespace-nowrap">Project Info</p>
                  <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="List">
                    <div aria-hidden="true" className="absolute border-[#484848] border-b border-solid inset-0 pointer-events-none" />
                    <Helper text="Client" text1="World News" />
                    <Helper text="Year" text1="2022" />
                    <Helper text="Role" text1="Front-end Developer" />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="view project">
                <TitleAndArrowText text="View project" />
                <div className="h-0 relative shrink-0 w-full" data-name="underline">
                  <div className="absolute inset-[-2px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143 2">
                      <line id="underline" stroke="var(--stroke-0, #D3E97A)" strokeWidth="2" x2="143" y1="1" y2="1" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-[1224px]" data-name="project">
            <div className="bg-[#1a1a1a] overflow-clip relative rounded-[12px] shrink-0 size-[600px]" data-name="project image">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[306px] left-1/2 rounded-[12px] top-1/2 w-[488px]" data-name="image 9">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage9} />
              </div>
              <Text text="Challenge" />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start min-h-px min-w-px relative" data-name="project content">
              <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="information">
                <TitleAndDescription text="E-commerce product page" text1="Successfully crafted an engaging product page featuring a dynamic lightbox gallery and seamless cart functionality, showcasing proficiency in JavaScript development." />
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="project info">
                  <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-white uppercase whitespace-nowrap">Project Info</p>
                  <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="List">
                    <div aria-hidden="true" className="absolute border-[#484848] border-b border-solid inset-0 pointer-events-none" />
                    <Helper text="Year" text1="2022" />
                    <Helper text="Role" text1="Front-end Developer" />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[24px] items-start relative shrink-0">
                <ViewProject />
                <ViewProject1 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex gap-[24px] items-start left-1/2 py-[80px] w-[1224px]">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative self-stretch">
          <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              <p className="font-['Bebas_Neue:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[76px] text-white w-[600px]">Let’s connect</p>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
                  <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#c7c7c7] text-[18px] whitespace-nowrap">Say hello at</p>
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] text-white whitespace-nowrap">robertgarcia@gmail.com</p>
                    <div className="h-0 relative shrink-0 w-full" data-name="underline">
                      <div className="absolute inset-[-1px_0_0_0]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 204 1">
                          <line id="underline" stroke="var(--stroke-0, #D3E97A)" x2="204" y1="0.5" y2="0.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
                  <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#c7c7c7] text-[18px] whitespace-nowrap">For more info, here’s my</p>
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] text-white whitespace-nowrap">resume</p>
                    <div className="h-0 relative shrink-0 w-full">
                      <div className="absolute inset-[-1px_0_0_0]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63 1">
                          <line id="Line 7" stroke="var(--stroke-0, #D3E97A)" x2="63" y1="0.5" y2="0.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[24px] items-start relative shrink-0">
              <Wrapper2>
                <g id="bxl-linkedin.svg">
                  <path d={svgPaths.p1bc476b0} fill="var(--fill-0, #D3E97A)" id="Vector" />
                  <path d={svgPaths.p3ff62a40} fill="var(--fill-0, #D3E97A)" id="Vector_2" />
                </g>
              </Wrapper2>
              <Wrapper2>
                <g id="bxl-github.svg">
                  <path clipRule="evenodd" d={svgPaths.p3add5780} fill="var(--fill-0, #D3E97A)" fillRule="evenodd" id="Vector" />
                </g>
              </Wrapper2>
              <div className="overflow-clip relative shrink-0 size-[32px]" data-name="bxl-linkedin.svg">
                <div className="absolute inset-[14.58%_6.25%]" data-name="Group">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 22.6667">
                    <g id="Group">
                      <path d={svgPaths.p3f377200} fill="var(--fill-0, #D3E97A)" id="Vector" />
                    </g>
                  </svg>
                </div>
              </div>
              <Wrapper2>
                <g id="bxl-instagram.svg">
                  <path d={svgPaths.p8ca3400} fill="var(--fill-0, #D3E97A)" id="Vector" />
                  <path d={svgPaths.p5548000} fill="var(--fill-0, #D3E97A)" id="Vector_2" />
                  <path d={svgPaths.p374be072} fill="var(--fill-0, #D3E97A)" id="Vector_3" />
                </g>
              </Wrapper2>
            </div>
          </div>
          <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[#c7c7c7] text-[16px] whitespace-nowrap">© 2023 Robert Garcia</p>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
          <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[#c7c7c7] text-[16px] whitespace-nowrap">Name</p>
                <Wrapper>
                  <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] text-white whitespace-nowrap">John Doe</p>
                </Wrapper>
              </div>
              <Text1 text="Email" />
              <Text1 text="Subject" />
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[#c7c7c7] text-[16px] whitespace-nowrap">Message</p>
                <Wrapper>
                  <div className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] text-white whitespace-nowrap whitespace-pre">
                    <p className="mb-[8px]">{`        `}</p>
                    <p className="mb-[8px]">&nbsp;</p>
                    <p className="mb-[8px]">&nbsp;</p>
                    <p>&nbsp;</p>
                  </div>
                </Wrapper>
              </div>
            </div>
            <div className="bg-[#d3e97a] content-stretch flex h-[54px] items-center justify-center px-[40px] py-[20px] relative rounded-[100px] shrink-0" data-name="button">
              <p className="font-['Manrope:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#0a0a0a] text-[16px] uppercase whitespace-nowrap">Submit</p>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Bebas_Neue:Regular',sans-serif] leading-[0.9] left-[calc(50%-612px)] not-italic text-[101px] text-white top-[3446px] whitespace-nowrap">About me</p>
      <div className="absolute content-stretch flex flex-col items-start left-[628px] top-[3446px] w-[704px]">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[32px] text-white w-full">{`I am a front-end developer based in Sydney. Has Mechanical Engineering background. `}</p>
          <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#c7c7c7] text-[18px] w-full">I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.</p>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[628px] top-[3740px]" data-name="view project">
        <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#d3e97a] text-[16px] uppercase whitespace-nowrap">More about me</p>
        <div className="h-0 relative shrink-0 w-full" data-name="underline">
          <div className="absolute inset-[-2px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 129 2">
              <line id="underline" stroke="var(--stroke-0, #D3E97A)" strokeWidth="2" x2="129" y1="1" y2="1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}