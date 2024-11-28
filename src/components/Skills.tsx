import React from 'react';

const skills = {
  'Programming Languages': [
    'Python', 'Java', 'C++', 'JavaScript', 'HTML/CSS', 'R', 'MATLAB', 'XML', 'SAS'
  ],
  'Frameworks & Libraries': [
    'TensorFlow', 'PyTorch', 'Keras', 'OpenCV', 'Pandas', 'NumPy', 'Sklearn', 'PySpark', 'AJAX', 'Llama'
  ],
  'Databases & Cloud': [
    'PostgreSQL', 'Oracle SQL', 'MySQL', 'MongoDB', 'Neo4J', 'Teradata', 'HiveQL', 'AWS', 'Azure', 'Snowflake'
  ],
  'Tools & Platforms': [
    'Git', 'JIRA', 'Tableau', 'Collibra', 'Erwin', 'Anaconda', 'Jupyter', 'VS Code', 'Miro', 'Trello', 'MS Office', 'Gretl'
  ],
  'Specialized Skills': [
    'Machine Learning', 'Deep Learning', 'Neural Networks', 'NLP', 'Data Modeling', 'GenAI', 'LLMs',
    'Data Analysis', 'Data Visualization', 'Cloud Computing', 'Distributed Systems', 
    'REST APIs', 'ETL', 'Data Governance'
  ]
};

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Skills & Technologies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white rounded-2xl p-8 card-shadow hover-scale">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-[#FF385C]/10 text-[#FF385C] rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
