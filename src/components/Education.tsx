import { FiAward } from 'react-icons/fi';

export default function Education() {
    return (
        <section id="education" className="py-16 md:py-20">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex items-center gap-3 mb-6">
                    <FiAward className="text-accent" />
                    <h2 className="section-title">Education</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    <article className="glass p-6">
                        <h3 className="text-xl font-semibold">IIIT Dharwad</h3>
                        <p className="text-white/80">B.Tech, Data Science and Artificial Intelligence</p>
                        <p className="subtle mt-1">CGPA: 8.38 · 2021–2025</p>
                    </article>
                    <article className="glass p-6">
                        <h3 className="text-xl font-semibold">Narayana Junior College</h3>
                        <p className="text-white/80">Senior Secondary · AP Board of Intermediate</p>
                        <p className="subtle mt-1">Marks: 978/1000 · 2019–2021</p>
                    </article>
                </div>
            </div>
        </section>
    );
}


