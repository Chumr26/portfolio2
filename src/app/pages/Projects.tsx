import { Link } from "react-router";
import { type ReactNode, type SyntheticEvent, useEffect, useMemo, useState } from "react";
import svgPaths from "../../imports/svg-nyhfy7xnj9";
import imgImage9 from "../../assets/ada6183f66559558faf021a9606a30839d13d925.png";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

function SocialButton({ children, href }: { children: ReactNode; href?: string }) {
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

type ImageOrientation = "portrait" | "landscape" | "square";

type ImageMeta = {
    orientation: ImageOrientation;
    aspectRatio: number;
};

function getImageOrientation(width: number, height: number): ImageOrientation {
    if (width === height) {
        return "square";
    }

    return width > height ? "landscape" : "portrait";
}

function getTwoImageLayout(first: ImageOrientation, second: ImageOrientation): "left-right" | "top-bottom" | "mixed" {
    if (first === "portrait" && second === "portrait") {
        return "left-right";
    }

    if (first === "landscape" && second === "landscape") {
        return "top-bottom";
    }

    return "mixed";
}

function ProjectCard({ image, tag, className }: { image: string[]; tag?: string; className?: string }) {
    const [imageMetaBySrc, setImageMetaBySrc] = useState<Record<string, ImageMeta>>({});
    const [fullscreenImageSrc, setFullscreenImageSrc] = useState<string | null>(null);
    const images = image.slice(0, 2);

    const layout = useMemo(() => {
        if (images.length <= 1) {
            return "single" as const;
        }

        const firstOrientation = imageMetaBySrc[images[0]]?.orientation;
        const secondOrientation = imageMetaBySrc[images[1]]?.orientation;

        if (!firstOrientation || !secondOrientation) {
            return "mixed" as const;
        }

        return getTwoImageLayout(firstOrientation, secondOrientation);
    }, [images, imageMetaBySrc]);

    const containerClassByLayout = {
        single: "absolute inset-0 flex items-center justify-center p-8",
        "left-right": "absolute inset-0 flex flex-row items-stretch gap-4 p-6",
        "top-bottom": "absolute inset-0 flex flex-col items-stretch gap-4 p-6",
        mixed: "absolute inset-0 flex flex-row items-stretch gap-4 p-6"
    } as const;

    const frameClassByLayout = {
        single: "h-full w-full flex items-center justify-center",
        "left-right": "flex-1 h-full min-w-0 flex items-center justify-center",
        "top-bottom": "w-full flex-1 min-h-0 flex items-center justify-center",
        mixed: "h-full min-w-0 flex items-center justify-center"
    } as const;

    const imageClassByLayout = {
        single: "max-w-full max-h-full object-contain rounded-[12px]",
        "left-right": "max-w-full max-h-full object-contain rounded-[12px]",
        "top-bottom": "max-w-full max-h-full object-contain rounded-[12px]",
        mixed: "h-full w-auto max-w-full object-contain rounded-[12px]"
    } as const;

    const mixedFlexValues = useMemo(() => {
        if (layout !== "mixed" || images.length !== 2) {
            return [1, 1] as const;
        }

        const firstRatio = imageMetaBySrc[images[0]]?.aspectRatio ?? 1;
        const secondRatio = imageMetaBySrc[images[1]]?.aspectRatio ?? 1;

        return [Math.max(firstRatio, 0.4), Math.max(secondRatio, 0.4)] as const;
    }, [images, imageMetaBySrc, layout]);

    function handleImageLoad(src: string, event: SyntheticEvent<HTMLImageElement>) {
        const { naturalWidth, naturalHeight } = event.currentTarget;
        const aspectRatio = naturalHeight === 0 ? 1 : naturalWidth / naturalHeight;
        const nextMeta: ImageMeta = {
            orientation: getImageOrientation(naturalWidth, naturalHeight),
            aspectRatio
        };

        setImageMetaBySrc((prev) => {
            const currentMeta = prev[src];
            if (
                currentMeta &&
                currentMeta.orientation === nextMeta.orientation &&
                currentMeta.aspectRatio === nextMeta.aspectRatio
            ) {
                return prev;
            }

            return {
                ...prev,
                [src]: nextMeta
            };
        });
    }

    useEffect(() => {
        if (!fullscreenImageSrc) {
            return;
        }

        function handleEscape(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setFullscreenImageSrc(null);
            }
        }

        window.addEventListener("keydown", handleEscape);

        return () => {
            window.removeEventListener("keydown", handleEscape);
        };
    }, [fullscreenImageSrc]);

    return (
        <>
            <div className={`bg-[#1a1a1a] overflow-clip relative rounded-[12px] shrink-0 ${className || "w-full h-[400px] lg:w-[600px] lg:h-[600px]"}`}>
                <div className={containerClassByLayout[layout]}>
                    {images.map((imgSrc, index) => (
                        <div
                            key={index}
                            className={frameClassByLayout[layout]}
                            style={layout === "mixed" ? { flex: `${mixedFlexValues[index]} 1 0%` } : undefined}
                        >
                            <button
                                aria-label="Open image fullscreen"
                                className="h-full w-full flex items-center justify-center cursor-zoom-in"
                                onClick={() => setFullscreenImageSrc(imgSrc)}
                                type="button"
                            >
                                <img
                                    alt=""
                                    className={imageClassByLayout[layout]}
                                    onLoad={(event) => handleImageLoad(imgSrc, event)}
                                    src={imgSrc}
                                />
                            </button>
                        </div>
                    ))}
                </div>
                {tag && (
                    <div className="absolute bg-[#0a0a0a] flex items-center justify-center left-[16px] px-[16px] py-[8px] rounded-full top-[16px]">
                        <p className="font-medium leading-[1.5] text-[14px] text-white whitespace-nowrap">{tag}</p>
                    </div>
                )}
            </div>

            {fullscreenImageSrc && (
                <div
                    className="fixed inset-0 z-[100] bg-black/90 p-4 md:p-8 flex items-center justify-center"
                    onClick={() => setFullscreenImageSrc(null)}
                >
                    <button
                        aria-label="Close fullscreen image"
                        className="absolute right-4 top-4 md:right-8 md:top-8 text-white text-[28px] leading-none"
                        onClick={() => setFullscreenImageSrc(null)}
                        type="button"
                    >
                        ×
                    </button>
                    <img
                        alt=""
                        className="max-w-full max-h-full object-contain rounded-[12px]"
                        onClick={(event) => event.stopPropagation()}
                        src={fullscreenImageSrc}
                    />
                </div>
            )}
        </>
    );
}

function ProjectInfo({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex items-center justify-between py-[16px] border-t border-[#484848] w-full">
            <p className="font-medium leading-[1.6] text-[16px] text-white">{label}</p>
            <p className="font-medium leading-[1.6] text-[#c7c7c7] text-[16px]">{value}</p>
        </div>
    );
}

function ProjectLink({ text, icon }: { text: string; icon?: ReactNode }) {
    return (
        <a href="#" className="flex flex-col gap-[4px] group">
            <div className="flex gap-[4px] items-center">
                <p className="font-bold leading-[1.5] text-[#d3e97a] text-[16px] uppercase">{text}</p>
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

export default function Projects() {
    return (
        <div className="bg-[#0a0a0a] min-h-screen w-full">
            <Navigation />
            {/* Featured Projects Section */}
            <section className="container mx-auto px-4 md:px-[60px] pt-[100px] md:pt-[160px] pb-[80px]">
                <div className="flex flex-col gap-[8px] mb-[80px]">
                    <h2 className="leading-none text-[56px] md:text-[76px] text-white">Featured Projects</h2>
                    <p className="font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
                        Here are some of the selected projects that showcase my passion for software development.
                    </p>
                </div>

                <div className="flex flex-col gap-[80px] md:gap-[120px]">
                    {/* Project 1 */}
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-[48px] items-start lg:items-center">
                        {/* <ProjectCard image={imgWork} tag="Conceptual Work" /> */}
                        <ProjectCard image={["/projects/mern_bookstore1.jpeg", "/projects/mern_bookstore2.jpeg"]} />
                        <div className="flex flex-col gap-[48px] flex-1 min-w-0">
                            <div className="flex flex-col gap-[32px]">
                                <div className="flex flex-col gap-[16px]">
                                    <h3 className="font-medium leading-[1.4] text-[28px] md:text-[32px] text-white">
                                        Promotional landing page for our favorite show
                                    </h3>
                                    <p className="font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
                                        Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-[16px]">
                                    <p className="font-semibold leading-[1.5] text-[16px] text-white uppercase">Project Info</p>
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
                        <ProjectCard image={["/projects/spotify1.png", "/projects/spotify2.png"]} />
                        <div className="flex flex-col gap-[48px] flex-1 min-w-0">
                            <div className="flex flex-col gap-[32px]">
                                <div className="flex flex-col gap-[16px]">
                                    <h3 className="font-medium leading-[1.4] text-[28px] md:text-[32px] text-white">
                                        Blog site for World News
                                    </h3>
                                    <p className="font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
                                        Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in front-end development.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-[16px]">
                                    <p className="font-semibold leading-[1.5] text-[16px] text-white uppercase">Project Info</p>
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
                        <ProjectCard image={["/projects/php_bookstore1.png", "/projects/php_bookstore2.jpg"]} tag="Challenge" />
                        <div className="flex flex-col gap-[48px] flex-1 min-w-0">
                            <div className="flex flex-col gap-[32px]">
                                <div className="flex flex-col gap-[16px]">
                                    <h3 className="font-medium leading-[1.4] text-[28px] md:text-[32px] text-white">
                                        E-commerce product page
                                    </h3>
                                    <p className="font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
                                        Successfully crafted an engaging product page featuring a dynamic lightbox gallery and seamless cart functionality, showcasing proficiency in JavaScript development.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-[16px]">
                                    <p className="font-semibold leading-[1.5] text-[16px] text-white uppercase">Project Info</p>
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
                    <h2 className="leading-[0.9] text-[60px] md:text-[80px] lg:text-[101px] text-white">
                        About me
                    </h2>
                    <div className="flex flex-col gap-[16px]">
                        <h3 className="font-medium leading-[1.4] text-[24px] md:text-[32px] text-white">
                            I am a front-end developer based in Sydney. Has Mechanical Engineering background.
                        </h3>
                        <p className="font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
                            I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I'm exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.
                        </p>
                        <Link to="/about" className="flex flex-col gap-[4px] mt-[24px] w-fit group">
                            <p className="font-bold leading-[1.5] text-[#d3e97a] text-[16px] uppercase">More about me</p>
                            <div className="h-[2px] bg-[#d3e97a] w-full" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="w-full h-[1px] bg-[#484848]" />

            {/* Footer */}
            <Footer />
        </div >
    );
}
