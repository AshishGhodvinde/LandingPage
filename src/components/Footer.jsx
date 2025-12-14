import React from 'react';
import { Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Ashish Dev Studio</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Building modern, scalable web and mobile applications for businesses worldwide. 
              We transform ideas into digital reality with premium quality and competitive pricing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-white transition-colors">Process</a></li>
              <li><a href="#tech-stack" className="text-gray-400 hover:text-white transition-colors">Technologies</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="flex items-center text-gray-400 mb-2">
              <Mail className="h-5 w-5 mr-2" />
              <span>contact@ashishdev.studio</span>
            </div>
            <p className="text-gray-400">
              Available for projects worldwide
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ashish Dev Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;