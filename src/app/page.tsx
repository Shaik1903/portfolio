import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Research from '@/components/Research';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import WhyHireMe from '@/components/WhyHireMe';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Education from '@/components/Education';

export default function Home() {
    return (
        <main>
            <Nav />
            <div className="pt-16" />
            <Hero />
            <WhyHireMe />
            <Experience />
            <Education />
            <Research />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </main>
    );
}


