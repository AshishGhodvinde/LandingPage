import React from 'react';
import { 
  Globe, 
  Code, 
  Server, 
  Rocket,
  Palette,
  Smartphone,
  Database,
  Shield
} from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Web Application Development",
    description: "Custom web applications built with modern frameworks that are fast, responsive, and scalable."
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android with intuitive user experiences."
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: "Frontend Development",
    description: "Interactive user interfaces using React, Vue.js, and other modern frameworks with clean code."
  },
  {
    icon: <Server className="h-10 w-10" />,
    title: "Backend Development",
    description: "Robust RESTful APIs and microservices using Node.js, Python, or Java for your applications."
  },
  {
    icon: <Database className="h-10 w-10" />,
    title: "Database Design",
    description: "Optimized database architectures using SQL and NoSQL solutions for maximum performance."
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Security Implementation",
    description: "Enterprise-grade security measures to protect your data and ensure compliance."
  },
  {
    icon: <Palette className="h-10 w-10" />,
    title: "UI/UX Design",
    description: "Beautiful, user-centered designs that enhance engagement and improve conversion rates."
  },
  {
    icon: <Rocket className="h-10 w-10" />,
    title: "Deployment & DevOps",
    description: "Cloud deployment, CI/CD pipelines, and ongoing maintenance for smooth operations."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group border border-gray-100 hover:border-blue-200"
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;