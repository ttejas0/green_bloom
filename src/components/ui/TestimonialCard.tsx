import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  role,
  image
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <svg width="45" height="36" className="text-green-500 opacity-30" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 0C6.04 0 0 6.04 0 13.5C0 20.96 6.04 27 13.5 27C15.66 27 20.25 25.65 20.25 25.65C20.25 25.65 18.9 31.05 13.5 31.05C8.1 31.05 9.45 36 9.45 36H13.5C20.96 36 27 29.96 27 22.5V13.5C27 6.04 20.96 0 13.5 0ZM31.5 0C24.04 0 18 6.04 18 13.5C18 20.96 24.04 27 31.5 27C33.66 27 38.25 25.65 38.25 25.65C38.25 25.65 36.9 31.05 31.5 31.05C26.1 31.05 27.45 36 27.45 36H31.5C38.96 36 45 29.96 45 22.5V13.5C45 6.04 38.96 0 31.5 0Z" fill="currentColor"/>
          </svg>
        </div>
        <p className="text-gray-600 flex-grow mb-6 italic">{quote}</p>
        <div className="flex items-center mt-auto">
          <img 
            src={image} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-medium text-gray-900">{name}</h4>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;