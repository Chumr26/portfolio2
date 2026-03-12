import svgPaths from "../../imports/svg-3c6obhzfe4";
import img6Dd8E389A31 from "../../assets/b6b96aad2b8137858cdaeb7d1d8e14e4e0f0f752.png";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

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

function SkillTag({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center px-[40px] py-[20px] rounded-full border border-[#484848] hover:border-[#d3e97a] transition-colors">
      <p className="font-['JetBrains_Mono'] font-bold leading-none text-[16px] text-white uppercase">{text}</p>
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
          <p className="font-['JetBrains_Mono'] font-medium leading-[1.3] text-[20px] md:text-[24px] text-white">{title}</p>
          <p className="font-['JetBrains_Mono'] font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px] whitespace-nowrap">
            {period}
          </p>
        </div>
        {company && <p className="font-['JetBrains_Mono'] font-semibold leading-[1.6] text-[#d3e97a] text-[18px]">{company}</p>}
      </div>
      <p className="font-['JetBrains_Mono'] font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">{description}</p>
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
          className="w-full h-full object-cover group-hover:scale-110 transition-transform"
        />
      </div>
      <p className="font-['JetBrains_Mono'] font-normal leading-none text-[12px] text-[#c7c7c7] text-center">{name}</p>
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen w-full">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-[60px] pt-[100px] md:pt-[160px] pb-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[80px] items-start">
          <h1 className="font-['JetBrains_Mono'] leading-[0.9] text-[60px] md:text-[80px] lg:text-[101px] text-white">
            About me
          </h1>
          <div className="flex flex-col gap-[48px]">
            <div className="flex flex-col gap-[16px]">
              <h2 className="font-['JetBrains_Mono'] font-medium leading-[1.4] text-[24px] md:text-[32px] text-white">
                I am a front-end developer based in Sydney. Has Mechanical Engineering background.
              </h2>
              <p className="font-['JetBrains_Mono'] font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
                I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I'm exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill
              </p>
            </div>

            <div className="flex gap-[16px] items-center flex-wrap">
              <a
                href="#"
                className="bg-[#d3e97a] h-[54px] rounded-full flex items-center gap-[12px] pl-[24px] pr-[6px] py-[20px] hover:bg-[#c5db6e] transition-colors"
              >
                <p className="font-['JetBrains_Mono'] font-bold leading-none text-[#0a0a0a] text-[16px] uppercase">Download Resume</p>
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
      </section>

      {/* Image Section */}
      <section className="container mx-auto px-4 md:px-[60px] pb-[80px]">
        <div className="bg-[#c7c7c7] rounded-[16px] overflow-hidden relative aspect-video md:aspect-[1224/700] max-w-[1224px] mx-auto">
          <ImageWithFallback
            alt="Robert Garcia"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full object-contain"
            src={img6Dd8E389A31}
          />
        </div>
      </section>

      {/* My Capabilities Section */}
      <section className="container mx-auto px-4 md:px-[60px] py-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[24px]">
          <h2 className="font-['JetBrains_Mono'] leading-none text-[56px] md:text-[76px] text-white">My Capabilities</h2>
          <div className="flex flex-col gap-[32px]">
            <p className="font-['JetBrains_Mono'] font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
              I am always looking to add more skills. Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor.
            </p>
            <div className="flex flex-wrap gap-[16px]">
              <SkillTag text="HTML" />
              <SkillTag text="CSS" />
              <SkillTag text="Javascript" />
              <SkillTag text="Jquery" />
              <SkillTag text="Accessibility" />
              <SkillTag text="Figma" />
              <SkillTag text="Tailwind Css" />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#484848]" />

      {/* My Soft Skills Section */}
      <section className="container mx-auto px-4 md:px-[60px] py-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[24px]">
          <h2 className="font-['JetBrains_Mono'] leading-none text-[56px] md:text-[76px] text-white">My Soft Skills</h2>
          <div className="flex flex-col gap-[32px]">
            <p className="font-['JetBrains_Mono'] font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
              Beyond technical expertise, I bring strong interpersonal and professional skills that enable effective collaboration and project success.
            </p>
            <div className="flex flex-wrap gap-[16px]">
              <SkillTag text="Communication" />
              <SkillTag text="Team Collaboration" />
              <SkillTag text="Problem Solving" />
              <SkillTag text="Time Management" />
              <SkillTag text="Adaptability" />
              <SkillTag text="Critical Thinking" />
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
            <h2 className="font-['JetBrains_Mono'] leading-none text-[56px] md:text-[76px] text-white">My Tech Stack</h2>
            <p className="font-['JetBrains_Mono'] font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
              I work with modern technologies and tools to build robust, scalable, and performant web applications. Here are the key technologies I specialize in.
            </p>
          </div>

          {/* Frontend Development */}
          <div className="flex flex-col gap-[24px]">
            <h3 className="font-['JetBrains_Mono'] font-semibold leading-[1.3] text-[20px] md:text-[24px] text-[#d3e97a] uppercase">
              Frontend Development
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
              <TechStackLogo
                name="React"
                image="https://images.unsplash.com/photo-1646902089291-a103f19ee8cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMGphdmFzY3JpcHQlMjBsb2dvfGVufDF8fHx8MTc3MzMwNjc4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
              />
              <TechStackLogo
                name="TypeScript"
                image="https://images.unsplash.com/photo-1672308627194-9a2c28daa17a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBlc2NyaXB0JTIwY29kZSUyMHByb2dyYW1taW5nfGVufDF8fHx8MTc3MzMwNjc4Nnww&ixlib=rb-4.1.0&q=80&w=1080"
              />
              <TechStackLogo
                name="HTML5"
                image="https://images.unsplash.com/photo-1649443992089-8bf1fc3c42f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodG1sJTIwY3NzJTIwd2ViJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzczMzA2Nzg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              />
              <TechStackLogo
                name="CSS3"
                image="https://images.unsplash.com/photo-1649443992089-8bf1fc3c42f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodG1sJTIwY3NzJTIwd2ViJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzczMzA2Nzg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              />
              <TechStackLogo
                name="Tailwind"
                image="https://images.unsplash.com/photo-1707603306339-54bebee82922?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWlsd2luZCUyMGNzcyUyMGZyYW1ld29ya3xlbnwxfHx8fDE3NzMzMDY3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              />
              <TechStackLogo
                name="Sass"
                image="https://images.unsplash.com/photo-1766348851990-2380ce49a210?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXNzJTIwY3NzJTIwcHJlcHJvY2Vzc29yfGVufDF8fHx8MTc3MzMwNzM5MXww&ixlib=rb-4.1.0&q=80&w=1080"
              />
            </div>
          </div>

          {/* Backend Development */}
          <div className="flex flex-col gap-[24px]">
            <h3 className="font-['JetBrains_Mono'] font-semibold leading-[1.3] text-[20px] md:text-[24px] text-[#d3e97a] uppercase">
              Backend Development
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
              <TechStackLogo
                name="Node.js"
                image="https://images.unsplash.com/photo-1750041888982-67a58e6c9014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub2RlanMlMjBiYWNrZW5kJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzczMzA2NzkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
              />
              <TechStackLogo
                name="GraphQL"
                image="https://images.unsplash.com/photo-1617609277590-ec2d145ca13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaHFsJTIwYXBpJTIwY29kZXxlbnwxfHx8fDE3NzMzMDc0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              />
              <TechStackLogo
                name="MongoDB"
                image="https://images.unsplash.com/photo-1767483012930-fe7b34e7d216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25nb2RiJTIwZGF0YWJhc2V8ZW58MXx8fHwxNzczMzA3MzkzfDA&ixlib=rb-4.1.0&q=80&w=1080"
              />
              <TechStackLogo
                name="PostgreSQL"
                image="https://images.unsplash.com/photo-1620722664104-d4b8a0c5b556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3N0Z3Jlc3FsJTIwc3FsJTIwZGF0YWJhc2V8ZW58MXx8fHwxNzczMzA3Mzk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              />
            </div>
          </div>

          {/* Tools & DevOps */}
          <div className="flex flex-col gap-[24px]">
            <h3 className="font-['JetBrains_Mono'] font-semibold leading-[1.3] text-[20px] md:text-[24px] text-[#d3e97a] uppercase">
              Tools & DevOps
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
              <TechStackLogo
                name="Git"
                image="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaXQlMjB2ZXJzaW9uJTIwY29udHJvbHxlbnwxfHx8fDE3NzMzMDY3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              />
              <TechStackLogo
                name="Docker"
                image="https://images.unsplash.com/photo-1767409899586-4bd8db622d01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2NrZXIlMjBjb250YWluZXIlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MzMwNzM5OHww&ixlib=rb-4.1.0&q=80&w=1080"
              />
              <TechStackLogo
                name="Webpack"
                image="https://images.unsplash.com/photo-1593720216156-7c5fdbaaffb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJwYWNrJTIwYnVuZGxlciUyMGNvZGV8ZW58MXx8fHwxNzczMzA2ODA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              />
              <TechStackLogo
                name="VS Code"
                image="https://images.unsplash.com/photo-1590130382404-36dcbb666a3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2c2NvZGUlMjBlZGl0b3IlMjBjb2Rpbmd8ZW58MXx8fHwxNzczMzA3NDAzfDA&ixlib=rb-4.1.0&q=80&w=1080"
              />
              <TechStackLogo
                name="Jest"
                image="https://images.unsplash.com/photo-1554350747-ec45fd24f51b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXN0JTIwdGVzdGluZyUyMGZyYW1ld29ya3xlbnwxfHx8fDE3NzMzMDc0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              />
            </div>
          </div>

          {/* Design */}
          <div className="flex flex-col gap-[24px]">
            <h3 className="font-['JetBrains_Mono'] font-semibold leading-[1.3] text-[20px] md:text-[24px] text-[#d3e97a] uppercase">
              Design
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
              <TechStackLogo
                name="Figma"
                image="https://images.unsplash.com/photo-1653647054667-c99dc7f914ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWdtYSUyMGRlc2lnbiUyMHRvb2x8ZW58MXx8fHwxNzczMzA2ODAxfDA&ixlib=rb-4.1.0&q=80&w=1080"
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