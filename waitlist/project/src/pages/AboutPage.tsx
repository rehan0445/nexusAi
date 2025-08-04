import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { Brain, Users, Sparkles, Shield, Zap, Rocket, Star, ArrowRight } from 'lucide-react';

const AboutPage: React.FC = () => {
  const features = [
    {
      id: 1,
      title: 'NEXUS AI',
      description: 'Revolutionary artificial intelligence that learns from your patterns, adapts to your workflow, and provides personalized assistance that evolves with your unique needs and preferences.',
      icon: Brain,
      gradient: 'from-gray-800 to-gray-900',
      benefits: ['Adaptive Learning', 'Personalized Responses', 'Seamless Integration']
    },
    {
      id: 2,
      title: 'NEXUS Vibe',
      description: 'Transform any environment into your perfect space with intelligent atmosphere control, advanced mood detection, and seamless sensory optimization technology.',
      icon: Sparkles,
      gradient: 'from-gray-800 to-gray-900',
      benefits: ['Smart Ambiance', 'Mood Detection', 'Environment Sync']
    },
    {
      id: 3,
      title: 'NEXUS Connect',
      description: 'Bridge the gap between digital and physical worlds with revolutionary connectivity that seamlessly brings people, devices, and experiences together in perfect harmony.',
      icon: Users,
      gradient: 'from-gray-800 to-gray-900',
      benefits: ['Universal Compatibility', 'Real-time Sync', 'Cross-platform Unity']
    }
  ];

  const reasons = [
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your data remains completely secure with advanced encryption, local processing, and zero-knowledge architecture that puts your privacy first.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Experience instantaneous responses and seamless performance powered by cutting-edge technology that keeps up with your thoughts and workflows.'
    },
    {
      icon: Rocket,
      title: 'Future-Ready',
      description: 'Built with tomorrow in mind, NEXUS continuously evolves with emerging technologies to keep you ahead of the curve and ready for what\'s next.'
    },
    {
      icon: Star,
      title: 'Premium Experience',
      description: 'Every interaction is meticulously crafted to delight, with obsessive attention to detail that makes advanced technology feel effortlessly magical.'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold text-gold mb-8 animate-float">
              About NEXUS
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto">
              We're pioneering the future of human-computer interaction, where revolutionary technology seamlessly integrates with your life to amplify your potential and connect you with what matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-gold text-center mb-16">Our Products</h2>
          <div className="space-y-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              const isReverse = index % 2 === 1;
              
              return (
                <div
                  key={feature.id}
                  className={`flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 animate-slide-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex-1">
                    <div className="w-20 h-20 bg-gold rounded-2xl flex items-center justify-center mb-6 shadow-gold">
                      <IconComponent className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">{feature.description}</p>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-gray-400">
                          <div className="w-3 h-3 bg-gold rounded-full mr-4"></div>
                          <span className="text-lg">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 p-8 rounded-3xl shadow-2xl hover:border-gold/50 hover:shadow-gold transition-all duration-500">
                      <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 text-center">
                        <div className="w-16 h-16 bg-gold rounded-xl flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="w-8 h-8 text-black" />
                        </div>
                        <h4 className="text-2xl font-bold text-gold mb-2">{feature.title}</h4>
                        <p className="text-gray-300">Experience the future today</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose NEXUS Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gold mb-6">Why Choose NEXUS?</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We're not just building products; we're crafting revolutionary experiences that redefine what's possible when advanced technology truly understands and serves you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div
                  key={index}
                  className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gold hover:shadow-gold hover:scale-105 transition-all duration-500 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-gold transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-lg">
                    {reason.description}
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
              Ready to Shape the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-12 font-light max-w-2xl mx-auto">
              Be among the first to experience NEXUS and help us build tomorrow's technology today.
            </p>
            <Link
              to="/waitlist"
              className="group inline-flex items-center px-10 py-4 bg-gold text-black text-lg font-bold rounded-full hover:glow-gold transform hover:scale-110 transition-all duration-300 shadow-gold"
            >
              Join the Waitlist
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;