import React from 'react';
import { ArrowRight, Star, Users, Award, TrendingUp, CheckCircle, Printer, Palette, Zap, Shield } from 'lucide-react';
import cards from '../assets/cards.png';
import brochure from '../assets/brochure.png';
import customized from '../assets/customized.png';
import largeFormat from '../assets/largeFormat.png';
import brand from '../assets/brand.png';
import bgBanner from '../assets/bgBanner.jpeg'; 
import bgBanner2 from '../assets/bgBanner2.jpeg'; 

const Home = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '2,500+' },
    { icon: Award, label: 'Projects Completed', value: '15,000+' },
    { icon: Star, label: 'Client Satisfaction', value: '99.8%' },
    { icon: TrendingUp, label: 'Years Experience', value: '15+' },
  ];

  const features = [
    'High-quality offset & digital printing',
    'Fast turnaround times (24-48 hours)',
    'Professional design services available',
    'Eco-friendly printing options',
    'Competitive pricing with bulk discounts',
    'Free delivery within city limits'
  ];

  const services = [
    {
      icon: Printer,
      title: 'Digital Printing',
      description: 'High-quality digital prints for small to medium runs',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'Design Services',
      description: 'Professional graphic design and layout services',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Quick Turnaround',
      description: 'Fast printing services without compromising quality',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: '100% satisfaction guarantee on all our work',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const handleCallClick = () => {
    // Check if the device is mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      // Use the company's phone number
      window.location.href = 'tel:+233553728715';
    } else {
      // If not mobile, redirect to contact page
      setCurrentPage('contact');
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23A855F7%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Professional
                  </span>{' '}
                  <br />
                  Printing Services
                  <br />
                  <span className="text-gray-800">You Can Trust</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  From business cards to large format prints, we deliver exceptional quality
                  and service that brings your vision to life with vibrant colors and precision.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Get Free Quote</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                {/* <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold text-lg hover:border-purple-600 hover:text-purple-600 transition-all duration-300">
                  View Portfolio
                </button> */}
              </div>

              <div className="grid grid-cols-2 gap-4 pt-8">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-purple-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                        <stat.icon className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                        <div className="text-xs text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AM PRINTS?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with traditional craftsmanship to deliver
              printing solutions that exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${service.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Recent Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent printing projects that showcase our quality and attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Business Card Collection',
                category: 'Business Cards',
                image: cards
              },
              {
                title: 'Custom Tees',
                category: 'Tees Printing',
                image: customized
              },
              {
                title: 'Custom Branding',
                category: 'Brand Product Design',
                image: brand
              },
              {
                title: 'Event Banners',
                category: 'Large Format',
                image: largeFormat
              },
              {
                title: 'Large Format Printing',
                category: 'Large Format',
                image: bgBanner2
              },
              {
                title: 'Wedding Invitations',
                category: 'Special Occasions',
                image: brochure
              }
            ].map((item, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-purple-600 font-medium">{item.category}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-1">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            {/* <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              View Full Portfolio
            </button> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgBanner})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/80 to-pink-600/80 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Bring Your Ideas to Life?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Get a free quote today and discover why thousands of businesses trust AM PRINTS
            for their printing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleCallClick}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
              Call Us Now
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;