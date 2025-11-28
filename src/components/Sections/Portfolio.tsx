import React from 'react';
import { Card } from '../UI/Card';
import { Button } from '../UI/Button';


const projects = [
    {
        title: 'E-Commerce Dashboard',
        category: 'Web App',
        image: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', // Placeholder
        description: 'A comprehensive dashboard for managing products, orders, and analytics.'
    },
    {
        title: 'Travel Agency Landing',
        category: 'Website',
        image: 'linear-gradient(135deg, #334155 0%, #1e293b 100%)', // Placeholder
        description: 'High-conversion landing page with immersive visuals and booking integration.'
    },
    {
        title: 'Finance Tracker',
        category: 'Mobile App',
        image: 'linear-gradient(135deg, #475569 0%, #334155 100%)', // Placeholder
        description: 'Personal finance tracking application with real-time data visualization.'
    }
];

export const Portfolio: React.FC = () => {
    return (
        <section id="portfolio" className="py-32">
            <div className="container">
                <h2 className="section-title">Featured Work</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Card key={index} hoverEffect={true} className="overflow-hidden group p-0 glass border-white/5 hover:border-white/20">
                            <div
                                className="h-64 w-full bg-slate-800 relative overflow-hidden"
                                style={{ background: project.image }}
                            >
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black scale-90 group-hover:scale-100 transition-transform duration-300">
                                        View Project
                                    </Button>
                                </div>
                            </div>
                            <div className="p-8">
                                <span className="text-xs font-bold text-accent uppercase tracking-widest mb-3 block">
                                    {project.category}
                                </span>
                                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
                <div className="text-center mt-16">
                    <Button variant="outline" className="px-8">View All Projects</Button>
                </div>
            </div>
        </section>
    );
};
