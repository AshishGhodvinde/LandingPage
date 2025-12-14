import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Zap, Palette } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transform Your Ideas Into <span className="text-blue-600">Digital Reality</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              We build modern web and mobile applications that drive growth, engage customers, and deliver exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors flex items-center justify-center group">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-3 px-8 rounded-lg transition-colors">
                View Our Work
              </button>
            </div>
            
            {/* Stats */}
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8">
              <div>
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">30+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">4+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl aspect-square max-w-lg mx-auto relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 w-full max-w-xs">
                  <div className="bg-white/20 rounded-lg h-40 flex items-center justify-center">
                    {/* Logo placement */}
                    <img 
                      src="/logo.png" 
                      alt="Ashish Dev Studio Logo" 
                      className="max-h-24 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating tech icons */}
              <div className="absolute top-6 left-6 animate-float">
                <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                  <Code className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="absolute bottom-6 right-6 animate-float-delayed">
                <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="absolute top-1/3 right-6 animate-float">
                <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                  <Palette className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="absolute bottom-1/3 left-6 animate-float-delayed">
                <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                  <Zap className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-2xl rotate-12 shadow-lg"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-green-400 rounded-2xl -rotate-12 shadow-lg"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;