import React from 'react';
import { 
  MessageCircle, 
  Send, 
  Phone, 
  Globe, 
  Brain, 
  Clock, 
  TrendingUp, 
  CheckCircle2 
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Navigation / Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white p-1.5 rounded-lg">
              <TrendingUp size={24} />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">
              Acme MTC Guild
            </span>
          </div>
          <a 
            href="tel:+19296072719" 
            className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            <Phone size={16} />
            +1 (929) 607-2719
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-slate-900 text-white py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-slate-900 opacity-90" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center mix-blend-overlay opacity-20" />
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-100 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Globe size={16} />
              <span>Global Community, Localized Guidance</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Build Lasting Wealth.<br />
              <span className="text-blue-400">Retire with Confidence.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Personalized retirement planning and strategic investment guidance. 
              We deliver clear, client-focused solutions for your long-term success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.link/b21m33" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-green-500/20 hover:shadow-green-500/30 hover:-translate-y-0.5"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
              <a 
                href="https://t.me/KatieMTC" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5"
              >
                <Send size={20} />
                Join Telegram
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Are</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Welcome to <span className="font-semibold text-slate-900">Acme MTC Guild</span>. We are a global group based in the United States, made up of members from diverse cultures and countries. 
              Whether you're nearing retirement, exploring new opportunities, or following proven market signals, our team brings deep experience in retirement planning, investment strategies, and estate preparation to keep you aligned with what truly matters.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-500">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-green-500"/> Retirement Planning</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-green-500"/> Investment Strategies</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-green-500"/> Estate Preparation</span>
            </div>
          </div>
        </section>

        {/* MTC Framework Section */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">The Proven MTC Framework</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Our strategies are grounded in a time-tested methodology designed for sustainable growth.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Mindset */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  <Brain size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Mindset</h3>
                <p className="text-slate-600 leading-relaxed">
                  Building the right habits: patience, discipline, and a steadfast long-term focus to navigate market cycles with confidence.
                </p>
              </div>

              {/* Time */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Time</h3>
                <p className="text-slate-600 leading-relaxed">
                  Leveraging consistency and the undeniable power of compounding to turn small, regular actions into massive future wealth.
                </p>
              </div>

              {/* Capital */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Capital</h3>
                <p className="text-slate-600 leading-relaxed">
                  Putting your resources to work through diversified strategies, risk management, and smart, data-driven decision making.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact / CTA Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Align Your Wealth Strategy?</h2>
            <p className="text-slate-300 mb-10 text-lg">
              Connect with our team today to explore personalized retirement and investment solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="https://wa.link/b21m33" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3.5 px-8 rounded-xl transition-all"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
              <a 
                href="https://t.me/KatieMTC" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3.5 px-8 rounded-xl transition-all"
              >
                <Send size={20} />
                Message on Telegram
              </a>
            </div>

            <div className="pt-8 border-t border-slate-700">
              <a 
                href="tel:+19296072719" 
                className="inline-flex items-center gap-3 text-2xl font-bold text-white hover:text-blue-400 transition-colors"
              >
                <Phone size={24} className="text-blue-400" />
                +1 (929) 607-2719
              </a>
              <p className="text-slate-400 mt-4 text-sm">
                © {new Date().getFullYear()} Acme MTC Guild. All rights reserved.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
