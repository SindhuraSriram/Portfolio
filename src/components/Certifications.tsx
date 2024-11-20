import React from 'react';
import { Award } from 'lucide-react';

const certifications = [
  'SAS Certified Specialist: Base Programming Using SAS 9.4',
  'AWS Certified Solutions Architect',
  'Collibra Integration Engineer Learning Path',
  'Neo4j Certified Professional',
  'IBM Data Science Specialization'
];

export function Certifications() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Certifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl card-shadow hover-scale"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#FF385C]/10 flex items-center justify-center">
                    <Award size={24} className="text-[#FF385C]" />
                  </div>
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-900">{cert}</p>
                  <p className="text-sm text-gray-500 mt-1">Verified Certificate</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}