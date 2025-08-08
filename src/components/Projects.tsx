import { FiLayers, FiZap } from 'react-icons/fi';

type Project = {
    title: string;
    description: string;
    stack: string[];
};

const projects: Project[] = [
    {
        title: 'Agent Orchestra',
        description: 'A tiny battalion of AI agents that talk to each other, take hints, and don’t start a flame war.',
        stack: ['Multi-agent', 'Streaming', 'Evals'],
    },
    {
        title: 'Retina Reader',
        description: 'Computer vision that peeks at OCT scans and goes “yup, that’s not great” — with a friendly QA sidekick.',
        stack: ['PyTorch', 'RAG', 'CV'],
    },
    {
        title: 'Emotion Engine',
        description: 'Models that understand conversation vibes. Less “what did you say?” and more “I get you.”',
        stack: ['TensorFlow', 'Commonsense', 'MELD'],
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-16 md:py-20">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex items-center gap-3 mb-6">
                    <FiLayers className="text-accent" />
                    <h2 className="section-title">Projects</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    {projects.map((p) => (
                        <article key={p.title} className="glass p-6">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-xl font-semibold">{p.title}</h3>
                                    <p className="mt-2 text-white/80">{p.description}</p>
                                </div>
                                <FiZap className="text-accent shrink-0 mt-1" />
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {p.stack.map((s) => (
                                    <span key={s} className="tag">{s}</span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}


