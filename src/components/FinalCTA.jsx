import React from 'react';
import { ArrowRight, Phone, Mail, Calendar } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-6 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Digital Presence?
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Let's discuss your project and create something amazing together. Get a free quote within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors flex items-center justify-center mx-auto group">
            <Calendar className="mr-2 h-5 w-5" />
            Schedule a Free Consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-colors flex items-center justify-center mx-auto group">
            <Phone className="mr-2 h-5 w-5" />
            Call Us Now
          </button>
        </div>
        <div className="flex items-center justify-center text-blue-100">
          <Mail className="mr-2 h-5 w-5" />
          <span>contact@ashishdev.studio</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;