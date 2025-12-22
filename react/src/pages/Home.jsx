import React, { useState, useEffect } from 'react';
import { GraduationCap, Book, XCircle, CircleX } from 'lucide-react';

function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState({ name: 'English', flag: 'us' });
  const [educationValue, setEducationValue] = useState('');
  const [courseValue, setCourseValue] = useState('');
  const [educationListOpen, setEducationListOpen] = useState(false);
  const [courseListOpen, setCourseListOpen] = useState(false);

  const languages = [
    { name: 'English', flag: 'us' },
    { name: 'Korean', flag: 'kr' },
    { name: 'Spanish', flag: 'es' },
    { name: 'Vietnamese', flag: 'vn' },
    { name: 'French', flag: 'fr' }
  ];

  const educationLevels = ['Undergraduate', 'Graduate', 'Postgraduate', 'Diploma', 'Certificate'];
  const courses = ['Computer Science', 'Business Administration', 'Engineering', 'Medicine', 'Law', 'Arts'];

  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileNavOpen]);

  const handleLangSelect = (lang) => {
    setSelectedLang(lang);
    setLangMenuOpen(false);
  };

  const handleEducationSelect = (level) => {
    setEducationValue(level);
    setEducationListOpen(false);
  };

  const handleCourseSelect = (course) => {
    setCourseValue(course);
    setCourseListOpen(false);
  };

  return (
    <div>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-4 h-4 text-gray-200 transition-transform ${langMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {langMenuOpen && (
                <div className="absolute z-50 right-0 mt-0 w-40 bg-white rounded-lg text-gray-700 shadow-2xl overflow-hidden">
                  <ul>
                    {languages.map((lang) => (
                      <li
                        key={lang.flag}
                        onClick={() => handleLangSelect(lang)}
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
          <div className="max-w-[1400px] mx-auto px-8 py-4 lg:py-4 relative z-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center min-w-[220px] relative">
                <a href="#home">
                  <div className="h-8 lg:h-12 flex items-center font-bold text-[#296be3] text-xl lg:text-2xl">
                    AdviseBridge
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
                    <a href="#home">
                      <div className="h-8 md:h-12 flex items-center font-bold text-white text-xl">
                        AdviseBridge
                      </div>
                    </a>
                  </li>
                  <li><a href="#student" className="text-[#CBD5E1] lg:text-gray-700 hover:text-[#8ba5e0] lg:hover:text-[#0071e3] font-normal transition w-full lg:w-auto lg:flex justify-center items-center">Student</a></li>
                  <li><a href="#advisor" className="text-[#CBD5E1] lg:text-gray-700 hover:text-[#8ba5e0] lg:hover:text-[#0071e3] font-normal transition w-full lg:w-auto lg:flex justify-center items-center">Advisor</a></li>
                  <li><a href="#institution" className="text-[#CBD5E1] lg:text-gray-700 hover:text-[#8ba5e0] lg:hover:text-[#0071e3] font-normal transition w-full lg:w-auto lg:flex justify-center items-center">Institution</a></li>
                  <li><a href="#explore" className="text-[#CBD5E1] lg:text-gray-700 hover:text-[#8ba5e0] lg:hover:text-[#0071e3] font-normal transition w-full lg:w-auto lg:flex justify-center items-center">Explore</a></li>
                  <li className="flex flex-col sm:flex-row gap-2 mt-8 lg:mt-0">
                    <a href="#login" className="bg-transparent border border-gray-400 hover:border-[#3c65e3] px-6 py-2 text-white rounded lg:text-gray-700 hover:bg-[#2b54d2] lg:hover:text-[#fff] font-normal transition w-full lg:w-auto flex justify-center items-center">Login</a>
                    <a href="#register" className="bg-[#3c65e3] px-6 py-2 rounded lg:text-[#fff] hover:bg-[#2b54d2] text-white lg:hover:text-[#fff] font-normal transition w-full lg:w-auto flex justify-center items-center">Register</a>
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

      <div className="bg-gradient-to-br from-[#296be3] to-[#21186b] py-0 pt-8 lg:py-20 mt-[96px] lg:mt-[116px] xl:mt-[100px] h-[90vh] md:h-[70vh] lg:h-[80vh] xl:h-[86vh] xl:max-h-[720px] flex items-center">
        <div className="max-w-[1400px] w-full mx-auto px-8 mb-8">
          <div className="w-full flex flex-col lg:flex-row items-center w-full">
            <div className="w-full text-white flex flex-col gap-6 lg:w-[55%] xl:w-[60%]">
              <div className="flex items-center space-x-2 -mb-4">
                <div className="flex -space-x-2">
                  <img alt="" className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/44.jpg" />
                  <img alt="" className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/46.jpg" />
                  <img alt="" className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/47.jpg" />
                  <img alt="" className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/49.jpg" />
                </div>
                <span className="text-sm font-light text-gray-200">10K+ students and counting</span>
              </div>

              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-[1.2] max-w-[900px] tracking-wide">
                Navigate Your Study Abroad Journey With <span className="text-[#e7a62a]">Confidence</span>
              </h2>

              <div className="w-full flex flex-col md:flex-row lg:flex-col xl:flex-row gap-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="relative">
                    <div className="relative">
                      <input
                        type="text"
                        value={educationValue}
                        onChange={(e) => setEducationValue(e.target.value)}
                        onFocus={() => setEducationListOpen(true)}
                        placeholder="Select Education Level"
                        className="text-gray-800 placeholder-gray-500 w-full bg-white border border-gray-300 rounded p-3 pl-11 pr-11 outline-none"
                      />
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer">
                        <GraduationCap className="stroke-gray-500 stroke-[1.5] w-6 h-6" />
                      </div>
                      {educationValue && (
                        <div
                          onClick={() => setEducationValue('')}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-500 transition-colors duration-200 cursor-pointer"
                        >
                          <XCircle className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                    {educationListOpen && (
                      <ul className="absolute w-full bg-white border rounded mt-1 z-20 shadow text-black max-h-48 overflow-y-auto">
                        {educationLevels.map((level) => (
                          <li
                            key={level}
                            onClick={() => handleEducationSelect(level)}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          >
                            {level}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="relative">
                    <div className="relative">
                      <input
                        type="text"
                        value={courseValue}
                        onChange={(e) => setCourseValue(e.target.value)}
                        onFocus={() => setCourseListOpen(true)}
                        placeholder="Select Course/Program"
                        className="text-gray-800 placeholder-gray-500 w-full bg-white border border-gray-300 rounded p-3 pl-11 pr-11 outline-none"
                      />
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer">
                        <Book className="stroke-gray-500 stroke-[1.5] w-5 h-5" />
                      </div>
                      {courseValue && (
                        <div
                          onClick={() => setCourseValue('')}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-500 transition-colors duration-200 cursor-pointer"
                        >
                          <XCircle className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                    {courseListOpen && (
                      <ul className="absolute w-full bg-white border rounded mt-1 z-20 shadow text-black max-h-48 overflow-y-auto">
                        {courses.map((course) => (
                          <li
                            key={course}
                            onClick={() => handleCourseSelect(course)}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          >
                            {course}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                <div className="btn-wrap">
                  <button className="min-w-[160px] min-h-[50px] bg-[#3c65e3] px-6 py-2 text-[#CBD5E1] rounded lg:text-[#fff] hover:bg-[#2b54d2] hover:text-[#8ba5e0] lg:hover:text-[#fff] font-normal transition w-full lg:w-auto flex justify-center items-center cursor-pointer">
                    Search
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:w-[45%] xl:w-[40%] w-full hidden lg:flex justify-end flex-1">
              <div className="w-[460px] h-[440px] relative">
                <style>{`
                  @keyframes bob {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                  }
                  .bob { animation: bob 3s ease-in-out infinite; }
                  .bob-2 { animation: bob 4s ease-in-out infinite; animation-delay: 0.5s; }
                  .bob-3 { animation: bob 3.5s ease-in-out infinite; animation-delay: 1s; }
                `}</style>

                <svg
                  className="max-w-[420px] w-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[30px] opacity-20"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#296be3', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#21186b', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <polygon points="100,10 40,180 190,60 10,60 160,180" fill="url(#grad1)" />
                </svg>

                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=500&fit=crop"
                  className="max-w-[381px] object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-2xl"
                  alt="Student"
                />

                <div className="absolute bottom-[153px] left-[-20px] drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)] bob">
                  <img
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=150&h=150&fit=crop"
                    className="w-[114px] h-[114px] rounded-full border-4 border-white object-cover"
                    alt="Student 1"
                  />
                </div>

                <div className="absolute top-[156px] right-[-6px] drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)] bob-2">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150&h=150&fit=crop"
                    className="w-[96px] h-[96px] rounded-full border-4 border-white object-cover"
                    alt="Student 2"
                  />
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 ml-4 mb-[-40px] drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)] bob-3">
                  <img
                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=150&h=150&fit=crop"
                    className="w-[72px] h-[72px] rounded-full border-4 border-white object-cover"
                    alt="Student 3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="flex flex-col flex-1 w-full overflow-hidden">

    <section className="bg-white py-12 pb-8 lg:py-24 lg:pb-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="px-8 mb-8 lg:mb-24">
          <h3 className="text-gray-900 text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.2] mb-2">
            Bridging Educational Opportunities
          </h3>
          <hr className="w-12 border-t-2 border-[#0071e3] mb-4"/>
          <p className="text-gray-700 text-sm lg:text-base mb-4 lg:mb-8 lg:max-w-[800px]">AdviseBridge connects you to global education with the right programs and universities</p>
        </div>
        <div className="lg:px-8 flex flex-col md:flex-row gap-8">
          <div className="flex-1 overflow-hidden cursor-auto border-gray-300 md:border-none px-8 lg:px-0">
            <div className="w-full overflow-hidden box-design mb-4 lg:mb-8">
              <img src="img/bridging-img-1.webp" alt="Blog 1" className="max-w-[114px] xl:max-w-[214px] w-full h-full object-cover" loading="lazy"/>
            </div>
            <h6 className="text-gray-900 text-lg lg:text-xl font-bold leading-6 mb-2">Spend less time valuating applications</h6>
            <p className="text-gray-700 text-sm lg:text-base font-light">
              AdviseBridge ensures your applications are complete with all documents included
            </p>
          </div>
          <div className="flex-1 overflow-hidden cursor-auto border-gray-300 md:border-none px-8 lg:px-0">
            <div className="w-full overflow-hidden box-design mb-4 lg:mb-8">
              <img src="img/bridging-img-2.webp" alt="Blog 1" className="max-w-[114px] xl:max-w-[214px] w-full h-full object-cover" loading="lazy"/>
            </div>
            <h6 className="text-gray-900 text-lg lg:text-xl font-bold leading-6 mb-2">Access global market and reputation</h6>
            <p className="text-gray-700 text-sm lg:text-base font-light">
              AdviseBridge offers expert consultation for studying abroad
            </p>
          </div>
          <div className="flex-1 overflow-hidden cursor-auto border-gray-300 md:border-none px-8 lg:px-0">
            <div className="w-full overflow-hidden box-design mb-4 lg:mb-8">
              <img src="img/bridging-img-3.webp" alt="Blog 1" className="max-w-[114px] xl:max-w-[214px] w-full h-full object-cover" loading="lazy"/>
            </div>
            <h6 className="text-gray-900 text-lg lg:text-xl font-bold leading-6 mb-2">Tools to organize your school search</h6>
            <p className="text-gray-700 text-sm lg:text-base font-light">
              Powerful tools to connect you with your choice schools & programs
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <section className="bg-blue-50 py-12 lg:py-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-6 px-8 xl:mb-16">
          <h3 className="text-gray-900 text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.2] mb-2">
            Trending Study Areas
          </h3>
          <hr className="w-12 border-t-2 border-[#0071e3] mb-4"/>
        </div>
        
        <div className="px-8 lg:mb-4 flex flex-col xl:flex-row gap-8 xl:gap-16 bg-transparent relative">
          <div className="full xl:w-1/3 order-2 xl:order-1">
            <p className="text-gray-700 text-base mb-4 lg:mb-8 lg:max-w-[800px] hidden xl:block">Quality-driven approach to international study applications. Today, embarking on your global academic journey is just a few clicks away.</p>
            <h5 className="text-base font-bold text-gray-900 mb-4">Begin with these trending majors</h5>
            <div className="btn-wrap flex flex-wrap">
              <a href="trending_majors.html" className="inline-flex items-center w-auto h-12 px-8 font-medium bg-[#3c65e3] hover:bg-[#2b54d2] text-white rounded hover:text-gray-50 focus:outline-none ring-offset-0 cursor-pointer">
                Explore More
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right ml-2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </div>
          <div className="full xl:w-2/3 order-1 xl:order-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 xl:gap-6 mx-auto">
                  <div className="md:aspect-square bg-white flex flex-col justify-center items-center text-center rounded-lg lg:rounded-xl shadow-lg p-3" data-aos="fade-left" data-aos-duration="1000">
                      <img
                          src="img/trending-1.gif"
                          alt="Image"
                          loading="lazy"
                          width="72"
                          height="72"
                          className="mb-4"
                      />
                      <h6 className="text-sm text-gray-900 font-medium mb-2 md:mb-0">Business and Management</h6>
                  </div>
                  <div className="md:aspect-square bg-white flex flex-col justify-center items-center text-center rounded-lg lg:rounded-xl shadow-lg p-3" data-aos="fade-left" data-aos-duration="1200">
                      <img
                          src="img/trending-2.gif"
                          alt="Image"
                          loading="lazy"
                          width="72"
                          height="72"
                          className="mb-4"
                      />
                      <h6 className="text-sm text-gray-900 font-medium mb-2 md:mb-0">Health and Life Science</h6>
                  </div>
                  <div className="md:aspect-square bg-white flex flex-col justify-center items-center text-center rounded-lg lg:rounded-xl shadow-lg p-3" data-aos="fade-left" data-aos-duration="1400">
                      <img
                          src="img/trending-3.gif"
                          alt="Image"
                          loading="lazy"
                          width="72"
                          height="72"
                          className="mb-4"
                      />
                      <h6 className="text-sm text-gray-900 font-medium mb-2 md:mb-0">Education and Human Development</h6>
                  </div>
                  <div className="md:aspect-square bg-white flex flex-col justify-center items-center text-center rounded-lg lg:rounded-xl shadow-lg p-3" data-aos="fade-left" data-aos-duration="1600">
                      <img
                          src="img/trending-4.gif"
                          alt="Image"
                          loading="lazy"
                          width="72"
                          height="72"
                          className="mb-4"
                      />
                      <h6 className="text-sm text-gray-900 font-medium mb-2 md:mb-0">Law, Policy and Public Services</h6>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white py-12 lg:py-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-6 px-8 xl:mb-16">
          <h3 className="text-gray-900 text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.2] mb-2">
            How AdviseBridge works?
          </h3>
          <hr className="w-12 border-t-2 border-[#0071e3] mb-4"/>
        </div>
        
        <div className="px-8 lg:mb-4 flex flex-col xl:flex-row gap-8 xl:gap-16 bg-transparent relative">
          <div className="full xl:w-1/3 order-2 xl:order-1">
            <p className="text-gray-700 text-base mb-4 lg:mb-8 lg:max-w-[800px] hidden xl:block">AdviseBridge finds your program, guides your application, and simplifies the complex visa process. No restrictions on application submissions!</p>
            <ul className="listing lg:mt-8 grid grid-cols-1 gap-x-16 gap-y-4 mb-6 lg:mb-12">
              <li>
                <strong>For Student:</strong> Our search engine finds your perfect program abroad efficiently.
              </li>
              <li>
                <strong>For Advisor:</strong> We connect you with international students seeking top education abroad.
              </li>
            </ul>
          </div>
          <div className="full xl:w-2/3 order-1 xl:order-2">

            <div className="max-w-6xl mx-auto text-center ">


              <div className="flex flex-col sm:flex-row justify-center gap-6">
                
                <div className="bg-gray-200 flex flex-col w-full sm:w-1/2 rounded-xl">
                  <div className="relative w-full aspect-video overflow-hidden group rounded-tl-xl rounded-tr-xl" id="video-wrapper-1">
                    <img src="img/testimonials-1.webp" alt="Parent Testimonial 1 Cover"
                        className="absolute inset-0 w-full h-full object-cover cursor-pointer group-hover:opacity-90 transition-opacity duration-300"
                        id="video-cover-1" loading="lazy"/>

                    <div className="absolute inset-0 flex items-center justify-center cursor-pointer" id="play-button-1">
                      <svg width="51" height="40" viewBox="0 0 51 40" fill="none">
                        <g clipPath="url(#clip0_499_642)">
                          <rect x="16" y="9" width="19" height="23" fill="#D9D9D9"/>
                          <path d="M45.3076 0.279297H5.69249C2.7081 0.279297 0.276367 2.73808 0.276367 5.75569V34.2441C0.276367 37.2505 2.7081 39.7205 5.69249 39.7205H45.3076C48.292 39.7205 50.7237 37.2505 50.7237 34.2441V5.75569C50.7237 2.73808 48.292 0.279297 45.3076 0.279297ZM28.1197 25.7389L18.6691 31.2377L18.6801 20.2178L18.6912 9.19799L28.1307 14.7191L37.5703 20.2402L28.1197 25.7389Z" fill="#FD2026" stroke="#FD2026" strokeWidth="5" strokeMiterlimit="10"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_499_642">
                            <rect width="51" height="40" rx="5" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <h4 className="bg-gradient-to-br from-[#e7a62a] to-[#a8750b] px-3 py-3 flex text-sm text-white font-medium justify-center transition rounded-bl-xl rounded-br-xl">For Student</h4>
                </div>

                <div className="bg-gray-200 flex flex-col w-full sm:w-1/2 rounded-xl">
                  <div className="relative w-full aspect-video overflow-hidden group rounded-tl-xl rounded-tr-xl" id="video-wrapper-2">
                    <img src="img/testimonials-2.webp" alt="Parent Testimonial 2 Cover"
                        className="absolute inset-0 w-full h-full object-cover cursor-pointer group-hover:opacity-90 transition-opacity duration-300"
                        id="video-cover-2" loading="lazy"/>

                    <div className="absolute inset-0 flex items-center justify-center cursor-pointer" id="play-button-2">
                      <svg width="51" height="40" viewBox="0 0 51 40" fill="none">
                        <g clipPath="url(#clip0_499_642)">
                          <rect x="16" y="9" width="19" height="23" fill="#D9D9D9"/>
                          <path d="M45.3076 0.279297H5.69249C2.7081 0.279297 0.276367 2.73808 0.276367 5.75569V34.2441C0.276367 37.2505 2.7081 39.7205 5.69249 39.7205H45.3076C48.292 39.7205 50.7237 37.2505 50.7237 34.2441V5.75569C50.7237 2.73808 48.292 0.279297 45.3076 0.279297ZM28.1197 25.7389L18.6691 31.2377L18.6801 20.2178L18.6912 9.19799L28.1307 14.7191L37.5703 20.2402L28.1197 25.7389Z" fill="#FD2026" stroke="#FD2026" strokeWidth="5" strokeMiterlimit="10"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_499_642">
                            <rect width="51" height="40" rx="5" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <h4 className="bg-gradient-to-br from-[#296be3] to-[#21186b] px-3 py-3 flex text-sm text-white font-medium justify-center transition rounded-bl-xl rounded-br-xl">For Advisor</h4>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  
    <section className="bg-gradient-to-b from-[#296be3] to-[#21186b] py-4 lg:py-0">
      <div className="max-w-[1400px] mx-auto relative">
        <div className="bg-white hidden lg:block absolute -top-8 -bottom-8 left-8 right-8 z-1 rounded-full"></div>
        <div className="flex flex-col lg:flex-row justify-between gap-6 relative z-2">
          <div className="w-full lg:w-1/2 bg-none lg:bg-gradient-to-b from-[#296be3] to-[#21186b] pt-8 pb-0 lg:p-8 lg:py-16 lg:pt-12 lg:rounded-br-xl lg:rounded-tr-xl">
            <div className="max-w-[1200px] w-full mx-auto px-8 lg:px-4 py-2 lg:pl-0 text-white grid grid-cols-1 gap-2 lg:gap-3" data-aos="fade-right" data-aos-duration="1000">
              <div className="mb-0 py-2 lg:pl-0 text-white grid grid-cols-1 gap-2 lg:gap-3">
                <h2 className="text-2xl lg:text-2xl font-bold leading-[1.2] max-w-[600px]">
                  Why college matters?
                </h2>
                <hr className="w-12 border-t-2 border-[#fff] mb-4"/>
                <h5 className="text-base font-medium text-white">The transformative impact of college education</h5>
                <p className="text-gray-300 text-sm font-light mb-2 lg:mb-4">Discover the transformative power of college education in shaping careers, independence, purpose, and lifelong learning for a fulfilling life ahead.</p>
              </div>
              
              <div className="btn-wrap flex flex-wrap">
                <a href="" className="inline-flex items-center w-auto h-12 px-8 font-medium bg-[#3c65e3] hover:bg-[#2b54d2] text-white rounded hover:text-gray-50 focus:outline-none ring-offset-0 cursor-pointer">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right ml-2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-none lg:bg-gradient-to-b from-[#296be3] to-[#21186b] pt-0 pb-8 lg:p-8 lg:py-16 lg:pt-12 lg:pl-12 lg:rounded-bl-xl lg:rounded-tl-xl">
            <div className="max-w-[1200px] w-full mx-auto px-8 lg:px-4 py-2 lg:pr-0 text-white grid grid-cols-1 gap-2 lg:gap-3" data-aos="fade-left" data-aos-duration="1000">
              <div className="mb-0 py-2 lg:pl-0 text-white grid grid-cols-1 gap-2 lg:gap-3">
                <h2 className="text-2xl lg:text-2xl font-bold leading-[1.2] max-w-[600px]">
                  Paying for college
                </h2>
                <hr className="w-12 border-t-2 border-[#fff] mb-4"/>
                <h5 className="text-base font-medium text-white">How international students afford college</h5>
                <p className="text-gray-300 text-sm font-light mb-2 lg:mb-4">Explore strategies and resources for international students to finance their education in the US amidst high tuition fees, including scholarships.</p>
              </div>
              
              <div className="btn-wrap flex flex-wrap">
                <a href="" className="inline-flex items-center w-auto h-12 px-8 font-medium bg-[#3c65e3] hover:bg-[#2b54d2] text-white rounded hover:text-gray-50 focus:outline-none ring-offset-0 cursor-pointer">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right ml-2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    
    <section className="bg-white py-10 lg:py-24 relative">
      <div className="max-w-[1400px] mx-auto px-8 flex flex-col items-center lg:flex-row gap-8 md:gap-16 bg-transparent relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mx-auto w-full">       
          <div className="bg-[#e6f0fc] flex flex-col justify-center items-center text-center rounded-xl p-5 h-[200px]">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 tracking-wide">5,000+</h2>
            <h6 className="text-sm text-gray-700 font-light">
                Assisted international students from 15 countries worldwide
            </h6>
          </div>
          
          <div className="bg-[#fff4e6] flex flex-col justify-center items-center text-center rounded-xl p-5 h-[200px]">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 tracking-wide">36+</h2>
            <h6 className="text-sm text-gray-700 font-light">
                Top-ranked partnered institutions from USA
            </h6>
          </div>
          
          <div className="bg-[#e6f7ea] flex flex-col justify-center items-center text-center rounded-xl p-5 h-[200px]">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 tracking-wide">300+</h2>
            <h6 className="text-sm text-gray-700 font-light">
                Recruitment partners in 8 different nations globally
            </h6>
          </div>
          
          <div className="bg-[#f1eefe] flex flex-col justify-center items-center text-center rounded-xl p-5 h-[200px]">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 tracking-wide">07+</h2>
            <h6 className="text-sm text-gray-700 font-light">
                Years of expertise, built through dedication and experience
            </h6>
          </div>
        </div>
      </div>
    </section>
 
    <section className="bg-blue-50 py-12 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-8 flex flex-col lg:items-center lg:flex-row gap-8 bg-transparent relative">
        <div className="w-full lg:w-1/2 relative z-2">
          <div className="mb-6 xl:mb-16">
            <h3 className="text-gray-900 text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.2] mb-2">
              What our Partners Say?
            </h3>
            <hr className="w-12 border-t-2 border-[#0071e3] mb-4"/>
            <p className="text-gray-700 text-sm lg:text-base mb-4 lg:mb-8 lg:max-w-[800px]">Partners praise AdviseBridge for its efficiency, reliability, and excellent support</p>
          </div>
          <h5 className="text-base font-bold text-gray-900 mb-4">See why our partners trust us</h5>
          <div className="btn-wrap flex flex-wrap">
            <a href="partners_testimonial.html" className="inline-flex items-center w-auto h-12 px-8 font-medium bg-[#3c65e3] hover:bg-[#264ec9] text-white rounded hover:text-gray-50 focus:outline-none ring-offset-0 cursor-pointer">
              View More 
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right ml-2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
        </div>
        <div className="full lg:w-1/2 relative z-1">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 col-span-6">
                <div className="relative z-10 bg-white/60 backdrop-blur-lg flex flex-col lg:items-center justify-between lg:flex-row gap-4 lg:gap-10 p-5 lg:p-10 pb-6 rounded-xl shadow-lg border border-[#ededed]">
                    <div className="order-1 lg:order-none">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 475.082 475.081" x="0px" y="0px" width="25px" height="25px" xmlns:xml="http://www.w3.org/XML/1998/namespace" xmlSpace="preserve" version="1.1">
                            <g>
                                <g>
                                <path d="M 164.45 219.27 h -63.954 c -7.614 0 -14.087 -2.664 -19.417 -7.994 c -5.327 -5.33 -7.994 -11.801 -7.994 -19.417 v -9.132 c 0 -20.177 7.139 -37.401 21.416 -51.678 c 14.276 -14.272 31.503 -21.411 51.678 -21.411 h 18.271 c 4.948 0 9.229 -1.809 12.847 -5.424 c 3.616 -3.617 5.424 -7.898 5.424 -12.847 V 54.819 c 0 -4.948 -1.809 -9.233 -5.424 -12.85 c -3.617 -3.612 -7.898 -5.424 -12.847 -5.424 h -18.271 c -19.797 0 -38.684 3.858 -56.673 11.563 c -17.987 7.71 -33.545 18.132 -46.68 31.267 c -13.134 13.129 -23.553 28.688 -31.262 46.677 C 3.855 144.039 0 162.931 0 182.726 v 200.991 c 0 15.235 5.327 28.171 15.986 38.834 c 10.66 10.657 23.606 15.985 38.832 15.985 h 109.639 c 15.225 0 28.167 -5.328 38.828 -15.985 c 10.657 -10.663 15.987 -23.599 15.987 -38.834 V 274.088 c 0 -15.232 -5.33 -28.168 -15.994 -38.832 C 192.622 224.6 179.675 219.27 164.45 219.27 Z" />
                                <path d="M 459.103 235.256 c -10.656 -10.656 -23.599 -15.986 -38.828 -15.986 h -63.953 c -7.61 0 -14.089 -2.664 -19.41 -7.994 c -5.332 -5.33 -7.994 -11.801 -7.994 -19.417 v -9.132 c 0 -20.177 7.139 -37.401 21.409 -51.678 c 14.271 -14.272 31.497 -21.411 51.682 -21.411 h 18.267 c 4.949 0 9.233 -1.809 12.848 -5.424 c 3.613 -3.617 5.428 -7.898 5.428 -12.847 V 54.819 c 0 -4.948 -1.814 -9.233 -5.428 -12.85 c -3.614 -3.612 -7.898 -5.424 -12.848 -5.424 h -18.267 c -19.808 0 -38.691 3.858 -56.685 11.563 c -17.984 7.71 -33.537 18.132 -46.672 31.267 c -13.135 13.129 -23.559 28.688 -31.265 46.677 c -7.707 17.987 -11.567 36.879 -11.567 56.674 v 200.991 c 0 15.235 5.332 28.171 15.988 38.834 c 10.657 10.657 23.6 15.985 38.828 15.985 h 109.633 c 15.229 0 28.171 -5.328 38.827 -15.985 c 10.664 -10.663 15.985 -23.599 15.985 -38.834 V 274.088 C 475.082 258.855 469.76 245.92 459.103 235.256 Z" />
                                </g>
                            </g>
                        </svg>
                        <p className="text-gray-700 text-sm font-light mb-4 lg:mb-6 mt-4">
                            I am working with AdviseBridge since they started their company. It's a great and easy platform, even their payment policy is very transparent with counselors. Highly recommended the company and am proud to be a member of AdviseBridge.
                        </p>
                        <p className="mb-4 lg:mb-6 mt-4">
                            <span className="text-sm xl:text-base text-gray-900 capitalize font-bold mr-1">Sumit Singh </span> 
                            <span className="text-xs xl:text-sm text-gray-600 font-light">- First Step, Nepal</span>
                        </p>
                    </div>
                    <div className="relative shrink-0">
                        <img src="img/partner-1.webp" alt="Image Description" className="rounded-full w-24 h-24 object-cover 2xl:w-28 2xl:h-28" loading="lazy"/>
                        <div className="rounded-full w-24 h-24 2xl:w-28 2xl:h-28 bg-gradient-to-r from-black to-blue-500 absolute inset-0 opacity-20"></div>
                    </div>
                </div>
                <div className="relative z-10 bg-white/60 backdrop-blur-lg flex flex-col lg:items-center justify-between lg:flex-row gap-4 lg:gap-10 p-5 lg:p-10 pb-6 rounded-xl shadow-lg border border-[#ededed]">
                    <div className="order-1 lg:order-none">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 475.082 475.081" x="0px" y="0px" width="25px" height="25px" xmlns:xml="http://www.w3.org/XML/1998/namespace" xmlSpace="preserve" version="1.1">
                            <g>
                                <g>
                                <path d="M 164.45 219.27 h -63.954 c -7.614 0 -14.087 -2.664 -19.417 -7.994 c -5.327 -5.33 -7.994 -11.801 -7.994 -19.417 v -9.132 c 0 -20.177 7.139 -37.401 21.416 -51.678 c 14.276 -14.272 31.503 -21.411 51.678 -21.411 h 18.271 c 4.948 0 9.229 -1.809 12.847 -5.424 c 3.616 -3.617 5.424 -7.898 5.424 -12.847 V 54.819 c 0 -4.948 -1.809 -9.233 -5.424 -12.85 c -3.617 -3.612 -7.898 -5.424 -12.847 -5.424 h -18.271 c -19.797 0 -38.684 3.858 -56.673 11.563 c -17.987 7.71 -33.545 18.132 -46.68 31.267 c -13.134 13.129 -23.553 28.688 -31.262 46.677 C 3.855 144.039 0 162.931 0 182.726 v 200.991 c 0 15.235 5.327 28.171 15.986 38.834 c 10.66 10.657 23.606 15.985 38.832 15.985 h 109.639 c 15.225 0 28.167 -5.328 38.828 -15.985 c 10.657 -10.663 15.987 -23.599 15.987 -38.834 V 274.088 c 0 -15.232 -5.33 -28.168 -15.994 -38.832 C 192.622 224.6 179.675 219.27 164.45 219.27 Z" />
                                <path d="M 459.103 235.256 c -10.656 -10.656 -23.599 -15.986 -38.828 -15.986 h -63.953 c -7.61 0 -14.089 -2.664 -19.41 -7.994 c -5.332 -5.33 -7.994 -11.801 -7.994 -19.417 v -9.132 c 0 -20.177 7.139 -37.401 21.409 -51.678 c 14.271 -14.272 31.497 -21.411 51.682 -21.411 h 18.267 c 4.949 0 9.233 -1.809 12.848 -5.424 c 3.613 -3.617 5.428 -7.898 5.428 -12.847 V 54.819 c 0 -4.948 -1.814 -9.233 -5.428 -12.85 c -3.614 -3.612 -7.898 -5.424 -12.848 -5.424 h -18.267 c -19.808 0 -38.691 3.858 -56.685 11.563 c -17.984 7.71 -33.537 18.132 -46.672 31.267 c -13.135 13.129 -23.559 28.688 -31.265 46.677 c -7.707 17.987 -11.567 36.879 -11.567 56.674 v 200.991 c 0 15.235 5.332 28.171 15.988 38.834 c 10.657 10.657 23.6 15.985 38.828 15.985 h 109.633 c 15.229 0 28.171 -5.328 38.827 -15.985 c 10.664 -10.663 15.985 -23.599 15.985 -38.834 V 274.088 C 475.082 258.855 469.76 245.92 459.103 235.256 Z" />
                                </g>
                            </g>
                        </svg>
                        <p className="text-gray-700 text-sm font-light mb-4 lg:mb-6 mt-4">
                            I've had the opportunity to work with advisebridge.com, I can state this is one of the strongest platforms for connecting international students to colleges and universities abroad. I look forward to using this platform in connecting students from Vietnam to AdviseBridge partner schools.
                        </p>
                        <p className="mb-4 lg:mb-6 mt-4">
                            <span className="text-sm xl:text-base text-gray-900 capitalize font-bold mr-1">Trung Nguyen </span> 
                            <span className="text-xs xl:text-sm text-gray-600 font-light">- CaliVisa, Vietnam</span>
                        </p>
                    </div>
                    <div className="relative shrink-0">
                        <img src="img/partner-2.webp" alt="Image Description" className="rounded-full w-24 h-24 object-cover 2xl:w-28 2xl:h-28" loading="lazy"/>
                        <div className="rounded-full w-24 h-24 2xl:w-28 2xl:h-28 bg-gradient-to-r from-black to-blue-500 absolute inset-0 opacity-20"></div>
                    </div>
                </div>
                <div className="hidden xl:block absolute bottom-[-2rem] right-[30rem] w-72 h-72 rounded-full bg-gradient-to-br from-blue-200 to-white"></div>
            </div>
        </div>
      </div>
    </section>
    
    <section className="bg-gradient-to-br from-[#296be3] to-[#21186b] py-12 lg:py-24 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 flex flex-col lg:items-center lg:flex-row gap-8 bg-transparent relative z-2">

        <div className="full lg:w-1/2 order-2 lg:order-1" data-aos="fade-right" data-aos-duration="1000">
          <div className="mb-6 xl:mb-16">
            <h3 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.2] mb-2">
              Pursue Your <span className="text-[#e7a62a]">Abroad Study</span> Journey!
            </h3>
            <hr className="w-12 border-t-2 border-white mb-4"/>
            <p className="text-gray-300 text-sm lg:text-base mb-4 lg:mb-8 lg:max-w-[800px]">Pursue your abroad study journey today with expert guidance, personalized support, & comprehensive resources</p>
          </div>
          <div className="btn-wrap flex flex-wrap">
            <a href="register.html" className="inline-flex items-center w-auto h-12 px-8 font-medium bg-[#3c65e3] hover:bg-[#264ec9] text-white rounded hover:text-gray-50 focus:outline-none ring-offset-0 cursor-pointer">
              Get Started 
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right ml-2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
        </div>
        <div className="full lg:w-1/2 flex lg:justify-center items-center order-1 lg:order-2" data-aos="fade-left" data-aos-duration="1000">
          <img src="img/pursue.webp" alt="" className="max-w-[200px] lg:max-w-[60%]" loading="lazy"/>
        </div>

      </div>
      <div className="hidden xl:block absolute top-[-20%] right-[-30%] z-1 w-444 h-444 rounded-full bg-gradient-to-br from-[#296be3] to-[#3ccedb] opacity-20"></div>
    </section>
    
    <section className="bg-white py-12 lg:py-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="px-8 mb-8">
          <h3 className="text-gray-900 text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.2] mb-2">
            Resources & blogs
          </h3>
          <hr className="w-12 border-t-2 border-[#0071e3] mb-4"/>
          <p className="text-gray-700 text-sm lg:text-base mb-4 lg:mb-8 lg:max-w-[800px]">Get insights on latest trends through our updates</p>
        </div>
        
        <div className="mx-auto mb-8 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <a href="" className="overflow-hidden group">
            <div className="w-full overflow-hidden rounded-lg mb-6 aspect-[16/9]">
              <img src="img/activities-1.webp" alt="Blog 1" className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:rotate-[-5deg] group-hover:scale-120 relative z-1" loading="lazy"/>
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-gray-950">Which US Universities Accept 3-Year Bachelor's Degrees...</h3>
            <div className="flex items-center space-x-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="calendar" className="lucide lucide-calendar text-[#14254B] w-4 min-w-4 h-4 mb-[2px]"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
              <p className="text-gray-500  text-xs lg:text-sm mb-0">Nov 14, 2025</p>
            </div>
            <p className="text-gray-700 text-sm mb-2 lg:mb-4">You worked hard for your 3-year bachelor’s degree in India, Nepal...</p>
          </a>
          <a href="" className="overflow-hidden group">
            <div className="w-full overflow-hidden rounded-lg mb-6 aspect-[16/9]">
              <img src="img/activities-2.webp" alt="Blog 1" className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:rotate-[-5deg] group-hover:scale-120 relative z-1" loading="lazy"/>
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-gray-950">What is Data Science & Why Study it in 2026...</h3>
            <div className="flex items-center space-x-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="calendar" className="lucide lucide-calendar text-[#14254B] w-4 min-w-4 h-4 mb-[2px]"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
              <p className="text-gray-500 text-xs lg:text-sm mb-0">Nov 06, 2025</p>
            </div>
            <p className="text-gray-700 text-sm mb-2 lg:mb-4">So, you've probably heard the term "data science" thrown around...</p>
          </a>
          <a href="" className="overflow-hidden group">
            <div className="w-full overflow-hidden rounded-lg mb-6 aspect-[16/9]">
              <img src="img/activities-3.webp" alt="Blog 1" className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:rotate-[-5deg] group-hover:scale-120 relative z-1" loading="lazy"/>
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-gray-950">American Dream for International Students in 2025...</h3>
            <div className="flex items-center space-x-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="calendar" className="lucide lucide-calendar text-[#14254B] w-4 min-w-4 h-4 mb-[2px]"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
              <p className="text-gray-500 text-xs lg:text-sm mb-0">Oct 13, 2025</p>
            </div>
            <p className="text-gray-700 text-sm mb-2 lg:mb-4">An International Student lands at JFK ( John F. Kennedy International Airport)...</p>
          </a>
          <a href="" className="overflow-hidden group">
            <div className="w-full overflow-hidden rounded-lg mb-6 aspect-[16/9]">
              <img src="img/activities-4.webp" alt="Blog 1" className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:rotate-[-5deg] group-hover:scale-120 relative z-1" loading="lazy"/>
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-gray-950">Studying in the USA: Scholarships, Jobs, and Life Insights...</h3>
            <div className="flex items-center space-x-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="calendar" className="lucide lucide-calendar text-[#14254B] w-4 min-w-4 h-4 mb-[2px]"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
              <p className="text-gray-500 text-xs lg:text-sm mb-0">Sep 12, 2025</p>
            </div>
            <p className="text-gray-700 text-sm mb-2 lg:mb-4">Every year, thousands of young dreamers pack their bags and head..</p>
          </a>
        </div>

        <div className="px-8 btn-wrap flex flex-wrap">
          <a href="" className="inline-flex items-center w-auto h-12 px-8 font-medium bg-[#3c65e3] hover:bg-[#264ec9] text-white rounded hover:text-gray-50 focus:outline-none ring-offset-0 cursor-pointer">
            More Blogs 
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right ml-2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  </main>

  <section class="bg-gradient-to-b from-[#e6f0fc] via-white to-white py-12 lg:py-16">
    <div class="max-w-[1400px] px-8 mx-auto">
      <div class="mb-0 mx-auto py-2 lg:pl-0 text-black grid grid-cols-1 gap-2 lg:gap-3">
        <h2 class="text-gray-900 text-xl lg:text-2xl font-bold leading-[1.2] max-w-[600px] ">
          Our partner institutions
        </h2>
        <hr class="w-12 border-t-2 border-[#0071e3] mb-4 "/>
      </div>
    </div>
    <div class="max-w-[1600px] mx-auto lg:px-8 relative overflow-hidden">
      
      <div class="absolute top-0 left-0 z-2 w-16 xl:w-64 h-full bg-gradient-to-l from-transparent via-white to-white"></div>
      <div class="absolute top-0 right-0 z-2 w-16 xl:w-64 h-full bg-gradient-to-r from-transparent via-white to-white"></div>
      
      <div id="marquee-container" class="relative overflow-hidden w-full h-12 lg:h-24 bg-white">
        <div id="marquee" class="flex absolute top-0 left-0">
          <img src="img/logo-partner/institutions-1.webp"  class="h-12 lg:h-24 p-1" loading="lazy"/>
          <img src="img/logo-partner/institutions-2.webp"  class="h-12 lg:h-24 p-1" loading="lazy"/>
          <img src="img/logo-partner/institutions-3.webp"  class="h-12 lg:h-24 p-1" loading="lazy"/>
          <img src="img/logo-partner/institutions-4.webp"  class="h-12 lg:h-24 p-1" loading="lazy"/>
          <img src="img/logo-partner/institutions-5.webp"  class="h-12 lg:h-24 p-1" loading="lazy"/>
          <img src="img/logo-partner/institutions-6.webp"  class="h-12 lg:h-24 p-1" loading="lazy"/>
          <img src="img/logo-partner/institutions-7.webp"  class="h-12 lg:h-24 p-1" loading="lazy"/>
          <img src="img/logo-partner/institutions-8.webp"  class="h-12 lg:h-24 p-1" loading="lazy"/>
          <img src="img/logo-partner/institutions-9.webp"  class="h-12 lg:h-24 p-1" loading="lazy"/>
          <img src="img/logo-partner/institutions-10.webp" class="h-12 lg:h-24 p-1" loading="lazy"/>
          <img src="img/logo-partner/institutions-11.webp" class="h-12 lg:h-24 p-1" loading="lazy"/>
          <img src="img/logo-partner/institutions-12.webp" class="h-12 lg:h-24 p-1" loading="lazy"/>
          <img src="img/logo-partner/institutions-13.webp" class="h-12 lg:h-24 p-1" loading="lazy"/>
          <img src="img/logo-partner/institutions-14.webp" class="h-12 lg:h-24 p-1" loading="lazy"/>
          <img src="img/logo-partner/institutions-15.webp" class="h-12 lg:h-24 p-1" loading="lazy"/>
          <img src="img/logo-partner/institutions-16.webp" class="h-12 lg:h-24 p-1" loading="lazy"/>
          <img src="img/logo-partner/institutions-17.webp" class="h-12 lg:h-24 p-1" loading="lazy"/>
          <img src="img/logo-partner/institutions-18.webp" class="h-12 lg:h-24 p-1" loading="lazy"/>
          <img src="img/logo-partner/institutions-19.webp" class="h-12 lg:h-24 p-1" loading="lazy"/>
          <img src="img/logo-partner/institutions-20.webp" class="h-12 lg:h-24 p-1" loading="lazy"/>
        </div>
      </div>    
    </div>
  </section>

  <footer class="bg-gradient-to-br from-[#296be3] to-[#21186b] pt-8 lg:py-16 lg:pb-8">
    <div class="max-w-[1400px] mb-8 lg:mb-24 px-8 py-4 lg:py-0 mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr]  gap-8 lg:gap-16">
      <div>
        <div class="mb-0 mx-auto py-2 lg:pl-0 text-white grid grid-cols-1 gap-2 lg:gap-3">
          <h2 class="text-2xl lg:text-2xl font-bold leading-[1.2] max-w-[600px]">
            Subscribe to our Newsletter!
          </h2>
          <hr class="w-12 border-t-2 border-[#fff] mb-4"/>
         <p class="text-gray-300 text-sm lg:text-base mb-4 lg:mb-8 lg:max-w-[800px] text-center">Receive the latest news and exclusive offers to search colleges</p>
        </div>
        <form>
          <div class="w-full flex flex-col md:flex-row gap-2">
            <div class="w-full lg:max-w-[500px] relative">
              <input type="email" placeholder="Your Email Address..." class="text-gray-800 placeholder-gray-500 w-full bg-white border border-gray-300 rounded p-3 pl-11 pr-11 outline-none"/>
              <div class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-open-icon lucide-mail-open stroke-gray-500 stroke-[1.5] w-6 h-6"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/></svg>
              </div>
            </div>
            <div class="btn-wrap">
              <a class="min-w-[160px] min-h-[50px] bg-[#3c65e3] px-6 py-2 text-[#CBD5E1] rounded lg:text-[#fff] hover:bg-[#2b54d2] hover:text-[#8ba5e0] lg:hover:text-[#fff] font-normal transition w-full lg:w-auto flex justify-center items-center cursor-pointer">Subscribe</a>
            </div>   
          </div>
        </form>
      </div>
      <div>
        <div class="mb-0 mx-auto py-2 lg:pl-0 text-white grid grid-cols-1 gap-2 lg:gap-3">
          <h2 class="text-2xl lg:text-2xl font-bold leading-[1.2] max-w-[600px]">
            Get Connected
          </h2>
          <hr class="w-12 border-t-2 border-[#fff] mb-4"/>
       <p class="text-gray-300 text-sm lg:text-base mb-4 lg:mb-8 lg:max-w-[800px] text-center">Receive the latest news and exclusive offers to search colleges</p>
        </div>
        <ul class="flex space-x-3 mt-0 [&>li]:before:top-[0]">
          <li>
            <a href="https://www.facebook.com/AdviseBridge/" target="_blank" class="border border-gray-400 rounded w-10 h-10 flex items-center justify-center hover:bg-white hover:text-white hover:border-white [&>svg>path]:fill-white/80 hover:[&>svg>path]:fill-[#121727]">
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.18848 10.125L9.6884 6.86742H6.56266V4.75348C6.56266 3.86227 6.9993 2.99355 8.39922 2.99355H9.82023V0.220078C9.82023 0.220078 8.5307 0 7.29777 0C4.72363 0 3.04105 1.56023 3.04105 4.38469V6.86742H0.179688V10.125H3.04105V18H6.56266V10.125H9.18848Z"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://x.com/AdviseBridge" target="_blank" class="border border-gray-400 rounded w-10 h-10 flex items-center justify-center hover:bg-white hover:text-white hover:border-white [&>svg>path]:fill-white/80 hover:[&>svg>path]:fill-[#121727]">
             <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1498 4.33383C16.1612 4.49372 16.1612 4.65364 16.1612 4.81354C16.1612 9.69043 12.4493 15.3098 5.66499 15.3098C3.57488 15.3098 1.63326 14.7044 0 13.6537C0.296966 13.6879 0.582471 13.6993 0.890863 13.6993C2.61546 13.6993 4.20305 13.1169 5.47083 12.1232C3.84899 12.0889 2.48985 11.0268 2.02156 9.56482C2.25001 9.59906 2.47842 9.62191 2.71829 9.62191C3.0495 9.62191 3.38074 9.57621 3.6891 9.4963C1.99875 9.15363 0.730936 7.66887 0.730936 5.87572V5.83005C1.22204 6.10416 1.79315 6.27548 2.39844 6.2983C1.40478 5.63584 0.753788 4.50514 0.753788 3.22594C0.753788 2.54068 0.936496 1.9125 1.25631 1.36427C3.07232 3.60286 5.80203 5.06476 8.86293 5.22469C8.80583 4.95058 8.77155 4.66507 8.77155 4.37953C8.77155 2.34651 10.4162 0.69043 12.4607 0.69043C13.5228 0.69043 14.4822 1.13586 15.1561 1.85541C15.9898 1.69552 16.7893 1.38712 17.4975 0.964544C17.2233 1.82116 16.6409 2.54071 15.8756 2.99753C16.618 2.91762 17.3376 2.71199 18 2.42649C17.4975 3.15742 16.8693 3.80841 16.1498 4.33383Z"/>
              </svg>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.7,7.3l5.9-6.9h-1.8L9.9,6.1L5.8,0.3H0.1l6.7,9.5L0,17.7h1.8L7.5,11l4.7,6.7H18L10.7,7.3z M2.8,1.8H5
                  l10.2,14.4H13L2.8,1.8z"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/advisebridge/" target="_blank" class="border border-gray-400 rounded w-10 h-10 flex items-center justify-center hover:bg-white hover:text-white hover:border-white [&>svg>path]:fill-white/80 hover:[&>svg>path]:fill-[#121727]">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.02911 17.9996H0.297321V5.98219H4.02911V17.9996ZM2.16121 4.3429C0.967902 4.3429 0 3.35451 0 2.16121C8.54116e-09 1.58802 0.227698 1.03831 0.633002 0.633002C1.03831 0.227698 1.58802 0 2.16121 0C2.73439 0 3.2841 0.227698 3.68941 0.633002C4.09471 1.03831 4.32241 1.58802 4.32241 2.16121C4.32241 3.35451 3.35411 4.3429 2.16121 4.3429ZM17.996 17.9996H14.2722V12.1496C14.2722 10.7554 14.2441 8.96746 12.332 8.96746C10.3918 8.96746 10.0945 10.4822 10.0945 12.0492V17.9996H6.3667V5.98219H9.9458V7.62147H9.99804C10.4962 6.67728 11.7133 5.68085 13.5289 5.68085C17.3057 5.68085 18 8.1679 18 11.3983V17.9996H17.996Z"/>
              </svg>

            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/advisebridges/" target="_blank" class="border border-gray-400 rounded w-10 h-10 flex items-center justify-center hover:bg-white hover:text-white hover:border-white [&>svg>path]:fill-white/80 hover:[&>svg>path]:fill-[#121727]">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.00201 4.386C6.44808 4.386 4.38806 6.44601 4.38806 8.99995C4.38806 11.5539 6.44808 13.6139 9.00201 13.6139C11.5559 13.6139 13.616 11.5539 13.616 8.99995C13.616 6.44601 11.5559 4.386 9.00201 4.386ZM9.00201 11.9996C7.35159 11.9996 6.00234 10.6544 6.00234 8.99995C6.00234 7.34551 7.34757 6.00028 9.00201 6.00028C10.6564 6.00028 12.0017 7.34551 12.0017 8.99995C12.0017 10.6544 10.6524 11.9996 9.00201 11.9996ZM14.8809 4.19727C14.8809 4.7956 14.399 5.27345 13.8047 5.27345C13.2064 5.27345 12.7285 4.79158 12.7285 4.19727C12.7285 3.60296 13.2104 3.12108 13.8047 3.12108C14.399 3.12108 14.8809 3.60296 14.8809 4.19727ZM17.9368 5.28952C17.8685 3.84791 17.5392 2.57094 16.4831 1.51885C15.431 0.466761 14.154 0.13748 12.7124 0.0651991C11.2267 -0.0191289 6.77334 -0.0191289 5.28756 0.0651991C3.84997 0.133465 2.57301 0.462745 1.5169 1.51484C0.460792 2.56693 0.135527 3.84389 0.063246 5.2855C-0.021082 6.77128 -0.021082 11.2246 0.063246 12.7104C0.131511 14.152 0.460792 15.4289 1.5169 16.481C2.57301 17.5331 3.84596 17.8624 5.28756 17.9347C6.77334 18.019 11.2267 18.019 12.7124 17.9347C14.154 17.8664 15.431 17.5371 16.4831 16.481C17.5352 15.4289 17.8645 14.152 17.9368 12.7104C18.0211 11.2246 18.0211 6.77529 17.9368 5.28952ZM16.0173 14.3046C15.7041 15.0916 15.0977 15.698 14.3066 16.0152C13.122 16.4851 10.3111 16.3766 9.00201 16.3766C7.69292 16.3766 4.87797 16.481 3.69738 16.0152C2.91032 15.702 2.30396 15.0957 1.98673 14.3046C1.5169 13.12 1.62532 10.309 1.62532 8.99995C1.62532 7.69085 1.52091 4.87591 1.98673 3.69532C2.29994 2.90826 2.9063 2.3019 3.69738 1.98466C4.88199 1.51484 7.69292 1.62326 9.00201 1.62326C10.3111 1.62326 13.126 1.51885 14.3066 1.98466C15.0937 2.29788 15.7001 2.90424 16.0173 3.69532C16.4871 4.87992 16.3787 7.69085 16.3787 8.99995C16.3787 10.309 16.4871 13.124 16.0173 14.3046Z"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@AdviseBridge" target="_blank" class="border border-gray-400 rounded w-10 h-10 flex items-center justify-center hover:bg-white hover:text-white hover:border-white [&>svg>path]:fill-white/80 hover:[&>svg>path]:fill-[#121727]">
              <svg width="18" height="18" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M49.5,15c0,0-0.5-3.4-2-5c-1.9-2-4-2-5-2.1C35.5,7.4,25,7.4,25,7.4h0c0,0-10.5,0-17.5,0.5c-1,0.1-3.1,0.1-5,2.1
                c-1.5,1.5-2,5-2,5S0,19,0,23.1v3.8c0,4,0.5,8.1,0.5,8.1s0.5,3.4,2,5c1.9,2,4.4,1.9,5.5,2.1c4,0.4,17,0.5,17,0.5s10.5,0,17.5-0.5
                c1-0.1,3.1-0.1,5-2.1c1.5-1.5,2-5,2-5s0.5-4,0.5-8.1v-3.8C50,19.1,49.5,15,49.5,15L49.5,15L49.5,15L49.5,15z M19.8,31.5V17.4l13.5,7
                L19.8,31.5z"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="max-w-[1400px] px-8 mx-auto relative">
      <div class="flex flex-wrap xl:justify-between gap-y-4 text-sm text-mywhitelighttext">

        <div class="w-1/2 md:w-1/3 xl:w-1/5 mb-4">
          <h5 class="text-base font-bold text-white mb-6">Company</h5>
          <ul class="[&>li]:mb-2 mb-2 [&>li>a]:text-gray-300 [&>li>a]:text-xs lg:[&>li>a]:text-sm [&>li>a]:font-light [&>li:hover>a]:text-white">
            <li><a href="about.html">About</a></li>
            <li><a href="career.html">Career</a></li>
            <li><a href="contact.html">Contact Us</a></li>
            <li><a href="achievement.html">Achievement</a></li>
          </ul>
        </div>

        <div class="w-1/2 md:w-1/3 xl:w-1/5 mb-4">
          <h5 class="text-base font-bold text-white mb-6">Services</h5>
          <ul class="[&>li]:mb-2 mb-2 [&>li>a]:text-gray-300 [&>li>a]:text-xs lg:[&>li>a]:text-sm [&>li>a]:font-light [&>li:hover>a]:text-white">
            <li><a href="students.html">Students</a></li>
            <li><a href="advisors.html">Advisors</a></li>
            <li><a href="institutions.html">Institutions</a></li>
            <li><a href="explore.html">Explore</a></li>
          </ul>
        </div>

        <div class="w-1/2 md:w-1/3 xl:w-1/5 mb-4">
          <h5 class="text-base font-bold text-white mb-6">Legal</h5>
          <ul class="[&>li]:mb-2 mb-2 [&>li>a]:text-gray-300 [&>li>a]:text-xs lg:[&>li>a]:text-sm [&>li>a]:font-light [&>li:hover>a]:text-white">
            <li><a href="terms_conditions.html">Terms &amp; conditions</a></li>
            <li><a href="disclaimer.html">Disclaimer</a></li>
            <li><a href="privacy_policy.html">Privacy policy</a></li>
            <li><a href="refund_policy.html">Refund policy</a></li>
            <li><a href="cost_policy.html">Cost policy</a></li>
          </ul>
        </div>

        <div class="w-1/2 md:w-1/3 xl:w-1/5 mb-4">
          <h5 class="text-base font-bold text-white mb-6">Resources</h5>
          <ul class="[&>li]:mb-2 mb-2 [&>li>a]:text-gray-300 [&>li>a]:text-xs lg:[&>li>a]:text-sm [&>li>a]:font-light [&>li:hover>a]:text-white">
            <li><a href="blogs.html">Blogs</a></li>
            <li><a href="faqs.html">FAQs</a></li>
            <li><a href="eligibility_criteria.html">Eligibility Criteria</a></li>
          </ul>
        </div>

        <div class="w-full md:w-1/3 xl:w-1/5 mb-4">
          <img src="img/logo/logo_white.svg" alt="Advise Bridge Logo" class="w-48 h-auto mb-4" loading="lazy"/>
          <p class="text-gray-300 text-sm font-light mb-3 lg:mb-6">AdviseBridge connects students & institutions globally.</p>
          <div class="flex flex-wrap gap-4">
            <a href="https://www.icef.com/agency-accreditation-agencies-only/" class="bg-white rounded w-16 h-16 flex justify-center items-center cursor-pointer">
              <img src="img/achievement-1.webp" alt="Image Description" class="w-[60%]" loading="lazy"/>
            </a>
            <a href="https://isana.org.au/" class="bg-white rounded w-16 h-16 flex justify-center items-center cursor-pointer">
              <img src="img/achievement-2.webp" alt="Image Description" class="w-[70%]" loading="lazy"/>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6 lg:mt-12 border-t border-white/7 pt-2 lg:pt-12">
      <div class="max-w-[1400px] px-8 py-4 lg:py-0 mx-auto">
        <p class="text-gray-300 text-sm font-light mb-2 lg:mb-4">AdviseBridge © 2025. All rights reserved.</p>
      </div>
    </div>
  </footer>

    </div>
  );
}

export default Home;
