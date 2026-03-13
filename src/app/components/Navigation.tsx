import { Link, useLocation } from "react-router";
import { useState } from "react";

export function Navigation() {
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#484848]/50">
            <div className="container mx-auto px-4 md:px-[60px] py-[24px] flex items-center justify-between">
                <Link to="/" className="leading-[1.5] font-extrabold uppercase text-[#c7c7c7] text-[21px] md:text-[24px] hover:text-white transition-colors">
                    nguyễn anh khoa
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-[32px] items-center font-medium text-[16px]">
                    <Link
                        to="/"
                        className={`leading-[1.6] transition-colors ${isActive("/") ? "text-white" : "text-[#c7c7c7] hover:text-white"
                            }`}
                    >
                        About
                    </Link>
                    <Link
                        to="/projects"
                        className={`leading-[1.6] transition-colors ${isActive("/projects") ? "text-white" : "text-[#c7c7c7] hover:text-white"
                            }`}
                    >
                        Projects
                    </Link>
                    <Link
                        to="/certificates"
                        className={`leading-[1.6] transition-colors ${isActive("/certificates") ? "text-white" : "text-[#c7c7c7] hover:text-white"
                            }`}
                    >
                        Certificates
                    </Link>
                    <a
                        href="#contact"
                        className="leading-[1.6] text-[#c7c7c7] hover:text-white transition-colors"
                    >
                        Contact
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-end justify-center"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`bg-[#c7c7c7] h-0.5 transition-all ${mobileMenuOpen ? "w-8 rotate-45 translate-y-2" : "w-6"}`} />
                    <span className={`bg-[#c7c7c7] h-0.5 w-8 transition-opacity ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
                    <span className={`bg-[#c7c7c7] h-0.5 transition-all ${mobileMenuOpen ? "w-8 -rotate-45 -translate-y-2" : "w-6"}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-[#0a0a0a] border-t border-[#484848]/50">
                    <div className="container mx-auto px-4 py-6 flex flex-col gap-4 font-medium text-[16px]">
                        <Link
                            to="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`leading-[1.6] transition-colors py-2 ${isActive("/") ? "text-white" : "text-[#c7c7c7]"
                                }`}
                        >
                            About
                        </Link>
                        <Link
                            to="/projects"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`leading-[1.6] transition-colors py-2 ${isActive("/projects") ? "text-white" : "text-[#c7c7c7]"
                                }`}
                        >
                            Projects
                        </Link>
                        <Link
                            to="/certificates"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`leading-[1.6] transition-colors py-2 ${isActive("/certificates") ? "text-white" : "text-[#c7c7c7]"
                                }`}
                        >
                            Certificates
                        </Link>
                        <a
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="leading-[1.6] text-[#c7c7c7] py-2"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
