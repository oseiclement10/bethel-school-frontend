import React, { useState } from 'react';
import { ArrowRight, Award } from 'lucide-react';
import captivatingLook from "@/assets/images/studentworks/captivating-look-with-orange-balls.jpg"
import ringLook from "@/assets/images/studentworks/captivating-ring-look.jpg";
import roseLook from "@/assets/images/studentworks/elegante.jpg";
import bridalLook from "@/assets/images/studentworks/bridal-look.jpg";
import bridalSupreme from "@/assets/images/studentworks/bridal-supreme.jpg";
import islamicLook from "@/assets/images/studentworks/scincilating-islamic.jpg"
import darknessThemed from "@/assets/images/studentworks/darknessthemeed.jpg"
import graphicRunway from "@/assets/images/studentworks/runway4.jpg";
import measurementTheme from "@/assets/images/studentworks/runway3.jpg";
import umbrellaTheme from "@/assets/images/studentworks/runway8.jpg";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router';
import { FadeUp, FadeUpStagger } from '@/components/animations/fades';
import ZoomIn from '@/components/animations/zoom';

const StudentWorksSection: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const studentWorks = [
        {
            img: captivatingLook,
            title: "Urban Renaissance",
            student: "Sofia Martinez",
            year: "2025",
            category: "Ready-to-Wear",
            awards: "Best of Collection 2025",
            description:
                "A modern take on streetwear that blends urban culture with timeless elegance.",
        },
        {
            img: ringLook,
            title: "Ethereal Dreams",
            student: "Aisha Johnson",
            year: "2025",
            category: "Haute Couture",
            awards: "Innovation Award",
            description:
                "Flowing silhouettes and dreamy fabrics that evoke soft movement and grace.",
        },
        {
            img: roseLook,
            title: "Minimalist Luxe",
            student: "James Chen",
            year: "2025",
            category: "Contemporary",
            awards: "Editor's Choice",
            description:
                "Clean lines and subtle textures redefine modern minimalism in fashion.",
        },
        {
            img: bridalLook,
            title: "Neo Romantic",
            student: "Emma Williams",
            year: "2025",
            category: "Evening Wear",
            awards: "People's Choice",
            description:
                "A reimagined bridal elegance inspired by the romance of classic couture.",
        },
        {
            img: bridalSupreme,
            title: "Avant-Garde Future",
            student: "Marcus Thompson",
            year: "2025",
            category: "Experimental",
            awards: "Innovation Prize",
            description:
                "Bold structures and futuristic materials push creative boundaries forward.",
        },
        {
            img: islamicLook,
            title: "Sustainable Chic",
            student: "Olivia Brown",
            year: "2025",
            category: "Eco Fashion",
            awards: "Sustainability Award",
            description:
                "Elegance meets responsibility with ethically sourced, eco-friendly designs.",
        },
        {
            img: darknessThemed,
            title: "Dark Elegance",
            student: "Liam Anderson",
            year: "2024",
            category: "Avant-Garde",
            awards: "Best Concept Design",
            description:
                "A dramatic exploration of form and emotion through bold, dark palettes.",
        },
        {
            img: graphicRunway,
            title: "Runway Geometry",
            student: "Zara Lee",
            year: "2024",
            category: "Conceptual",
            awards: "Design Excellence",
            description:
                "Geometric patterns meet dynamic movement in this graphic-inspired series.",
        },
        {
            img: measurementTheme,
            title: "Tailored Vision",
            student: "Daniel Carter",
            year: "2024",
            category: "Menswear",
            awards: "Craftsmanship Award",
            description:
                "Precision tailoring with a modern twist on traditional craftsmanship.",
        },
        {
            img: umbrellaTheme,
            title: "Rain Couture",
            student: "Sophia Green",
            year: "2024",
            category: "Functional Fashion",
            awards: "Utility Design Award",
            description:
                "Combining beauty and practicality for the modern, fashion-forward traveler.",
        },
    ];


    return (
        <section className="relative bg-blue-50/70 pt-16 pb-32">


            <div className="relative max-w-[90%] xl:max-w-7xl mx-auto px-6 md:px-8">
                {/* Header */}
                <div className="text-center mb-10">
                    <FadeUp distance={50}>
                        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 mb-6">
                            <Award className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                Student Excellence
                            </span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-bold pb-1 mb-6 bg-linear-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent">
                            Final Year
                            <br />
                            <span className="">Projects By Students</span>
                        </h2>

                        <p className="text-lg  text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Step into a gallery of fashion artistry — where each student redefines elegance,
                            creativity, and identity through their unique vision.
                        </p>
                    </FadeUp>

                </div>

                {/* Featured Portrait */}
                <PhotoProvider>
                    <div className="mb-24">
                        <ZoomIn>
                            <div className="group relative  max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
                                <PhotoView src={studentWorks[0].img}>
                                    <img
                                        src={studentWorks[0].img}
                                        alt={studentWorks[0].title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                                    />

                                </PhotoView>
                                <div className="absolute pointer-events-none inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                                {/* Overlay Info */}
                                <div className="absolute bottom-0 p-8">
                                    <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full mb-4">
                                        <span className="text-white text-sm font-medium">✨ Featured Collection</span>
                                    </div>

                                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                                        {studentWorks[0].title}
                                    </h3>

                                    <p className="text-lg text-white/90 mb-4">
                                        {studentWorks[0].category} • {studentWorks[0].awards}
                                    </p>

                                    <div className="flex items-center space-x-4 mb-6">

                                        <div>
                                            <p className="text-white font-semibold">{studentWorks[0].student}</p>
                                            <p className="text-white/80 text-sm">Class of {studentWorks[0].year}</p>
                                        </div>
                                    </div>

                                    <button className="group/btn inline-flex items-center space-x-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition shadow-lg">
                                        <span>Apply Now </span>
                                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition" />
                                    </button>
                                </div>
                            </div>
                        </ZoomIn>

                    </div>

                    {/* Portrait Grid */}
                    <FadeUpStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {studentWorks.slice(1).map((work, idx) => (
                            <div
                                key={idx}
                                onMouseEnter={() => setHoveredIndex(idx)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="group relative"
                            >

                                <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                    {/* Image */}
                                    <div className="relative aspect-3/4 overflow-hidden">
                                        <PhotoView src={work.img}>
                                            <img
                                                src={work.img}
                                                alt={work.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                                            />

                                        </PhotoView>
                                        <div
                                            className={`absolute pointer-events-none inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300 ${hoveredIndex === idx ? "opacity-100" : "opacity-0"
                                                }`}
                                        >
                                            <div className="absolute bottom-4 pointer-events-auto left-4 right-4 flex justify-between items-center">
                                                <Link to={"/apply"} className="px-4 py-2 cursor-pointer bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-100 transition">
                                                    Enroll In Class
                                                </Link>

                                            </div>
                                        </div>
                                        <div className="absolute top-4 right-4 px-3 py-1.5 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full shadow-md">
                                            🏆 {work.awards}
                                        </div>
                                    </div>

                                    {/* Text content */}
                                    <div className="p-5">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-sm font-semibold text-blue-600 uppercase">
                                                {work.category}
                                            </span>
                                            <span className="text-sm text-gray-500">{work.year}</span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                                            {work.title}
                                        </h3>

                                        <p className="text-sm text-gray-600 mb-4">{work.description}</p>

                                        <p className="text-sm font-medium text-gray-800">
                                            By {work.student}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </FadeUpStagger>
                </PhotoProvider>




            </div >
        </section >
    );
};

export default StudentWorksSection;
