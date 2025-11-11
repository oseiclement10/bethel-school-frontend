import designImg from "@/assets/images/courses/fashiondesign.jpg";
import decoImg from "@/assets/images/courses/decor.jpg";
import makeupImg from "@/assets/images/courses/makeup.png";
import millineryImg from "@/assets/images/courses/millinery.png";
import modellingImg from "@/assets/images/courses/modelling.png";
import sketchImg from "@/assets/images/courses/fashionsketch.png";

export type CourseProps = {
    imgSrc: string;
    title: string;
    shortDescription: string;
    longDescription?: string;
    containerStyling?: string;
    imgStyling?: string;
    slug: CourseSlugs;
};

type CourseSlugs = "fashion-and-design" | "event-decor" | "millinery-and-accessories" | "modelling-and-fashion-sketching" | "makeup-and-hair-styling" | "makeup";

export const coursesData: CourseProps[] =
    [
        {
            "title": "Fashion and Design",
            "shortDescription": "Learn the art of creating stylish, innovative fashion pieces.",
            "longDescription": "This course takes you through the fundamentals of fashion design, from conceptualization to final execution. You will explore color theory, fabric selection, and pattern making, all while gaining practical skills in sewing and garment construction. Perfect for aspiring designers looking to create their own clothing line or improve their design skills. By the end of the course, you will be equipped to design and produce original pieces tailored to individual styles.",
            imgSrc: designImg,

            slug: "fashion-and-design"
        },
        {
            "title": "Event Decoration and Planning",
            "shortDescription": "Master the essentials of event decor and coordination.",
            "longDescription": "This comprehensive course covers everything from venue styling and theme creation to the logistics of event planning. Learn how to manage budgets, work with vendors, and execute flawless events for weddings, corporate functions, and special occasions. You will also gain practical skills in creating elegant decorations, floral arrangements, and more. Perfect for individuals aiming to launch a career in event planning or boost their expertise in managing large-scale events.",
            imgSrc: decoImg,

            slug: "event-decor"
        },
        {
            "title": "Millinery and Accessories",
            "shortDescription": "Learn how to craft stunning headpieces and stylish accessories.",
            "longDescription": "Dive into the world of millinery, learning the techniques to design and create hats, fascinators, and other accessories. This hands-on course covers the use of materials such as felt, straw, and fabric, alongside embellishment techniques. Whether you are interested in fashion, bridal wear, or theatrical costumes, this course will provide you with the skills to produce exquisite headwear and accessories. A great fit for those wanting to specialize in unique fashion creations.",
            imgSrc: millineryImg,
            containerStyling: "",
            imgStyling: "h-190px object-contain",

            slug: "millinery-and-accessories"
        },
        {
            "title": "Fashion Illustration",
            "shortDescription": "Learn to bring your fashion ideas to life through sketching.",
            "longDescription": "This course is designed for those who want to visualize their fashion ideas through professional illustration techniques. You will learn how to sketch figures, clothing, and accessories in various poses and styles. By understanding proportion, anatomy, and fabric movement, you will be able to accurately convey your designs on paper. The course is ideal for aspiring designers and artists looking to improve their drawing skills and develop a portfolio for fashion school or careers.",
            imgSrc: sketchImg,
            containerStyling: "bg-blue-100",
            imgStyling: "object-contain",

            slug: "makeup-and-hair-styling"
        },
        {
            "title": "Modeling",
            "shortDescription": "Gain the confidence and skills to succeed as a professional model.",
            "longDescription": "In this course, you will learn the basics of runway walking, posing for photo shoots, and maintaining a professional image. Discover how to work with photographers, designers, and stylists to build your portfolio and excel in the fashion industry. You will also explore personal branding, body care, and how to network within the modeling world. Ideal for aspiring models seeking to enter the fashion, commercial, or promotional modeling sectors.",
            imgSrc: modellingImg,
            containerStyling: "bg-amber-200",
            imgStyling: "object-contain",

            slug: "modelling-and-fashion-sketching"
        },
        {
            "title": "Makeup",
            "shortDescription": "Discover the artistry of makeup application for all occasions.",
            "longDescription": "This makeup course teaches you the techniques needed to create flawless looks for weddings, photoshoots, and everyday wear. You will learn about skin preparation, color matching, and the use of various makeup tools and products. The course also covers advanced techniques like contouring, highlighting, and dramatic eye looks. Ideal for aspiring makeup artists, beauty enthusiasts, or anyone looking to refine their personal makeup skills.",
            imgSrc: makeupImg,
            imgStyling: "object-contain",
            containerStyling: "bg-slate-200",

            slug: "makeup-and-hair-styling"
        }
    ]

