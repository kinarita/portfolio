import React from 'react';
import { Button } from '../UI/Button';


export const Hero: React.FC = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Spotlight Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

            <div className="container text-center relative z-10">
                <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md animate-fade-in">
                    <span className="text-sm font-medium text-slate-300">Digital Service Creator</span>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-balance animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/70">
                        Crafting Digital
                    </span>
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/70">
                        Perfection.
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    Transforming ideas into elegant, high-performance digital experiences that inspire and engage.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <Button variant="primary" onClick={() => document.getElementById('portfolio')?.scrollIntoView()}>
                        View Work
                    </Button>
                    <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
                        Contact Me
                    </Button>
                </div>
            </div>
        </section>
    );
};
