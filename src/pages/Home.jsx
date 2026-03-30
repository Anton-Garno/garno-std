import { Canvas } from '@react-three/fiber';
import { Environment, Stars } from '@react-three/drei';
import HeroCube from '../components/3d/HeroCube';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                    <Environment preset="city" />
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ef4444" />
                    <HeroCube />
                </Canvas>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pointer-events-none">
                <div className="pointer-events-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500"
                    >
                        Garno
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-xl md:text-2xl text-gray-300 mb-8"
                    >
                        3D, Games & Learning
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-gray-400 mb-10 max-w-lg mx-auto"
                    >
                        Personal projects, experiments and tutorials
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <button
                            onClick={() => navigate('/create')}
                            className="px-8 py-3 rounded-full border border-primary text-white hover:bg-primary/20 transition-all duration-300 font-medium transform hover:scale-105 backdrop-blur-sm"
                        >
                            View Work
                        </button>
                        <button
                            onClick={() => navigate('/learn')}
                            className="px-8 py-3 rounded-full border border-secondary text-white hover:bg-secondary/20 transition-all duration-300 font-medium transform hover:scale-105 backdrop-blur-sm"
                        >
                            Get Tutorials
                        </button>
                    </motion.div>
                </div>
            </div>
            {/* Footer / Gradient fade */}
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </div>
    );
};
export default Home;
