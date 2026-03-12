import clsx from "clsx";
import svgPaths from "./svg-3c6obhzfe4";
import img6Dd8E389A31 from "figma:asset/b6b96aad2b8137858cdaeb7d1d8e14e4e0f0f752.png";

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
type AboutHelperProps = {
  additionalClassNames?: string;
};

function AboutHelper({ additionalClassNames = "" }: AboutHelperProps) {
  return (
    <div className={clsx("absolute h-0 right-0 w-[1440px]", additionalClassNames)}>
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
          <line id="Line 4" stroke="var(--stroke-0, #484848)" x2="1440" y1="0.5" y2="0.5" />
        </svg>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[#c7c7c7] text-[16px] whitespace-nowrap">{text}</p>
      <Wrapper>
        <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] text-white whitespace-pre">{`    `}</p>
      </Wrapper>
    </div>
  );
}
type ButtonTextProps = {
  text: string;
};

function ButtonText({ text }: ButtonTextProps) {
  return (
    <div className="content-stretch flex items-center justify-center px-[40px] py-[20px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#484848] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[16px] text-white uppercase whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-[#0a0a0a] relative size-full" data-name="About">
      <div className="absolute content-stretch flex items-center justify-between left-0 overflow-clip px-[60px] py-[24px] top-0 w-[1440px]" data-name="Navigation">
        <p className="font-['Bebas_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#c7c7c7] text-[32px] tracking-[-0.32px] whitespace-nowrap">robert garcia</p>
        <div className="content-stretch flex gap-[32px] items-center justify-center relative shrink-0" data-name="Column">
          <div className="content-stretch flex font-['Manrope:Medium',sans-serif] font-medium gap-[32px] items-start leading-[1.6] overflow-clip relative shrink-0 text-[#c7c7c7] text-[16px] whitespace-nowrap" data-name="Column">
            <p className="relative shrink-0">Work</p>
            <p className="relative shrink-0">About</p>
            <p className="relative shrink-0">Contact</p>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[108px] top-[719px]" data-name="image">
        <div className="absolute bg-[#c7c7c7] h-[700px] left-[108px] rounded-[16px] top-[719px] w-[1224px]" data-name="bg" />
        <div className="-translate-x-1/2 absolute h-[652px] left-1/2 top-[767px] w-[464px]" data-name="6dd8e389a3 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img6Dd8E389A31} />
        </div>
      </div>
      <p className="absolute font-['Bebas_Neue:Regular',sans-serif] leading-[0.9] left-[calc(50%-612px)] not-italic text-[101px] text-white top-[256px] whitespace-nowrap">About me</p>
      <div className="absolute content-stretch flex flex-col gap-[48px] items-start left-[628px] top-[256px] w-[704px]">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[32px] text-white w-full">{`I am a front-end developer based in Sydney. Has Mechanical Engineering background. `}</p>
          <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#c7c7c7] text-[18px] w-full">I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill</p>
        </div>
        <div className="content-stretch flex gap-[16px] items-end relative shrink-0">
          <div className="bg-[#d3e97a] h-[54px] relative rounded-[100px] shrink-0" data-name="button">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[12px] h-full items-center justify-center pl-[24px] pr-[6px] py-[20px] relative">
                <p className="font-['Manrope:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[#0a0a0a] text-[16px] uppercase whitespace-nowrap">Download Resume</p>
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
            <Wrapper1>
              <g id="bxl-github.svg">
                <path clipRule="evenodd" d={svgPaths.p17e6c000} fill="var(--fill-0, #D3E97A)" fillRule="evenodd" id="Vector" />
              </g>
            </Wrapper1>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[24px] items-start left-[108px] py-[80px] top-[1459px] w-[1224px]">
        <p className="flex-[1_0_0] font-['Bebas_Neue:Regular',sans-serif] leading-none min-h-px min-w-px not-italic relative text-[76px] text-white">My Capabilities</p>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative">
          <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#c7c7c7] text-[18px] w-[min-content]">{`I am always looking to add more skills.Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor. `}</p>
          <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-[704px]">
            <ButtonText text="HTML" />
            <ButtonText text="CSS" />
            <ButtonText text="Javascript" />
            <ButtonText text="Jquery" />
            <ButtonText text="Accessibility" />
            <ButtonText text="Figma" />
            <ButtonText text="Tailwind Css" />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[24px] items-start left-[108px] py-[80px] top-[1861px] w-[1224px]">
        <p className="flex-[1_0_0] font-['Bebas_Neue:Regular',sans-serif] leading-none min-h-px min-w-px not-italic relative text-[76px] text-white">My Experience</p>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[80px] items-start min-h-px min-w-px relative">
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="title and description">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                <p className="flex-[1_0_0] font-['Manrope:Medium',sans-serif] font-medium leading-[1.3] min-h-px min-w-px relative text-[24px] text-white tracking-[-0.24px]">Freelance Developer</p>
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#c7c7c7] text-[18px] whitespace-nowrap">{`Nov 2023 — Present `}</p>
              </div>
            </div>
            <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#c7c7c7] text-[18px] w-full">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="title and description">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                <p className="flex-[1_0_0] font-['Manrope:Medium',sans-serif] font-medium leading-[1.3] min-h-px min-w-px relative text-[24px] text-white tracking-[-0.24px]">Front-End Intern</p>
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#c7c7c7] text-[18px] whitespace-nowrap">{`Sep 2023 — Nov 2023 `}</p>
              </div>
              <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[#d3e97a] text-[18px] w-full">Roos Tech</p>
            </div>
            <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#c7c7c7] text-[18px] w-full">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </div>
      </div>
      <AboutHelper additionalClassNames="top-[1860px]" />
      <AboutHelper additionalClassNames="top-[2394px]" />
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
              <Text text="Name" />
              <Text text="Email" />
              <Text text="Subject" />
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
    </div>
  );
}