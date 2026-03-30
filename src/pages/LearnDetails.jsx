import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Download, FileText } from 'lucide-react';
import SpaceBackground from '../components/3d/SpaceBackground';
import { learnMaterials } from '../data/learnMaterials';

const LearnDetails = () => {
    const { id } = useParams();
    const material = learnMaterials.find(m => m.id === parseInt(id));

    if (!material) {
        return (
            <div className="min-h-screen text-white relative flex flex-col items-center justify-center">
                <SpaceBackground />
                <h1 className="text-4xl font-bold mb-4">Матеріал не знайдено</h1>
                <Link to="/learn" className="text-blue-400 hover:text-blue-300">Повернутися назад</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen text-white relative">
            <SpaceBackground />
            
            <div className="pt-24 px-4 pb-12 max-w-4xl mx-auto">
                <Link to="/learn" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Назад до матеріалів</span>
                </Link>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                    {/* Hero Image */}
                    {material.imageUrl && (
                        <div className="w-full h-64 md:h-80 relative overflow-hidden">
                            <img 
                                src={material.imageUrl} 
                                alt={material.title} 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/90 to-[#0B0F19]/20 backdrop-blur-[2px]"></div>
                        </div>
                    )}

                    <div className="p-6 md:p-10 -mt-20 relative z-10">
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4 bg-[#0B0F19]/80 w-fit px-4 py-2 rounded-full border border-white/10 backdrop-blur-md shadow-lg">
                            <span className="flex items-center gap-1.5"><Clock size={16}/> {material.date}</span>
                            <span className="hidden sm:inline-block">•</span>
                            <span className="flex items-center gap-1.5"><FileText size={16}/> {material.size}</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            {material.title}
                        </h1>
                        
                        <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl">
                            {material.description}
                        </p>

                        <div className="prose prose-invert prose-lg max-w-none text-gray-300 mb-8 font-light">
                            {material.content.split('\n').map((paragraph, idx) => (
                                <p key={idx} className={paragraph.trim() === '' ? 'mb-4' : 'mb-6'}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
                            <p className="text-gray-400">Вам сподобався цей матеріал? Збережіть його для роботи.</p>
                            <button className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
                                <Download size={20} />
                                <span>Завантажити вихідні файли</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnDetails;
