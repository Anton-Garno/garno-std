import React from 'react';

const Create = () => {
    // Mock data for projects
    const projects = [
        { id: 1, title: 'Robot Arena', category: 'Game Dev', image: 'https://placehold.co/600x400/1e1e1e/FFF?text=Robot+Arena' },
        { id: 2, title: 'Crimson Highway', category: 'Cinematic', image: 'https://placehold.co/600x400/1e1e1e/FFF?text=Crimson' },
        { id: 3, title: 'Mecha Recon', category: '3D Art', image: 'https://placehold.co/600x400/1e1e1e/FFF?text=Mecha' },
        { id: 4, title: 'Frogling Haven', category: 'Environment', image: 'https://placehold.co/600x400/1e1e1e/FFF?text=Frogling' },
    ];

    return (
        <div className="pt-24 px-4 max-w-7xl mx-auto mb-20">
            <h1 className="text-4xl font-bold mb-8">Create</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(project => (
                    <div key={project.id} className="group relative bg-surface rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300">
                        <div className="aspect-video bg-gray-800 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-4">
                            <span className="text-xs text-primary font-mono mb-1 block">{project.category}</span>
                            <h3 className="text-xl font-bold">{project.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Create
