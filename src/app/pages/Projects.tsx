import { useTranslation } from "react-i18next";
import { Link } from 'react-router';
import {
    type ReactNode,
    type SyntheticEvent,
    useEffect,
    useMemo,
    useState,
} from 'react';
import svgPaths from '../../imports/svg-nyhfy7xnj9';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { useRouteScrollMemory } from '../hooks/useRouteScrollMemory';
import { withBase } from "@/lib/asset";

function SocialButton({
    children,
    href,
}: {
    children: ReactNode;
    href?: string;
}) {
    return (
        <a
            href={href || '#'}
            className="bg-[#222] flex items-center justify-center rounded-full shrink-0 size-[54px] hover:bg-[#2d2d2d] transition-colors"
        >
            {children}
        </a>
    );
}

function LinkedInIcon() {
    return (
        <div className="relative shrink-0 size-[26px]">
            <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 26 26"
            >
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
            <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 26 26"
            >
                <g id="bxl-github.svg">
                    <path
                        clipRule="evenodd"
                        d={svgPaths.p17e6c000}
                        fill="#D3E97A"
                        fillRule="evenodd"
                        id="Vector"
                    />
                </g>
            </svg>
        </div>
    );
}

type ImageOrientation = 'portrait' | 'landscape' | 'square';

type ImageMeta = {
    orientation: ImageOrientation;
    aspectRatio: number;
};

function getImageOrientation(width: number, height: number): ImageOrientation {
    if (width === height) {
        return 'square';
    }

    return width > height ? 'landscape' : 'portrait';
}

function getTwoImageLayout(
    first: ImageOrientation,
    second: ImageOrientation,
): 'left-right' | 'top-bottom' | 'mixed' {
    if (first === 'portrait' && second === 'portrait') {
        return 'left-right';
    }

    if (first === 'landscape' && second === 'landscape') {
        return 'top-bottom';
    }

    return 'mixed';
}

function ProjectCard({
    image,
    tag,
    className,
}: {
    image: string[];
    tag?: string;
    className?: string;
}) {
    const [imageMetaBySrc, setImageMetaBySrc] = useState<
        Record<string, ImageMeta>
    >({});
    const [fullscreenImageSrc, setFullscreenImageSrc] = useState<string | null>(
        null,
    );
    const images = image.slice(0, 2);

    const layout = useMemo(() => {
        if (images.length <= 1) {
            return 'single' as const;
        }

        const firstOrientation = imageMetaBySrc[images[0]]?.orientation;
        const secondOrientation = imageMetaBySrc[images[1]]?.orientation;

        if (!firstOrientation || !secondOrientation) {
            return 'mixed' as const;
        }

        return getTwoImageLayout(firstOrientation, secondOrientation);
    }, [images, imageMetaBySrc]);

    const containerClassByLayout = {
        single: 'absolute inset-0 flex items-center justify-center p-8',
        'left-right': 'absolute inset-0 flex flex-row items-stretch gap-4 p-6',
        'top-bottom': 'absolute inset-0 flex flex-col items-stretch gap-4 p-6',
        mixed: 'absolute inset-0 flex flex-row items-stretch gap-4 p-6',
    } as const;

    const frameClassByLayout = {
        single: 'h-full w-full flex items-center justify-center',
        'left-right': 'flex-1 h-full min-w-0 flex items-center justify-center',
        'top-bottom': 'w-full flex-1 min-h-0 flex items-center justify-center',
        mixed: 'h-full min-w-0 flex items-center justify-center',
    } as const;

    const imageClassByLayout = {
        single: 'max-w-full max-h-full object-contain rounded-[12px]',
        'left-right': 'max-w-full max-h-full object-contain rounded-[12px]',
        'top-bottom': 'max-w-full max-h-full object-contain rounded-[12px]',
        mixed: 'h-full w-auto max-w-full object-contain rounded-[12px]',
    } as const;

    const mixedFlexValues = useMemo(() => {
        if (layout !== 'mixed' || images.length !== 2) {
            return [1, 1] as const;
        }

        const firstRatio = imageMetaBySrc[images[0]]?.aspectRatio ?? 1;
        const secondRatio = imageMetaBySrc[images[1]]?.aspectRatio ?? 1;

        return [Math.max(firstRatio, 0.4), Math.max(secondRatio, 0.4)] as const;
    }, [images, imageMetaBySrc, layout]);

    function handleImageLoad(
        src: string,
        event: SyntheticEvent<HTMLImageElement>,
    ) {
        const { naturalWidth, naturalHeight } = event.currentTarget;
        const aspectRatio =
            naturalHeight === 0 ? 1 : naturalWidth / naturalHeight;
        const nextMeta: ImageMeta = {
            orientation: getImageOrientation(naturalWidth, naturalHeight),
            aspectRatio,
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
                [src]: nextMeta,
            };
        });
    }

    useEffect(() => {
        if (!fullscreenImageSrc) {
            return;
        }

        function handleEscape(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                setFullscreenImageSrc(null);
            }
        }

        window.addEventListener('keydown', handleEscape);

        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [fullscreenImageSrc]);

    return (
        <>
            <div
                className={`bg-[#1a1a1a] overflow-clip relative rounded-[12px] shrink-0 ${className || 'w-full h-[400px] lg:w-[600px] lg:h-[600px]'}`}
            >
                <div className={containerClassByLayout[layout]}>
                    {images.map((imgSrc, index) => (
                        <div
                            key={index}
                            className={frameClassByLayout[layout]}
                            style={
                                layout === 'mixed'
                                    ? { flex: `${mixedFlexValues[index]} 1 0%` }
                                    : undefined
                            }
                        >
                            <button
                                aria-label="Open image fullscreen"
                                className="h-full w-full flex items-center justify-center cursor-zoom-in"
                                onClick={() => setFullscreenImageSrc(withBase(imgSrc))}
                                type="button"
                            >
                                <img
                                    alt=""
                                    className={imageClassByLayout[layout]}
                                    onLoad={(event) =>
                                        handleImageLoad(withBase(imgSrc), event)
                                    }
                                    src={withBase(imgSrc)}
                                />
                            </button>
                        </div>
                    ))}
                </div>
                {tag && (
                    <div className="absolute bg-[#0a0a0a] flex items-center justify-center left-[16px] px-[16px] py-[8px] rounded-full top-[16px]">
                        <p className="font-medium leading-[1.5] text-[14px] text-white whitespace-nowrap">
                            {tag}
                        </p>
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
        <div className="grid grid-cols-[max-content_minmax(0,1fr)] items-start gap-x-6 py-[16px] border-t border-[#484848] w-full">
            <p className="font-medium leading-[1.6] text-[16px] text-white whitespace-nowrap">
                {label}
            </p>
            <p className="font-medium capitalize leading-[1.6] text-[#c7c7c7] text-[16px] min-w-0 break-words">
                {value}
            </p>
        </div>
    );
}

function ProjectLink({
    text,
    href,
    icon,
}: {
    text: string;
    href?: string;
    icon?: ReactNode;
}) {
    return (
        <a
            href={href || '#'}
            target="_blank"
            className="flex flex-col gap-[4px] group"
        >
            <div className="flex gap-[4px] items-center">
                <p className="font-bold leading-[1.5] text-[#d3e97a] text-[16px] uppercase">
                    {text}
                </p>
                {icon}
            </div>
            <div className="h-[2px] bg-[#d3e97a] w-full" />
        </a>
    );
}

type ProjectInfoItem = {
    label: string;
    value: string;
};

type ProjectAction = {
    text: string;
    href?: string;
    icon?: 'arrow' | 'github';
};

type FeaturedProject = {
    id: string;
    title: string;
    description: string;
    images: string[];
    tag?: string;
    info: ProjectInfoItem[];
    actions: ProjectAction[];
};

const FEATURED_PROJECTS: FeaturedProject[] = [
    {
        id: 'mern_bookstore',
        title: 'MERN stack bookstore websites',
        description:
            'A comprehensive multi-language e-commerce bookstore. Features include seamless book browsing, a dynamic cart system, secure integrated payments, and semantic search for enhanced product discovery. The platform also includes role-based authentication and authorization, automated email notifications, and a dedicated admin site for complete store administration.',
        images: [
            '/projects/mern_bookstore1.jpeg',
            '/projects/mern_bookstore2.jpeg',
        ],
        info: [
            { label: 'Timestamp', value: '12/2025 - 2/2026' },
            {
                label: 'Front-end',
                value: 'React, TypeScript, Vite, Bootstrap, I18n',
            },
            {
                label: 'Back-end\u00A0',
                value: 'Node, Express, JWT, PayOS, nodemailer',
            },
            {
                label: 'Database\u00A0',
                value: 'MongoDB, Mongoose, Atlas Vector Search',
            },
        ],
        actions: [
            {
                text: 'View project',
                href: 'https://bookstore.nguyenanhkhoa.me',
                icon: 'arrow',
            },
            {
                text: 'See on Github',
                href: 'https://github.com/Chumr26/cdbe',
                icon: 'github',
            },
        ],
    },
    {
        id: 'php_bookstore',
        title: 'PHP bookstore websites',
        description:
            'A full-featured e-commerce bookstore built with PHP, offering smooth book browsing, a practical cart system, secure integrated payments, and automated email notifications. The platform includes authentication and authorization, plus a dedicated admin site for efficient store management.',
        images: [
            '/projects/php_bookstore1.png',
            '/projects/php_bookstore2.jpg',
        ],
        // tag: "Challenge",
        info: [
            { label: 'Timestamp', value: '12/2025 - 2/2026' },
            { label: 'Design Patterns', value: 'MVC, OOP' },
            {
                label: 'Stack',
                value: 'bootstrap, PHP, laragon, mariadb, payOS, resend mail service',
            },
        ],
        actions: [
            {
                text: 'View project',
                href: 'https://php-bookstore.nguyenanhkhoa.me',
                icon: 'arrow',
            },
            {
                text: 'See on Github',
                href: 'https://github.com/Chumr26/php_book_store',
                icon: 'github',
            },
        ],
    },
    {
        id: 'noter',
        title: 'Note taking mobile app',
        description:
            'A cross-platform note-taking mobile app with full CRUD functionality, fast note search, and tag-based categorization for better organization. It delivers a smooth, user-friendly, and accessibility-focused UI/UX, includes a dedicated settings screen, and supports dark/light themes with haptic feedback for a more responsive mobile experience.',
        images: ['/projects/noter1.png', '/projects/noter2.png'],
        info: [
            { label: 'Timestamp', value: '11/2025 - 12/2025' },
            { label: 'Stack', value: 'React Native, TypeScript, Expo' },
        ],
        actions: [
            {
                text: 'See on Github',
                href: 'https://github.com/Chumr26/noter',
                icon: 'github',
            },
        ],
    },
    {
        id: 'college',
        title: 'College landing page',
        description:
            'A college-focused landing page built to sharpen front-end development skills. The project emphasizes an appealing, standards-compliant design, user-friendly and accessible UI/UX, fully responsive layouts across devices, and seamless dark/light theme support.',
        images: ['/projects/college1.png', '/projects/college2.png'],
        info: [
            { label: 'Timestamp', value: '08/2025 - 10/2025' },
            { label: 'Stack', value: 'React, TypeScript, Vite, Tailwind CSS' },
        ],
        actions: [
            {
                text: 'View project',
                href: 'https://college.nguyenanhkhoa.me/',
                icon: 'arrow',
            },
            {
                text: 'See on Github',
                href: 'https://github.com/Chumr26/college',
                icon: 'github',
            },
        ],
    },
    {
        id: 'furniture',
        title: 'Furniture store website',
        description:
            'A modern e-commerce furniture store with a front-end-focused architecture, while backend services are delegated to Firebase. It offers intuitive product browsing, category-based discovery, advanced search and filtering, a streamlined cart and ordering flow, and a lightweight admin site for day-to-day store administration.',
        images: ['/projects/furniture1.jpeg', '/projects/furniture2.jpeg'],
        info: [
            { label: 'Timestamp', value: '05/2025 - 07/2025' },
            {
                label: 'Stack',
                value: 'Angular, TypeScript, html, css, firebase',
            },
        ],
        actions: [
            {
                text: 'View project',
                href: 'https://furniture.nguyenanhkhoa.me/',
                icon: 'arrow',
            },
            {
                text: 'See on Github',
                href: 'https://github.com/Chumr26/angular-furniture',
                icon: 'github',
            },
        ],
    },
    {
        id: 'blog',
        title: 'Simple blog website',
        description:
            'A simple blog web application built as a learning project to strengthen state management skills with Redux and Redux Saga, while applying Ant Design to create a clean, consistent, and user-friendly interface.',
        images: ['/projects/blog.png'],
        info: [
            { label: 'Timestamp', value: '12/2023 - 01/2024' },
            {
                label: 'Stack',
                value: 'React, Redux, Redux Saga, Node, Express, MongoDB',
            },
        ],
        actions: [
            {
                text: 'View project',
                href: 'https://blog.nguyenanhkhoa.me/',
                icon: 'arrow',
            },
            {
                text: 'See on Github',
                href: 'https://github.com/Chumr26/blogs_fontend',
                icon: 'github',
            },
            {
                text: 'See on Github',
                href: 'https://github.com/Chumr26/blogs_backend',
                icon: 'github',
            },
        ],
    },
    {
        id: 'netflix',
        title: 'Netflix clone website',
        description:
            'A video streaming platform designed to closely replicate the UI/UX of Netflix, providing users with a seamless movie-watching experience. The application features robust security with both email and OAuth authentication (Google, GitHub). Built with Next.js, it leverages a strategic combination of client-side and server-side rendering to deliver optimal performance and scalability.',
        images: ['/projects/netflix1.png', '/projects/netflix2.png'],
        info: [
            { label: 'Timestamp', value: '11/2023 - 12/2023' },
            {
                label: 'Stack',
                value: 'Nextjs, Tailwind CSS, MongoDB Atlas, NextAuth, OAuth',
            },
        ],
        actions: [
            {
                text: 'See on Github',
                href: 'https://github.com/Chumr26/netflix_clone',
                icon: 'github',
            },
        ],
    },
    {
        id: 'spotify',
        title: 'Spotify clone website',
        description:
            'A full-featured online music streaming platform and player. Key features include personalized wishlists, flexible music uploads via local files or YouTube URLs, and secure authentication supporting email and OAuth providers (Google, Facebook, GitHub). Built with Next.js, the application leverages a strategic mix of client-side and server-side rendering for optimal performance and user experience.',
        images: ['/projects/spotify1.png', '/projects/spotify2.png'],
        info: [
            { label: 'Timestamp', value: '10/2023 - 11/2023' },
            {
                label: 'Stack',
                value: 'Nextjs, Tailwind CSS, Supabase, OAuth',
            },
        ],
        actions: [
            {
                text: 'View project',
                href: 'https://spotify.nguyenanhkhoa.me/',
                icon: 'arrow',
            },
            {
                text: 'See on Github',
                href: 'https://github.com/Chumr26/spotify_clone',
                icon: 'github',
            },
        ],
    },
    {
        id: 'y2m',
        title: 'Y2M web tool',
        description:
            'A YouTube to MP3 converter web tool built with a front-end focus, utilizing the YouTube API for video data retrieval and a third-party conversion API for audio processing. The application features a clean, user-friendly interface with robust error handling and responsive design for seamless use across devices.',
        images: ['/projects/y2m.png'],
        info: [
            { label: 'Timestamp', value: '09/2023 - 10/2023' },
            { label: 'Stack', value: 'html, css, vanilla javascript, APIs' },
        ],
        actions: [
            {
                text: 'View project',
                href: 'https://y2m.nguyenanhkhoa.me/',
                icon: 'arrow',
            },
            {
                text: 'See on Github',
                href: 'https://github.com/Chumr26/y2m',
                icon: 'github',
            },
        ],
    },
    {
        id: 'music_player',
        title: 'Music Player',
        description:
            'A web-based music player developed to solidify core web development fundamentals. Built entirely with pure HTML, CSS, and Vanilla JavaScript, the application features an elegant user interface and focuses on delivering clean, fluid interactions for a seamless listening experience.',
        images: ['/projects/music_player.png'],
        info: [
            { label: 'Timestamp', value: '08/2023 - 09/2023' },
            { label: 'Stack', value: 'html, css, vanilla javascript' },
        ],
        actions: [
            {
                text: 'View project',
                href: 'https://music-player.nguyenanhkhoa.me/',
                icon: 'arrow',
            },
            {
                text: 'See on Github',
                href: 'https://github.com/Chumr26/music_player',
                icon: 'github',
            },
        ],
    },
    {
        id: 'todos_list',
        title: 'Todos List',
        description:
            'A simple yet effective to-do list application built with core web technologies. The page focused on robust CRUD functionality for seamless task management. Developed entirely with pure HTML, CSS, and Vanilla JavaScript to strengthen foundational web technologies, the project features an elegant user interface designed for clean, smooth interactions.',
        images: ['/projects/todos.png'],
        info: [
            { label: 'Timestamp', value: '07/2023 - 08/2023' },
            { label: 'Stack', value: 'html, css, vanilla javascript' },
        ],
        actions: [
            {
                text: 'View project',
                href: 'https://todos.nguyenanhkhoa.me/',
                icon: 'arrow',
            },
            {
                text: 'See on Github',
                href: 'https://github.com/Chumr26/todos_app',
                icon: 'github',
            },
        ],
    },
];

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

export default function Projects() {
    const { t } = useTranslation();
    useRouteScrollMemory();

    return (
        <div className="bg-[#0a0a0a] min-h-screen w-full">
            <Navigation />
            {/* {t("projects.header.title")} Section */}
            <section className="container mx-auto px-4 md:px-[60px] pt-[100px] md:pt-[160px] pb-[80px]">
                <div className="flex flex-col gap-[8px] mb-[80px]">
                    <h2 className="leading-none text-[56px] md:text-[76px] text-white">
                        {t("projects.header.title")}
                    </h2>
                    <p className="font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
                        {t("projects.header.subtitle")}
                    </p>
                </div>

                <div className="flex flex-col gap-[80px] md:gap-[120px]">
                    {FEATURED_PROJECTS.map((project) => (
                        <div
                            key={project.id}
                            className="flex flex-col lg:flex-row gap-8 lg:gap-[48px] items-start lg:items-center"
                        >
                            <ProjectCard
                                image={project.images}
                                tag={project.tag}
                            />
                            <div className="flex flex-col gap-[48px] flex-1 min-w-0">
                                <div className="flex flex-col gap-[32px]">
                                    <div className="flex flex-col gap-[16px]">
                                        <h3 className="font-medium leading-[1.4] text-[28px] md:text-[32px] text-white">
                                            {t(`projects.list.${project.id}.title`, { defaultValue: project.title })}
                                        </h3>
                                        <p className="font-normal leading-[1.5] text-[#c7c7c7] text-[16px] md:text-[18px]">
                                            {t(`projects.list.${project.id}.description`, { defaultValue: project.description })}
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-[16px]">
                                        <p className="font-semibold leading-[1.5] text-[16px] text-white uppercase">
                                            {t("projects.labels.projectInfo")}
                                        </p>
                                        <div className="border-b border-[#484848]">
                                            {project.info.map((infoItem) => (
                                                <ProjectInfo
                                                    key={`${project.id}-${infoItem.label}`}
                                                    label={t(`projects.labels.${infoItem.label.trim().toLowerCase().replace(/[-\s\xA0]/g, "")}`, { defaultValue: infoItem.label })}
                                                    value={infoItem.value}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-[24px] flex-wrap">
                                    {project.actions.map((action) => (
                                        <ProjectLink
                                            key={`${project.id}-${action.text}`}
                                            href={action.href}
                                            icon={
                                                action.icon === 'github' ? (
                                                    <GitHubIcon />
                                                ) : action.icon === 'arrow' ? (
                                                    <ArrowIcon />
                                                ) : undefined
                                            }
                                            text={t(`projects.actions.${action.text}`, { defaultValue: action.text })}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Divider */}
            <div className="w-full h-[1px] bg-[#484848]" />

            {/* About Me Section */}
            {/* <section className="container mx-auto px-4 md:px-[60px] py-[80px]">
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
            </section> */}

            {/* Divider */}
            <div className="w-full h-[1px] bg-[#484848]" />

            {/* Footer */}
            <Footer />
        </div>
    );
}
