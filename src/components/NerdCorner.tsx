"use client";

import { useState } from 'react';
import { FiChevronDown, FiCode } from 'react-icons/fi';

export default function NerdCorner() {
    const [open, setOpen] = useState(false);
    return (
        <section className="py-6">
            <div className="container mx-auto px-6 max-w-6xl">
                <button
                    onClick={() => setOpen((v) => !v)}
                    className="w-full glass p-4 flex items-center justify-between"
                    aria-expanded={open}
                >
                    <span className="flex items-center gap-2 font-semibold">
                        <FiCode className="text-accent" /> Nerd corner (click if you like metrics and acronyms)
                    </span>
                    <FiChevronDown className={`transition-transform ${open ? 'rotate-180' : ''}`} />
                </button>
                {open && (
                    <div className="glass p-6 mt-3 text-white/80">
                        <ul className="list-disc ml-5 space-y-1">
                            <li>Simulated 150+ agent-user conversations for evals</li>
                            <li>Observed 5k+ runs via LangSmith, optimized latency</li>
                            <li>Voice-first pipeline with full-duplex streaming</li>
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
}


