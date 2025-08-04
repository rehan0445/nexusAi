import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap } from 'lucide-react';
import logo from '../assets/logo.jpg';


const IntroPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-navigate after 3 seconds
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000);

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        clearTimeout(timer);
        navigate('/home');
      }
    };

    const handleClick = () => {
      clearTimeout(timer);
      navigate('/home');
    };

    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('click', handleClick);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('click', handleClick);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center cursor-pointer bg-black">
      <div className="text-center animate-fade-in">
        <div className="mb-8 flex justify-center">
          <div className="mb-8 flex justify-center">
  <img
    src={logo}
    alt="Nexus Logo"
    className="w-32 h-32 object-contain animate-float"
  />
</div>

        </div>
        <h1 className="text-7xl md:text-9xl font-bold text-gold mb-6 tracking-wider">
          NEXUS
        </h1>
        
      </div>
    </div>
  );
};

export default IntroPage;