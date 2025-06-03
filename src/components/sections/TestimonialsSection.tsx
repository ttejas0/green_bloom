import React from "react";
import Container from "../ui/Container";
import TestimonialCard from "../ui/TestimonialCard";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        "The freshness is incomparable to anything I've ever bought at a grocery store. You can taste the difference in every bite!",
      name: "Sarah Johnson",
      role: "Weekly Subscriber",
      image: "TestimonialsSection/Testimonials1.webp",
    },
    {
      quote:
        "GreenBloom's microgreens have transformed our menu. Our customers rave about the vibrant flavors in our dishes.",
      name: "Chef Michael Rodriguez",
      role: "Restaurant Partner",
      image: "TestimonialsSection/Testimonials2.webp",
    },
    {
      quote:
        "I love that I'm supporting sustainable farming while getting the absolute best produce for my family every week.",
      name: "Emma Thompson",
      role: "Family Box Subscriber",
      image: "TestimonialsSection/Testimonials3.webp",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Community Says
          </h2>
          <p className="text-lg text-gray-600">
            Join thousands of satisfied customers who have made GreenBloom part
            of their healthy lifestyle.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
            />
          ))}
        </div>

        <div className="mt-16 bg-green-600 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Join Over 5,000 Happy Customers
              </h3>
              <p className="text-green-100 mb-6">
                From families to top restaurants, our community is growing every
                day. Experience the GreenBloom difference for yourself.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="block text-2xl font-bold text-white">
                    98%
                  </span>
                  <span className="text-sm text-green-100">
                    Satisfaction Rate
                  </span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="block text-2xl font-bold text-white">
                    87%
                  </span>
                  <span className="text-sm text-green-100">
                    Recurring Customers
                  </span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="block text-2xl font-bold text-white">
                    42
                  </span>
                  <span className="text-sm text-green-100">
                    Restaurant Partners
                  </span>
                </div>
              </div>
            </div>
            <div className="hidden md:block relative">
              <img
                src="produce.webp"
                alt="Happy customer with fresh produce"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
