import React, { useState, useEffect, useRef } from 'react';
import { CircleX, ArrowRight, Play, ChevronDown, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

function Student() {
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

    const studyAreas = [
        {
            id: 1,
            title: "Business and Management",
            image: "img/trending-1.gif",
            programs: ["Culinology", "Organizational Leadership", "International Business Management"]
        },
        {
            id: 2,
            title: "Health and Life Science",
            image: "img/trending-2.gif",
            programs: ["Nursing BSN", "Communication Disorders", "Medical Laboratory Sciences"]
        },
        {
            id: 3,
            title: "Education and Human Development",
            image: "img/trending-3.gif",
            programs: ["Special Education", "Secondary Education", "Early Childhood Education"]
        },
        {
            id: 4,
            title: "Law, Policy and Public Services",
            image: "img/trending-4.gif",
            programs: ["Homeland Security & Emergency Management"]
        },
        {
            id: 5,
            title: "Arts, Humanities & Social Sciences",
            image: "img/trending-5.gif",
            programs: ["Anthropology", "Criminal Justice", "Economics"]
        },
        {
            id: 6,
            title: "STEM (Science, Technology, Engineering & Math)",
            image: "img/trending-6.gif",
            programs: ["Aerospace Engineering", "Applied Engineering", "Materials Engineering"]
        },
        {
            id: 7,
            title: "Agriculture & Environmental Studies",
            image: "img/trending-7.gif",
            programs: ["Agricultural Communications and Leadership", "Agribusiness Management", "Agronomy"]
        }
    ];

    const topCities = [
        {
            id: 1,
            title: "San Francisco",
            image: "img/top-cities-1.webp",
            description: "Known for its tech innovation and proximity to Silicon Valley"
        },
        {
            id: 2,
            title: "Boston",
            image: "img/top-cities-2.webp",
            description: "Home to prestigious institutions like Harvard & MIT"
        },
        {
            id: 3,
            title: "New York City",
            image: "img/top-cities-3.webp",
            description: "Diverse range of top universities & a vibrant cultural scene"
        },
        {
            id: 4,
            title: "Chicago",
            image: "img/top-cities-4.webp",
            description: "Renowned for its excellent business and research schools"
        }
    ];

    const steps = [
        {
            number: "01",
            title: "Search the right program",
            description: "Answer 6 simple questions to determine which programs you are guaranteed a 95% chance of acceptance",
            bgColor: "bg-[#e6f0fc]"
        },
        {
            number: "02",
            title: "Submit your application",
            description: "Complete your profile, pay the application fee, and submit your documents—all on your AdviseBridge Dashboard",
            bgColor: "bg-[#fff4e6]"
        },
        {
            number: "03",
            title: "Get accepted & apply for visa",
            description: "Get your acceptance letter within 30 to 60 days. Free guidance ensures the best chance of getting your student visa",
            bgColor: "bg-[#e6f7ea]"
        },
        {
            number: "04",
            title: "Fly to your dream University",
            description: "We provide free guidance to ensure you have the best chances of getting your student visa",
            bgColor: "bg-[#f1eefe]"
        }
    ];

    const testimonials = [
        {
            id: 1,
            name: "Riwaz Sangroula",
            university: "Auburn University Montgomery",
            image: "img/student-testimonials-1.webp",
            content: "AdviseBridge has really helped me live my dreams. From listing out colleges and universities depending on my needs to finding the best university, AdviseBridge made the whole process so much effortless and effective. Today, I am pursuing my academics and my career at a great university in United States, and I couldn't be more than happy to thank AdviseBridge.",
            rating: 5
        },
        {
            id: 2,
            name: "Nguyễn Hoàng Linh",
            university: "Wichita State University",
            image: "img/student-testimonials-2.webp",
            content: "It's very user-friendly with thousand of choices on the table. Choosing and deciding your next step for abroad can be very hard, confusing and troublesome. But with AdviseBridge, I could view and get information regarding abroad studies much broadly as they are really open about their application processes.",
            rating: 5
        }
    ];

    const faqs = [
        {
            question: "I am an individual student interested in studying abroad. How can AdviseBridge help me?",
            answer: "AdviseBridge is a one-stop solution for all your study-abroad queries. You can leverage our AI-powered search engine to find the best educational opportunities. Learn more on our website at AdviseBridge."
        },
        {
            question: "As an international student, will I be able to work while studying in USA?",
            answer: "Yes, you can work up to 20 hours per week (On-campus) while being a full time academic student in USA."
        },
        {
            question: "How do I create a student account on AdviseBridge and access the dashboard?",
            answer: "Visit our registration page to create an account. Start exploring educational opportunities in the U.S."
        },
        {
            question: "What are full-time academic student (F-1) and vocational (M-1) visas?",
            answer: "F-1 student visas are for academic or language-program studies, while M-1 visas are for vocational or non-academic programs."
        }
    ];

    const footerLinks = {
        company: [
            { name: "About", href: "about.html" },
            { name: "Career", href: "career.html" },
            { name: "Contact Us", href: "contact.html" },
            { name: "Achievement", href: "achievement.html" }
        ],
        services: [
            { name: "Students", href: "students.html" },
            { name: "Advisors", href: "advisors.html" },
            { name: "Institutions", href: "institutions.html" },
            { name: "Explore", href: "explore.html" }
        ],
        legal: [
            { name: "Terms & conditions", href: "terms_conditions.html" },
            { name: "Disclaimer", href: "disclaimer.html" },
            { name: "Privacy policy", href: "privacy_policy.html" },
            { name: "Refund policy", href: "refund_policy.html" },
            { name: "Cost policy", href: "cost_policy.html" }
        ],
        resources: [
            { name: "Blogs", href: "blogs.html" },
            { name: "FAQs", href: "faqs.html" },
            { name: "Eligibility Criteria", href: "eligibility_criteria.html" }
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

    const renderStars = (count) => {
        return Array(count).fill(0).map((_, i) => (
            <svg key={i} className="w-5 h-5" viewBox="0 0 20 20" fill="#f5b105" stroke="#f5b105" strokeWidth="1.5">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.95c.3.92-.755 1.688-1.54 1.118L10 15.347l-3.996 2.612c-.784.57-1.84-.197-1.54-1.118l1.287-3.95a1 1 0 00-.364-1.118L2.016 9.377c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.95z" />
            </svg>
        ));
    };

    const BlobSVG = ({ rotation = 0, className = "" }) => (
        <svg viewBox="0 0 100 92.5" xmlns="http://www.w3.org/2000/svg" className={`w-[100px] aspect-[0.925] opacity-50 ${className} animate-[float_4s_ease-in-out_infinite]`}>
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

                <div className="bg-[#fff]">
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
                                    <li><a href="/student" className="text-[#CBD5E1] lg:text-[#0071e3] hover:text-[#8ba5e0] lg:hover:text-[#0071e3] font-semibold transition">Student</a></li>
                                    <li><a href="/advisor" className="text-[#CBD5E1] lg:text-gray-700 hover:text-[#8ba5e0] lg:hover:text-[#0071e3] font-normal transition">Advisor</a></li>
                                    <li><a href="/institution" className="text-[#CBD5E1] lg:text-gray-700 hover:text-[#8ba5e0] lg:hover:text-[#0071e3] font-normal transition">Institution</a></li>
                                    <li><a href="/explore" className="text-[#CBD5E1] lg:text-gray-700 hover:text-[#8ba5e0] lg:hover:text-[#0071e3] font-normal transition">Explore</a></li>
                                    <li className="flex flex-col sm:flex-row gap-2 mt-8 lg:mt-0">
                                        <a href="/login" className="bg-transparent border border-gray-400 hover:border-[#3c65e3] px-6 py-2 text-white rounded lg:text-gray-700 hover:bg-[#2b54d2] lg:hover:text-[#fff] font-normal transition">Login</a>
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
                            Welcome, <span className="text-[#e7a62a]">Student</span> Page
                        </h2>
                    </div>
                </div>
            </div>

            <main className="flex flex-col flex-1 w-full overflow-hidden">
                {/* Hero Section */}
                <section className="bg-white pt-12 pb-6 lg:pt-24 lg:pb-20">
                    <div className="max-w-[1400px] mx-auto px-8 flex flex-col lg:items-center lg:flex-row bg-transparent relative">
                        <div className="full lg:w-1/3 mb-8 lg:mb-0 flex lg:justify-center items-center relative z-10">
                            <img src="img/student.webp" alt="" className="max-w-[200px] lg:max-w-[60%]" loading="lazy" />
                        </div>

                        <div className="w-full lg:w-2/3 relative z-20">
                            <div className="mb-6 max-w-[750px]">
                                <h3 className="text-gray-900 text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.2] mb-2">
                                    Connecting to Top Universities
                                </h3>
                                <hr className="w-12 border-t-2 border-[#0071e3] mb-4" />
                                <p className="text-gray-700 text-sm lg:text-base lg:max-w-[800px] mb-8">Find programs and top-ranking institutions that match your background, skills, and interests</p>
                                <div className="btn-wrap flex flex-wrap">
                                    <a href="/explore" className="inline-flex items-center w-auto h-12 px-8 font-medium bg-[#3c65e3] hover:bg-[#264ec9] text-white rounded hover:text-gray-50 focus:outline-none ring-offset-0 cursor-pointer">
                                        Get Started
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Connection Section */}
                <section className="bg-white pb-8 lg:pb-24">
                    <div className="max-w-[1400px] mx-auto px-8">
                        <div className="bg-gradient-to-br from-[#296be3] to-[#21186b] px-6 py-12 pb-0 lg:pb-12 rounded-2xl lg:rounded-4xl">
                            <div className="xl:px-8 flex flex-col md:flex-row gap-0 lg:gap-16">
                                {/* Feature 1 */}
                                <div className="flex-1 overflow-hidden cursor-auto mb-12 lg:mb-0">
                                    <div className="bg-gradient-to-br from-[#D65191] to-[#C7337A] relative w-20 h-20 mb-6 rounded-full border-2 border-white/30 flex items-center justify-center mx-auto">
                                        <svg width="42" height="42" viewBox="0 0 48 48" fill="#fff">
                                            <g>
                                                <path d="M17.8,25.8c-2,0.1-3.6,0.9-4.8,2.2c-1.2,1.3-1.9,2.9-2.4,4.5l-2.4,8.1c-0.6,2.1,0.4,4,1.9,5.3c1.5,1.3,3.5,2.1,5.6,2.1h16.8c2.1,0,4.1-0.8,5.6-2.1c1.5-1.3,2.5-3.3,1.9-5.3l-2.4-8.1C37,30.9,36.2,29.3,35,28c-1.2-1.3-2.8-2.1-4.8-2.2c-1.5-0.1-1.6,2.2-0.1,2.3c1.4,0,2.4,0.6,3.2,1.5c0.8,0.9,1.5,2.2,1.9,3.6l2.4,8.1c0.3,1.1-0.1,2.1-1.2,2.9c-1,0.9-2.7,1.5-4.1,1.5H15.6c-1.5,0-3.1-0.6-4.1-1.5c-1-0.9-1.5-1.9-1.2-2.9l2.4-8.1c0.4-1.4,1.1-2.7,1.9-3.6c0.8-0.9,1.8-1.4,3.2-1.5C19.4,28,19.3,25.8,17.8,25.8z" />
                                                <path d="M22.7,25.6l0,0.2l-1.6,14.8l3,3.8l3-3.8l-1.6-14.9H22.7z" />
                                                <path d="M24,2.3c4.8,0,8.7,3.9,8.7,8.7c0,2.4-1,5.1-2.6,7.2c-1.6,2-3.8,3.4-6.1,3.4c-2.3,0-4.4-1.3-6.1-3.4c-1.6-2-2.6-4.8-2.6-7.2C15.3,6.1,19.2,2.3,24,2.3z M24,0c-6.1,0-11,4.9-11,10.9c0,3,1.2,6.1,3.1,8.6c1.9,2.4,4.7,4.2,7.9,4.2c3.2,0,5.9-1.8,7.9-4.2S35,14,35,10.9C35,4.9,30.1,0,24,0z" />
                                            </g>
                                        </svg>
                                    </div>
                                    <h6 className="text-gray-100 text-lg lg:text-xl font-bold leading-tight mb-2 lg:mb-2 text-center">Start With You</h6>
                                    <p className="text-gray-300 text-sm font-light text-center">
                                        AdviseBridge ensures your applications are complete with all documents included
                                    </p>
                                </div>

                                {/* Feature 2 */}
                                <div className="flex-1 overflow-hidden cursor-auto mb-12 lg:mb-0">
                                    <div className="bg-gradient-to-br from-[#0071E3] to-[#1A69B9] relative w-20 h-20 mb-6 rounded-full border-2 border-white/30 flex items-center justify-center mx-auto">
                                        <svg width="38" height="38" viewBox="0 0 48 48" fill="#fff">
                                            <g>
                                                <path d="M13.1,26.6h9.5v18.5C17.1,40.4,13.7,33.7,13.1,26.6z M2.6,26.6h7.9c0.6,6.6,3.3,12.9,7.8,17.8C13,43,8.2,39.6,5.3,34.6C3.9,32.1,3,29.4,2.6,26.6z M18.4,3.6c-5.1,5.6-8,12.8-8,20.5c0,0.1,0,0.1,0,0.2h-8c0-3.7,0.9-7.5,2.9-10.8C8.2,8.4,13,5,18.4,3.6z M22.6,2.9v21.2h-9.7c0-0.1,0-0.1,0-0.2C12.9,15.9,16.5,8.2,22.6,2.9z M23.8,0.3c0,0-0.1,0-0.1,0c-8.5,0-16.3,4.5-20.5,11.8c-4.3,7.3-4.3,16.4,0,23.7c4.2,7.3,12.1,11.8,20.6,11.8c0,0,0.1,0,0.1,0c7,0,13.6-3,18.1-8.3c0.5-0.5,0.4-1.3-0.1-1.8c-0.5-0.5-1.3-0.4-1.8,0.2c-2.9,3.4-6.7,5.7-11,6.8c1.9-2,3.5-4.3,4.8-6.7c0.7-1.4-1.4-2.5-2.2-1.1c-1.7,3.2-3.9,6-6.6,8.3V26.6h2.7c0.7,0,1.2-0.6,1.2-1.2c0-0.7-0.6-1.2-1.2-1.2h-2.7V2.8c3.4,2.9,6,6.5,7.7,10.6c0.2,0.6,1,1,1.6,0.7c0.6-0.3,0.9-1,0.7-1.6c-1.4-3.4-3.3-6.4-5.8-9.1c6.6,1.7,12.1,6.5,14.6,13c0.2,0.7,1,1,1.6,0.8c0.7-0.2,1-1,0.7-1.6C42.6,6.4,33.7,0.3,23.8,0.3z" />
                                                <path d="M34.9,18c0.1,0,0.2,0,0.3,0.1l9.8,5.7l-3.8,0.8c-0.8,0.2-1.2,1.1-0.8,1.8l2.7,4.7c0.1,0.2,0.1,0.4-0.1,0.6l-1.8,1c-0.2,0.1-0.4,0.1-0.6-0.2l-2.7-4.7c-0.4-0.7-1.4-0.8-2-0.2l-2.6,2.9l-0.1-11.3c0-0.3,0.2-0.7,0.7-0.9c0,0,0,0,0,0c0,0,0,0,0,0C34.3,18.1,34.7,18,34.9,18z M35,15.6c-2,0-4.1,1.6-4.2,3.7l0.1,11.4c0,1.1,0.3,2.1,1.2,2.6c0.9,0.5,2.1,0.1,2.7-0.6l1.8-2.1l1.9,3.2c0.8,1.4,2.6,1.8,3.9,1.1l1.8-1c1.4-0.8,1.8-2.6,1.1-3.9l-1.9-3.2l2.7-0.6c0.9-0.2,1.8-1,1.8-2c0-1-0.7-1.8-1.7-2.4L36.5,16v0C36,15.8,35.6,15.6,35,15.6z" />
                                            </g>
                                        </svg>
                                    </div>
                                    <h6 className="text-gray-100 text-lg lg:text-xl font-bold leading-tight mb-2 lg:mb-2 text-center">Smart Matching</h6>
                                    <p className="text-gray-300 text-sm font-light text-center">
                                        AdviseBridge offers expert consultation for studying abroad
                                    </p>
                                </div>

                                {/* Feature 3 */}
                                <div className="flex-1 overflow-hidden cursor-auto mb-12 lg:mb-0">
                                    <div className="bg-gradient-to-br from-[#53AE56] to-[#518E53] relative w-20 h-20 mb-6 rounded-full border-2 border-white/30 flex items-center justify-center mx-auto">
                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="#fff">
                                            <g>
                                                <path d="M19.8,16.4c0-0.5-0.4-0.9-0.9-0.9h-3.1c-4.2,0-7.7,3.1-8.3,7.1L7.3,23H0.9C0.4,23,0,23.5,0,24c0,0.5,0.4,0.9,0.9,0.9h6.3l0.1,0.4c0.7,4.1,4.2,7.1,8.3,7.1h3.2c0.5,0,0.9-0.4,0.9-0.9V16.4z M18,30.7h-2.2c-3.7-0.1-6.6-3.1-6.6-6.7c-0.1-1.7,0.6-3.3,1.8-4.6c1.3-1.3,3-2.1,4.9-2.1H18V30.7z" />
                                                <path d="M29.2,32.5h3.1c4.2,0,7.7-3.1,8.3-7.1l0.1-0.4h6.4c0.5,0,0.9-0.4,0.9-0.9c0-0.5-0.4-0.9-0.9-0.9h-6.3l-0.1-0.4c-0.7-4.1-4.2-7.1-8.3-7.1h-3.2c-0.5,0-0.9,0.4-0.9,0.9v2.9h-3.8c-0.5,0-0.9,0.4-0.9,0.9c0,0.5,0.4,0.9,0.9,0.9h3.8v5.7h-3.8c-0.5,0-0.9,0.4-0.9,0.9c0,0.5,0.4,0.9,0.9,0.9h3.8v2.9C28.2,32.1,28.6,32.5,29.2,32.5z M30,17.3h2.2c3.7,0,6.6,3,6.6,6.6c0,3.7-3,6.6-6.6,6.6H30V17.3z" />
                                            </g>
                                        </svg>
                                    </div>
                                    <h6 className="text-gray-100 text-lg lg:text-xl font-bold leading-tight mb-2 lg:mb-2 text-center">Get Connected</h6>
                                    <p className="text-gray-300 text-sm font-light text-center">
                                        Powerful tools to connect you with your choice schools & programs
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Study Areas Section */}
                <section className="bg-blue-50 py-12 lg:py-24">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="px-8 mb-8">
                            <h3 className="text-gray-900 text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.2] mb-2">
                                Find your Study Areas
                            </h3>
                            <hr className="w-12 border-t-2 border-[#0071e3] mb-4" />
                            <p className="text-gray-700 text-sm lg:text-base mb-4 lg:mb-8 lg:max-w-[800px]">Our personalized programs support international students from application to enrollment</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6 mx-auto px-8">
                            {studyAreas.map((area) => (
                                <div key={area.id} className="bg-white flex flex-col rounded-lg lg:rounded-xl shadow-lg p-8">
                                    <img
                                        src={area.image}
                                        alt={area.title}
                                        loading="lazy"
                                        width="72"
                                        height="72"
                                        className="mb-4"
                                    />
                                    <h6 className="text-lg text-gray-900 font-bold mb-4 lg:mb-0 leading-6">{area.title}</h6>
                                    <ul className="listing listing-sm lg:mt-4 grid grid-cols-1 gap-x-8 gap-y-2 mb-6">
                                        {area.programs.map((program, index) => (
                                            <li key={index}>{program}</li>
                                        ))}
                                    </ul>
                                    <a href="/study-area-list" className="mt-auto bg-transparent border border-gray-400 hover:border-[#3c65e3] px-6 py-2 rounded text-gray-700 hover:bg-[#2b54d2] hover:text-[#fff] font-normal transition w-full lg:w-auto flex justify-center items-center">View More...</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Top Cities Section */}
                <section className="bg-white py-12 lg:py-24">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="px-8 mb-8">
                            <h3 className="text-gray-900 text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.2] mb-2">
                                Explore top US cities for study
                            </h3>
                            <hr className="w-12 border-t-2 border-[#0071e3] mb-4" />
                            <p className="text-gray-700 text-sm lg:text-base mb-4 lg:mb-8 lg:max-w-[800px]">Discover the best cities across the United States where you can find world-class colleges and universities.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6 mx-auto px-8">
                            {topCities.map((city) => (
                                <div key={city.id} className="aspect-[3/4] bg-gray-50 rounded-lg lg:rounded-2xl shadow-lg overflow-hidden relative before:content-[''] before:absolute before:z-10 before:inset-0 before:bg-gradient-to-b before:from-black/10 before:to-black/90 group">
                                    <img
                                        src={city.image}
                                        alt={city.title}
                                        loading="lazy"
                                        className="aspect-[3/4] w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:rotate-[-5deg] group-hover:scale-110 relative z-1"
                                    />
                                    <div className="absolute left-0 bottom-5 right-0 z-20 px-8 py-2">
                                        <h6 className="text-lg text-gray-100 font-bold mb-2">{city.title}</h6>
                                        <p className="text-sm text-gray-300 font-light mb-0">{city.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Steps Section */}
                <section className="bg-gradient-to-br from-[#296be3] to-[#21186b] py-12 lg:py-24 pb-32 lg:pb-24 relative">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="flex flex-wrap justify-between items-center mb-4 px-8 xl:mb-8">
                            <div>
                                <h3 className="text-[#fff] text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.2] mb-2">
                                    4 Steps for your application
                                </h3>
                                <hr className="w-12 border-t-2 border-[#fff] mb-4" />
                            </div>
                            <button
                                onClick={() => openVideo('MAKTjopS2J8')}
                                className="openVideoBtn inline-flex items-center w-auto h-12 px-6 font-medium bg-[#3c65e3] hover:bg-[#264ec9] text-white rounded hover:text-gray-50 focus:outline-none ring-offset-0 cursor-pointer"
                            >
                                Watch Video
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                                    <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                                </svg>
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 px-8 mx-auto w-full">
                            {steps.map((step, index) => (
                                <div key={index} className={`${step.bgColor} flex flex-col justify-center items-center text-center rounded-xl px-4 py-8`}>
                                    <h2 className="text-4xl font-bold text-gray-900 tracking-wide relative z-20 mt-8">{step.number}</h2>
                                    <BlobSVG rotation={index * 45 + 5} className={`relative -mt-20 ${index === 1 ? 'ml-2' : ''}`} />
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
                <section className="bg-blue-50 py-12 lg:py-24 pb-16 lg:pb-24 relative">
                    <div className="max-w-[1400px] mx-auto px-8 flex flex-col lg:items-center lg:flex-row gap-8 bg-transparent relative">
                        <div className="w-full lg:w-1/2 z-20">
                            <div className="mb-0 xl:mb-16">
                                <h3 className="text-gray-900 text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.2] mb-2">
                                    Student Success Stories
                                </h3>
                                <hr className="w-12 border-t-2 border-[#0071e3] mb-4" />
                                <p className="text-gray-700 text-sm lg:text-base mb-0 lg:mb-8 lg:max-w-[800px]">Hear what our students have to say about our services</p>
                            </div>
                            <div className="absolute lg:static left-8 bottom-0">
                                <h5 className="text-base font-bold text-gray-900 mb-4">A trusted platform for 3k+ students and growing</h5>
                                <div className="btn-wrap flex flex-wrap">
                                    <a href="/students_testimonial" className="inline-flex items-center w-auto h-12 px-8 font-medium bg-[#3c65e3] hover:bg-[#264ec9] text-white rounded hover:text-gray-50 focus:outline-none ring-offset-0 cursor-pointer">
                                        View More
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="full lg:w-1/2 relative z-10 mb-32 lg:mb-0">
                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 col-span-6">
                                {testimonials.map((testimonial) => (
                                    <div key={testimonial.id} className="relative z-10 bg-white/60 backdrop-blur-lg flex flex-col lg:items-center justify-between lg:flex-row gap-4 lg:gap-10 p-5 lg:p-10 pb-6 rounded-xl shadow-lg border border-[#ededed]">
                                        <div className="order-1 lg:order-none">
                                            <div className="flex flex-wrap items-center gap-4">
                                                {/* Quote Icon */}
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 475.082 475.081" width="25px" height="25px">
                                                    <g>
                                                        <g>
                                                            <path d="M 164.45 219.27 h -63.954 c -7.614 0 -14.087 -2.664 -19.417 -7.994 c -5.327 -5.33 -7.994 -11.801 -7.994 -19.417 v -9.132 c 0 -20.177 7.139 -37.401 21.416 -51.678 c 14.276 -14.272 31.503 -21.411 51.678 -21.411 h 18.271 c 4.948 0 9.229 -1.809 12.847 -5.424 c 3.616 -3.617 5.424 -7.898 5.424 -12.847 V 54.819 c 0 -4.948 -1.809 -9.233 -5.424 -12.85 c -3.617 -3.612 -7.898 -5.424 -12.847 -5.424 h -18.271 c -19.797 0 -38.684 3.858 -56.673 11.563 c -17.987 7.71 -33.545 18.132 -46.68 31.267 c -13.134 13.129 -23.553 28.688 -31.262 46.677 C 3.855 144.039 0 162.931 0 182.726 v 200.991 c 0 15.235 5.327 28.171 15.986 38.834 c 10.66 10.657 23.606 15.985 38.832 15.985 h 109.639 c 15.225 0 28.167 -5.328 38.828 -15.985 c 10.657 -10.663 15.987 -23.599 15.987 -38.834 V 274.088 c 0 -15.232 -5.33 -28.168 -15.994 -38.832 C 192.622 224.6 179.675 219.27 164.45 219.27 Z" />
                                                            <path d="M 459.103 235.256 c -10.656 -10.656 -23.599 -15.986 -38.828 -15.986 h -63.953 c -7.61 0 -14.089 -2.664 -19.41 -7.994 c -5.332 -5.33 -7.994 -11.801 -7.994 -19.417 v -9.132 c 0 -20.177 7.139 -37.401 21.409 -51.678 c 14.271 -14.272 31.497 -21.411 51.682 -21.411 h 18.267 c 4.949 0 9.233 -1.809 12.848 -5.424 c 3.613 -3.617 5.428 -7.898 5.428 -12.847 V 54.819 c 0 -4.948 -1.814 -9.233 -5.428 -12.85 c -3.614 -3.612 -7.898 -5.424 -12.848 -5.424 h -18.267 c -19.808 0 -38.691 3.858 -56.685 11.563 c -17.984 7.71 -33.537 18.132 -46.672 31.267 c -13.135 13.129 -23.559 28.688 -31.265 46.677 c -7.707 17.987 -11.567 36.879 -11.567 56.674 v 200.991 c 0 15.235 5.332 28.171 15.988 38.834 c 10.657 10.657 23.6 15.985 38.828 15.985 h 109.633 c 15.229 0 28.171 -5.328 38.827 -15.985 c 10.664 -10.663 15.985 -23.599 15.985 -38.834 V 274.088 C 475.082 258.855 469.76 245.92 459.103 235.256 Z" />
                                                        </g>
                                                    </g>
                                                </svg>
                                                <div className="flex gap-1">
                                                    {renderStars(testimonial.rating)}
                                                </div>
                                            </div>
                                            <p className="text-gray-700 text-sm font-light mb-4 lg:mb-6 mt-4">
                                                {testimonial.content}
                                            </p>
                                            <p className="mb-4 lg:mb-6 mt-4">
                                                <span className="text-sm xl:text-base text-gray-900 capitalize font-bold mr-1">{testimonial.name}</span>
                                                <br />
                                                <span className="text-xs xl:text-sm text-gray-600 font-light">- {testimonial.university}</span>
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

                {/* Why Choose Us Section */}
                <section className="bg-gradient-to-br from-[#296be3] to-[#21186b] py-12 lg:py-24 relative overflow-hidden">
                    <div className="max-w-[1400px] mx-auto px-8 flex flex-col lg:items-center lg:flex-row gap-8 bg-transparent relative z-20">
                        <div className="full lg:w-1/2 order-2 lg:order-1">
                            <div className="mb-6 xl:mb-12">
                                <h3 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.2] mb-2">
                                    Why to <span className="text-[#e7a62a]">Choose</span> Us?
                                </h3>
                                <hr className="w-12 border-t-2 border-white mb-4" />
                                <p className="text-gray-300 text-sm lg:text-base mb-4 lg:mb-8 lg:max-w-[800px]">We help international students find their matching programs abroad and guide them through the application process</p>
                            </div>

                            <ul className="grid grid-cols-1 gap-x-16 gap-y-2 lg:gap-y-8 mb-4">
                                <li className="flex items-start gap-4">
                                    <span className="text-gray-100">→</span>
                                    <div>
                                        <div className="text-gray-100 mb-2 text-lg font-semibold">500+ course options:</div>
                                        <p className="text-gray-300 text-sm">Explore over 500+ course options across disciplines! From Computer Science, Cyber Security to Health Science & Business</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-gray-100">→</span>
                                    <div>
                                        <div className="text-gray-100 mb-2 text-lg font-semibold">Dedicated support desk:</div>
                                        <p className="text-gray-300 text-sm">Navigate the application process with full support from our dedicated team</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-gray-100">→</span>
                                    <div>
                                        <div className="text-gray-100 mb-2 text-lg font-semibold">Assistance with visa:</div>
                                        <p className="text-gray-300 text-sm">Get help with visa applications and accommodation options in the U.S</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="full lg:w-1/2 flex lg:justify-center items-center order-1 lg:order-2 lg:mt-2">
                            <img src="img/why-choose.webp" alt="Why Choose Us" className="max-w-[200px] lg:max-w-[60%]" loading="lazy" />
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
                            <p className="text-gray-700 text-sm lg:text-base mb-4 lg:mb-8 lg:max-w-[800px]">Check out some commonly asked questions by International students</p>
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
                                <img src="img/faq-1.webp" alt="FAQ" className="max-w-[200px] lg:max-w-[100%]" loading="lazy" />
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
                            <hr className="w-12 border-t-2 border-[#fff] mb-4" />
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
                            <hr className="w-12 border-t-2 border-[#fff] mb-4" />
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

export default Student;