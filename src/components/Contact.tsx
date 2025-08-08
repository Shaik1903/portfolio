import { FiMail, FiPhone, FiExternalLink } from 'react-icons/fi';

export default function Contact() {
    return (
        <section id="contact" className="py-16 md:py-20">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="glass p-6 md:p-10 text-center">
                    <h2 className="section-title">Let’s build something</h2>
                    <p className="mt-2 text-white/80">
                        Open to internships, research collaborations, and building delightful AI products.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                        <a className="btn-primary" href="mailto:21bds059@iiitdwd.ac.in">
                            <FiMail /> Email
                        </a>
                        <a className="btn-ghost" href="tel:+918309402827">
                            <FiPhone /> +91 8309402827
                        </a>
                        <a className="btn-ghost" href="https://github.com/Shaik1903" target="_blank" rel="noreferrer">
                            <FiExternalLink /> GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}


