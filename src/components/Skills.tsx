import { FiTool } from 'react-icons/fi';

const skills = {
    Languages: ['Python', 'SQL', 'C/C++ (260+ LeetCode)'],
    Libraries: ['C++ STL', 'scikit-learn', 'NumPy', 'pandas', 'Matplotlib', 'Seaborn'],
    Frameworks: ['LangChain', 'LangGraph', 'PyTorch', 'TensorFlow', 'Hugging Face', 'FastAPI', 'Git', 'LangSmith'],
    Coursework: [
        'Data Structures',
        'Algorithms',
        'DBMS',
        'Operating Systems',
        'GenAI',
        'OOP',
        'Software Engineering',
        'Machine Learning',
        'DevOps',
        'NLP',
    ],
};

export default function Skills() {
    return (
        <section id="skills" className="py-16 md:py-20">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex items-center gap-3 mb-6">
                    <FiTool className="text-accent" />
                    <h2 className="section-title">Skills</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    {Object.entries(skills).map(([group, items]) => (
                        <article key={group} className="glass p-6">
                            <h3 className="text-xl font-semibold">{group}</h3>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {items.map((s) => (
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


