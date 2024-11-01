'use client';
import Link from 'next/link';
import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const planDetails = [
    {
      name: 'Free',
      basePrice: 0,
      backgroundColor: 'bg-gray-900',
      borderColor: 'border-gray-700',
      features: [
        '2 prompts daily',
        '7 day refund',
        '24/7 Customer support',
        'All widget access'
      ]
    },
    {
      name: 'Content Creator',
      basePrice: 20,
      backgroundColor: 'bg-gray-800',
      borderColor: 'border-indigo-600',
      isMostPopular: true,
      features: [
        'Instagram Post Generator',
        'Instagram Hashtag Generator', 
        'Instagram Post Idea',
        'Youtube SEO suggestion',
        'and many more'
      ]
    },
    {
      name: 'Career Pack',
      basePrice: 18,
      backgroundColor: 'bg-gray-900',
      borderColor: 'border-gray-700',
      features: [
        'LinkedIn Post Generator',
        'Resume Tailoring Tool',
        'Cover Letter Design',
        'Cold Mail Generator',
        
      ]
    }
  ];

  return (
    <section className="py-16 bg-[#0B101B] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Choose Your Perfect Plan
          </h2>
          <p className="text-gray-400 text-lg">
            Start with a 7-day free trial. No credit card required.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {planDetails.map((plan, index) => (
            <div 
              key={index} 
              className={`
                ${plan.backgroundColor} 
                ${plan.borderColor} 
                border-2 
                rounded-2xl 
                p-6 
                flex 
                flex-col 
                transform 
                hover:scale-[1.02] 
                transition-transform 
                duration-300
                ${plan.isMostPopular ? 'ring-2 ring-indigo-600' : ''}
              `}
            >
              {plan.isMostPopular && (
                <div className="bg-indigo-600 text-white text-center py-2 rounded-t-xl -mx-6 -mt-6 mb-4">
                  MOST POPULAR
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              
              <div className="text-5xl font-bold mb-6">
                ${plan.basePrice}
                <span className="text-base text-gray-400 block">per month</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="text-indigo-500 mr-3 w-5 h-5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href="#"
                className="
                  w-full 
                  text-center 
                  py-3 
                  bg-indigo-600 
                  hover:bg-indigo-700 
                  rounded-lg 
                  font-semibold 
                  transition-colors
                "
              >
                Buy Now!
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg">
            Need more options? <Link href="#" className="text-indigo-400 hover:underline">See More Plans</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Pricing;