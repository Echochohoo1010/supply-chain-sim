import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';

const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="overflow-x-hidden bg-black text-white">
            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative h-screen flex items-end justify-start text-left overflow-hidden">
                    {/* Video background */}
                    <div className="absolute inset-0 z-0">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src="/assets/videos/container-terminal-night.mp4" type="video/mp4" />
                        </video>
                        {/* Dark overlay for better text readability */}
                        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                    </div>
                    <div className="relative z-10 px-6 lg:px-12 pb-16 md:pb-24">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-serif max-w-4xl">
                            Geopolitical Intelligence for Supply Chain
                        </h1>
                    </div>
                </section>

                {/* Intelligence Section */}
                <section className="py-24 sm:py-32 bg-black">
                    <div className="container mx-auto px-6 lg:px-8">
                        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16">
                            <div>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-serif">
                                    Intelligence for a Resilient Rare Earth Supply
                                </h2>
                            </div>
                            <div className="flex items-center">
                                <p className="text-lg leading-8 text-slate-300 max-w-xl">
                                    Cascade Intelligence provides critical data and insights into the rare earth supply chain. We empower informed decisions, mitigate risks, and build resilient strategies for a sustainable future.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default LandingPage;