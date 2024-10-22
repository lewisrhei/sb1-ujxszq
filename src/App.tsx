import React, { useState } from 'react';
import { MessageSquare, Lock, HandshakeIcon, Database, Menu, X } from 'lucide-react';
import { FormstackModal } from '@/components/FormstackModal';

const NavItem = ({ children }: { children: React.ReactNode }) => (
  <a href="#" className="text-gray-300 hover:text-white transition duration-300">{children}</a>
);

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string 
}) => (
  <div className="bg-blue-800/50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-blue-800/70 border border-blue-700/30 hover:border-blue-700/50">
    <Icon className="text-yellow-500 mb-4" size={32} />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const CTAButton = ({ 
  children, 
  primary = false,
  onClick 
}: { 
  children: React.ReactNode; 
  primary?: boolean;
  onClick?: () => void 
}) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ${
      primary
        ? 'bg-yellow-500 text-blue-900 hover:bg-yellow-400'
        : 'bg-blue-700 text-white hover:bg-blue-600'
    }`}
  >
    {children}
  </button>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'getStarted' | 'contact';
  }>({
    isOpen: false,
    type: 'getStarted'
  });

  const openModal = (type: 'getStarted' | 'contact') => {
    setModalState({ isOpen: true, type });
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <header className="container mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">DataStream</div>
          <div className="hidden md:flex space-x-6">
            <NavItem>Home</NavItem>
            <NavItem>Features</NavItem>
            <NavItem>Pricing</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Contact</NavItem>
          </div>
          <div className="hidden md:block">
            <CTAButton primary onClick={() => openModal('getStarted')}>Get Started</CTAButton>
          </div>
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-blue-800 py-4">
          <div className="container mx-auto px-6 flex flex-col space-y-4">
            <NavItem>Home</NavItem>
            <NavItem>Features</NavItem>
            <NavItem>Pricing</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Contact</NavItem>
            <CTAButton primary onClick={() => openModal('getStarted')}>Get Started</CTAButton>
          </div>
        </div>
      )}

      <main>
        <section className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Turn Your Video Data<br />
            <span className="text-gradient">Into Revenue</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Unlock an effortless new revenue stream from your video library by sharing it to train the next generation of AI
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <CTAButton primary onClick={() => openModal('getStarted')}>Get Started</CTAButton>
            <CTAButton onClick={() => openModal('contact')}>
              <span className="flex items-center">
                Talk to Us <MessageSquare size={16} className="ml-2" />
              </span>
            </CTAButton>
          </div>
        </section>

        <section className="container mx-auto px-6 py-10">
          <h2 className="text-3xl font-bold mb-8 text-center">Why License Your Video Data</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Database} 
              title="Effortless Revenue" 
              description="Simply sign up, upload your content, and start earning. We'll handle the rest"
            />
            <FeatureCard 
              icon={Lock} 
              title="Unlock the Value" 
              description="Your library has more potential than you think. Tech companies worldwide need high-quality video data."
            />
            <FeatureCard 
              icon={HandshakeIcon} 
              title="Seamless Licensing" 
              description="No hassle for you. Our team ensures your content meets tech specs, and prepares it for training"
            />
          </div>
        </section>

        <section className="bg-blue-800 py-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-16">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">What Makes Your Content Valuable</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Your video library holds more than just great visuals—it's a treasure trove of valuable data that tech companies rely on to train their AI models. High-quality content is the foundation of smarter technology. Whether it's breathtaking aerial shots, in-depth tutorials, or captivating wildlife footage, your content offers unique angles that are hard to find elsewhere.
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Integration" 
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-indigo-950 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGM5Ljk0MSAwIDE4LTguMDU5IDE4LTE4cy04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNCAtMTQgMTQgNi4yNjggMTQgMTQtNi4yNjggMTQtMTQgMTR6IiBmaWxsPSJjdXJyZW50Q29sb3IiIG9wYWNpdHk9IjAuMDUiLz48L2c+PC9zdmc+')] opacity-10"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl font-bold mb-8">Start Earning Revenue From Your Video Data</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              By licensing your video data, you can start generating revenue effortlessly, without changing how you create or distribute. Let us handle the details, while you enjoy a new, passive income stream from your existing video library.
            </p>
            <CTAButton primary onClick={() => openModal('getStarted')}>Get Started</CTAButton>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">DataStream</h3>
              <p className="text-gray-400">Empowering AI through advanced video data solutions.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Use Cases</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">API Reference</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-800 text-center text-gray-400">
            © {new Date().getFullYear()} DataStream. All rights reserved.
          </div>
        </div>
      </footer>

      <FormstackModal 
        isOpen={modalState.isOpen}
        onClose={closeModal}
        type={modalState.type}
      />
    </div>
  );
}

export default App;