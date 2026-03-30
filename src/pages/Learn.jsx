import React from 'react';
import SpaceBackground from '../components/3d/SpaceBackground';
import { FileText, Download, LayoutDashboard, Bookmark, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { learnMaterials } from '../data/learnMaterials';

const Learn = () => {
    return (
        <div className="min-h-screen text-white relative">
            <SpaceBackground />

            <div className="pt-24 px-4 pb-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-8">

                {/* Ліва колонка (Навігація) */}
                <aside className="w-full md:w-64 flex-shrink-0">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sticky top-24">
                        <h2 className="text-xl font-bold mb-6 text-white text-opacity-90">Навігація</h2>
                        <ul className="space-y-3">
                            <li>
                                <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg bg-blue-500/10 text-blue-400 font-medium transition-colors">
                                    <LayoutDashboard size={18} />
                                    <span>Усі матеріали</span>
                                </button>
                            </li>
                            <li>
                                <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors">
                                    <Bookmark size={18} />
                                    <span>Збережено</span>
                                </button>
                            </li>
                            <li>
                                <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors">
                                    <Settings size={18} />
                                    <span>Налаштування</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </aside>

                {/* Права колонка (Список файлів) */}
                <main className="flex-1">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
                        <div className="mb-8">
                            <h1 className="text-3xl font-bold mb-2">Навчальні Матеріали</h1>
                            <p className="text-gray-400">Переглядайте та завантажуйте файли для навчання.</p>
                        </div>

                        <div className="flex flex-col gap-4">
                            {learnMaterials.map(file => (
                                <Link 
                                    to={`/learn/${file.id}`}
                                    key={file.id}
                                    className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
                                >
                                    <div className="flex items-center gap-4 mb-4 sm:mb-0">
                                        <div className="w-12 h-12 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                                            <FileText size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg text-white group-hover:text-blue-400 transition-colors">{file.title}</h3>
                                            <p className="text-sm text-gray-400 mt-1">{file.description}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                                        <div className="flex sm:flex-col items-center sm:items-end gap-2 sm:gap-1 text-xs text-gray-500">
                                            <span>{file.size}</span>
                                            <span className="hidden sm:inline-block">•</span>
                                            <span>{file.date}</span>
                                        </div>
                                        <div className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors" title="Відкрити матеріал">
                                            <Download size={20} />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </main>

            </div>
        </div>
    )
}
export default Learn
