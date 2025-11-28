import React from 'react';


interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
    children,
    className = '',
    hoverEffect = false
}) => {
    const baseClass = 'bg-bg-secondary rounded-2xl shadow-lg border border-white/5';
    const hoverClass = hoverEffect ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-white/10' : '';

    return (
        <div className={`${baseClass} ${hoverClass} ${className}`}>
            {children}
        </div>
    );
};
