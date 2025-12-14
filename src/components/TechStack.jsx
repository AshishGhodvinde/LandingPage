import React from 'react';
import { 
  Atom, 
  Code2, 
  Server, 
  GitBranch, 
  Cloud,
  Smartphone,
  Database,
  Zap
} from 'lucide-react';

const technologies = [
  { name: "React", icon: <Atom className="h-10 w-10" /> },
  { name: "Vue.js", icon: <Code2 className="h-10 w-10" /> },
  { name: "Node.js", icon: <Server className="h-10 w-10" /> },
  { name: "Python", icon: <Server className="h-10 w-10" /> },
  { name: "MongoDB", icon: <Database className="h-10 w-10" /> },
  { name: "PostgreSQL", icon: <Database className="h-10 w-10" /> },
  { name: "AWS", icon: <Cloud className="h-10 w-10" /> },
  { name: "Docker", icon: <Cloud className="h-10 w-10" /> },
  { name: "GitHub", icon: <GitBranch className="h-10 w-10" /> },
  { name: "CI/CD", icon: <Zap className="h-10 w-10" /> },
  { name: "React Native", icon: <Smartphone className="h-10 w-10" /> },
  { name: "Flutter", icon: <Smartphone className="h-10 w-10" /> }
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20 px-4 md:px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Modern tools and frameworks we leverage to build robust, scalable solutions
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-300 group border border-gray-100"
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <h3 className="font-medium text-gray-900 text-center">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;