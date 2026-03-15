import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import svgPaths from '../../imports/svg-nyhfy7xnj9';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { withBase } from '../../lib/asset';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mpqyrngv';
const resumeHref = withBase('resume.pdf');

function SocialIcon({
    children,
    href,
}: {
    children: React.ReactNode;
    href?: string;
}) {
    return (
        <a
            href={href || '#'}
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

function FormInput({
    label,
    type = 'text',
    id,
    name,
    value,
    onChange,
}: {
    label: string;
    type?: string;
    id: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <div className="flex flex-col gap-[8px] w-full">
            <label
                htmlFor={id}
                className="font-medium leading-[1.6] text-[#c7c7c7] text-[16px]"
            >
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                className="bg-[#1a1a1a] rounded-[4px] px-[16px] py-[12px] font-normal leading-[1.5] text-[18px] text-white outline-none focus:ring-2 focus:ring-[#d3e97a] transition-all"
            />
        </div>
    );
}

function FormTextarea({
    label,
    id,
    name,
    value,
    onChange,
}: {
    label: string;
    id: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
    return (
        <div className="flex flex-col gap-[8px] w-full">
            <label
                htmlFor={id}
                className="font-medium leading-[1.6] text-[#c7c7c7] text-[16px]"
            >
                {label}
            </label>
            <textarea
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                rows={6}
                className="bg-[#1a1a1a] rounded-[4px] px-[16px] py-[12px] font-normal leading-[1.5] text-[18px] text-white outline-none focus:ring-2 focus:ring-[#d3e97a] transition-all resize-none"
            />
        </div>
    );
}

export function Footer() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [submitStatus, setSubmitStatus] = useState<
        'idle' | 'submitting' | 'success' | 'error'
    >('idle');

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setSubmitStatus('submitting');

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send form');
            }

            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
        } catch {
            setSubmitStatus('error');
        }
    };

    return (
        <footer
            id="contact"
            className="container mx-auto px-4 md:px-[60px] py-[80px]"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[24px]">
                {/* Left Column - Contact Info */}
                <div className="flex flex-col justify-between gap-12">
                    <div className="flex flex-col gap-[40px]">
                        <div className="flex flex-col gap-[16px]">
                            <h2 className="leading-none text-[56px] md:text-[76px] text-white">
                                {t('footer.title')}
                            </h2>
                            <div className="flex flex-col gap-[8px]">
                                <div className="flex gap-[10px] items-center flex-wrap">
                                    <p className="font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
                                        {t('footer.sayHelloAt')}
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
                                        {t('footer.myPhone')}
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
                                        {t('footer.forMoreInfo')}
                                    </p>
                                    <a
                                        href={resumeHref}
                                        target="_blank"
                                        className="font-normal leading-[1.5] text-[16px] md:text-[18px] text-white border-b border-[#d3e97a] hover:text-[#d3e97a] transition-colors"
                                    >
                                        {t('footer.resume')}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-[24px] items-start">
                            <SocialIcon href="https://www.linkedin.com/in/nguyen-anh-khoa-aka-cuchum">
                                <FaLinkedinIn
                                    color="#D3E97A"
                                    className="size-full"
                                />
                            </SocialIcon>
                            <SocialIcon href="https://github.com/chumr26">
                                <FaGithub
                                    color="#D3E97A"
                                    className="size-full"
                                />
                            </SocialIcon>
                            <SocialIcon href="https://www.facebook.com/nguyen.anh.khoa.aka.cuchum/">
                                <FaFacebookF
                                    color="#D3E97A"
                                    className="size-full"
                                />
                            </SocialIcon>
                        </div>
                    </div>

                    {/* <p className="font-medium leading-[1.6] text-[#c7c7c7] text-[16px]">
            © 2023 Robert Garcia
          </p> */}
                </div>

                {/* Right Column - Contact Form */}
                <div className="flex flex-col">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-[40px]"
                    >
                        <div className="flex flex-col gap-[24px]">
                            <FormInput
                                label={t('footer.form.name')}
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                            <FormInput
                                label={t('footer.form.email')}
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            <FormInput
                                label={t('footer.form.subject')}
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                            />
                            <FormTextarea
                                label={t('footer.form.message')}
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={submitStatus === 'submitting'}
                            className="bg-[#d3e97a] h-[54px] rounded-full flex items-center justify-center px-[40px] py-[20px] hover:bg-[#c5db6e] transition-colors disabled:opacity-70"
                        >
                            <p className="font-bold leading-none text-[#0a0a0a] text-[16px] uppercase">
                                {submitStatus === 'submitting'
                                    ? t('footer.form.sending')
                                    : t('footer.form.submit')}
                            </p>
                        </button>

                        {submitStatus === 'success' && (
                            <p className="font-normal text-[14px] text-[#d3e97a]">
                                {t('footer.form.successMessage')}
                            </p>
                        )}
                        {submitStatus === 'error' && (
                            <p className="font-normal text-[14px] text-red-400">
                                {t('footer.form.errorMessage')}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </footer>
    );
}
