import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { Brain, Users, Sparkles, ArrowRight, Clock } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      id: 1,
      title: 'NEXUS AI',
      description: 'Revolutionary artificial intelligence that learns, adapts, and evolves with your needs to unlock unprecedented productivity.',
      icon: Brain,
      gradient: 'from-gray-800 to-gray-900'
    },
    {
      id: 2,
      title: 'NEXUS Vibe',
      description: 'Transform any environment into your perfect space with intelligent atmosphere control and mood enhancement technology.',
      icon: Sparkles,
      gradient: 'from-gray-800 to-gray-900'
    },
    {
      id: 3,
      title: 'NEXUS Connect',
      description: 'Bridge the gap between digital and physical worlds with seamless connectivity that brings everything together.',
      icon: Users,
      gradient: 'from-gray-800 to-gray-900'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-7xl md:text-9xl font-bold text-gold mb-8 tracking-wider animate-float">
              NEXUS
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
              The future of digital interaction is here. Experience revolutionary AI-powered technology that transforms how you work, live, and connect with the world around you.
            </p>
            <div className="inline-flex items-center px-8 py-4 bg-gray-900/80 backdrop-blur-sm border-2 border-gold rounded-full text-gold mb-16 shadow-gold">
              <Clock className="w-5 h-5 mr-3 text-gold" />
              <span className="text-lg font-semibold">Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.id}
                  className="group animate-slide-up bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:bg-gray-900/80 hover:border-gold hover:shadow-gold hover:scale-105 transition-all duration-500"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 bg-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-gold transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-3xl p-12 hover:border-gold/50 transition-all duration-500">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-12 font-light max-w-2xl mx-auto">
              Join thousands of innovators who are already shaping tomorrow with NEXUS.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/waitlist"
                className="group px-10 py-4 bg-gold text-black text-lg font-bold rounded-full hover:glow-gold transform hover:scale-110 transition-all duration-300 flex items-center shadow-gold"
              >
                Join the Waitlist
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/about"
                className="px-10 py-4 bg-transparent border-2 border-gray-700 text-gray-300 text-lg font-semibold rounded-full hover:border-gold hover:text-gold hover:shadow-gold transform hover:scale-105 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;