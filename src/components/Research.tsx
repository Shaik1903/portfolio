import { FiBookOpen } from 'react-icons/fi';

type ResearchItem = {
    title: string;
    summary: string;
    highlights: string[];
};

const research: ResearchItem[] = [
    {
        title: 'TD-CoT: Enhancing Small Language Models through Thought Distillation and Chain of Thought',
        summary:
            'Distilled reasoning signals from larger LLMs to smaller models, improving reasoning and problem-solving on standard benchmarks.',
        highlights: [
            'Benchmarks: GPQA, MATH500, MMLU',
            'Up to 248% accuracy gain on mathematical reasoning tasks',
            'Shows potential to mimic larger LLMs while optimizing compute',
        ],
    },
    {
        title: 'Indic Toxic Detection (ITD)',
        summary:
            'Introduced a Hindi/Telugu toxic audio dataset and taxonomy: Non-Toxic, Playful Toxic, Extreme Toxic; highlighted nuances LLMs miss.',
        highlights: [
            'Fleiss Kappa 0.85 for inter-annotator agreement',
            'Benchmarked mHuBERT and wav2vec-xlsr with strong F1 scores',
            'Advocates tailored models for low-resource languages',
        ],
    },
];

export default function Research() {
    return (
        <section id="research" className="py-16 md:py-20">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex items-center gap-3 mb-6">
                    <FiBookOpen className="text-accent" />
                    <h2 className="section-title">Research</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    {research.map((item) => (
                        <article key={item.title} className="glass p-6">
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="mt-2 text-white/80">{item.summary}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {item.highlights.map((h) => (
                                    <span key={h} className="tag">{h}</span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}


