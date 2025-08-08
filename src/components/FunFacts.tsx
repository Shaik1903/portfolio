import { FiStar, FiMusic, FiTerminal } from 'react-icons/fi';

const facts = [
    { icon: <FiStar />, text: 'Once got 10/10 from a rubber duck for debugging style.' },
    { icon: <FiMusic />, text: 'Code playlists: lo-fi beats, occasional boss fight music for prod.' },
    { icon: <FiTerminal />, text: 'I name my branches after superheroes. Deploys never miss.' },
];

export default function FunFacts() {
    return (
        <section id="fun" className="py-16 md:py-20">
            <div className="container mx-auto px-6 max-w-6xl">
                <h2 className="section-title mb-6">Fun facts</h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {facts.map((f) => (
                        <div key={f.text} className="glass p-6">
                            <div className="text-accent text-2xl">{f.icon}</div>
                            <p className="mt-3 text-white/80">{f.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


