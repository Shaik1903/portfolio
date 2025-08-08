import { FiLayers, FiMessageCircle, FiImage, FiZap } from 'react-icons/fi';

type Project = {
    title: string;
    description: string;
    stack: string[];
};

const projects: Project[] = [
    {
        title: 'Emotion Recognition in Multiparty Conversation',
        description:
            'Commonsense-infused ERC using COMET on MELD with fine-tuning and feature extraction. Weighted F1: 61.69 (vs SOTA 65.4).',
        stack: ['TensorFlow', 'Fine-tuning', 'Feature extraction'],
    },
    {
        title: 'AI-Driven Retinal Disease Classification + RAG QA',
        description:
            'EfficientNet-based OCT classification into 4 classes with 99.92% accuracy; RAG chatbot for patient-friendly Q&A.',
        stack: ['PyTorch', 'RAG', 'Computer Vision'],
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


