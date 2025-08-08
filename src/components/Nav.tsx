"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return (
        <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'bg-black/40 backdrop-blur border-b border-white/10' : ''}`}>
            <nav className="container mx-auto px-6 max-w-6xl h-16 flex items-center justify-between">
                <Link href="#" className="font-semibold tracking-tight">Sadikh</Link>
                <div className="hidden md:flex items-center gap-2 text-white/80">
                    <a href="#fun" className="px-3 py-2 hover:text-white">Fun</a>
                    <a href="#why" className="px-3 py-2 hover:text-white">Why me</a>
                    <a href="#experience" className="px-3 py-2 hover:text-white">Experience</a>
                    <a href="#education" className="px-3 py-2 hover:text-white">Education</a>
                    <a href="#projects" className="px-3 py-2 hover:text-white">Projects</a>
                    <a href="#research" className="px-3 py-2 hover:text-white">Research</a>
                    <a href="#skills" className="px-3 py-2 hover:text-white">Skills</a>
                    <a href="#contact" className="px-3 py-2 hover:text-white">Contact</a>
                </div>
                <div className="flex items-center gap-2">
                    <a
                        className="btn-ghost"
                        href="https://drive.google.com/file/d/1zPwEuHUem0W91mE9pw9pLMB0av0VH0r6/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Resume
                    </a>
                </div>
            </nav>
        </header>
    );
}


