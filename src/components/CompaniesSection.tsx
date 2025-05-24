
import React from 'react';

const CompaniesSection = () => {
  const companies = [
    "Microsoft", "Google", "Amazon", "Meta", "Apple", "Netflix", "Tesla", "IBM"
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Our Alumni at Top Tech Companies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
          {companies.map((company, index) => (
            <div key={index} className="text-center group">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 border border-slate-700/50 hover:border-purple-500/50 group-hover:scale-105">
                <span className="text-slate-300 font-semibold group-hover:text-purple-300 transition-colors">{company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
