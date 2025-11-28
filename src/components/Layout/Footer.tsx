import React from 'react';


export const Footer: React.FC = () => {
    return (
        <footer className="bg-black py-16 border-t border-white/10">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                    <span className="text-lg font-semibold text-white mb-2 inline-block">
                        Portfolio
                    </span>
                    <p className="text-sm text-gray-500 max-w-xs">
                        Designed and built with precision.
                    </p>
                </div>

                <div className="flex gap-8">
                    <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Twitter</a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">GitHub</a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">LinkedIn</a>
                </div>

                <div className="text-xs text-gray-600">
                    © {new Date().getFullYear()} All rights reserved.
                </div>
            </div>
        </footer>
    );
};
