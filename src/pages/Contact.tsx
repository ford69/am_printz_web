import React, { useState, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  MessageCircle,
  Users,
  Headphones,
  AlertCircle,
  Printer
} from 'lucide-react';
import bgBanner3 from '../assets/bgBanner3.jpeg';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    service: '',
    urgency: 'standard'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      if (!formRef.current) return;

      await emailjs.sendForm(
        'service_am_printz', // Your EmailJS service ID
        'template_am_printz_quote', // Your EmailJS template ID
        formRef.current,
        'YOUR_PUBLIC_KEY' // Replace this with your actual public key
      );
      
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: '',
          service: '',
          urgency: 'standard'
        });
      }, 3000);
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      console.error('EmailJS Error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '0553728715 / 0500554113',
      subdescription: 'Mon-Fri 8am-6pm, Sat 9am-4pm'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'am.printshub@gmail.com',
      subdescription: 'We reply within an hour'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'St. Lomnava',
      subdescription: 'Accra, Sowutuom, Ghana'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-5:30PM',
      subdescription: 'Saturday: Closed, Sunday: Closed'
    }
  ];

  const supportOptions = [
    // {
    //   icon: MessageCircle,
    //   title: 'Live Chat',
    //   description: 'Get instant answers about pricing and services',
    //   action: 'Start Chat',
    //   available: true
    // },
    // {
    //   icon: Users,
    //   title: 'In-Person Consultation',
    //   description: 'Visit our showroom to see samples and discuss your project',
    //   action: 'Schedule Visit',
    //   available: true
    // },
    {
      icon: Headphones,
      title: 'Phone Support',
      description: 'Speak with our printing experts directly',
      action: 'Call Now',
      available: true
    }
  ];

  const faq = [
    {
      question: 'What is your typical turnaround time?',
      answer: 'Most standard printing jobs are completed within 24-48 hours. Rush orders can often be completed same-day for an additional fee. Large format and specialty items may require 3-5 business days.'
    },
    {
      question: 'Do you offer design services?',
      answer: 'Yes! Our in-house design team can help create or refine your artwork. We offer everything from simple layout adjustments to complete design packages.'
    },
    {
      question: 'What file formats do you accept?',
      answer: 'We accept PDF, AI, EPS, PSD, JPEG, PNG, and TIFF files. For best results, we recommend high-resolution PDFs with embedded fonts and CMYK color mode.'
    },
    {
      question: 'Do you offer bulk pricing discounts?',
      answer: 'Absolutely! We offer competitive bulk pricing on most items. The more you print, the more you save. Contact us for a custom quote on large orders.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Get In <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to bring your printing project to life? Contact AM PRINTS today for a free quote 
              and expert consultation on all your printing needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300 text-center group">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-800 font-medium mb-1">{info.details}</p>
                <p className="text-sm text-gray-600">{info.subdescription}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Support Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <div className="flex items-center space-x-3 mb-6">
                  <Printer className="h-6 w-6 text-purple-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Request a Quote</h2>
                </div>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Quote Request Sent!</h3>
                    <p className="text-gray-600">Thank you for your interest. We'll get back to you with a detailed quote within 2 hours.</p>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
                        {error}
                      </div>
                    )}
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company/Organization
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                          placeholder="xxx xxx xxxx"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                          Service Needed *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="">Select a service</option>
                          <option value="business-cards">Business Cards</option>
                          <option value="brochures">Brochures & Flyers</option>
                          <option value="large-format">Large Format Printing</option>
                          <option value="merchandise">Custom Merchandise</option>
                          <option value="calendars">Calendars & Planners</option>
                          <option value="packaging">Packaging & Labels</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                          Timeline
                        </label>
                        <select
                          id="urgency"
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="standard">Standard (2-3 days)</option>
                          <option value="rush">Rush (24-48 hours)</option>
                          <option value="same-day">Same Day (additional fee)</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Title *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        placeholder="Brief description of your project"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Please provide details about your printing needs: quantity, size, colors, paper type, etc."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Sending Request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          <span>Request Quote</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Support Options */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Ways to Connect</h2>
                <div className="space-y-4">
                  {supportOptions.map((option, index) => (
                    <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300 group">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <option.icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{option.title}</h3>
                          <p className="text-sm text-gray-600 mb-3">{option.description}</p>
                          <button 
                            onClick={() => {
                              const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                              if (isMobile) {
                                window.location.href = 'tel:+233553728715';
                              }
                            }}
                            className="text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors duration-200">
                            {option.action} →
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rush Orders */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
                <div className="flex items-center space-x-3 mb-3">
                  <AlertCircle className="h-6 w-6 text-orange-600" />
                  <h3 className="font-semibold text-gray-900">Rush Orders</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Need your printing done urgently? We offer same-day and rush services for most items.
                </p>
                <p className="font-semibold text-orange-700">Call: 0553728715</p>
                <p className="text-xs text-gray-500 mt-1">Rush fees may apply</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our printing services and process
            </p>
          </div>

          <div className="space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgBanner3})` }}
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
        </div>
      </section>
    </div>
  );
};

export default Contact;