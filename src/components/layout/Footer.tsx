import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-surface-50 py-12">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Ramazan Aydinli. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/ramazanaydinli"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Github className="w-5 h-5" />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a
                        href="https://linkedin.com/in/ramazan-aydinli"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Linkedin className="w-5 h-5" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                        href="mailto:ramazanaydinli94@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                        <span className="sr-only">Email</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
