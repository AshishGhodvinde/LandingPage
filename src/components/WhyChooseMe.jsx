import React from 'react';
import { CheckCircle, Clock, MessageCircle, Code } from 'lucide-react';

const features = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Clean & Scalable Code",
    description: "Writing maintainable, well-documented code that scales with your business and adapts to future needs."
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Fast Delivery",
    description: "Efficient development process to deliver projects on time without compromising quality or functionality."
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Direct Communication",
    description: "Regular updates and transparent communication throughout the project lifecycle for complete visibility."
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Quality Assurance",
    description: "Rigorous testing and quality checks to ensure robust, bug-free applications that exceed expectations."
  }
];

const WhyChooseMe = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Partner with a team that understands both technology and business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="text-blue-600 mr-3">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;