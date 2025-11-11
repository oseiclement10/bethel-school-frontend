// components/FashionHero.tsx
import React from 'react';
import { Play, Award, Users, Briefcase } from 'lucide-react';
import type { Course, Feature } from './types';

const FashionHero: React.FC = () => {
    const featuredCourses: Course[] = [
        {
            id: 1,
            title: "Fashion Design",
            duration: "2 Years",
            level: "Advanced"
        },
        {
            id: 2,
            title: "Textile Technology",
            duration: "18 Months",
            level: "Intermediate"
        },
        {
            id: 3,
            title: "Fashion Marketing",
            duration: "1 Year",
            level: "Beginner"
        }
    ];

    const features: Feature[] = [
        {
            icon: 'award',
            title: 'Industry Experts',
            description: 'Learn from renowned fashion professionals'
        },
        {
            icon: 'users',
            title: 'Global Network',
            description: 'Join our international alumni community'
        },
        {
            icon: 'briefcase',
            title: 'Career Support',
            description: '95% placement rate after graduation'
        }
    ];

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'award':
                return <Award className="w-6 h-6" />;
            case 'users':
                return <Users className="w-6 h-6" />;
            case 'briefcase':
                return <Briefcase className="w-6 h-6" />;
            default:
                return <Award className="w-6 h-6" />;
        }
    };

    return (
        <div className="min-h-screen font-poppins bg-white">
            {/* Hero Section */}
            <section className="relative h-screen bg-linear-to-br from-gray-900 to-black overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Main Content */}
                <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="text-white">
                            <h1 className="text-5xl lg:text-7xl font-light mb-6 leading-tight">
                                Shape the Future of
                                <span className="font-serif italic block text-gold-400">Fashion</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Master the art of fashion design at one of the world's leading institutions.
                                Transform your creative vision into wearable art with our industry-leading programs.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center">
                                    Apply Now
                                </button>
                                <button className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2">
                                    <Play className="w-5 h-5" />
                                    Watch Showreel
                                </button>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-8 border-t border-gray-700 pt-8">
                                <div>
                                    <div className="text-3xl font-bold text-gold-400">25+</div>
                                    <div className="text-gray-400 text-sm">Years Experience</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-gold-400">2K+</div>
                                    <div className="text-gray-400 text-sm">Students Graduated</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-gold-400">95%</div>
                                    <div className="text-gray-400 text-sm">Employment Rate</div>
                                </div>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                {/* Main hero image - Replace with your actual image */}
                                <div className="aspect-3/4 bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                    <div className="text-white text-center">
                                        <div className="text-lg mb-2">Fashion Design Studio</div>
                                        <div className="text-sm opacity-80">Image placeholder</div>
                                    </div>
                                </div>

                                {/* Floating Card */}
                                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 max-w-xs">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                                            <Award className="w-6 h-6 text-gold-600" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">Top Ranked</div>
                                            <div className="text-sm text-gray-600">World Fashion Schools</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-light mb-4">Why Choose Our Academy</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            We provide comprehensive fashion education with a focus on practical skills and industry connections.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="w-14 h-14 bg-gold-100 rounded-2xl flex items-center justify-center text-gold-600 mb-6">
                                    {getIcon(feature.icon)}
                                </div>
                                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-light mb-4">Featured Programs</h2>
                        <p className="text-gray-600 text-lg">Discover our comprehensive fashion programs</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredCourses.map((course) => (
                            <div key={course.id} className="group cursor-pointer">
                                <div className="aspect-4/3 bg-linear-to-br from-gray-200 to-gray-300 rounded-2xl mb-6 overflow-hidden">
                                    {/* Course image placeholder */}
                                    <div className="w-full h-full flex items-center justify-center text-gray-600">
                                        <div className="text-center">
                                            <div className="text-lg font-semibold mb-2">{course.title}</div>
                                            <div className="text-sm">Course Image</div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 group-hover:text-gold-600 transition-colors">
                                    {course.title}
                                </h3>
                                <div className="flex justify-between text-gray-600 text-sm">
                                    <span>{course.duration}</span>
                                    <span>{course.level}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button className="border-2 border-black text-black px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300">
                            View All Programs
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FashionHero;