import React, { useState, useEffect } from 'react';
import { CircleX, ArrowRight, ChevronDown, Play, MapPin, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

function Advisor() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState({ name: 'English', flag: 'us' });
    const [openFaq, setOpenFaq] = useState(null);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [showVideoPopup, setShowVideoPopup] = useState(false);
    const [videoId, setVideoId] = useState('');

    const languages = [
        { name: 'English', flag: 'us' },
        { name: 'Korean', flag: 'kr' },
        { name: 'Spanish', flag: 'es' },
        { name: 'Vietnamese', flag: 'vn' },
        { name: 'French', flag: 'fr' }
    ];

    const features = [
        {
            id: 1,
            title: "University Matches",
            description: "AdviseBridge streamlines your search, helping you find the right universities and programs.",
            gradient: "from-[#D65191] to-[#C7337A]",
            icon: (
                <svg width="42" height="42" viewBox="0 0 48 48" fill="#fff" className="-mt-1">
                    <path d="M46.5,21.7c0.9,0,1.5-0.7,1.5-1.5s-0.7-1.5-1.5-1.5H34.8V17c0-4.9-3.3-9.3-8.1-10.5l-1.2-0.3V1.5C25.5,0.7,24.9,0,24,0 s-1.5,0.7-1.5,1.5v4.7l-1.2,0.3c-4.8,1.2-8.1,5.6-8.1,10.5v1.5H1.5c-0.9,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h2.3v23.2H1.5 c-0.9,0-1.5,0.7-1.5,1.5S0.7,48,1.5,48h44.9c0.9,0,1.5-0.7,1.5-1.5s-0.7-1.5-1.5-1.5h-2.3V21.7H46.5z M16.3,44.9H7V21.7h9.3V44.9z M16.3,17c0-4.3,3.5-7.7,7.7-7.7s7.7,3.5,7.7,7.7v1.5H16.3V17z M28.6,44.9h-9.3V21.7h9.3V44.9z M41,44.9h-9.3V21.7H41V44.9z"/>
                </svg>
            )
        },
        {
            id: 2,
            title: "High Acceptance Success",
            description: "Our platform helps advisors manage applications and boost student acceptances.",
            gradient: "from-[#0071E3] to-[#1A69B9]",
            icon: (
                <svg width="38" height="38" viewBox="0 0 48 48" fill="#fff">
                    <g>
                        <path d="M12.6,35.8c0.5-1,1-1.8,1.6-2.5c1.5-1.5,3.5-2.3,5.7-2.3h7.5c2.2,0,4.2,0.8,5.7,2.3c0.7,0.7,1.2,1.5,1.7,2.4 c0.1,0.3,0.4,0.6,0.7,0.7c0.4,0.2,0.8,0.2,1.2,0c0.4-0.2,0.6-0.5,0.7-0.7l0,0c0.2-0.3,0.3-0.7,0.1-1l0,0c-0.5-1.3-1.3-2.4-2.3-3.3 c-1.3-1.3-2.8-2.2-4.5-2.7l-0.2-0.1l0.2-0.2c2.5-2.1,3.9-5.1,3.9-8.3c0-6-4.9-10.8-10.8-10.8c-6,0-10.8,4.9-10.8,10.8 c0,3.3,1.4,6.3,3.9,8.3l0.2,0.2l-0.2,0.1c-1.7,0.5-3.2,1.4-4.5,2.7c-0.9,0.9-1.6,1.9-2.3,3.3c-0.2,0.4-0.2,0.7,0,1l0,0 c0.1,0.4,0.4,0.6,0.7,0.7c0.4,0.2,0.7,0.2,1,0C12.3,36.4,12.5,36.2,12.6,35.8z M15.9,20.3c0-4.4,3.6-8.1,8.1-8.1s8.1,3.6,8.1,8.1 c0,4.4-3.6,8.1-8.1,8.1C19.6,28.2,15.9,24.6,15.9,20.3z"/>
                        <path d="M46.6,16c-0.1-0.4-0.4-0.6-0.7-0.8c-0.3-0.2-0.7-0.2-1,0c-0.8,0.3-1.1,1-0.8,1.7c0.8,2.2,1.2,4.6,1.2,7.1 c0,11.7-9.5,21.2-21.2,21.2S2.8,35.7,2.8,24S12.3,2.8,24,2.8c2.4,0,4.9,0.4,7.1,1.2c0.7,0.3,1.5-0.1,1.7-0.8 c0.3-0.7-0.1-1.5-0.8-1.7C29.3,0.5,26.6,0,24,0C10.8,0,0,10.8,0,24c0,13.2,10.8,24,24,24c13.2,0,24-10.8,24-24 C48,21.4,47.5,18.7,46.6,16z"/>
                        <path d="M38.1,13.6c0.3,0.3,0.6,0.4,1,0.4s0.7-0.1,1-0.4l7.5-7.5c0.5-0.5,0.5-1.4,0-1.9c-0.5-0.5-1.4-0.5-1.9,0 l-6.6,6.5l-2.8-2.8c-0.3-0.3-0.6-0.4-1-0.4s-0.7,0.1-1,0.4c-0.3,0.3-0.4,0.6-0.4,1s0.1,0.7,0.4,1l0,0L38.1,13.6z"/>
                    </g>
                </svg>
            )
        },
        {
            id: 3,
            title: "Placement Rewards",
            description: "Partner with advisors, access resources, and earn by guiding students.",
            gradient: "from-[#53AE56] to-[#518E53]",
            icon: (
                <svg width="36" height="36" viewBox="0 0 48 48" fill="#fff">
                    <g>
                        <path d="M47.8,17.5c-0.1-1-0.3-1.9-0.6-2.8c-0.4-1.6-2-3-3.8-3.3l-0.2,0c-0.7-0.1-4.9-0.5-9.2-0.7l-1.6-0.1l2.2-1.4 c1.1-1,1.7-2.4,1.7-3.9c0-2.9-2.5-5.3-5.6-5.3c-2.6,0-4.9,1.8-5.5,4.3L24,12l-1.4-7.7C22.1,1.8,19.8,0,17.1,0 c-3.1,0-5.6,2.4-5.6,5.3c0,1.5,0.6,2.9,1.8,3.9l2.2,1.4l-1.6,0.1c-4.3,0.2-8.6,0.6-9.3,0.7c-1.8,0.3-3.4,1.7-3.8,3.4 c-0.2,0.8-0.4,1.7-0.5,2.8c-0.1,1-0.2,2-0.2,2.8c0,1.7,1.2,3.1,2.9,3.5l0.4,0.1l0,0.4c-0.1,1.1-0.3,4.9-0.3,7 c0.1,3.3,0.3,6.3,0.8,9.1c0.6,3.3,3.7,6.4,7.1,6.9c1.9,0.3,8.4,0.7,12.5,0.7h1c4.2,0,10.6-0.4,12.5-0.7c3.3-0.5,6.4-3.5,7.1-6.9 c0.5-2.8,0.8-5.8,0.8-9.1c0-2-0.2-5.8-0.3-7l0-0.4l0.4-0.1c1.8-0.4,2.9-1.8,2.9-3.5C48,19.5,47.9,18.6,47.8,17.5z M26.8,11.1 L28,4.8c0.3-1.3,1.5-2.2,2.9-2.2c1.6,0,2.9,1.2,2.9,2.7c0,0.6-0.2,1.3-0.7,1.7l-5.8,3.7l-0.6,0.6L26.8,11.1z M14.9,7.1 c-0.4-0.5-0.7-1.1-0.7-1.7c0-1.5,1.3-2.7,2.9-2.7c1.4,0,2.6,0.9,2.9,2.2l1.2,6.3L14.9,7.1z M42.3,31.2c-0.1,3.2-0.3,6.1-0.8,8.7 c-0.2,1.1-0.8,2.2-1.8,3.1c-0.9,0.9-2,1.5-3.1,1.7c-1.8,0.3-8.2,0.7-12.1,0.7h-1c-4,0-10.3-0.4-12.1-0.7c-1.1-0.2-2.2-0.8-3.2-1.7 c-0.9-0.9-1.6-2-1.8-3.1c-0.5-2.7-0.7-5.5-0.8-8.7c0-1.3,0.1-3.8,0.3-6.8l0.1-1l0.5,0c3.7-0.1,7.5-0.1,11.2-0.2l0.5,0v14.7 c0,1,0.6,1.9,1.5,2.3c0.8,0.4,1.7,0.3,2.3-0.2c0.5-0.4,1.1-0.9,1.8-1.5l0.3-0.3l0.3,0.3c0.7,0.6,1.2,1.1,1.8,1.5 c0.6,0.5,1.5,0.6,2.3,0.2c0.9-0.4,1.5-1.3,1.5-2.3V23.3l0.5,0c3.7,0,7.5,0.1,11.2,0.2l0.5,0l0.1,1c0.1,2.5,0.2,4.6,0.3,6l0,0.2 L42.3,31.2z M20.8,37.6V23.2h6.5v14.4l-0.9-0.8c-0.3-0.2-0.5-0.5-0.8-0.8c-0.4-0.4-1-0.6-1.6-0.6c-0.6,0-1.1,0.2-1.6,0.6 c-0.3,0.3-0.6,0.5-0.8,0.8L20.8,37.6z M44.8,20.9c-0.1,0-9.3-0.3-20.7-0.3c-10.4,0-19.2,0.2-20.9,0.3l-0.3,0l-0.1-0.3 c0-0.1-0.1-0.2-0.1-0.3c0-0.7,0.1-1.5,0.2-2.4C3,17,3.1,16.1,3.3,15.4S4.2,14.1,5,14c0.7-0.1,4.8-0.5,9-0.7l7-0.3c0,0,1.4,0,2.8,0 h0.2c0.7,0,1.4,0,1.9,0c0.5,0,0.9,0,0.9,0l7.1,0.3c4.2,0.2,8.3,0.6,9,0.7c0.8,0.1,1.6,0.8,1.8,1.4c0.2,0.7,0.4,1.5,0.5,2.4 c0.1,0.9,0.2,1.8,0.2,2.4l0.3,0.7L44.8,20.9z"/>
                    </g>
                </svg>
            )
        }
    ];

    const colleges = [
        {
            id: 1,
            name: "The University of Wisconsin, La-Crosse",
            location: "Superior, Wisconsin, United States",
            type: "Public",
            typeClass: "bg-sky-100 text-sky-700",
            students: "1900+",
            programs: "89",
            featured: "Biology",
            moreCourses: "88",
            banner: "img/colleges/collges-banner-1.webp",
            logo: "img/colleges/colleges-1.webp"
        },
        {
            id: 2,
            name: "New Jersey Institute of Technology",
            location: "New Jersey, United States",
            type: "Private",
            typeClass: "bg-amber-50 text-amber-700",
            students: "1900+",
            programs: "89",
            featured: "Computer Science",
            moreCourses: "88",
            banner: "img/colleges/collges-banner-2.webp",
            logo: "img/colleges/colleges-2.webp"
        },
        {
            id: 3,
            name: "Monroe University",
            location: "New York, United States",
            type: "Public",
            typeClass: "bg-sky-100 text-sky-700",
            students: "1900+",
            programs: "17",
            featured: "Community Health",
            moreCourses: "16",
            banner: "img/colleges/collges-banner-3.webp",
            logo: "img/colleges/colleges-3.webp"
        },
        {
            id: 4,
            name: "The University of Wisconsin, La-Crosse",
            location: "Superior, Wisconsin, United States",
            type: "Private",
            typeClass: "bg-amber-50 text-amber-700",
            students: "1900+",
            programs: "89",
            featured: "Biology",
            moreCourses: "88",
            banner: "img/colleges/collges-banner-1.webp",
            logo: "img/colleges/colleges-1.webp"
        }
    ];

    const steps = [
        {
            number: "01",
            title: "Find schools that meet your student's interests",
            description: "Filter by program, major, or even niche interests. Match students with their dream schools and boost their application success",
            bgColor: "bg-[#e6f0fc]",
            rotation: "rotate-5"
        },
        {
            number: "02",
            title: "Apply to multiple programs that match their qualifications",
            description: "Explore a variety of programs that match your student's qualifications. Track deadlines, upload documents, and stay organized – all in one place",
            bgColor: "bg-[#fff4e6]",
            rotation: "rotate-135 ml-2"
        },
        {
            number: "03",
            title: "Earn competitive commissions by guiding students",
            description: "We recognize your dedication and expertise. That's why we offer up to 80% commission for successful student placements",
            bgColor: "bg-[#e6f7ea]",
            rotation: "rotate-90"
        }
    ];

    const testimonials = [
        {
            id: 1,
            name: "Sumit Singh",
            company: "First Step, Nepal",
            image: "img/partner-1.webp",
            content: "I am working with AdviseBridge since they started their company. It's a great and easy platform, even their payment policy is very transparent with counselors. Highly recommended the company and am proud to be a member of AdviseBridge."
        },
        {
            id: 2,
            name: "Trung Nguyen",
            company: "CaliVisa, Vietnam",
            image: "img/partner-2.webp",
            content: "I've had the opportunity to work with advisebridge.com, I can state this is one of the strongest platforms for connecting international students to colleges and universities abroad. I look forward to using this platform in connecting students from Vietnam to AdviseBridge partner schools."
        }
    ];

    const faqs = [
        {
            question: "What is AdviseBridge?",
            answer: "AdviseBridge is an online platform that connects international students with study abroad programs, primarily at US universities. It uses AI and machine learning for program search and matching, streamlines applications, document management, and visa guidance. It's designed for students, advisors (recruitment counselors), and partner institutions."
        },
        {
            question: "Who is AdviseBridge for, especially on the advisor side?",
            answer: "The platform targets international students seeking education abroad, recruitment advisors/counselors who guide them, and universities. Advisors are independent contractors (e.g., education agents in countries like Nepal, Vietnam) who help match students to programs and earn commissions on successful placements."
        },
        {
            question: "Is there a dedicated advisor dashboard or section?",
            answer: "Yes, advisors get access to tools for filtering programs, managing student applications, tracking deadlines, uploading documents, and exploring partner US institutions (e.g., Wichita State University, Northeastern Illinois University, Troy University)."
        },
        {
            question: "How do advisors earn money on AdviseBridge?",
            answer: "Advisors earn competitive commissions (up to 80% per successful student placement) paid by partner institutions. Payments are transparent, with no hidden fees."
        }
    ];

    const footerLinks = {
        company: [
            { name: "About", href: "/about" },
            { name: "Career", href: "/career" },
            { name: "Contact Us", href: "/contact" },
            { name: "Achievement", href: "/achievement" }
        ],
        services: [
            { name: "Students", href: "/students" },
            { name: "Advisors", href: "/advisors" },
            { name: "Institutions", href: "/institutions" },
            { name: "Explore", href: "/explore" }
        ],
        legal: [
            { name: "Terms & conditions", href: "/terms_conditions" },
            { name: "Disclaimer", href: "/disclaimer" },
            { name: "Privacy policy", href: "/privacy_policy" },
            { name: "Refund policy", href: "/refund_policy" },
            { name: "Cost policy", href: "/cost_policy" }
        ],
        resources: [
            { name: "Blogs", href: "/blogs" },
            { name: "FAQs", href: "/faqs" },
            { name: "Eligibility Criteria", href: "/eligibility_criteria" }
        ]
    };

    const socialLinks = [
        { icon: Facebook, href: "https://www.facebook.com/AdviseBridge/", label: "Facebook" },
        { icon: Twitter, href: "https://x.com/AdviseBridge", label: "Twitter" },
        { icon: Linkedin, href: "https://www.linkedin.com/company/advisebridge/", label: "LinkedIn" },
        { icon: Instagram, href: "https://www.instagram.com/advisebridges/", label: "Instagram" },
        { icon: Youtube, href: "https://www.youtube.com/@AdviseBridge", label: "YouTube" }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.pageYOffset > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mobileNavOpen || showVideoPopup) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileNavOpen, showVideoPopup]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const openVideo = (id) => {
        setVideoId(id);
        setShowVideoPopup(true);
    };

    const closeVideo = () => {
        setShowVideoPopup(false);
        setVideoId('');
    };

    const BlobSVG = ({ rotation = "rotate-5", className = "" }) => (
        <svg viewBox="0 0 100 92.5" xmlns="http://www.w3.org/2000/svg" className={`w-[100px] aspect-[0.925] opacity-50 ${rotation} ${className} animate-[float_4s_ease-in-out_infinite]`}>
            <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#ffffff00" />
                </linearGradient>
            </defs>
            <path
                fill="url(#grad)"
                d="M 91.52 26.2
                C 101.76 42.67, 103.09 63.87, 93.52 78.28
                C 83.95 92.76, 63.47 100.58, 44.11 99.97
                C 24.74 99.42, 6.42 90.43, 1.45 78.42
                C -3.45 66.41, 4.93 51.38, 14.06 35.46
                C 23.18 19.54, 33.13 2.8, 47.59 0.33
                C 62.14 -2.14, 81.28 9.66, 91.52 26.2 Z"
            />
        </svg>
    );

    const QuoteIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 475.082 475.081" width="25px" height="25px">
            <g>
                <g>
                <path d="M 164.45 219.27 h -63.954 c -7.614 0 -14.087 -2.664 -19.417 -7.994 c -5.327 -5.33 -7.994 -11.801 -7.994 -19.417 v -9.132 c 0 -20.177 7.139 -37.401 21.416 -51.678 c 14.276 -14.272 31.503 -21.411 51.678 -21.411 h 18.271 c 4.948 0 9.229 -1.809 12.847 -5.424 c 3.616 -3.617 5.424 -7.898 5.424 -12.847 V 54.819 c 0 -4.948 -1.809 -9.233 -5.424 -12.85 c -3.617 -3.612 -7.898 -5.424 -12.847 -5.424 h -18.271 c -19.797 0 -38.684 3.858 -56.673 11.563 c -17.987 7.71 -33.545 18.132 -46.68 31.267 c -13.134 13.129 -23.553 28.688 -31.262 46.677 C 3.855 144.039 0 162.931 0 182.726 v 200.991 c 0 15.235 5.327 28.171 15.986 38.834 c 10.66 10.657 23.606 15.985 38.832 15.985 h 109.639 c 15.225 0 28.167 -5.328 38.828 -15.985 c 10.657 -10.663 15.987 -23.599 15.987 -38.834 V 274.088 c 0 -15.232 -5.33 -28.168 -15.994 -38.832 C 192.622 224.6 179.675 219.27 164.45 219.27 Z" />
                <path d="M 459.103 235.256 c -10.656 -10.656 -23.599 -15.986 -38.828 -15.986 h -63.953 c -7.61 0 -14.089 -2.664 -19.41 -7.994 c -5.332 -5.33 -7.994 -11.801 -7.994 -19.417 v -9.132 c 0 -20.177 7.139 -37.401 21.409 -51.678 c 14.271 -14.272 31.497 -21.411 51.682 -21.411 h 18.267 c 4.949 0 9.233 -1.809 12.848 -5.424 c 3.613 -3.617 5.428 -7.898 5.428 -12.847 V 54.819 c 0 -4.948 -1.814 -9.233 -5.428 -12.85 c -3.614 -3.612 -7.898 -5.424 -12.848 -5.424 h -18.267 c -19.808 0 -38.691 3.858 -56.685 11.563 c -17.984 7.71 -33.537 18.132 -46.672 31.267 c -13.135 13.129 -23.559 28.688 -31.265 46.677 c -7.707 17.987 -11.567 36.879 -11.567 56.674 v 200.991 c 0 15.235 5.332 28.171 15.988 38.834 c 10.657 10.657 23.6 15.985 38.828 15.985 h 109.633 c 15.229 0 28.171 -5.328 38.827 -15.985 c 10.664 -10.663 15.985 -23.599 15.985 -38.834 V 274.088 C 475.082 258.855 469.76 245.92 459.103 235.256 Z" />
                </g>
            </g>
        </svg>
    );

    return (
        <div className="relative">
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
            `}</style>

            {/* Header */}
            <header className="fixed left-0 right-0 top-0 z-50 shadow-md">
                <div className="bg-gradient-to-br from-[#296be3] to-[#21186b]">
                    <div className="max-w-[1400px] mx-auto px-8 text-white flex flex-col md:flex-row justify-end items-center md:gap-12">
                        <div className="relative inline-block text-left">
                            <button
                                onClick={() => setLangMenuOpen(!langMenuOpen)}
                                className="flex items-center gap-2 border-l border-r border-[#4c57c8] px-5 py-2 pr-3 cursor-pointer outline-none"
                            >
                                <img
                                    src={`https://flagcdn.com/w20/${selectedLang.flag}.png`}
                                    alt={`${selectedLang.flag} Flag`}
                                    className="w-4 h-3 border border-[#4c57c8] rounded-xs"
                                />
                                <span className="text-gray-200 text-sm">{selectedLang.name}</span>
                                <ChevronDown className={`w-4 h-4 text-gray-200 transition-transform ${langMenuOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {langMenuOpen && (
                                <div className="absolute z-50 right-0 mt-0 w-40 bg-white rounded-lg text-gray-700 shadow-2xl overflow-hidden">
                                    <ul>
                                        {languages.map((lang) => (
                                            <li
                                                key={lang.flag}
                                                onClick={() => {
                                                    setSelectedLang(lang);
                                                    setLangMenuOpen(false);
                                                }}
                                                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                            >
                                                <img
                                                    src={`https://flagcdn.com/w20/${lang.flag}.png`}
                                                    alt={lang.flag}
                                                    className="w-4 h-3 rounded-xs"
                                                />
                                                {lang.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="bg-white">
                    <div className="max-w-[1400px] mx-auto px-8 py-4 lg:py-4 relative z-10">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center min-w-[220px] relative">
                                <a href="/">
                                    <div className="h-8 lg:h-12 flex items-center">
                                        <span className="font-bold text-[#296be3] text-xl lg:text-2xl">AdviseBridge</span>
                                    </div>
                                </a>
                            </div>

                            <nav className={`${mobileNavOpen ? 'flex' : 'hidden'} lg:flex min-h-screen lg:min-h-auto w-full justify-center lg:justify-end items-center fixed left-0 right-0 top-0 bottom-0 z-50 lg:relative bg-[#1a1e6b] lg:bg-transparent`}>
                                <button
                                    onClick={() => setMobileNavOpen(false)}
                                    className="flex justify-center items-center w-12 h-12 ml-auto mt-4 mr-4 lg:hidden text-white absolute -right-4 -top-4 cursor-pointer"
                                >
                                    <CircleX className="w-6 h-6 hover:text-red-500 transition-colors duration-200" />
                                </button>

                                <ul className="navigation w-full lg:w-auto max-h-[100vh] lg:max-h-auto overflow-y-auto space-y-1 lg:space-y-0 mx-8 lg:mx-0 py-8 lg:py-0 text-base flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
                                    <li className="block lg:hidden px-0 py-4 rounded">
                                        <a href="/">
                                            <div className="h-8 md:h-12 flex items-center font-bold text-white text-xl">
                                                AdviseBridge
                                            </div>
                                        </a>
                                    </li>
                                    <li><a href="/student" className="text-[#CBD5E1] lg:text-gray-700 hover:text-[#8ba5e0] lg:hover:text-[#0071e3] font-normal transition">Student</a></li>
                                    <li><a href="/advisor" className="text-[#CBD5E1] lg:text-[#0071e3] hover:text-[#8ba5e0] lg:hover:text-[#0071e3] font-semibold transition">Advisor</a></li>
                                    <li><a href="/institution" className="text-[#CBD5E1] lg:text-gray-700 hover:text-[#8ba5e0] lg:hover:text-[#0071e3] font-normal transition">Institution</a></li>
                                    <li><a href="/explore" className="text-[#CBD5E1] lg:text-gray-700 hover:text-[#8ba5e0] lg:hover:text-[#0071e3] font-normal transition">Explore</a></li>
                                    <li className="flex flex-col sm:flex-row gap-2 mt-8 lg:mt-0">
                                        <a href="/login" className="bg-transparent border border-gray-400 hover:border-[#3c65e3] px-6 py-2 text-white rounded lg:text-gray-700 hover:bg-[#2b54d2] lg:hover:text-white font-normal transition">Login</a>
                                        <a href="/register" className="bg-[#3c65e3] px-6 py-2 rounded text-white hover:bg-[#2b54d2] font-normal transition">Register</a>
                                    </li>
                                </ul>
                            </nav>

                            <button
                                onClick={() => setMobileNavOpen(true)}
                                className="lg:hidden flex flex-col justify-center gap-1.5 cursor-pointer"
                            >
                                <span className="block w-6 h-[2px] bg-gray-800"></span>
                                <span className="block w-6 h-[2px] bg-gray-800"></span>
                                <span className="block w-6 h-[2px] bg-gray-800"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="bg-gradient-to-br from-[#296be3] to-[#21186b] mt-[96px] lg:mt-[116px] py-6">
                <div className="max-w-[1400px] w-full mx-auto px-8 py-2 lg:py-4 flex flex-col lg:flex-row justify-end">
                    <div className="mb-0 py-2 lg:pl-0 text-white grid grid-cols-1 gap-2 lg:gap-3">
                        <h2 className="text-lg lg:text-xl font-light leading-[1.2] max-w-[600px] tracking-wide">
                            Welcome, <span className="text-[#e7a62a]">Advisor</span> Page
                        </h2>
                    </div>
                </div>
            </div>

            <main className="flex flex-col flex-1 w-full overflow-hidden">
                {/* Hero Section */}
                <section className="bg-white pt-12 pb-6 lg:pt-24 lg:pb-20">
                    <div className="max-w-[1400px] mx-auto px-8 flex flex-col lg:items-center lg:flex-row bg-transparent relative">
                        <div className="full lg:w-1/3 mb-8 lg:mb-0 flex lg:justify-center items-center relative z-10">
                            <img src="img/advisor.webp" alt="" className="max-w-[200px] lg:max-w-[60%]" loading="lazy" />
                        </div>

                        <div className="w-full lg:w-2/3 relative z-20">
                            <div className="mb-6 max-w-[750px]">
                                <h3 className="text-gray-900 text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.2] mb-2">
                                    Join the Advisor Network
                                </h3>
                                <hr className="w-12 border-t-2 border-[#0071e3] mb-4" />
                                <p className="text-gray-700 text-sm lg:text-base lg:max-w-[800px] mb-8">Find programs and top-ranking institutions that align with your student's background</p>
                                <div className="btn-wrap flex flex-wrap">
                                    <a href="/register" className="inline-flex items-center w-auto h-12 px-8 font-medium bg-[#3c65e3] hover:bg-[#264ec9] text-white rounded hover:text-gray-50 focus:outline-none ring-offset-0 cursor-pointer">
                                        Get Started
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="bg-white pb-8 lg:pb-24">
                    <div className="max-w-[1400px] mx-auto px-8">
                        <div className="bg-gradient-to-br from-[#296be3] to-[#21186b] px-6 py-12 pb-0 lg:pb-12 rounded-2xl lg:rounded-4xl">
                            <div className="xl:px-8 flex flex-col md:flex-row gap-0 lg:gap-16">
                                {features.map((feature) => (
                                    <div key={feature.id} className="flex-1 overflow-hidden cursor-auto mb-12 lg:mb-0">
                                        <div className={`bg-gradient-to-br ${feature.gradient} relative w-20 h-20 mb-6 rounded-full border-2 border-white/30 flex items-center justify-center mx-auto`}>
                                            {feature.icon}
                                        </div>
                                        <h6 className="text-gray-100 text-lg lg:text-xl font-bold leading-tight mb-2 lg:mb-2 text-center">{feature.title}</h6>
                                        <p className="text-gray-300 text-sm font-light text-center">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Colleges Section */}
                <section className="bg-blue-50 py-12 lg:py-24">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="px-8 mb-8">
                            <h3 className="text-gray-900 text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.2] mb-2">
                                What students are looking for
                            </h3>
                            <hr className="w-12 border-t-2 border-[#0071e3] mb-4" />
                            <p className="text-gray-700 text-sm lg:text-base mb-4 lg:mb-8 lg:max-w-[800px]">AdviseBridge helps you explore top subjects at leading universities in the USA</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6 mx-auto px-8">
                            {colleges.map((college) => (
                                <div key={college.id} className="bg-white flex flex-col rounded-lg lg:rounded-xl shadow-lg relative">
                                    <div className="w-full overflow-hidden rounded-tl-lg rounded-tr-lg mb-6 aspect-[16/9] relative">
                                        <div className={`absolute z-10 left-2 top-2 rounded px-2 py-1 flex items-center ${college.typeClass} text-[12px] font-semibold shadow`}>
                                            {college.type}
                                        </div>
                                        <div className="absolute z-10 right-2 top-2 rounded px-2 py-1 flex items-center bg-zinc-100 text-[12px] font-semibold text-zinc-700 shadow">
                                            University
                                        </div>
                                        <img src={college.banner} alt={college.name} className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:rotate-[-5deg] hover:scale-110 relative z-0" loading="lazy" />
                                        <div className="absolute left-0 right-0 top-0 bottom-0 z-1 inset-0 bg-gradient-to-b from-black/10 to-black/50"></div>
                                    </div>
                                    <div className="-mt-16 relative z-20 px-4">
                                        <div className="bg-white shadow-[inset_0_8px_16px_rgba(0,0,0,0.15)] relative w-20 h-20 mb-2 rounded-full border-4 border-white flex items-center justify-center">
                                            <img width="48" height="48" className="rounded-full" src={college.logo} alt={college.name} loading="lazy" />
                                        </div>
                                        <div className="mb-4">
                                            <h6 className="text-lg text-gray-900 font-bold mb-4 lg:mb-2 leading-6 truncate">{college.name}</h6>
                                            <div className="flex space-x-2 mb-4">
                                                <MapPin className="w-4 h-4 text-gray-500 mt-[2px] flex-shrink-0" />
                                                <p className="text-gray-600 text-sm mb-0">{college.location}</p>
                                            </div>
                                        </div>
                                        <ul className="listing listing-sm lg:mt-4 grid grid-cols-1 gap-x-8 gap-y-2 mb-4">
                                            <li className="flex justify-between">
                                                <span className="que">Int'l students:</span>
                                                <span className="ans">{college.students}</span>
                                            </li>
                                            <li className="flex justify-between">
                                                <span className="que">Total programs:</span>
                                                <span className="ans">{college.programs}</span>
                                            </li>
                                        </ul>

                                        <ul className="lg:mt-4 grid grid-cols-1 gap-x-8 gap-y-1 mb-6">
                                            <li className="text-base font-bold">{college.featured}</li>
                                            <li className="text-xs font-normal text-teal-600">+ {college.moreCourses} MORE COURSES</li>
                                        </ul>

                                        <div className="mt-4 flex flex-wrap gap-1">
                                            <span className="bg-gray-50 rounded-lg px-3 py-2 border border-gray-200 text-xs font-normal text-gray-700">Bachelor's Degree</span>
                                            <span className="bg-gray-50 rounded-lg px-3 py-2 border border-gray-200 text-xs font-normal text-gray-700">Master's Degree</span>
                                        </div>
                                        <div className="border-t border-gray-200 mt-4 py-4 flex flex-wrap gap-1">
                                            <span className="rounded-full px-2 py-1 border border-gray-200 text-xs font-normal text-gray-500">Jan/Feb</span>
                                            <span className="rounded-full px-2 py-1 border border-gray-200 text-xs font-normal text-gray-500">May/June</span>
                                            <span className="rounded-full px-2 py-1 border border-gray-200 text-xs font-normal text-gray-500">Aug/Sept</span>
                                        </div>
                                    </div>
                                    <div className="mt-auto p-4 pt-0">
                                        <a href="/institution-details" className="bg-transparent border border-gray-400 hover:border-[#3c65e3] px-6 py-2 rounded text-gray-700 hover:bg-[#2b54d2] hover:text-white font-normal transition w-full lg:w-auto flex justify-center items-center">Find Programs</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="bg-gradient-to-br from-[#296be3] to-[#21186b] py-12 lg:py-24 pb-32 lg:pb-24 relative">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="flex flex-wrap justify-between items-center mb-4 px-8 xl:mb-8">
                            <div>
                                <h3 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.2] mb-2">
                                    How AdviseBridge works for advisors
                                </h3>
                                <hr className="w-12 border-t-2 border-white mb-4" />
                            </div>
                            <button
                                onClick={() => openVideo('SQUsK1uDigU')}
                                className="openVideoBtn inline-flex items-center w-auto h-12 px-6 font-medium bg-[#3c65e3] hover:bg-[#264ec9] text-white rounded hover:text-gray-50 focus:outline-none ring-offset-0 cursor-pointer"
                            >
                                Watch Video
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                                    <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                                </svg>
                            </button>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 px-8 mx-auto w-full">
                            {steps.map((step, index) => (
                                <div key={index} className={`${step.bgColor} flex flex-col justify-center items-center text-center rounded-xl px-8 lg:px-12 py-8`}>
                                    <h2 className="text-4xl font-bold text-gray-900 tracking-wide relative z-20 mt-8">{step.number}</h2>
                                    <BlobSVG rotation={step.rotation} className="relative -mt-20" />
                                    <div className="py-2">
                                        <h6 className="text-base text-gray-900 font-bold mb-2">{step.title}</h6>
                                        <p className="text-sm text-gray-700 font-light mb-0">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="bg-blue-50 py-12 lg:py-24">
                    <div className="max-w-[1400px] mx-auto px-8 flex flex-col lg:items-center lg:flex-row gap-8 bg-transparent relative">
                        <div className="w-full lg:w-1/2 relative z-20">
                            <div className="mb-6 xl:mb-16">
                                <h3 className="text-gray-900 text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.2] mb-2">
                                    What our Advisors Say?
                                </h3>
                                <hr className="w-12 border-t-2 border-[#0071e3] mb-4" />
                                <p className="text-gray-700 text-sm lg:text-base mb-4 lg:mb-8 lg:max-w-[800px]">Partners commend AdviseBridge for its efficiency, reliability, and outstanding support</p>
                            </div>
                            <h5 className="text-base font-bold text-gray-900 mb-4">See why our partners trust us</h5>
                            <div className="btn-wrap flex flex-wrap">
                                <a href="/partners_testimonial" className="inline-flex items-center w-auto h-12 px-8 font-medium bg-[#3c65e3] hover:bg-[#264ec9] text-white rounded hover:text-gray-50 focus:outline-none ring-offset-0 cursor-pointer">
                                    View More
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </a>
                            </div>
                        </div>
                        <div className="full lg:w-1/2 relative z-10">
                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 col-span-6">
                                {testimonials.map((testimonial) => (
                                    <div key={testimonial.id} className="relative z-10 bg-white/60 backdrop-blur-lg flex flex-col lg:items-center justify-between lg:flex-row gap-4 lg:gap-10 p-5 lg:p-10 pb-6 rounded-xl shadow-lg border border-[#ededed]">
                                        <div className="order-1 lg:order-none">
                                            <QuoteIcon />
                                            <p className="text-gray-700 text-sm font-light mb-4 lg:mb-6 mt-4">
                                                {testimonial.content}
                                            </p>
                                            <p className="mb-4 lg:mb-6 mt-4">
                                                <span className="text-sm xl:text-base text-gray-900 capitalize font-bold mr-1">{testimonial.name}</span>
                                                <span className="text-xs xl:text-sm text-gray-600 font-light">- {testimonial.company}</span>
                                            </p>
                                        </div>
                                        <div className="relative shrink-0">
                                            <img src={testimonial.image} alt={testimonial.name} className="rounded-full w-24 h-24 object-cover 2xl:w-28 2xl:h-28" loading="lazy" />
                                            <div className="rounded-full w-24 h-24 2xl:w-28 2xl:h-28 bg-gradient-to-r from-black to-blue-500 absolute inset-0 opacity-20"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pursue Section */}
                <section className="bg-gradient-to-br from-[#296be3] to-[#21186b] py-12 lg:py-24 relative overflow-hidden">
                    <div className="max-w-[1400px] mx-auto px-8 flex flex-col lg:items-center lg:flex-row gap-8 bg-transparent relative z-20">
                        <div className="full lg:w-1/2 order-2 lg:order-1">
                            <div className="mb-6 xl:mb-16">
                                <h3 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.2] mb-2">
                                    Pursue Your <span className="text-[#e7a62a]">Abroad Study</span> Journey!
                                </h3>
                                <hr className="w-12 border-t-2 border-white mb-4" />
                                <p className="text-gray-300 text-sm lg:text-base mb-4 lg:mb-8 lg:max-w-[800px]">Pursue your abroad study journey today with expert guidance, personalized support, & comprehensive resources</p>
                            </div>
                            <div className="btn-wrap flex flex-wrap">
                                <a href="/register" className="inline-flex items-center w-auto h-12 px-8 font-medium bg-[#3c65e3] hover:bg-[#264ec9] text-white rounded hover:text-gray-50 focus:outline-none ring-offset-0 cursor-pointer">
                                    Get Started
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </a>
                            </div>
                        </div>
                        <div className="full lg:w-1/2 flex lg:justify-center items-center order-1 lg:order-2">
                            <img src="img/pursue.webp" alt="" className="max-w-[200px] lg:max-w-[60%]" loading="lazy" />
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="bg-white py-12 lg:py-24">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="px-8 mb-8">
                            <h3 className="text-gray-900 text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.2] mb-2">
                                Frequently Asked Questions
                            </h3>
                            <hr className="w-12 border-t-2 border-[#0071e3] mb-4" />
                            <p className="text-gray-700 text-sm lg:text-base mb-4 lg:mb-8 lg:max-w-[800px]">Check out some commonly asked questions by Advisors</p>
                        </div>
                        <div className="bg-transparent flex flex-col lg:flex-row gap-8 px-8">
                            <div className="w-full lg:w-2/3 z-20 order-2 lg:order-1">
                                <div className="w-full mb-8 space-y-4">
                                    {faqs.map((faq, index) => (
                                        <div key={index} className="border border-gray-200 rounded-xl px-4 py-4 lg:px-8 lg:py-6">
                                            <button
                                                onClick={() => toggleFaq(index)}
                                                className="w-full flex justify-between items-center text-left cursor-pointer"
                                            >
                                                <span className="text-sm lg:text-base font-bold text-gray-900 mr-2 lg:mr-8">{faq.question}</span>
                                                <svg
                                                    className={`w-5 min-w-5 h-5 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            <div className={`overflow-hidden transition-all duration-300 text-gray-600 ${openFaq === index ? 'max-h-96 pt-3' : 'max-h-0'}`}>
                                                <p className="text-sm text-gray-700">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="btn-wrap flex flex-wrap">
                                    <a href="/faq" className="inline-flex items-center w-auto h-12 px-8 font-medium bg-[#3c65e3] hover:bg-[#264ec9] text-white rounded hover:text-gray-50 focus:outline-none ring-offset-0 cursor-pointer">
                                        More FAQs
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                            <div className="full lg:w-1/3 flex lg:justify-center items-start order-1 lg:order-2 px-4">
                                <img src="img/faq-2.webp" alt="FAQ" className="max-w-[200px] lg:max-w-[100%]" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gradient-to-br from-[#296be3] to-[#21186b] pt-8 lg:py-16 lg:pb-8">
                <div className="max-w-[1400px] mb-8 lg:mb-24 px-8 py-4 lg:py-0 mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-16">
                    <div>
                        <div className="mb-0 mx-auto py-2 lg:pl-0 text-white grid grid-cols-1 gap-2 lg:gap-3">
                            <h2 className="text-2xl lg:text-2xl font-bold leading-[1.2] max-w-[600px]">
                                Subscribe to our Newsletter!
                            </h2>
                            <hr className="w-12 border-t-2 border-white mb-4" />
                        </div>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="w-full flex flex-col md:flex-row gap-2">
                                <div className="w-full lg:max-w-[500px] relative">
                                    <input type="email" placeholder="Your Email Address..." className="text-gray-800 placeholder-gray-500 w-full bg-white border border-gray-300 rounded p-3 pl-11 pr-11 outline-none" />
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer">
                                        <Mail className="stroke-gray-500 stroke-[1.5] w-6 h-6" />
                                    </div>
                                </div>
                                <div className="btn-wrap">
                                    <button className="min-w-[160px] min-h-[50px] bg-[#3c65e3] px-6 py-2 text-white rounded hover:bg-[#2b54d2] font-normal transition w-full lg:w-auto flex justify-center items-center cursor-pointer">Subscribe</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div>
                        <div className="mb-0 mx-auto py-2 lg:pl-0 text-white grid grid-cols-1 gap-2 lg:gap-3">
                            <h2 className="text-2xl lg:text-2xl font-bold leading-[1.2] max-w-[600px]">
                                Get Connected
                            </h2>
                            <hr className="w-12 border-t-2 border-white mb-4" />
                        </div>
                        <ul className="flex space-x-3 mt-0">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <li key={index}>
                                        <a href={social.href} target="_blank" rel="noopener noreferrer" className="border border-gray-400 rounded w-10 h-10 flex items-center justify-center hover:bg-white hover:text-white hover:border-white">
                                            <Icon className="w-5 h-5 text-white/80 hover:text-[#121727]" />
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                <div className="max-w-[1400px] px-8 mx-auto relative">
                    <div className="flex flex-wrap xl:justify-between gap-y-4 text-sm">
                        {Object.entries(footerLinks).map(([category, links]) => (
                            <div key={category} className="w-1/2 md:w-1/3 xl:w-1/5 mb-4">
                                <h5 className="text-base font-bold text-white mb-6 capitalize">{category}</h5>
                                <ul className="[&>li]:mb-2 mb-2">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <a href={link.href} className="text-gray-300 text-xs lg:text-sm font-light hover:text-white transition-colors">{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <div className="w-full md:w-1/3 xl:w-1/5 mb-4">
                            <div className="h-12 flex items-center mb-4">
                                <span className="font-bold text-white text-xl lg:text-2xl">AdviseBridge</span>
                            </div>
                            <p className="text-gray-300 text-sm font-light mb-3 lg:mb-6">AdviseBridge connects students & institutions globally.</p>
                            <div className="flex flex-wrap gap-4">
                                <a href="https://www.icef.com/agency-accreditation-agencies-only/" target="_blank" rel="noopener noreferrer" className="bg-white rounded w-16 h-16 flex justify-center items-center cursor-pointer">
                                    <img src="img/achievement-1.webp" alt="ICEF Accreditation" className="w-[60%]" loading="lazy" />
                                </a>
                                <a href="https://isana.org.au/" target="_blank" rel="noopener noreferrer" className="bg-white rounded w-16 h-16 flex justify-center items-center cursor-pointer">
                                    <img src="img/achievement-2.webp" alt="ISANA Membership" className="w-[70%]" loading="lazy" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 lg:mt-12 border-t border-white/10 pt-2 lg:pt-12">
                    <div className="max-w-[1400px] px-8 py-4 lg:py-0 mx-auto">
                        <p className="text-gray-300 text-sm font-light mb-2 lg:mb-4">AdviseBridge © 2025. All rights reserved.</p>
                    </div>
                </div>
            </footer>

            {/* Video Popup */}
            {showVideoPopup && (
                <div className="fixed z-50 inset-0 bg-gradient-to-br from-gray-800/90 to-gray-950 flex items-center justify-center p-4">
                    <div className="relative w-full max-w-3xl bg-black rounded-lg overflow-hidden">
                        <button
                            onClick={closeVideo}
                            className="flex justify-center items-center w-8 h-8 text-white absolute right-2 top-2 z-20 cursor-pointer"
                        >
                            <CircleX className="w-6 h-6 hover:text-red-500 transition-colors duration-200" />
                        </button>
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}`}
                            className="w-full aspect-video"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`${showScrollTop ? 'flex' : 'hidden'} bg-gradient-to-br from-[#026d44] to-[#005c36] hover:from-[#029c75] hover:to-[#004327] text-white px-3 py-3 rounded-full transition-all duration-300 drop-shadow-[0_8px_8px_rgba(0,0,0,0.5)] hover:drop-shadow-[0_8px_8px_rgba(0,0,0,0.7)] fixed bottom-4 right-4 z-10 cursor-pointer`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 12 7-7 7 7" />
                    <path d="M12 19V5" />
                </svg>
            </button>
        </div>
    );
}

export default Advisor;