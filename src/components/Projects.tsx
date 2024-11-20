import React from 'react';
import { Cloud, Bot, Shield, Brain, Activity, Cpu, Camera, MessageSquare } from 'lucide-react';

const projects = [
  {
    title: 'Llama2 Medical Chatbot',
    icon: MessageSquare,
    tech: 'Python, Llama2, Langchain, Chainlit, Sentence Transformers',
    date: 'October 2023 - Present',
    description: [
      'Developed a medical chatbot using Llama2, Langchain, and Sentence Transformers for accurate healthcare information',
      'Implemented context-aware responses with RAG (Retrieval Augmented Generation) using Chainlit for interactive UI',
      'Optimized for CPU-based systems with 16GB+ RAM, ensuring accessible deployment'
    ],
    url: 'https://github.com/SindhuraSriram/Llama2-medical-chatbot'
  },
  {
    title: 'Arctic RTS: Ice Depletion Pattern Recognition',
    icon: Cloud,
    tech: 'Python, GIS, Mask R-CNN, Satellite Imagery, QGIS',
    date: 'July 2023 - December 2023',
    description: [
      'Developed a Python-based Mask R-CNN model to study Arctic ice depletion patterns',
      'Processed and analyzed large environmental datasets for climate research',
      'Provided a scalable tool for monitoring ice melt and climate change impacts'
    ],
    url: 'https://github.com/SindhuraSriram/Volumetric-Quantification-of-Active-Retrogressive-Thaw-Slumps-in-the-Arctic'
  },
  {
    title: 'Contextual AI – Personal Assistant',
    icon: Bot,
    tech: 'GPT, Streamlit, spaCy',
    date: 'October 2023 - December 2023',
    description: [
      'Integrated Assembly AI and OpenAI\'s GPT for real-time speech-to-text conversion',
      'Ensured robust security with Streamlit Authenticator and spaCy\'s NER',
      'Achieved 92% transcription accuracy and 72% data redaction success'
    ],
    url: 'https://github.com/SindhuraSriram/ContextualAI---A-Personal-Assistant-with-Voice-Recognition-and-Contextual-Understanding'
  },
  {
    title: 'Online Payments Fraud Detection',
    icon: Shield,
    tech: 'Python, Scikit-Learn, XGBoost, AWS',
    date: 'August 2019 - December 2019',
    description: [
      'Developed real-time fraud detection system with 95% precision',
      'Implemented advanced feature engineering using AWS Glue',
      'Integrated AWS Kinesis and CloudWatch for real-time processing'
    ],
    url: 'https://github.com/SindhuraSriram/Credit-fraud-with-imbalanced-datasets'
  },
  {
    title: 'Dental X-Ray Segmentation',
    icon: Brain,
    tech: 'TensorFlow, Keras, OpenCV, U-Net, VGG16',
    description: [
      'Developed U-Net model with VGG16 backbone for dental X-ray segmentation',
      'Built custom data loaders for COCO-format annotations',
      'Achieved high segmentation performance with F1-Score and ROC AUC metrics'
    ],
    url: 'https://github.com/SindhuraSriram/Dental-X-Ray-Segmentation'
  },
  {
    title: 'Chronic Kidney Disease Prediction',
    icon: Activity,
    tech: 'Python, SVM, Neural Networks',
    description: [
      'Employed SVM and Neural Networks achieving 95% accuracy in disease detection',
      'Utilized clinical data for early diagnosis and treatment planning',
      'Enhanced medical diagnostics through AI implementation'
    ],
    url: 'https://github.com/SindhuraSriram/PREDICTION-OF-CHRONIC-KIDNEY-DISEASE-USING-SUPPORT-VECTOR-MACHINE-AND-NEURAL-NETWORK'
  },
  {
    title: 'Optimized Mobile Offloading',
    icon: Cpu,
    tech: 'Machine Learning, Mobile Edge Computing',
    description: [
      'Devised ML strategies to enhance computation offloading efficiency',
      'Optimized network traffic management and energy consumption',
      'Published in ICASISIET 2019'
    ],
    url: 'https://github.com/SindhuraSriram/Optimized-Mobile-Offloading-through-Machine-Learning'
  },
  {
    title: 'COVID-19 Face Mask Detection',
    icon: Camera,
    tech: 'Python, CNN, Computer Vision',
    description: [
      'Implemented CNN-based system for real-time mask detection with 98% accuracy',
      'Enhanced public health safety during COVID-19',
      'Contributed to community safety through technology'
    ]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 card-shadow hover-scale"
              >
                <div className="w-12 h-12 rounded-full bg-[#FF385C]/10 flex items-center justify-center mb-6">
                  <Icon size={24} className="text-[#FF385C]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#FF385C] transition-colors"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    {project.tech}
                  </span>
                </div>
                <ul className="space-y-3 text-gray-700">
                  {project.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-[#FF385C]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
