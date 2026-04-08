import { useState } from 'react';
import {
  Palette,
  Camera,
  Video,
  Car,
  MapPin,
  Calendar,
  Clock,
  Zap,
  Shield,
  Users,
  Mail,
  Phone,
  Instagram,
  Menu,
  X,
  Brush,
  Sparkles,
  ChevronRight,
  Star,
  CheckCircle
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thanks for reaching out! Lobo will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', serviceType: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 rounded-lg flex items-center justify-center font-bold text-xl">
                L
              </div>
              <span className="font-bold text-xl">LOBO Studio Designs</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('services')} className="hover:text-orange-500 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="hover:text-orange-500 transition-colors">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('driving')} className="hover:text-orange-500 transition-colors">
                Driving
              </button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-orange-500 transition-colors">
                Contact
              </button>
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="hidden md:block px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all"
            >
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left py-2 hover:text-orange-500 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="block w-full text-left py-2 hover:text-orange-500 transition-colors"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('driving')}
                className="block w-full text-left py-2 hover:text-orange-500 transition-colors"
              >
                Driving
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left py-2 hover:text-orange-500 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-red-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full mb-8 border border-gray-700">
            <Sparkles size={16} className="text-orange-500" />
            <span className="text-sm">Artist • Creator • Driver</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Creative Work.
            <br />
            <span className="text-gradient">Reliable Service.</span>
            <br />
            One Strong Brand.
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Original artwork, prints, video editing, and private driving services — built for people who want quality, creativity, and professionalism.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-red-600 transition-all flex items-center justify-center space-x-2"
            >
              <span>View Services</span>
              <ChevronRight size={20} />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-gray-800 border border-gray-700 rounded-lg font-semibold text-lg hover:bg-gray-700 transition-all"
            >
              Contact Lobo
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700">
              <Palette size={32} className="text-orange-500 mb-2 mx-auto" />
              <p className="text-sm font-semibold">Original Art</p>
            </div>
            <div className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700">
              <Video size={32} className="text-blue-500 mb-2 mx-auto" />
              <p className="text-sm font-semibold">Video Editing</p>
            </div>
            <div className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700">
              <Camera size={32} className="text-green-500 mb-2 mx-auto" />
              <p className="text-sm font-semibold">Prints</p>
            </div>
            <div className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700">
              <Car size={32} className="text-red-500 mb-2 mx-auto" />
              <p className="text-sm font-semibold">Private Driving</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
                <span className="text-orange-500 font-semibold">Meet Lobo</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Artist. Creator.
                <br />
                <span className="text-gradient">Professional Driver.</span>
              </h2>

              <div className="space-y-4 text-gray-300 text-lg">
                <p>
                  I'm a visual artist who creates bold, vibrant work that tells stories through color and contrast. From original paintings to custom prints, I bring creative visions to life with energy and precision.
                </p>
                <p>
                  Beyond the canvas, I offer professional video editing services for creators and brands who need their content to stand out. Whether it's social media clips or full productions, I bring the same creative eye to every frame.
                </p>
                <p>
                  I also provide reliable private driving services in the local area. The same professionalism and attention to detail I bring to my art translates to dependable, punctual transportation for clients who value quality service.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-orange-500">
                  <CheckCircle size={20} />
                  <span>Local & Trusted</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-500">
                  <CheckCircle size={20} />
                  <span>Professional</span>
                </div>
                <div className="flex items-center space-x-2 text-green-500">
                  <CheckCircle size={20} />
                  <span>Creative</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-500 via-red-500 to-blue-500 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <Brush size={120} className="text-gray-600" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl opacity-50 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Two Sides. One Vision.</h2>
            <p className="text-xl text-gray-300">Creative services and reliable transportation — both built on quality and trust.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Creative Services */}
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-orange-500 rounded-lg">
                  <Palette size={28} />
                </div>
                <h3 className="text-3xl font-bold">Creative Services</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover-lift border border-gray-700">
                  <div className="flex items-start space-x-4">
                    <Brush size={24} className="text-orange-500 mt-1" />
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">Original Artwork</h4>
                      <p className="text-gray-300 mb-4">Bold, vivid paintings and art pieces with strong visual energy and contrast.</p>
                      <button onClick={() => scrollToSection('contact')} className="text-orange-500 hover:text-orange-400 font-semibold flex items-center space-x-1">
                        <span>Ask About This</span>
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover-lift border border-gray-700">
                  <div className="flex items-start space-x-4">
                    <Camera size={24} className="text-orange-500 mt-1" />
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">Prints</h4>
                      <p className="text-gray-300 mb-4">High-quality prints of original work, available in multiple sizes.</p>
                      <button onClick={() => scrollToSection('contact')} className="text-orange-500 hover:text-orange-400 font-semibold flex items-center space-x-1">
                        <span>Ask About This</span>
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover-lift border border-gray-700">
                  <div className="flex items-start space-x-4">
                    <Sparkles size={24} className="text-orange-500 mt-1" />
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">Custom Art Commissions</h4>
                      <p className="text-gray-300 mb-4">Personalized artwork created specifically for your vision and space.</p>
                      <button onClick={() => scrollToSection('contact')} className="text-orange-500 hover:text-orange-400 font-semibold flex items-center space-x-1">
                        <span>Ask About This</span>
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover-lift border border-gray-700">
                  <div className="flex items-start space-x-4">
                    <Video size={24} className="text-orange-500 mt-1" />
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">Video Editing</h4>
                      <p className="text-gray-300 mb-4">Professional editing for content creators, brands, and social media.</p>
                      <button onClick={() => scrollToSection('contact')} className="text-orange-500 hover:text-orange-400 font-semibold flex items-center space-x-1">
                        <span>Ask About This</span>
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover-lift border border-gray-700">
                  <div className="flex items-start space-x-4">
                    <Users size={24} className="text-orange-500 mt-1" />
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">Creative Collaborations</h4>
                      <p className="text-gray-300 mb-4">Partner on projects that need artistic direction and creative execution.</p>
                      <button onClick={() => scrollToSection('contact')} className="text-orange-500 hover:text-orange-400 font-semibold flex items-center space-x-1">
                        <span>Ask About This</span>
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Driving Services */}
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-blue-500 rounded-lg">
                  <Car size={28} />
                </div>
                <h3 className="text-3xl font-bold">Driving Services</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover-lift border border-gray-700">
                  <div className="flex items-start space-x-4">
                    <Car size={24} className="text-blue-500 mt-1" />
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">Private Driving</h4>
                      <p className="text-gray-300 mb-4">Direct, personal transportation service for your schedule and needs.</p>
                      <button onClick={() => scrollToSection('contact')} className="text-blue-500 hover:text-blue-400 font-semibold flex items-center space-x-1">
                        <span>Book a Ride</span>
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover-lift border border-gray-700">
                  <div className="flex items-start space-x-4">
                    <MapPin size={24} className="text-blue-500 mt-1" />
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">Local Transportation</h4>
                      <p className="text-gray-300 mb-4">Reliable rides throughout the local area with professional service.</p>
                      <button onClick={() => scrollToSection('contact')} className="text-blue-500 hover:text-blue-400 font-semibold flex items-center space-x-1">
                        <span>Ask About Availability</span>
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover-lift border border-gray-700">
                  <div className="flex items-start space-x-4">
                    <Calendar size={24} className="text-blue-500 mt-1" />
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">Event / Appointment Rides</h4>
                      <p className="text-gray-300 mb-4">Punctual service for important events, appointments, and occasions.</p>
                      <button onClick={() => scrollToSection('contact')} className="text-blue-500 hover:text-blue-400 font-semibold flex items-center space-x-1">
                        <span>Book a Ride</span>
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover-lift border border-gray-700">
                  <div className="flex items-start space-x-4">
                    <Clock size={24} className="text-blue-500 mt-1" />
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">Reliable Scheduled Rides</h4>
                      <p className="text-gray-300 mb-4">Consistent, dependable service for recurring transportation needs.</p>
                      <button onClick={() => scrollToSection('contact')} className="text-blue-500 hover:text-blue-400 font-semibold flex items-center space-x-1">
                        <span>Ask About Availability</span>
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Art Portfolio Section */}
      <section id="portfolio" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Work</h2>
            <p className="text-xl text-gray-300 mb-6">Bold visuals with vivid colors and strong contrast.</p>
            <p className="text-gray-400 mb-8">Browse prints & originals available now</p>
            <a
              href="https://www.etsy.com/shop/L0B0StudioDesigns?dd_referrer=#items"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-red-600 transition-all shadow-lg"
            >
              <span>Shop My Work</span>
              <ChevronRight size={20} />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              { color: 'from-orange-500 to-red-600', name: 'Sunset Series' },
              { color: 'from-blue-500 to-cyan-500', name: 'Ocean Dreams' },
              { color: 'from-green-500 to-emerald-600', name: 'Urban Nature' },
              { color: 'from-purple-500 to-pink-600', name: 'Abstract Motion' },
              { color: 'from-yellow-500 to-orange-600', name: 'Golden Hour' },
              { color: 'from-red-500 to-orange-600', name: 'Fire & Energy' },
            ].map((item, index) => (
              <div key={index} className="group relative aspect-square rounded-xl overflow-hidden hover-lift cursor-pointer">
                <div className={`w-full h-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                  <Palette size={64} className="text-white opacity-20 group-hover:opacity-40 transition-opacity" />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-xl font-bold mb-2">{item.name}</p>
                    <button className="text-orange-500 hover:text-orange-400 font-semibold flex items-center space-x-1 mx-auto">
                      <span>View Details</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Editing Section */}
      <section id="video" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                <span className="text-blue-500 font-semibold">Video Editing</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="text-gradient-blue">Bring Your Content to Life</span>
              </h2>

              <div className="space-y-4 text-gray-300 text-lg mb-8">
                <p>
                  Professional video editing services for creators, brands, and businesses who need content that stands out.
                </p>
                <p>
                  From social media clips to full productions, I bring the same creative eye and attention to detail that defines my artwork.
                </p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-blue-500" />
                  <span>Social Media Edits</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-blue-500" />
                  <span>Content Creation Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-blue-500" />
                  <span>Brand & Marketing Videos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-blue-500" />
                  <span>Color Grading & Effects</span>
                </div>
              </div>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all flex items-center space-x-2"
              >
                <span>Ask About Editing</span>
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="order-1 md:order-2">
              <div className="aspect-video bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl overflow-hidden relative p-1">
                <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center">
                  <Video size={80} className="text-gray-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-12">Video Portfolio</h3>
            <div className="grid md:grid-cols-2 gap-10">
              <a
                href="https://youtu.be/H05j3Q-uqAM?si=OrioKzAZPZG90kxq"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/30 rounded-2xl overflow-hidden hover-lift cursor-pointer transition-all">
                  <div className="aspect-video bg-gray-800 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                    <Video size={80} className="text-blue-400 relative z-10" />
                  </div>
                  <div className="p-6 bg-gray-800/50">
                    <h4 className="text-xl font-semibold mb-3 text-gray-200">Video Portfolio 1</h4>
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all flex items-center justify-center space-x-2">
                      <span>Watch Video</span>
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </a>

              <a
                href="https://youtu.be/lC9hllAodRA?si=rM3wBFAV3_HnOo_7"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/30 rounded-2xl overflow-hidden hover-lift cursor-pointer transition-all">
                  <div className="aspect-video bg-gray-800 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>
                    <Video size={80} className="text-cyan-400 relative z-10" />
                  </div>
                  <div className="p-6 bg-gray-800/50">
                    <h4 className="text-xl font-semibold mb-3 text-gray-200">Video Portfolio 2</h4>
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all flex items-center justify-center space-x-2">
                      <span>Watch Video</span>
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Driving Services Detail Section */}
      <section id="driving" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-6">
                <span className="text-red-500 font-semibold">Transportation</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Professional
                <br />
                <span className="text-gradient">Driving Services</span>
              </h2>

              <p className="text-xl text-gray-300 mb-8">
                Need reliable transportation in the local area? Lobo also offers private driving services for clients who want dependable, direct service.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                  <Shield size={32} className="text-green-500 mb-3" />
                  <h4 className="font-semibold mb-2">Reliable</h4>
                  <p className="text-sm text-gray-400">On time, every time</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                  <MapPin size={32} className="text-blue-500 mb-3" />
                  <h4 className="font-semibold mb-2">Local</h4>
                  <p className="text-sm text-gray-400">Serving the area</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                  <Zap size={32} className="text-orange-500 mb-3" />
                  <h4 className="font-semibold mb-2">Professional</h4>
                  <p className="text-sm text-gray-400">Quality service</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                  <Clock size={32} className="text-cyan-500 mb-3" />
                  <h4 className="font-semibold mb-2">Flexible</h4>
                  <p className="text-sm text-gray-400">Your schedule</p>
                </div>
              </div>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all flex items-center space-x-2"
              >
                <span>Request a Ride</span>
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <Car size={120} className="text-gray-600" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl opacity-50 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Lobo Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Why People Choose Lobo</h2>
            <p className="text-xl text-gray-300">Quality, creativity, and reliability in everything I do.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8 hover-lift">
              <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
                <Sparkles size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Creative & Original</h3>
              <p className="text-gray-300">
                Every piece of work is approached with fresh eyes and creative energy. No cookie-cutter solutions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8 hover-lift">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional Communication</h3>
              <p className="text-gray-300">
                Clear, responsive, and reliable. You'll always know where your project stands.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8 hover-lift">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                <MapPin size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Local & Reliable</h3>
              <p className="text-gray-300">
                Based in the community, committed to serving local clients with dependable service.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8 hover-lift">
              <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Multiple Services</h3>
              <p className="text-gray-300">
                One trusted brand for creative work and transportation. Consistency across everything.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-8 hover-lift">
              <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Flexible & Collaborative</h3>
              <p className="text-gray-300">
                Open to ideas, easy to work with, and committed to bringing your vision to life.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl p-8 hover-lift">
              <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center mb-6">
                <Star size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Quality First</h3>
              <p className="text-gray-300">
                Whether it's art or transportation, quality and attention to detail are non-negotiable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-300">What people are saying about working with Lobo.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-lg text-gray-300 mb-6 italic">
                "The artwork Lobo created for our office is incredible. Bold, vibrant, and exactly what we needed to make the space come alive. Highly recommend!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full"></div>
                <div>
                  <p className="font-semibold">Sarah M.</p>
                  <p className="text-sm text-gray-400">Art Commission Client</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-lg text-gray-300 mb-6 italic">
                "Reliable, professional, and always on time. Lobo has been my go-to driver for important appointments. Can't recommend enough!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full"></div>
                <div>
                  <p className="font-semibold">Michael R.</p>
                  <p className="text-sm text-gray-400">Driving Service Client</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-lg text-gray-300 mb-6 italic">
                "Amazing video editing work! Lobo took our raw footage and turned it into something we're proud to share. Creative vision and fast turnaround."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full"></div>
                <div>
                  <p className="font-semibold">Jessica T.</p>
                  <p className="text-sm text-gray-400">Video Editing Client</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-lg text-gray-300 mb-6 italic">
                "Bought two prints for my home and they look fantastic. The colors are even more vivid in person. Great quality and fast shipping!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
                <div>
                  <p className="font-semibold">David L.</p>
                  <p className="text-sm text-gray-400">Print Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Let's Work</h2>
            <p className="text-xl text-gray-300">Ready to start a project or book a ride? Get in touch.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-gray-400">lobo@lobostudio.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <p className="text-gray-400">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Instagram</p>
                    <p className="text-gray-400">@lobostudiodesigns</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8">
                <h4 className="text-xl font-bold mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full px-6 py-3 bg-orange-500 rounded-lg font-semibold hover:bg-orange-600 transition-all text-left flex items-center justify-between"
                  >
                    <span>Ask About Art</span>
                    <ChevronRight size={20} />
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full px-6 py-3 bg-blue-500 rounded-lg font-semibold hover:bg-blue-600 transition-all text-left flex items-center justify-between"
                  >
                    <span>Request a Ride</span>
                    <ChevronRight size={20} />
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full px-6 py-3 bg-purple-500 rounded-lg font-semibold hover:bg-purple-600 transition-all text-left flex items-center justify-between"
                  >
                    <span>Video Editing Inquiry</span>
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-semibold mb-2">
                    What are you reaching out about?
                  </label>
                  <select
                    id="serviceType"
                    required
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="art-commission">Art Commission</option>
                    <option value="prints">Prints</option>
                    <option value="video-editing">Video Editing</option>
                    <option value="driving-service">Driving Service</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500 transition-colors resize-none"
                    placeholder="Tell me about your project or transportation needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <ChevronRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 rounded-lg flex items-center justify-center font-bold text-xl">
                  L
                </div>
                <span className="font-bold text-xl">LOBO Studio Designs</span>
              </div>
              <p className="text-gray-400 text-sm">
                Visual Artist | Prints & Originals | Video Editing | Driving Services
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('services')} className="block text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Services
                </button>
                <button onClick={() => scrollToSection('portfolio')} className="block text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Portfolio
                </button>
                <button onClick={() => scrollToSection('driving')} className="block text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Driving Services
                </button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Contact
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <Mail size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <Phone size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} LOBO Studio Designs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent md:hidden z-40">
        <button
          onClick={() => scrollToSection('contact')}
          className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all flex items-center justify-center space-x-2 shadow-lg"
        >
          <span>Get Started</span>
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default App;
