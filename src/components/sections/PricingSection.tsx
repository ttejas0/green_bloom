import React, { useState } from 'react';
import Container from '../ui/Container';
import PricingCard from '../ui/PricingCard';

const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  
  const pricingPlans = [
    {
      title: "Standard Veggie Box",
      priceMonthly: "$49",
      priceAnnual: "$39",
      description: "Perfect for individuals or couples seeking weekly farm-fresh produce.",
      features: [
        "Weekly delivery of seasonal vegetables",
        "4-6 different vegetable varieties",
        "Serves 1-2 people",
        "Recipe suggestions included",
        "Skip or pause anytime",
        "Free delivery"
      ]
    },
    {
      title: "Family Veggie Box",
      priceMonthly: "$79",
      priceAnnual: "$69",
      description: "Our most popular option, ideal for families who love cooking with fresh ingredients.",
      features: [
        "Weekly delivery of seasonal vegetables",
        "8-10 different vegetable varieties",
        "Serves 3-4 people",
        "Recipe suggestions included",
        "Skip or pause anytime",
        "Free delivery",
        "Priority harvest scheduling"
      ],
      popular: true
    },
    {
      title: "Gourmet Veggie Box",
      priceMonthly: "$99",
      priceAnnual: "$89",
      description: "For culinary enthusiasts who want premium and specialty varieties.",
      features: [
        "Weekly delivery of premium produce",
        "8-10 vegetable varieties including rare items",
        "Serves 2-4 people",
        "Includes specialty microgreens",
        "Chef-curated recipes",
        "Free delivery",
        "Priority harvest scheduling",
        "Monthly grow-your-own kit"
      ]
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-white" id="pricing">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Choose the perfect plan for your needs. All subscriptions include free delivery and can be paused or modified anytime.
          </p>
          
          {/* Subscription Toggle */}
          <div className="flex items-center justify-center">
            <span className={`mr-3 text-sm ${isAnnual ? 'text-gray-500' : 'font-medium text-gray-900'}`}>
              Pay Monthly
            </span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 bg-gray-200"
              role="switch"
              aria-checked={isAnnual}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
              <span className="absolute inset-0 rounded-full bg-green-600" style={{ clipPath: isAnnual ? 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)' : 'polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)' }}></span>
            </button>
            <span className={`ml-3 text-sm ${isAnnual ? 'font-medium text-gray-900' : 'text-gray-500'}`}>
              Pay Annually <span className="text-green-600 font-medium">(Save 20%)</span>
            </span>
          </div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={isAnnual ? plan.priceAnnual : plan.priceMonthly}
              description={plan.description}
              features={plan.features}
              popular={plan.popular}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <h3 className="text-xl font-bold mb-4">Optional Add-ons</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-lg mb-2">Grow Kit</h4>
              <p className="text-gray-600 mb-3">Start growing your own herbs with our beginner-friendly hydroponic kit.</p>
              <span className="text-green-600 font-medium">$29 / month</span>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-lg mb-2">Workshop Access</h4>
              <p className="text-gray-600 mb-3">Join our monthly urban farming workshops and learn from experts.</p>
              <span className="text-green-600 font-medium">$19 / month</span>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-lg mb-2">Microgreens Pack</h4>
              <p className="text-gray-600 mb-3">Weekly delivery of freshly harvested, nutrient-dense microgreens.</p>
              <span className="text-green-600 font-medium">$15 / week</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PricingSection;