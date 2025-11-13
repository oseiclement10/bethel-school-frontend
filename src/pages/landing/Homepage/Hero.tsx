import React, { useState, useEffect } from 'react';
import { ChevronRight, Play, Award, Users, Sparkles } from 'lucide-react';
import students from "@/assets/images/graduating-student-female.jpg";
import teachers from "@/assets/images/bethel-group-image.jpg";
import studentsWorking from "@/assets/images/bethelworkplace.jpg";
import graduatingStudent from "@/assets/images/graduating-student.jpg"
import Header from '../components/Header';

const FashionSchoolHero: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const heroSlides = [
        {
            img: studentsWorking,
            headline: "Learn Fashion & Design",
            subtext: "Master the art of fashion design through hands-on studio learning.",
        },
        {
            img: graduatingStudent,
            headline: "Join the Bethel Legacy",
            subtext: "Become part of a global network of innovative fashion professionals.",
        },

        {
            img: teachers,
            headline: "Learn from the Masters",
            subtext: "Study under renowned designers shaping the fashion world.",
        },
        {
            img: students,
            headline: "Build Your Fashion Future",
            subtext: "Join a vibrant community of creators redefining modern style.",
        },

    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const stats = [
        { icon: Award, value: '25+', label: 'Years Excellence' },
        { icon: Users, value: '10K+', label: 'Alumni Network' },
        { icon: Sparkles, value: '98%', label: 'Career Placement' },
    ];

    return (
        <div className="relative min-h-screen font-poppins bg-black text-white overflow-hidden">
            {/* Background Slider */}
            <div className="absolute inset-0">
                {heroSlides.map((slide, idx) => (
                    <div
                        key={idx}
                        className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === idx ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={slide.img}
                            alt={`Fashion ${idx + 1}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent" />
                    </div>
                ))}
            </div>

            {/* Navigation */}
            <Header />

            {/* Hero Content */}
            <div className="relative z-10 max-w-7xl lg:max-w-[90%]  mx-auto px-8 pt-14 pb-32">
                <div className="max-w-3xl">
                    <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                        <span className="text-sm font-medium">🎓 Enrollment Open for 2025</span>
                    </div>

                    <h1
                        key={currentSlide}
                        className="text-6xl md:text-7xl 3xl:text-8xl font-bold leading-tight mb-6 transition-all duration-700"
                    >
                        {heroSlides[currentSlide].headline}
                    </h1>


                    <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl transition-opacity duration-700 ease-in-out">
                        {heroSlides[currentSlide].subtext}
                    </p>

                    <div className="flex flex-wrap gap-3 sm:gap-4 mb-12 sm:mb-16">
                        <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-500 hover:to-blue-600 transition-all duration-200 flex items-center space-x-2 shadow-lg">
                            <span>Explore Programs</span>
                            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => setIsVideoPlaying(true)}
                            className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 border border-white/20 transition-all duration-200 flex items-center space-x-2"
                        >
                            <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span>Watch Story</span>
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="group">
                                <div className="flex items-center space-x-3 mb-2">
                                    <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-white/20 transition">
                                        <stat.icon className="w-5 h-5" />
                                    </div>
                                    <span className="text-3xl font-bold">{stat.value}</span>
                                </div>
                                <p className="text-sm text-gray-200">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                {heroSlides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-2 h-2 rounded-full transition ${currentSlide === idx ? 'bg-white w-8' : 'bg-white/40'
                            }`}
                    />
                ))}
            </div>

            {/* Video Modal */}
            {isVideoPlaying && (
                <div
                    onClick={() => setIsVideoPlaying(false)}
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-8"
                >
                    <div className="relative w-full max-w-5xl aspect-video bg-gray-900 rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <Play className="w-16 h-16 mx-auto mb-4 text-white/60" />
                                <p className="text-white/60">Video player would load here</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FashionSchoolHero;
