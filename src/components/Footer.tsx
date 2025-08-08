export default function Footer() {
    return (
        <footer className="py-10">
            <div className="container mx-auto px-6 max-w-6xl text-center text-white/60">
                <p>
                    © {new Date().getFullYear()} Sadikh · Built with Next.js · Designed with love and too much coffee.
                </p>
            </div>
        </footer>
    );
}


