import React from 'react';
import { Card } from '../UI/Card';


const services = [
    {
        title: 'Web Development',
        description: 'Custom websites built with modern technologies like React, TypeScript, and Vite for optimal performance.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
        )
    },
    {
        title: 'UI/UX Design',
        description: 'Intuitive and accessible designs that provide a seamless user experience across all devices.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.077-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
            </svg>
        )
    },
    {
        title: 'SEO Optimization',
        description: 'Improving your visibility on search engines to drive more organic traffic to your site.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        )
    }
];

export const Services: React.FC = () => {
    return (
        <section id="services" className="py-32 relative">
            <div className="container">
                <h2 className="section-title">My Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} hoverEffect={true} className="flex flex-col items-center text-center p-8 glass border-white/5 hover:border-white/20 transition-colors">
                            <div className="mb-6 p-4 bg-white/5 rounded-full text-accent ring-1 ring-white/10">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                            <p className="text-slate-400 leading-relaxed">{service.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
