import React from 'react';
import { 
  CreditCard, 
  FileText, 
  Image, 
  Shirt,
  Calendar,
  Package,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Shield,
  Palette
} from 'lucide-react';
import bgBanner2 from '../assets/bgBanner2.jpeg'; 

const Services = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  const services = [
    {
      icon: CreditCard,
      title: 'Business Cards',
      description: 'Professional business cards that make a lasting first impression.',
      features: ['Premium cardstock options', 'Matte or glossy finish', 'Custom designs available', 'Bulk pricing discounts'],
      // price: 'Starting at $25',
      popular: true
    },
    {
      icon: FileText,
      title: 'Brochures & Flyers',
      description: 'Eye-catching marketing materials to promote your business.',
      features: ['Tri-fold and bi-fold options', 'Full-color printing', 'Various paper weights', 'Design consultation'],
      // price: 'Starting at $50'
    },
    {
      icon: Image,
      title: 'Large Format Printing',
      description: 'Banners, posters, and signage for maximum impact.',
      features: ['Weather-resistant materials', 'Indoor/outdoor options', 'Custom sizes available', 'Mounting services'],
      // price: 'Starting at $75'
    },
    {
      icon: Shirt,
      title: 'Custom Merchandise',
      description: 'Branded apparel and promotional items for your business.',
      features: ['T-shirts, mugs, pens', 'Screen printing & embroidery', 'Bulk order discounts', 'Quality materials'],
      // price: 'Starting at $15'
    },
    {
      icon: Calendar,
      title: 'Calendars & Planners',
      description: 'Custom calendars and planners for personal or business use.',
      features: ['Wall and desk calendars', 'Custom layouts', 'High-quality binding', 'Photo integration'],
      // price: 'Starting at $35'
    },
    {
      icon: Package,
      title: 'Packaging & Labels',
      description: 'Professional packaging solutions and custom labels.',
      features: ['Product labels', 'Shipping boxes', 'Custom packaging', 'Waterproof options'],
      // price: 'Starting at $40'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We discuss your project requirements and provide expert recommendations.',
      icon: Star
    },
    {
      number: '02',  
      title: 'Design & Proof',
      description: 'Our design team creates your artwork and provides proofs for approval.',
      icon: Palette
    },
    {
      number: '03',
      title: 'Production',
      description: 'We print your project using state-of-the-art equipment and quality materials.',
      icon: Clock
    },
    {
      number: '04',
      title: 'Quality Check & Delivery',
      description: 'Every order is quality checked before delivery or pickup.',
      icon: Shield
    }
  ];

  const whyChooseUs = [
    'State-of-the-art printing equipment',
    'Experienced design professionals',
    'Fast turnaround times',
    'Competitive pricing',
    'Eco-friendly printing options',
    '100% satisfaction guarantee'
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
      <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            From business essentials to creative projects, we offer comprehensive printing 
            solutions tailored to meet your specific needs and budget.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`group bg-white rounded-2xl border-2 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden relative ${
                  service.popular ? 'border-purple-200 ring-2 ring-purple-100' : 'border-gray-100 hover:border-purple-200'
                }`}
              >
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <div className="mb-6">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-100 pt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-purple-600">{service.price}</span>
                      <button className="group/btn flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200">
                        {/* <span>Get Quote</span> */}
                        {/* <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" /> */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AM PRINTS?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to delivering exceptional quality and service that exceeds your expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div 
                key={index} 
                className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                    {reason}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined process that ensures quality results and customer satisfaction every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto -mt-8 mb-4">
                    <step.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-200 to-pink-200 transform translate-x-8"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgBanner2})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/80 to-pink-600/80 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Bring Your Ideas to Life?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Get a free quote today and discover why thousands of businesses trust AM PRINT
            for their printing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleCallClick}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
             Contact Us Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;