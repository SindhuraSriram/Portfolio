import React from 'react';
import { Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Mail,
              title: 'Email',
              content: 'sindhura.sriram@ufl.edu',
              href: 'mailto:sindhura.sriram@ufl.edu'
            },
            {
              icon: Phone,
              title: 'Phone',
              content: '+1 352 709 9837',
              href: 'tel:+13527099837'
            },
            {
              icon: Linkedin,
              title: 'LinkedIn',
              content: 'Connect with me',
              href: 'https://www.linkedin.com/in/sindhurasriram'
            }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                target={item.icon === Linkedin ? '_blank' : undefined}
                rel={item.icon === Linkedin ? 'noopener noreferrer' : undefined}
                className="group bg-white rounded-2xl p-8 card-shadow hover-scale text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF385C]/10 mb-6">
                  <Icon size={32} className="text-[#FF385C]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600 group-hover:text-[#FF385C] transition-colors flex items-center justify-center">
                  {item.content}
                  {item.icon === Linkedin && <ExternalLink size={16} className="ml-2" />}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}