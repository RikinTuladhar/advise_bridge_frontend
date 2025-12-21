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
    </div>
  );
}

export default Home;
