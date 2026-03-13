import { useState } from "react";
import svgPaths from "../../imports/svg-nyhfy7xnj9";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa6";


function SocialIcon({ children, href }: { children: React.ReactNode; href?: string }) {
    return (
        <a
            href={href || "#"}
            className="relative shrink-0 size-[32px] hover:opacity-80 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    );
}

// function LinkedInIcon() {
//     return (
//         <svg className="size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
//             <g>
//                 <path d={svgPaths.p1bc476b0} fill="#D3E97A" />
//                 <path d={svgPaths.p3ff62a40} fill="#D3E97A" />
//             </g>
//         </svg>
//     );
// }

// function GitHubIcon() {
//     return (
//         <svg className="size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
//             <g>
//                 <path clipRule="evenodd" d={svgPaths.p3add5780} fill="#D3E97A" fillRule="evenodd" />
//             </g>
//         </svg>
//     );
// }

// function TwitterIcon() {
//     return (
//         <svg className="size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
//             <g>
//                 <path d={svgPaths.p3f377200} fill="#D3E97A" />
//             </g>
//         </svg>
//     );
// }

// function InstagramIcon() {
//     return (
//         <svg className="size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
//             <g>
//                 <path d={svgPaths.p8ca3400} fill="#D3E97A" />
//                 <path d={svgPaths.p5548000} fill="#D3E97A" />
//                 <path d={svgPaths.p374be072} fill="#D3E97A" />
//             </g>
//         </svg>
//     );
// }

function FormInput({ label, type = "text", id }: { label: string; type?: string; id: string }) {
    return (
        <div className="flex flex-col gap-[8px] w-full">
            <label htmlFor={id} className="font-medium leading-[1.6] text-[#c7c7c7] text-[16px]">
                {label}
            </label>
            <input
                type={type}
                id={id}
                className="bg-[#1a1a1a] rounded-[4px] px-[16px] py-[12px] font-normal leading-[1.5] text-[18px] text-white outline-none focus:ring-2 focus:ring-[#d3e97a] transition-all"
            />
        </div>
    );
}

function FormTextarea({ label, id }: { label: string; id: string }) {
    return (
        <div className="flex flex-col gap-[8px] w-full">
            <label htmlFor={id} className="font-medium leading-[1.6] text-[#c7c7c7] text-[16px]">
                {label}
            </label>
            <textarea
                id={id}
                rows={6}
                className="bg-[#1a1a1a] rounded-[4px] px-[16px] py-[12px] font-normal leading-[1.5] text-[18px] text-white outline-none focus:ring-2 focus:ring-[#d3e97a] transition-all resize-none"
            />
        </div>
    );
}

export function Footer() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
    };

    return (
        <footer id="contact" className="container mx-auto px-4 md:px-[60px] py-[80px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[24px]">
                {/* Left Column - Contact Info */}
                <div className="flex flex-col justify-between gap-12">
                    <div className="flex flex-col gap-[40px]">
                        <div className="flex flex-col gap-[16px]">
                            <h2 className="leading-none text-[56px] md:text-[76px] text-white">
                                Let's connect
                            </h2>
                            <div className="flex flex-col gap-[8px]">
                                <div className="flex gap-[10px] items-center flex-wrap">
                                    <p className="font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
                                        Say hello at
                                    </p>
                                    <a
                                        href="mailto:robertgarcia@gmail.com"
                                        className="font-normal leading-[1.5] text-[16px] md:text-[18px] text-white border-b border-[#d3e97a] hover:text-[#d3e97a] transition-colors"
                                    >
                                        nguyenanhkhoa26092002@gmail.com
                                    </a>
                                </div>
                                <div className="flex gap-[10px] items-center flex-wrap">
                                    <p className="font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
                                        My phone
                                    </p>
                                    <a
                                        href="tel:+84359090159"
                                        className="font-normal leading-[1.5] text-[16px] md:text-[18px] text-white border-b border-[#d3e97a] hover:text-[#d3e97a] transition-colors"
                                    >
                                        +84 359 090 159
                                    </a>
                                </div>

                                <div className="flex gap-[10px] items-center flex-wrap">
                                    <p className="font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
                                        For more info, here's my
                                    </p>
                                    <a
                                        href="/resume.pdf"
                                        target="_blank"
                                        className="font-normal leading-[1.5] text-[16px] md:text-[18px] text-white border-b border-[#d3e97a] hover:text-[#d3e97a] transition-colors"
                                    >
                                        resume
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-[24px] items-start">
                            <SocialIcon href="https://www.linkedin.com/in/nguyen-anh-khoa-aka-cuchum">
                                <FaLinkedinIn color="#D3E97A" className="size-full" />
                            </SocialIcon>
                            <SocialIcon href="https://github.com/chumr26">
                                <FaGithub color="#D3E97A" className="size-full" />
                            </SocialIcon>
                            <SocialIcon href="https://www.facebook.com/nguyen.anh.khoa.aka.cuchum/">
                                <FaFacebookF color="#D3E97A" className="size-full" />
                            </SocialIcon>
                        </div>
                    </div>

                    {/* <p className="font-medium leading-[1.6] text-[#c7c7c7] text-[16px]">
            © 2023 Robert Garcia
          </p> */}
                </div>

                {/* Right Column - Contact Form */}
                <div className="flex flex-col">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-[40px]">
                        <div className="flex flex-col gap-[24px]">
                            <FormInput label="Name" id="name" />
                            <FormInput label="Email" type="email" id="email" />
                            <FormInput label="Subject" id="subject" />
                            <FormTextarea label="Message" id="message" />
                        </div>

                        <button
                            type="submit"
                            className="bg-[#d3e97a] h-[54px] rounded-full flex items-center justify-center px-[40px] py-[20px] hover:bg-[#c5db6e] transition-colors"
                        >
                            <p className="font-bold leading-none text-[#0a0a0a] text-[16px] uppercase">
                                Submit
                            </p>
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
}