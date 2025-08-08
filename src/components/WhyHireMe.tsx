import { FiSmile, FiActivity, FiFeather, FiClock, FiCoffee, FiCpu, FiZap } from 'react-icons/fi';

const points = [
    { icon: <FiZap />, title: 'Builds that blink', text: 'Tiny interactions, big smiles. Micro-animations are my love language.' },
    { icon: <FiCpu />, title: 'Agent tamer', text: 'I negotiate with multi-agent systems so you don’t have to.' },
    { icon: <FiClock />, title: 'Latency hawk', text: 'If a spinner shows up, it pays rent. Streaming-first or bust.' },
    { icon: <FiFeather />, title: 'Prompt poet', text: 'Words that make models behave. Like magic spells, but version controlled.' },
    { icon: <FiCoffee />, title: 'Caffeine-driven', text: 'I convert coffee to shipping features at suspicious speeds.' },
    { icon: <FiSmile />, title: 'Fun > Formal', text: 'Professional when needed, playful by default. Memorable always.' },
];

export default function WhyHireMe() {
    return (
        <section id="why" className="py-16 md:py-20">
            <div className="container mx-auto px-6 max-w-6xl">
                <h2 className="section-title mb-2">Why hire me?</h2>
                <p className="subtle mb-6">Short answer: I ship. Long answer: I ship with flair.</p>
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


