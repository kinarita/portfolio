import React from 'react';
import { Button } from '../UI/Button';
import { Card } from '../UI/Card';


export const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-32 relative">
            <div className="container max-w-4xl">
                <h2 className="section-title">Get In Touch</h2>
                <Card className="p-8 md:p-12 glass border-white/5">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-white">Let's Talk</h3>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                Have a project in mind? Looking for a partner to help build your digital product?
                                Send me a message and let's discuss how we can work together.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-slate-300">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent ring-1 ring-white/10">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <span className="text-lg">hello@example.com</span>
                                </div>
                                <div className="flex items-center gap-4 text-slate-300">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent ring-1 ring-white/10">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                    </div>
                                    <span className="text-lg">Tokyo, Japan</span>
                                </div>
                            </div>
                        </div>

                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2 ml-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all placeholder:text-slate-600 text-base"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2 ml-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all placeholder:text-slate-600 text-base"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2 ml-1">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all resize-none placeholder:text-slate-600 text-base"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>
                            <Button type="submit" variant="primary" className="w-full mt-2">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </Card>
            </div>
        </section>
    );
};
