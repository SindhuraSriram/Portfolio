import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const education = [
  {
    school: 'University of Florida',
    degree: 'Master of Science - MS, Computer and Information Sciences',
    date: 'January 2023 - December 2024',
    location: 'Gainesville, Florida',
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=400'
  },
  {
    school: 'SASTRA University',
    degree: 'Bachelor of Technology - BTech, Computer Science',
    date: 'June 2016 - May 2020',
    location: 'Thanjavur, India',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=400'
  }
];

export function Education() {
  return (
    <section id="education" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Education</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden card-shadow hover-scale"
            >
              <div className="relative h-56">
                <img
                  src={edu.image}
                  alt={edu.school}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{edu.school}</h3>
                  <p className="text-white/90">{edu.degree}</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center text-gray-600">
                  <Calendar size={18} className="mr-2" />
                  {edu.date}
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin size={18} className="mr-2" />
                  {edu.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}