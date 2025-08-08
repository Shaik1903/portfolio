import { FiCpu, FiMic, FiShare2 } from 'react-icons/fi';
import type { ReactNode } from 'react';

type ExperienceItem = {
    company: string;
    role: string;
    location: string;
    period: string;
    bullets: string[];
    icon?: ReactNode;
};

const experiences: ExperienceItem[] = [
    {
        company: 'Gaido.AI',
        role: 'ML Intern',
        location: 'Bangalore',
        period: 'Mar 2025 – Present',
        bullets: [
            'Built 0→1 multi-agent + voice AI to automate insurance workflows end-to-end',
            'Simulated 150+ agent-user conversations for evaluation and quality',
            'Monitored 5k+ runs (40M+ tokens) via LangSmith, cutting errors and latency',
            'Deployed production pipeline with 100% streaming and stable long-form voice',
        ],
        icon: <FiMic className="text-accent" />,
    },
    {
        company: 'Vocab.AI',
        role: 'ML Intern',
        location: 'Hubli',
        period: 'Jul 2023 – Mar 2024',
        bullets: [
            'Analyzed 1000+ calls for sentiment and actionable insights',
            'Built RAG to pinpoint issues and SOP breaches with high precision',
            'Developed SOP-aware, memory-enabled chatbot with external DB',
            'Prototyped LLM workflows with LangChain for scalable automation',
        ],
        icon: <FiShare2 className="text-accent" />,
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-16 md:py-20">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex items-center gap-3 mb-6">
                    <FiCpu className="text-accent" />
                    <h2 className="section-title">Experience</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {experiences.map((exp) => (
                        <article key={exp.company} className="glass p-6">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                                    <p className="text-white/80">{exp.role} · {exp.location}</p>
                                </div>
                                <div className="text-sm subtle">{exp.period}</div>
                            </div>
                            <ul className="mt-4 space-y-2 text-white/80">
                                {exp.bullets.map((b, i) => (
                                    <li key={i} className="flex gap-2">
                                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent/80 shrink-0" />
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}


