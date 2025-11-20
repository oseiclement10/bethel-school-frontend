import React, { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import fulera from "@/assets/images/graduates/Fulera.jpg"
import clementBoateng from "@/assets/images/graduates/clementboateng.jpg"
import estherManu from "@/assets/images/graduates/esthermanu.jpg"
import lindaNyarko from "@/assets/images/graduates/lindanyarko.jpg"
import miriamAcheampongKyerewaa from "@/assets/images/graduates/miriamacheampongkyerewaa.jpg"
import roseNaayiri from "@/assets/images/graduates/rosenaayiri.jpg"
import portiaOwusuwaa from "@/assets/images/studentworks/bridal-supreme.jpg"

const TestimonialsSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const testimonials = [
        {
            name: "Linda Nyarko",
            role: "Bridal Wear Specialist, Nyarko Atelier",
            image: lindaNyarko,
            quote:
                "Bethel taught me the discipline and precision every designer needs. Every stitch, every cut matters—and that attention to detail defines the quality of every bridal gown I create today.",
            year: "Class of 2024",
            achievement: "Founder of Nyarko Atelier"
        },
        {
            name: "Clement Boateng",
            role: "Creative Director, CLEMÉT Couture",
            image: clementBoateng,
            quote:
                "Bethel School of Fashion gave me more than technical skills—it gave me confidence to express bold ideas through fabric and form. The mentorship and exposure prepared me to start my own fashion label right after graduation.",
            year: "Class of 2025",
            achievement: "Launched CLEMÉT Couture Ghana"
        },
        {
            name: "Fulera Abdul-Rahman",
            role: "Head Designer, Fula Fashion Studio",
            image: fulera,
            quote:
                "From sketching to the runway, Bethel School of Fashion shaped my journey every step of the way. The hands-on training and support built the foundation for my career in bespoke African bridal fashion.",
            year: "Class of 2025",
            achievement: "Accra Fashion Week Emerging Designer Award"
        },
        {
            name: "Esther Manu",
            role: "Textile and Pattern Designer",
            image: estherManu,
            quote:
                "What stood out for me was how Bethel balanced creativity with professionalism. I learned not just to design, but to tell stories through patterns and textiles that celebrate our culture.",
            year: "Class of 2025",
            achievement: "Featured at Ghana Design Innovation Expo"
        },

        {
            name: "Miriam Acheampong Kyerewaa",
            role: "Fashion Illustrator & Concept Artist",
            image: miriamAcheampongKyerewaa,
            quote:
                "My time at Bethel School of Fashion transformed my creative process. I discovered how illustration can drive design concepts and bring ideas to life in unique and expressive ways.",
            year: "Class of 2024",
            achievement: "Published in African Fashion Visuals Journal"
        },
        {
            name: "Rose Naayiri",
            role: "Sustainable Fashion Advocate",
            image: roseNaayiri,
            quote:
                "At Bethel, sustainability became more than a topic—it became my purpose. The mentorship I received inspired me to lead projects that merge ethical fashion with modern design.",
            year: "Class of 2025",
            achievement: "UN Youth Sustainable Fashion Honoree"
        },
        {
            name: "Portia Owusuwaa",
            role: "Founder, Bridal Supreme",
            image: portiaOwusuwaa,
            quote:
                "Bethel School of Fashion shaped my entrepreneurial mindset. I graduated not just as a designer, but as a confident businesswoman ready to lead my own bridal brand.",
            year: "Class of 2025",
            achievement: "Bridal Supreme - Top Ghanaian Bridal Brand"
        }
    ];

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, testimonials.length]);

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };




    return (
        <section className="relative bg-white py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100/80 backdrop-blur-sm rounded-full border border-blue-200 mb-6">
                        <Star className="w-4 h-4 text-blue-600 fill-blue-600" />
                        <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
                            Success Stories
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                        Our Alumni
                        <br />
                        <span className="bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                            Bethel School Of Fashion & Design
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Hear from graduates who are now leading the fashion industry worldwide
                    </p>
                </div>

                {/* Main Testimonial Display */}
                <div className="relative mb-12">
                    <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
                        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                            {/* Image Section */}
                            <div className="lg:col-span-1">
                                <div className="relative">
                                    {/* Quote Icon Background */}
                                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-linear-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg z-10">
                                        <Quote className="w-6 h-6 text-white" />
                                    </div>

                                    {/* Profile Image */}
                                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                                        <img
                                            src={testimonials[currentIndex].image}
                                            alt={testimonials[currentIndex].name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>


                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="lg:col-span-2 space-y-6">
                                {/* Stars */}
                                <div className="flex space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <blockquote className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
                                    "{testimonials[currentIndex].quote}"
                                </blockquote>

                                {/* Author Info */}
                                <div className="pt-6 border-t border-blue-100">
                                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                                        {testimonials[currentIndex].name}
                                    </h4>
                                    <p className="text-blue-600 font-medium mb-1">
                                        {testimonials[currentIndex].year}
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 md:w-12 md:h-12 bg-white shadow-lg border border-blue-200 hover:bg-blue-50 rounded-full flex items-center justify-center transition-all duration-200 group"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 md:w-12 md:h-12 bg-white shadow-lg border border-blue-200 hover:bg-blue-50 rounded-full flex items-center justify-center transition-all duration-200 group"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                    </button>
                </div>

                {/* Thumbnail Navigation */}
                <div className="flex justify-center items-center space-x-3 md:space-x-4 mb-8">
                    {testimonials.map((testimonial, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`relative transition-all duration-300 ${index === currentIndex
                                ? 'w-14 h-14 md:w-16 md:h-16 ring-3 ring-blue-500 ring-offset-2 ring-offset-white shadow-lg'
                                : 'w-10 h-10 md:w-12 md:h-12 opacity-60 hover:opacity-100 hover:scale-110'
                                }`}
                        >
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-full h-full rounded-full object-cover border-2 border-white shadow-md"
                            />
                            {index === currentIndex && (
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center space-x-2 mb-12">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'w-8 bg-linear-to-r from-blue-600 to-blue-800'
                                : 'w-4 bg-blue-200 hover:bg-blue-300'
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>



                {/* CTA Section */}
                <div className="text-center mt-16">
                    <div className="bg-linear-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white shadow-xl">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to Start Your Fashion Journey?
                        </h3>
                        <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
                            Join our community of creative innovators and launch your career in fashion design.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-200 shadow-lg">
                                Apply Now
                            </button>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;