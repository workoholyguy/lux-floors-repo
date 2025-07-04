import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center border border-gray-100 hover:border-gray-300 text-center">
    <div className="text-4xl mb-3">{icon}</div>
    <h4 className="text-lg font-bold mb-2 text-gray-900 tracking-tight font-serif">{title}</h4>
    <p className="text-gray-700 text-base font-light leading-relaxed">{description}</p>
  </div>
);

export default FeatureCard; 