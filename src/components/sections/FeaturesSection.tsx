import React from "react";
import { Package, Sprout, Home, ChefHat as Chef } from "lucide-react";
import Container from "../ui/Container";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="group">
      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 group-hover:bg-green-200 transition-colors duration-300">
        <div className="text-green-600">{icon}</div>
      </div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Package className="h-8 w-8" />,
      title: "Weekly Veggie Box",
      description:
        "Customizable, seasonal produce delivered directly to your doorstep every week, harvested at peak freshness.",
    },
    {
      icon: <Sprout className="h-8 w-8" />,
      title: "Specialty Microgreens",
      description:
        "Nutrient-packed microgreens grown to order, perfect for elevating your culinary creations with intense flavors.",
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Grow-Your-Own Kits",
      description:
        "Easy-to-use hydroponic starter kits for home gardening, complete with everything you need to grow greens at home.",
    },
    {
      icon: <Chef className="h-8 w-8" />,
      title: "Restaurant Supply",
      description:
        "Bulk, tailored delivery for chefs and local restaurants seeking the freshest ingredients for their menus.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="products">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Fresh Produce, Grown Smarter
          </h2>
          <p className="text-lg text-gray-600">
            We combine innovative hydroponic farming with sustainable practices
            to deliver the freshest, most nutritious produce possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-16 md:mt-24 lg:mt-32 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              The Future of Urban Farming
            </h3>
            <p className="text-gray-600 mb-6">
              Our state-of-the-art vertical farms use 90% less water than
              traditional agriculture while producing higher yields in a
              fraction of the space. By growing locally in urban environments,
              we eliminate long supply chains and deliver produce at peak
              freshness.
            </p>
            <ul className="space-y-3">
              {[
                "Uses 90% less water than conventional farming",
                "No pesticides or herbicides ever",
                "Grows year-round regardless of weather",
                "Produces minimal waste and carbon footprint",
                "Creates local jobs in urban communities",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-green-500 mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="Vertical_farming.webp"
              alt="Vertical farming"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="bg-green-500 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                Sustainable Farming
              </span>
              <h4 className="text-xl font-bold mt-2">
                Our Vertical Farming System
              </h4>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;
