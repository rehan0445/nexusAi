import React, { useState } from 'react';
import Header from '../components/Header';
import { CheckCircle, Mail, User, ChevronDown, Gift, Zap, Users, Bell } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WaitlistPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);


  const interests = [
    { value: 'nexus-ai', label: 'NEXUS AI' },
    { value: 'nexus-vibe', label: 'NEXUS Vibe' },
    { value: 'nexus-connect', label: 'NEXUS Connect' },
    { value: 'all', label: 'All Products' }
  ];

  const perks = [
    { icon: Zap, title: 'Early Access', description: 'Be the first to experience revolutionary NEXUS products before public launch' },
    { icon: Gift, title: 'Exclusive Benefits', description: 'Special pricing, exclusive features, and premium priority support' },
    { icon: Users, title: 'VIP Community', description: 'Join an exclusive community of innovators, creators, and early adopters' },
    { icon: Bell, title: 'Priority Updates', description: 'Get the latest news, product updates, and behind-the-scenes content first' }
  ];

  const URL = "https://script.google.com/macros/s/AKfycbwVNU_S-U2lBvPnvd0TG0fQJJWHkGHBHaHhAubNgmSMypUg5cn9T0h2XovKRXioCSUl/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (formData.name && formData.email && formData.interest) {
      try {
        const response = await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: new URLSearchParams(formData as Record<string, string>).toString()
        });

        if (response.ok) {
          setIsSubmitted(true);
          setLoading(false);
          toast.success("🎉 You've successfully joined the waitlist!");
        } else {
          toast.error("Something went wrong. Please try again later.");
          setLoading(false);
        }
      } catch (error) {
        console.error("Submission error:", error);
        toast.error("Network error. Please try again.");
        setLoading(false);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleInterestSelect = (value: string) => {
    setFormData({
      ...formData,
      interest: value
    });
    setIsDropdownOpen(false);
  };

  return (
    <div className="min-h-screen bg-black">
      <ToastContainer theme="dark" position="top-right" autoClose={3000} />

      {isSubmitted ? (
        <>
          <Header />
          <div className="flex items-center justify-center min-h-[80vh] px-4">
            <div className="text-center animate-fade-in">
              <div className="w-32 h-32 bg-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl animate-pulse-gold">
                <CheckCircle className="w-16 h-16 text-black" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gold mb-6">Welcome to the Future!</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Thank you, <span className="text-gold font-semibold">{formData.name}</span>! You're now on the exclusive NEXUS waitlist.
              </p>
              <div className="bg-gray-900/60 backdrop-blur-sm border border-gold rounded-2xl p-8 max-w-lg mx-auto shadow-gold">
                <p className="text-gold font-bold text-lg mb-3">What's Next?</p>
                <p className="text-white-400 text-lg font-medium mb-6">
                  Join our WhatsApp Community for further updates.
                </p>
                <a
                  href="https://whatsapp.com/channel/0029Vb5Mw9vJZg429mxpLo0b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg"
                >
                  Join WhatsApp Community
                </a>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Header />
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-6xl md:text-7xl font-bold text-gold mb-8 animate-float">
                Join the Waitlist
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
                Be among the first to experience the future of technology.
              </p>
            </div>
          </section>

          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gold text-center mb-12">Exclusive Waitlist Perks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {perks.map((perk, index) => {
                  const Icon = perk.icon;
                  return (
                    <div
                      key={index}
                      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center hover:bg-gray-900/80 hover:border-gold hover:shadow-gold hover:scale-105 transition-all duration-500 animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-14 h-14 bg-gold rounded-lg flex items-center justify-center mx-auto mb-4 shadow-gold">
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{perk.title}</h3>
                      <p className="text-gray-400">{perk.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 md:p-12 hover:border-gold/50 transition-all duration-500">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-lg font-semibold text-gray-300 mb-3">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-14 pr-4 py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 text-lg"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-lg font-semibold text-gray-300 mb-3">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-14 pr-4 py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 text-lg"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-gray-300 mb-3">
                      What interests you most?
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full px-4 py-4 bg-black/50 border border-gray-700 rounded-xl text-white text-left flex items-center justify-between text-lg"
                      >
                        <span className={formData.interest ? 'text-white' : 'text-gray-400'}>
                          {formData.interest
                            ? interests.find(i => i.value === formData.interest)?.label
                            : 'Select your interest'}
                        </span>
                        <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-black border border-gray-700 rounded-xl overflow-hidden z-10">
                          {interests.map((interest) => (
                            <button
                              key={interest.value}
                              type="button"
                              onClick={() => handleInterestSelect(interest.value)}
                              className="w-full px-4 py-4 text-left text-white hover:bg-gray-900 hover:text-gold text-lg"
                            >
                              {interest.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gold text-black text-xl font-bold rounded-xl hover:glow-gold transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-gold"
                    disabled={!formData.name || !formData.email || !formData.interest}
                  >
                    {loading ? "Submitting..." : "Join Waitlist"}
                  </button>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-800 text-center">
                  <p className="text-gray-400">
                    By joining the waitlist, you agree to receive exclusive updates about NEXUS products and services.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default WaitlistPage;
