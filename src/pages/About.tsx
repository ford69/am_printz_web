import React from 'react';
import { 
  Users, 
  Award, 
  Target, 
  Heart,
  Mail,
  Printer,
  Palette,
  Clock,
  Shield
} from 'lucide-react';
import bgBanner4 from '../assets/bgBanner4.jpeg'; 
import bgBanner5 from '../assets/bgBanner5.jpeg';

const About = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'We never compromise on quality, using only the finest materials and latest printing technology to ensure exceptional results.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We work closely with each client to understand their needs and exceed expectations.'
    },
    {
      icon: Heart,
      title: 'Passion for Print',
      description: 'We love what we do and it shows in every project. Our passion for printing drives us to deliver outstanding work.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We continuously invest in new technology and techniques to offer cutting-edge printing solutions.'
    }
  ];

  const team = [
    {
      name: 'Alex Martinez',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With 20+ years in the printing industry, Alex founded AM PRINTZ with a vision to provide exceptional printing services.',
      email: 'alex@amprintz.com'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Maria leads our design team with her expertise in graphic design and brand development.',
      email: 'maria@amprintz.com'
    },
    {
      name: 'James Wilson',
      role: 'Production Manager',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'James ensures every print job meets our high standards with his technical expertise and attention to detail.',
      email: 'james@amprintz.com'
    },
    {
      name: 'Sarah Chen',
      role: 'Customer Relations',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Sarah manages client relationships and ensures smooth project communication from start to finish.',
      email: 'sarah@amprintz.com'
    }
  ];

  const stats = [
    { number: '2,500+', label: 'Happy Clients' },
    { number: '15,000+', label: 'Projects Completed' },
    { number: '15+', label: 'Years of Experience' },
    { number: '99.8%', label: 'Customer Satisfaction' }
  ];

  const capabilities = [
    {
      icon: Printer,
      title: 'Advanced Equipment',
      description: 'State-of-the-art digital and offset printing presses for superior quality.'
    },
    {
      icon: Palette,
      title: 'Design Services',
      description: 'In-house graphic design team to bring your creative vision to life.'
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Quick production times without compromising on quality or attention to detail.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes ensure every job meets our high standards.'
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
      <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">AM PRINTZ</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Although newly established, AM PRINTZ has quickly become a trusted name in professional printing.
                Through a bold mix of creativity, modern technology, and unwavering commitment to quality, 
                we've earned the confidence of businesses and individuals alike. Whether it's business cards, 
                large-format prints, or custom merchandise, we bring your ideas to life with precision, passion, and a personal touch.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-purple-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8">
                <img 
                  src= {bgBanner4} 
                  alt="Printing facility"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                AM PRINTZ was founded with a bold vision: to redefine what printing means for modern businesses and creatives. 
                What began as a small neighborhood print shop has quickly grown into a full-service studio trusted by clients across the region.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
               From business cards and brochures to large format displays and digital merchandise, we combine cutting-edge tools with a passion 
                for craftsmanship to ensure every piece stands out. Our promise? Consistency, creativity, and care — on every single job.
              </p>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">

                <p className="text-purple-600 font-semibold mt-2">– Albright Jason Kwaku Mensah, Founder</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the premier printing partner for businesses and individuals by delivering 
                exceptional quality, outstanding service, and innovative solutions that exceed 
                expectations and help our clients succeed.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {stats.slice(2, 4).map((stat, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-purple-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art equipment and expertise to handle any printing challenge.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <capability.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-600 text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The dedicated professionals behind AM PRINTZ who make exceptional printing possible.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  
                  <a 
                    href={`mailto:${member.email}`} 
                    className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors duration-200"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="text-sm font-medium">Contact</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgBanner5})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/80 to-pink-600/80 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Bring Your Ideas to Life?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Get a free quote today and discover why thousands of businesses trust AM PRINTZ
            for their printing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('contact')}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
              Contact Us Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;