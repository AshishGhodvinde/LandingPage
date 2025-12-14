import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "The team delivered our e-commerce platform ahead of schedule and it has increased our conversion rate by 40%. Their attention to detail and understanding of our business needs is exceptional."
  },
  {
    name: "Michael Chen",
    role: "Product Manager, InnovateCo",
    content: "Working with this team transformed our outdated web presence into a modern, user-friendly platform. The application is fast, reliable, and exactly what we needed for our growing business."
  },
  {
    name: "Emma Rodriguez",
    role: "Marketing Director, GrowthLabs",
    content: "They completely revolutionized our customer portal. The team's expertise in both frontend and backend development resulted in a seamless experience that our clients love."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what our clients have to say about working with us
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 relative border border-gray-100">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <Quote className="h-8 w-8 text-blue-600 mb-4" />
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;