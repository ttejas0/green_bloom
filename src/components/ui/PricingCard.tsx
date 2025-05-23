import React from 'react';
import Button from './Button';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  onClick?: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  popular = false,
  onClick
}) => {
  return (
    <div 
      className={`relative rounded-2xl p-6 shadow-md transition-all duration-300 hover:shadow-xl ${
        popular 
          ? 'border-2 border-green-500 bg-white' 
          : 'border border-gray-200 bg-white'
      }`}
    >
      {popular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 transform bg-green-500 px-4 py-1 text-sm font-medium text-white rounded-full">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <div className="mt-4 flex items-baseline">
        <span className="text-3xl font-bold tracking-tight text-gray-900">{price}</span>
        <span className="ml-1 text-base font-medium text-gray-500">/month</span>
      </div>
      <p className="mt-3 text-sm text-gray-500">{description}</p>
      <ul className="mt-6 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="h-5 w-5 flex-shrink-0 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-2 text-sm text-gray-500">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button 
          variant={popular ? 'primary' : 'outline'} 
          className="w-full"
          onClick={onClick}
        >
          Subscribe Now
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;