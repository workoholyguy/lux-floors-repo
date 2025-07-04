import React from 'react';

interface ServiceCardProps {
  title: string;
  image: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, image, description }) => (
  <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center border border-gray-100 hover:border-gray-300">
    <img
      src={image}
      alt={title}
      className="rounded-xl w-full max-w-xs h-44 object-cover object-bottom mb-4 border border-gray-200"
      loading="lazy"
    />
    <h3 className="text-xl font-bold mb-3 text-gray-900 tracking-tight font-serif">{title}</h3>
    <p className="text-gray-700 text-center text-base font-light leading-relaxed">{description}</p>
  </div>
);

export default ServiceCard; 