import React from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-green-600 to-green-800">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join the Green Movement Today
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Start your journey towards healthier eating and sustainable living
            with GreenBloom's farm-fresh produce delivered right to your door.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Get Your First Box at 50% Off
                </h3>
                <p className="text-green-100 mb-4">
                  Enter your email to receive a special discount code for your
                  first order. Experience the GreenBloom difference today!
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <Button
                    variant="secondary"
                    size="lg"
                    className="whitespace-nowrap"
                  >
                    Get My First Box
                  </Button>
                </div>
                <p className="text-sm text-green-200 mt-3">
                  By subscribing, you agree to receive marketing emails from
                  GreenBloom.
                </p>
              </div>

              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute -top-16 -right-16 w-32 h-32 bg-amber-400 rounded-full opacity-20 animate-blob"></div>
                  <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-green-300 rounded-full opacity-20 animate-blob animation-delay-2000"></div>
                  <div className="absolute -right-8 -bottom-12 w-24 h-24 bg-green-400 rounded-full opacity-20 animate-blob animation-delay-4000"></div>
                  <img
                    src="vegetablebox.webp"
                    alt="Fresh vegetable box"
                    className="rounded-xl shadow-lg relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-8">
            <div className="flex items-center text-white">
              <svg
                className="h-5 w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>No commitment</span>
            </div>
            <div className="flex items-center text-white">
              <svg
                className="h-5 w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center text-white">
              <svg
                className="h-5 w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Free delivery</span>
            </div>
            <div className="flex items-center text-white">
              <svg
                className="h-5 w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Satisfaction guaranteed</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CtaSection;
