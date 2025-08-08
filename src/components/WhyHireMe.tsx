import { FiSmile, FiActivity, FiFeather, FiClock } from 'react-icons/fi';

const points = [
    {
        icon: <FiActivity />,
        title: 'Ships > Slides',
        text: 'I obsess over 0→1 execution and production-readiness. Demos that delight, metrics that matter.',
    },
    {
        icon: <FiFeather />,
        title: 'LLM Whisperer',
        text: 'I wrangle agents, evals, prompts, and context windows without breaking a sweat (or the token budget).',
    },
    {
        icon: <FiClock />,
        title: 'Latency-hawk',
        text: 'Streaming-first everything. If it can be fast and smooth, it will be fast and smooth.',
    },
    {
        icon: <FiSmile />,
        title: 'Delightful UX',
        text: 'Serious engineering with a fun vibe. Because AI should feel like magic, not a PDF.',
    },
];

export default function WhyHireMe() {
    return (
        <section id="why" className="py-16 md:py-20">
            <div className="container mx-auto px-6 max-w-6xl">
                <h2 className="section-title mb-6">Why hire me?</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {points.map((p) => (
                        <article key={p.title} className="glass p-6">
                            <div className="flex items-start gap-4">
                                <div className="text-accent text-2xl mt-1">{p.icon}</div>
                                <div>
                                    <h3 className="text-xl font-semibold">{p.title}</h3>
                                    <p className="mt-1 text-white/80">{p.text}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}


