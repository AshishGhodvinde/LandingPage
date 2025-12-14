import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Palette, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <MessageCircle className="h-8 w-8" />,
    number: "01",
    title: "Discovery & Planning",
    description: "We dive deep into your business goals, target audience, and project requirements to create a comprehensive strategy."
  },
  {
    icon: <Palette className="h-8 w-8" />,
    number: "02",
    title: "Design & Development",
    description: "Our expert team brings your vision to life with cutting-edge design and robust, scalable development."
  },
  {
    icon: <Code className="h-8 w-8" />,
    number: "03",
    title: "Testing & Refinement",
    description: "We rigorously test the application and refine based on feedback to ensure perfection before launch."
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    number: "04",
    title: "Launch & Support",
    description: "We deploy your solution and provide ongoing support to ensure continued success and growth."
  }
];

const HowIWork = () => {
  return (
    <section id="process" className="py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A proven 4-step approach to deliver exceptional results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 h-full">
                <div className="text-blue-600 mb-4">
                  {step.icon}
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{step.number}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIWork;