import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight, MailOpen, Calendar, CircleX, GraduationCap, Book,
  XCircle, ArrowUp, Menu, X, ChevronDown
} from 'lucide-react';
import axios from 'axios';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({ lang: 'English', flag: 'us' });
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [educationSearch, setEducationSearch] = useState('');
  const [courseSearch, setCourseSearch] = useState('');
  const [showEducationList, setShowEducationList] = useState(false);
  const [showCourseList, setShowCourseList] = useState(false);

  // API data states
  const [educationLevels, setEducationLevels] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const langMenuRef = useRef(null);
  const educationListRef = useRef(null);
  const courseListRef = useRef(null);

  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);

  const languages = [
    { lang: 'English', flag: 'us' },
    { lang: 'Korean', flag: 'kr' },
    { lang: 'Spanish', flag: 'es' },
    { lang: 'Vietnamese', flag: 'vn' },
    { lang: 'French', flag: 'fr' }
  ];

  // Fetch data from API
  useEffect(() => {
    const fetchFilters = async () => {
      try {
        setLoading(true);
        console.log('Fetching API from: https://advisebridge.com/api/v1/search/filters');

        const response = await axios.get('https://advisebridge.com/api/v1/search/filters');

        // Debug log
        console.log('=== API RESPONSE DEBUG ===');
        console.log('Status:', response.status);
        console.log('Full response:', response);
        console.log('Response data:', response.data.educationLevels);
        console.log('Response keys:', Object.keys(response.data));
        console.log('Response.data.data:', response.data?.data);
        console.log('==========================');

        // Handle different possible API structures
        if (response.data) {
          // Try nested structure first
          if (response.data.data) {
            console.log(response.data);
            const { educationLevels, courses } = response.data.data;
            console.log('Using nested structure');
            console.log('Education levels found:', educationLevels?.length);
            console.log('Courses found:', courses?.length);
            setEducationLevels(educationLevels || []);
            setCourses(courses || []);
          }
          // Try direct structure
          else if (response.data.educationLevels || response.data.courses) {
            console.log('Using direct structure');
            setEducationLevels(response.data.educationLevels || []);
            setCourses(response.data.courses || []);
          }
          // Try alternative property names
          else {
            console.log('Checking for alternative property names');
            const data = response.data;
            setEducationLevels(
              data.education_levels ||
              data.educations ||
              data.levels ||
              []
            );
            setCourses(
              data.programs ||
              data.majors ||
              data.subjects ||
              []
            );
          }
        }

        setLoading(false);
      } catch (err) {
        setError('Failed to load filter data: ' + err.message);
        setLoading(false);
        console.error('Error fetching filters:', err);

        // Fallback to sample data if API fails
        setEducationLevels([
          'High School',
          'Associate Degree',
          'Bachelor\'s Degree',
          'Master\'s Degree',
          'Doctoral Degree',
          'Certificate Program'
        ]);

        setCourses([
          'Business Administration',
          'Computer Science',
          'Engineering',
          'Medicine',
          'Law',
          'Arts & Humanities',
          'Sciences',
          'Social Sciences'
        ]);
      }
    };
    fetchFilters();
  }, []);

  // Handle click outside for dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setIsLangMenuOpen(false);
      }
      if (educationListRef.current && !educationListRef.current.contains(event.target)) {
        setShowEducationList(false);
      }
      if (courseListRef.current && !courseListRef.current.contains(event.target)) {
        setShowCourseList(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLanguageSelect = (lang, flag) => {
    setSelectedLanguage({ lang, flag });
    setIsLangMenuOpen(false);
  };

  const handleEducationSelect = (level) => {
    setEducationSearch(level);
    setShowEducationList(false);
  };

  const handleCourseSelect = (course) => {
    setCourseSearch(course);
    setShowCourseList(false);
  };

  const clearEducationSearch = () => {
    setEducationSearch('');
  };

  const clearCourseSearch = () => {
    setCourseSearch('');
  };

  // Helper function to extract display text from API data
  const getDisplayText = (item) => {
    // Check if API returns objects or strings
    if (typeof item === 'object') {
      // Adjust property names based on actual API response structure
      return item.name || item.title || item.label || JSON.stringify(item);
    }
    return item;
  };

  // Filter education levels based on search
  const filteredEducationLevels = educationLevels.filter(item => {
    const displayText = getDisplayText(item).toLowerCase();
    return displayText.includes(educationSearch.toLowerCase());
  });

  // Filter courses based on search
  const filteredCourses = courses.filter(item => {
    const displayText = getDisplayText(item).toLowerCase();
    return displayText.includes(courseSearch.toLowerCase());
  });

  // Marquee animation effect
  useEffect(() => {
    const marquee = document.getElementById('marquee');
    if (marquee) {
      const container = document.getElementById('marquee-container');
      const clone = marquee.cloneNode(true);
      container.appendChild(clone);

      let position = 0;
      const speed = 1;

      const animate = () => {
        position -= speed;
        if (position <= -marquee.offsetWidth) {
          position = 0;
        }
        marquee.style.transform = `translateX(${position}px)`;
        if (clone) {
          clone.style.transform = `translateX(${position + marquee.offsetWidth}px)`;
        }
        requestAnimationFrame(animate);
      };

      animate();
    }
  }, []);

  return (
    <div className="font-inter">
      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-50 shadow-md">
        <div className="bg-gradient-to-br from-[#296be3] to-[#21186b]">
          <div className="max-w-[1400px] mx-auto px-8 text-white flex flex-col md:flex-row justify-end items-center md:gap-12">
            <div className="relative inline-block text-left" ref={langMenuRef}>
              <button
                id="lang-btn"
                className="flex items-center gap-2 border-l border-r border-[#4c57c8] px-5 py-2 pr-3 cursor-pointer outline-none"
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              >
                <img
                  id="lang-flag"
                  src={`https://flagcdn.com/w20/${selectedLanguage.flag}.png`}
                  alt={`${selectedLanguage.lang} Flag`}
                  className="w-4 h-3 border border-[#4c57c8] rounded-xs"
                  loading="lazy"
                />
                <span id="lang-text" className="text-gray-200 text-sm">
                  {selectedLanguage.lang}
                </span>
                <ChevronDown className="dropdown-arrow w-4 h-4 text-gray-200" />
              </button>

              <div
                id="lang-menu"
                className={`${isLangMenuOpen ? 'block' : 'hidden'
                  } absolute z-50 right-0 mt-0 w-40 bg-white rounded-lg text-gray-700 shadow-2xl overflow-hidden`}
              >
                <ul>
                  {languages.map(({ lang, flag }) => (
                    <li
                      key={lang}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                      onClick={() => handleLanguageSelect(lang, flag)}
                    >
                      <img
                        src={`https://flagcdn.com/w20/${flag}.png`}
                        alt={flag.toUpperCase()}
                        className="w-4 h-3 rounded-xs"
                        loading="lazy"
                      />
                      {lang}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#fff]">
          <div className="max-w-[1400px] mx-auto px-8 py-4 lg:py-4 relative z-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center min-w-[220px] relative">
                <a href="/">
                  <img
                    src="img/logo_blue.svg"
                    alt="AdviseBridge"
                    className="h-8 lg:h-12 w-auto"
                    loading="lazy"
                  />
                </a>
              </div>
              <nav
                id="mobile-nav"
                className={`${isMenuOpen ? 'flex' : 'hidden'
                  } lg:flex min-h-screen lg:min-h-auto w-full justify-center lg:justify-end items-center fixed left-0 right-0 top-0 bottom-0 z-50 lg:relative bg-[#1a1e6b] lg:bg-transparent`}
              >
                <button
                  id="menu-close"
                  className="flex justify-center items-center w-12 h-12 ml-auto mt-4 mr-4 lg:hidden text-white absolute -right-4 -top-4 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <CircleX className="hover:text-red-500 transition-colors duration-200" />
                </button>
                <ul className="navigation w-full lg:w-auto max-h-[100vh] lg:max-h-auto overflow-y-auto space-y-1 lg:space-y-0 mx-8 lg:mx-0 py-8 lg:py-0 text-base flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
                  <li className="block lg:hidden px-0 py-4 rounded">
                    <a href="/">
                      <img
                        src="img/logo/logo_white.svg"
                        alt="Lord's Light Academy Logo"
                        className="h-8 md:h-12 w-auto lg:absolute lg:top-[-42px] lg:z-1"
                        loading="lazy"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="/student"
                      className="text-[#CBD5E1] lg:text-gray-700 hover:text-[#8ba5e0] lg:hover:text-[#0071e3] font-normal transition w-full lg:w-auto lg:flex justify-center items-center"
                    >
                      Student
                    </a>
                  </li>
                  <li>
                    <a
                      href="/advisor"
                      className="text-[#CBD5E1] lg:text-gray-700 hover:text-[#8ba5e0] lg:hover:text-[#0071e3] font-normal transition w-full lg:w-auto lg:flex justify-center items-center"
                    >
                      Advisor
                    </a>
                  </li>
                  <li>
                    <a
                      href="/institution"
                      className="text-[#CBD5E1] lg:text-gray-700 hover:text-[#8ba5e0] lg:hover:text-[#0071e3] font-normal transition w-full lg:w-auto lg:flex justify-center items-center"
                    >
                      Institution
                    </a>
                  </li>
                  <li>
                    <a
                      href="/explore"
                      className="text-[#CBD5E1] lg:text-gray-700 hover:text-[#8ba5e0] lg:hover:text-[#0071e3] font-normal transition w-full lg:w-auto lg:flex justify-center items-center"
                    >
                      Explore
                    </a>
                  </li>
                  <li className="flex flex-col sm:flex-row gap-2 mt-8 lg:mt-0">
                    <a
                      href="/login"
                      className="bg-transparent border border-gray-400 hover:border-[#3c65e3] px-6 py-2 text-white rounded lg:text-gray-700 hover:bg-[#2b54d2] lg:hover:text-[#fff] font-normal transition w-full lg:w-auto flex justify-center items-center"
                    >
                      Login
                    </a>
                    <a
                      href="/register"
                      className="bg-[#3c65e3] px-6 py-2 rounded lg:text-[#fff] hover:bg-[#2b54d2] text-white lg:hover:text-[#fff] font-normal transition w-full lg:w-auto flex justify-center items-center"
                    >
                      Register
                    </a>
                  </li>
                </ul>
              </nav>

              <button
                className="lg:hidden flex flex-col justify-center gap-1.5 cursor-pointer"
                id="menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="block w-6 h-[2px] bg-gray-800"></span>
                <span className="block w-6 h-[2px] bg-gray-800"></span>
                <span className="block w-6 h-[2px] bg-gray-800"></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Banner */}
      <div className="bg-gradient-to-br from-[#296be3] to-[#21186b] py-0 pt-8 lg:py-20 mt-[96px] lg:mt-[116px] xl:mt-[100px] h-[90vh] md:h-[70vh] lg:h-[80vh] xl:h-[86vh] xl:max-h-[720px] flex items-center">
        <div className="max-w-[1400px] w-full mx-auto px-8 mb-8">
          <div className="w-full flex flex-col lg:flex-row items-center">
            <div className="w-full text-white flex flex-col gap-6 lg:w-[55%] xl:w-[60%]">
              <div className="flex items-center space-x-2 -mb-4">
                <div className="flex -space-x-2">
                  <img
                    alt=""
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    loading="lazy"
                  />
                  <img
                    alt=""
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://randomuser.me/api/portraits/men/46.jpg"
                    loading="lazy"
                  />
                  <img
                    alt=""
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://randomuser.me/api/portraits/women/47.jpg"
                    loading="lazy"
                  />
                  <img
                    alt=""
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://randomuser.me/api/portraits/men/49.jpg"
                    loading="lazy"
                  />
                </div>
                <span className="text-sm font-light text-gray-200">
                  10K+ students and counting
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-[1.2] max-w-[900px] tracking-wide">
                Navigate Your Study Abroad Journey With{' '}
                <span className="text-[#e7a62a]">Confidence</span>
              </h2>

              <div className="w-full flex flex-col md:flex-row lg:flex-col xl:flex-row gap-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="relative" ref={educationListRef}>
                    <div className="relative">
                      <input
                        type="text"
                        id="educationSearch"
                        placeholder={loading ? "Loading education levels..." : "Select Education Level"}
                        className="text-gray-800 placeholder-gray-500 w-full bg-white border border-gray-300 rounded p-3 pl-11 pr-11 outline-none"
                        value={educationSearch}
                        onChange={(e) => setEducationSearch(e.target.value)}
                        onFocus={() => setShowEducationList(true)}
                        disabled={loading}
                      />
                      <div
                        id="courseIcon"
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                      >
                        <GraduationCap className="stroke-gray-500 stroke-[1.5] w-6 h-6" />
                      </div>
                      {educationSearch && (
                        <div
                          id="educationClear"
                          className="absolute right-3 top-1/2 -translate-y-1/2 clear-icon text-gray-500 hover:text-red-500 transition-colors duration-200 cursor-pointer"
                          onClick={clearEducationSearch}
                        >
                          <XCircle />
                        </div>
                      )}
                    </div>
                    <ul
                      id="educationList"
                      className={`absolute w-full bg-white border rounded mt-1 dropdown-list ${showEducationList ? 'block' : 'hidden'
                        } z-20 shadow text-black max-h-60 overflow-y-auto`}
                    >
                      {
                      loading ? (
                        <li className="px-4 py-2 text-gray-500">Loading education levels...</li>
                      ) : error ? (
                        <li className="px-4 py-2 text-red-500">{error}</li>
                      ) : filteredEducationLevels.length === 0 ? (
                        <li className="px-4 py-2 text-gray-500">No results found</li>
                      ) : (
                        filteredEducationLevels.map((level, index) => {
                          const displayText = getDisplayText(level);
                          return (
                            <li
                              key={index}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                              onClick={() => handleEducationSelect(displayText)}
                            >
                              {displayText}
                            </li>
                          );
                        })
                      )}
                    </ul>
                  </div>

                  <div className="relative" ref={courseListRef}>
                    <div className="relative">
                      <input
                        type="text"
                        id="courseSearch"
                        placeholder={loading ? "Loading courses..." : "Select Course/Program"}
                        className="text-gray-800 placeholder-gray-500 w-full bg-white border border-gray-300 rounded p-3 pl-11 pr-11 outline-none"
                        value={courseSearch}
                        onChange={(e) => setCourseSearch(e.target.value)}
                        onFocus={() => setShowCourseList(true)}
                        disabled={loading}
                      />
                      <div
                        id="educationIcon"
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                      >
                        <Book className="stroke-gray-500 stroke-[1.5] w-5 h-5" />
                      </div>
                      {courseSearch && (
                        <div
                          id="courseClear"
                          className="absolute right-3 top-1/2 -translate-y-1/2 clear-icon text-gray-500 hover:text-red-500 transition-colors duration-200 cursor-pointer"
                          onClick={clearCourseSearch}
                        >
                          <XCircle />
                        </div>
                      )}
                    </div>
                    <ul     
                      id="courseList"
                      className={`absolute w-full bg-white border rounded mt-1 dropdown-list ${showCourseList ? 'block' : 'hidden'
                        } z-20 shadow text-black max-h-60 overflow-y-auto`}
                    >
                      {loading ? (
                        <li className="px-4 py-2 text-gray-500">Loading courses...</li>
                      ) : error ? (
                        <li className="px-4 py-2 text-red-500">{error}</li>
                      ) : filteredCourses.length === 0 ? (
                        <li className="px-4 py-2 text-gray-500">No results found</li>
                      ) : (
                        filteredCourses.map((course, index) => {
                          const displayText = getDisplayText(course);
                          return (
                            <li
                              key={index}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                              onClick={() => handleCourseSelect(displayText)}
                            >
                              {displayText}
                            </li>
                          );
                        })
                      )}
                    </ul>
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
                <img
                  src="img/polygon-svg-gradient.svg"
                  className="max-w-[420px] w-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[30px] opacity-20"
                  loading="lazy"
                  alt="Gradient background"
                />
                <img
                  src="img/student-ai.webp"
                  className="max-w-[381px] object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_16px_32px_rgba(0,0,0,.5)]"
                  loading="lazy"
                  alt="Student AI"
                />
                {/* SVG decorations */}
                <div className="absolute bottom-[153px] left-[-20px] drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)] bob">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 761.7 741.1"
                    style={{ width: '114px' }}
                  >
                    <clipPath id="shapeClip">
                      <path d="M280.3,32.7L70.5,185c-60,43.6-85.1,120.8-62.2,191.3l80.1,246.5c22.9,70.5,88.6,118.2,162.7,118.2h259.2
                        c74.1,0,139.8-47.7,162.7-118.2l80.1-246.5c22.9-70.5-2.2-147.7-62.2-191.3L481.4,32.7C421.4-10.9,340.2-10.9,280.3,32.7z" />
                    </clipPath>
                    <image
                      className="bg-blue-500"
                      href="img/z-1.webp"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="xMidYMid slice"
                      clipPath="url(#shapeClip)"
                    />
                  </svg>
                </div>
                <div className="absolute top-[156px] right-[-6px] drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)] bob-2">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 761.7 741.1"
                    style={{ width: '96px' }}
                  >
                    <clipPath id="shapeClip2">
                      <path d="M280.3,32.7L70.5,185c-60,43.6-85.1,120.8-62.2,191.3l80.1,246.5c22.9,70.5,88.6,118.2,162.7,118.2h259.2
                        c74.1,0,139.8-47.7,162.7-118.2l80.1-246.5c22.9-70.5-2.2-147.7-62.2-191.3L481.4,32.7C421.4-10.9,340.2-10.9,280.3,32.7z" />
                    </clipPath>
                    <image
                      className="bg-blue-500"
                      href="img/z-2.webp"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="xMidYMid slice"
                      clipPath="url(#shapeClip2)"
                    />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 ml-4 mb-[-40px] drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)] bob-3">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 761.7 741.1"
                    style={{ width: '72px' }}
                  >
                    <clipPath id="shapeClip3">
                      <path d="M280.3,32.7L70.5,185c-60,43.6-85.1,120.8-62.2,191.3l80.1,246.5c22.9,70.5,88.6,118.2,162.7,118.2h259.2
                        c74.1,0,139.8-47.7,162.7-118.2l80.1-246.5c22.9-70.5-2.2-147.7-62.2-191.3L481.4,32.7C421.4-10.9,340.2-10.9,280.3,32.7z" />
                    </clipPath>
                    <image
                      className="bg-blue-500"
                      href="img/z-3.webp"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="xMidYMid slice"
                      clipPath="url(#shapeClip3)"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="flex flex-col flex-1 w-full overflow-hidden">
        {/* Bridging Section */}
        <section className="bg-white py-12 pb-8 lg:py-24 lg:pb-24">
          <div className="max-w-[1400px] mx-auto">
            <div className="px-8 mb-8 lg:mb-24">
              <h3 className="text-gray-900 text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.2] mb-2">
                Bridging Educational Opportunities
              </h3>
              <hr className="w-12 border-t-2 border-[#0071e3] mb-4" />
              <p className="text-gray-700 text-sm lg:text-base mb-4 lg:mb-8 lg:max-w-[800px]">
                AdviseBridge connects you to global education with the right programs and universities
              </p>
            </div>
            <div className="lg:px-8 flex flex-col md:flex-row gap-8">
              {[
                {
                  img: 'img/bridging-img-1.webp',
                  title: 'Spend less time valuating applications',
                  desc: 'AdviseBridge ensures your applications are complete with all documents included'
                },
                {
                  img: 'img/bridging-img-2.webp',
                  title: 'Access global market and reputation',
                  desc: 'AdviseBridge offers expert consultation for studying abroad'
                },
                {
                  img: 'img/bridging-img-3.webp',
                  title: 'Tools to organize your school search',
                  desc: 'Powerful tools to connect you with your choice schools & programs'
                }
              ].map((item, index) => (
                <div key={index} className="flex-1 overflow-hidden cursor-auto border-gray-300 md:border-none px-8 lg:px-0">
                  <div className="w-full overflow-hidden box-design mb-4 lg:mb-8">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="max-w-[114px] xl:max-w-[214px] w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h6 className="text-gray-900 text-lg lg:text-xl font-bold leading-6 mb-2">
                    {item.title}
                  </h6>
                  <p className="text-gray-700 text-sm lg:text-base font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Section */}
        <section className="bg-blue-50 py-12 lg:py-24">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-6 px-8 xl:mb-16">
              <h3 className="text-gray-900 text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.2] mb-2">
                Trending Study Areas
              </h3>
              <hr className="w-12 border-t-2 border-[#0071e3] mb-4" />
            </div>

            <div className="px-8 lg:mb-4 flex flex-col xl:flex-row gap-8 xl:gap-16 bg-transparent relative">
              <div className="full xl:w-1/3 order-2 xl:order-1">
                <p className="text-gray-700 text-base mb-4 lg:mb-8 lg:max-w-[800px] hidden xl:block">
                  Quality-driven approach to international study applications. Today, embarking on your global academic journey is just a few clicks away.
                </p>
                <h5 className="text-base font-bold text-gray-900 mb-4">
                  Begin with these trending majors
                </h5>
                <div className="btn-wrap flex flex-wrap">
                  <a
                    href="/trending_majors"
                    className="inline-flex items-center w-auto h-12 px-8 font-medium bg-[#3c65e3] hover:bg-[#2b54d2] text-white rounded hover:text-gray-50 focus:outline-none ring-offset-0 cursor-pointer"
                  >
                    Explore More
                    <ArrowRight className="ml-2" size={18} />
                  </a>
                </div>
              </div>
              <div className="full xl:w-2/3 order-1 xl:order-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 xl:gap-6 mx-auto">
                  {[
                    { src: 'img/trending-1.gif', title: 'Business and Management' },
                    { src: 'img/trending-2.gif', title: 'Health and Life Science' },
                    { src: 'img/trending-3.gif', title: 'Education and Human Development' },
                    { src: 'img/trending-4.gif', title: 'Law, Policy and Public Services' }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="md:aspect-square bg-white flex flex-col justify-center items-center text-center rounded-lg lg:rounded-xl shadow-lg p-3"
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        loading="lazy"
                        width="72"
                        height="72"
                        className="mb-4"
                      />
                      <h6 className="text-sm text-gray-900 font-medium mb-2 md:mb-0">
                        {item.title}
                      </h6>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Section */}
        <section className="bg-white py-12 lg:py-24">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-6 px-8 xl:mb-16">
              <h3 className="text-gray-900 text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.2] mb-2">
                How AdviseBridge works?
              </h3>
              <hr className="w-12 border-t-2 border-[#0071e3] mb-4" />
            </div>

            <div className="px-8 lg:mb-4 flex flex-col xl:flex-row gap-8 xl:gap-16 bg-transparent relative">
              <div className="full xl:w-1/3 order-2 xl:order-1">
                <p className="text-gray-700 text-base mb-4 lg:mb-8 lg:max-w-[800px] hidden xl:block">
                  AdviseBridge finds your program, guides your application, and simplifies the complex visa process. No restrictions on application submissions!
                </p>
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
                <div className="max-w-6xl mx-auto text-center">
                  <div className="flex flex-col sm:flex-row justify-center gap-6">
                    {/* For Student Video */}
                    <div className="bg-gray-200 flex flex-col w-full sm:w-1/2 rounded-xl">
                      <div className="relative w-full aspect-video overflow-hidden group rounded-tl-xl rounded-tr-xl">
                        <img
                          src="img/testimonials-1.webp"
                          alt="Parent Testimonial 1 Cover"
                          className="absolute inset-0 w-full h-full object-cover cursor-pointer group-hover:opacity-90 transition-opacity duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                          <svg width="51" height="40" viewBox="0 0 51 40" fill="none">
                            <g clipPath="url(#clip0_499_642)">
                              <rect x="16" y="9" width="19" height="23" fill="#D9D9D9" />
                              <path
                                d="M45.3076 0.279297H5.69249C2.7081 0.279297 0.276367 2.73808 0.276367 5.75569V34.2441C0.276367 37.2505 2.7081 39.7205 5.69249 39.7205H45.3076C48.292 39.7205 50.7237 37.2505 50.7237 34.2441V5.75569C50.7237 2.73808 48.292 0.279297 45.3076 0.279297ZM28.1197 25.7389L18.6691 31.2377L18.6801 20.2178L18.6912 9.19799L28.1307 14.7191L37.5703 20.2402L28.1197 25.7389Z"
                                fill="#FD2026"
                                stroke="#FD2026"
                                strokeWidth="5"
                                strokeMiterlimit="10"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_499_642">
                                <rect width="51" height="40" rx="5" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <h4 className="bg-gradient-to-br from-[#e7a62a] to-[#a8750b] px-3 py-3 flex text-sm text-white font-medium justify-center transition rounded-bl-xl rounded-br-xl">
                        For Student
                      </h4>
                    </div>

                    {/* For Advisor Video */}
                    <div className="bg-gray-200 flex flex-col w-full sm:w-1/2 rounded-xl">
                      <div className="relative w-full aspect-video overflow-hidden group rounded-tl-xl rounded-tr-xl">
                        <img
                          src="img/testimonials-2.webp"
                          alt="Parent Testimonial 2 Cover"
                          className="absolute inset-0 w-full h-full object-cover cursor-pointer group-hover:opacity-90 transition-opacity duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                          <svg width="51" height="40" viewBox="0 0 51 40" fill="none">
                            <g clipPath="url(#clip0_499_642)">
                              <rect x="16" y="9" width="19" height="23" fill="#D9D9D9" />
                              <path
                                d="M45.3076 0.279297H5.69249C2.7081 0.279297 0.276367 2.73808 0.276367 5.75569V34.2441C0.276367 37.2505 2.7081 39.7205 5.69249 39.7205H45.3076C48.292 39.7205 50.7237 37.2505 50.7237 34.2441V5.75569C50.7237 2.73808 48.292 0.279297 45.3076 0.279297ZM28.1197 25.7389L18.6691 31.2377L18.6801 20.2178L18.6912 9.19799L28.1307 14.7191L37.5703 20.2402L28.1197 25.7389Z"
                                fill="#FD2026"
                                stroke="#FD2026"
                                strokeWidth="5"
                                strokeMiterlimit="10"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_499_642">
                                <rect width="51" height="40" rx="5" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <h4 className="bg-gradient-to-br from-[#296be3] to-[#21186b] px-3 py-3 flex text-sm text-white font-medium justify-center transition rounded-bl-xl rounded-br-xl">
                        For Advisor
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Section */}
        <section className="bg-gradient-to-b from-[#296be3] to-[#21186b] py-4 lg:py-0">
          <div className="max-w-[1400px] mx-auto relative">
            <div className="bg-white hidden lg:block absolute -top-8 -bottom-8 left-8 right-8 z-1 rounded-full"></div>
            <div className="flex flex-col lg:flex-row justify-between gap-6 relative z-2">
              {[
                {
                  title: 'Why college matters?',
                  subtitle: 'The transformative impact of college education',
                  desc: 'Discover the transformative power of college education in shaping careers, independence, purpose, and lifelong learning for a fulfilling life ahead.',
                  link: '#'
                },
                {
                  title: 'Paying for college',
                  subtitle: 'How international students afford college',
                  desc: 'Explore strategies and resources for international students to finance their education in the US amidst high tuition fees, including scholarships.',
                  link: '#'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`w-full lg:w-1/2 bg-none lg:bg-gradient-to-b from-[#296be3] to-[#21186b] ${index === 0
                    ? 'pt-8 pb-0 lg:p-8 lg:py-16 lg:pt-12 lg:rounded-br-xl lg:rounded-tr-xl'
                    : 'pt-0 pb-8 lg:p-8 lg:py-16 lg:pt-12 lg:pl-12 lg:rounded-bl-xl lg:rounded-tl-xl'
                    }`}
                >
                  <div
                    className={`max-w-[1200px] w-full mx-auto px-8 lg:px-4 py-2 ${index === 0 ? 'lg:pl-0' : 'lg:pr-0'
                      } text-white grid grid-cols-1 gap-2 lg:gap-3`}
                  >
                    <div className="mb-0 py-2 lg:pl-0 text-white grid grid-cols-1 gap-2 lg:gap-3">
                      <h2 className="text-2xl lg:text-2xl font-bold leading-[1.2] max-w-[600px]">
                        {item.title}
                      </h2>
                      <hr className="w-12 border-t-2 border-[#fff] mb-4" />
                      <h5 className="text-base font-medium text-white">{item.subtitle}</h5>
                      <p className="text-gray-300 text-sm font-light mb-2 lg:mb-4">
                        {item.desc}
                      </p>
                    </div>

                    <div className="btn-wrap flex flex-wrap">
                      <a
                        href={item.link}
                        className="inline-flex items-center w-auto h-12 px-8 font-medium bg-[#3c65e3] hover:bg-[#2b54d2] text-white rounded hover:text-gray-50 focus:outline-none ring-offset-0 cursor-pointer"
                      >
                        Read More
                        <ArrowRight className="ml-2" size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Number Count Section */}
        <section className="bg-white py-10 lg:py-24 relative">
          <div className="max-w-[1400px] mx-auto px-8 flex flex-col items-center lg:flex-row gap-8 md:gap-16 bg-transparent relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mx-auto w-full">
              {[
                { number: '5,000+', desc: 'Assisted international students from 15 countries worldwide', bg: 'bg-[#e6f0fc]' },
                { number: '36+', desc: 'Top-ranked partnered institutions from USA', bg: 'bg-[#fff4e6]' },
                { number: '300+', desc: 'Recruitment partners in 8 different nations globally', bg: 'bg-[#e6f7ea]' },
                { number: '07+', desc: 'Years of expertise, built through dedication and experience', bg: 'bg-[#f1eefe]' }
              ].map((item, index) => (
                <div key={index} className={`${item.bg} flex flex-col justify-center items-center text-center rounded-xl p-5 h-[200px]`}>
                  <h2 className="mb-4 text-4xl font-bold text-gray-900 tracking-wide">
                    {item.number}
                  </h2>
                  <h6 className="text-sm text-gray-700 font-light">{item.desc}</h6>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Testimonials */}
        <section className="bg-blue-50 py-12 lg:py-24">
          <div className="max-w-[1400px] mx-auto px-8 flex flex-col lg:items-center lg:flex-row gap-8 bg-transparent relative">
            <div className="w-full lg:w-1/2 relative z-2">
              <div className="mb-6 xl:mb-16">
                <h3 className="text-gray-900 text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.2] mb-2">
                  What our Partners Say?
                </h3>
                <hr className="w-12 border-t-2 border-[#0071e3] mb-4" />
                <p className="text-gray-700 text-sm lg:text-base mb-4 lg:mb-8 lg:max-w-[800px]">
                  Partners praise AdviseBridge for its efficiency, reliability, and excellent support
                </p>
              </div>
              <h5 className="text-base font-bold text-gray-900 mb-4">
                See why our partners trust us
              </h5>
              <div className="btn-wrap flex flex-wrap">
                <a
                  href="/partners_testimonial"
                  className="inline-flex items-center w-auto h-12 px-8 font-medium bg-[#3c65e3] hover:bg-[#264ec9] text-white rounded hover:text-gray-50 focus:outline-none ring-offset-0 cursor-pointer"
                >
                  View More
                  <ArrowRight className="ml-2" size={18} />
                </a>
              </div>
            </div>
            <div className="full lg:w-1/2 relative z-1">
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 col-span-6">
                {[
                  {
                    quote: "I am working with AdviseBridge since they started their company. It's a great and easy platform, even their payment policy is very transparent with counselors. Highly recommended the company and am proud to be a member of AdviseBridge.",
                    name: 'Sumit Singh',
                    position: '- First Step, Nepal',
                    image: 'img/partner-1.webp'
                  },
                  {
                    quote: "I've had the opportunity to work with advisebridge.com, I can state this is one of the strongest platforms for connecting international students to colleges and universities abroad. I look forward to using this platform in connecting students from Vietnam to AdviseBridge partner schools.",
                    name: 'Trung Nguyen',
                    position: '- CaliVisa, Vietnam',
                    image: 'img/partner-2.webp'
                  }
                ].map((testimonial, index) => (
                  <div
                    key={index}
                    className="relative z-10 bg-white/60 backdrop-blur-lg flex flex-col lg:items-center justify-between lg:flex-row gap-4 lg:gap-10 p-5 lg:p-10 pb-6 rounded-xl shadow-lg border border-[#ededed]"
                  >
                    <div className="order-1 lg:order-none">
                      {/* Quote SVG */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 475.082 475.081"
                        x="0px"
                        y="0px"
                        width="25px"
                        height="25px"
                        xmlSpace="preserve"
                        version="1.1"
                      >
                        <g>
                          <g>
                            <path d="M 164.45 219.27 h -63.954 c -7.614 0 -14.087 -2.664 -19.417 -7.994 c -5.327 -5.33 -7.994 -11.801 -7.994 -19.417 v -9.132 c 0 -20.177 7.139 -37.401 21.416 -51.678 c 14.276 -14.272 31.503 -21.411 51.678 -21.411 h 18.271 c 4.948 0 9.229 -1.809 12.847 -5.424 c 3.616 -3.617 5.424 -7.898 5.424 -12.847 V 54.819 c 0 -4.948 -1.809 -9.233 -5.424 -12.85 c -3.617 -3.612 -7.898 -5.424 -12.847 -5.424 h -18.271 c -19.797 0 -38.684 3.858 -56.673 11.563 c -17.987 7.71 -33.545 18.132 -46.68 31.267 c -13.134 13.129 -23.553 28.688 -31.262 46.677 C 3.855 144.039 0 162.931 0 182.726 v 200.991 c 0 15.235 5.327 28.171 15.986 38.834 c 10.66 10.657 23.606 15.985 38.832 15.985 h 109.639 c 15.225 0 28.167 -5.328 38.828 -15.985 c 10.657 -10.663 15.987 -23.599 15.987 -38.834 V 274.088 c 0 -15.232 -5.33 -28.168 -15.994 -38.832 C 192.622 224.6 179.675 219.27 164.45 219.27 Z" />
                            <path d="M 459.103 235.256 c -10.656 -10.656 -23.599 -15.986 -38.828 -15.986 h -63.953 c -7.61 0 -14.089 -2.664 -19.41 -7.994 c -5.332 -5.33 -7.994 -11.801 -7.994 -19.417 v -9.132 c 0 -20.177 7.139 -37.401 21.409 -51.678 c 14.271 -14.272 31.497 -21.411 51.682 -21.411 h 18.267 c 4.949 0 9.233 -1.809 12.848 -5.424 c 3.613 -3.617 5.428 -7.898 5.428 -12.847 V 54.819 c 0 -4.948 -1.814 -9.233 -5.428 -12.85 c -3.614 -3.612 -7.898 -5.424 -12.848 -5.424 h -18.267 c -19.808 0 -38.691 3.858 -56.685 11.563 c -17.984 7.71 -33.537 18.132 -46.672 31.267 c -13.135 13.129 -23.559 28.688 -31.265 46.677 c -7.707 17.987 -11.567 36.879 -11.567 56.674 v 200.991 c 0 15.235 5.332 28.171 15.988 38.834 c 10.657 10.657 23.6 15.985 38.828 15.985 h 109.633 c 15.229 0 28.171 -5.328 38.827 -15.985 c 10.664 -10.663 15.985 -23.599 15.985 -38.834 V 274.088 C 475.082 258.855 469.76 245.92 459.103 235.256 Z" />
                          </g>
                        </g>
                      </svg>
                      <p className="text-gray-700 text-sm font-light mb-4 lg:mb-6 mt-4">
                        {testimonial.quote}
                      </p>
                      <p className="mb-4 lg:mb-6 mt-4">
                        <span className="text-sm xl:text-base text-gray-900 capitalize font-bold mr-1">
                          {testimonial.name}
                        </span>
                        <span className="text-xs xl:text-sm text-gray-600 font-light">
                          {testimonial.position}
                        </span>
                      </p>
                    </div>
                    <div className="relative shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-full w-24 h-24 object-cover 2xl:w-28 2xl:h-28"
                        loading="lazy"
                      />
                      <div className="rounded-full w-24 h-24 2xl:w-28 2xl:h-28 bg-gradient-to-r from-black to-blue-500 absolute inset-0 opacity-20"></div>
                    </div>
                  </div>
                ))}
                <div className="hidden xl:block absolute bottom-[-2rem] right-[30rem] w-72 h-72 rounded-full bg-gradient-to-br from-blue-200 to-white"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Pursue Section */}
        <section className="bg-gradient-to-br from-[#296be3] to-[#21186b] py-12 lg:py-24 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-8 flex flex-col lg:items-center lg:flex-row gap-8 bg-transparent relative z-2">
            <div className="full lg:w-1/2 order-2 lg:order-1">
              <div className="mb-6 xl:mb-16">
                <h3 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.2] mb-2">
                  Pursue Your <span className="text-[#e7a62a]">Abroad Study</span> Journey!
                </h3>
                <hr className="w-12 border-t-2 border-white mb-4" />
                <p className="text-gray-300 text-sm lg:text-base mb-4 lg:mb-8 lg:max-w-[800px]">
                  Pursue your abroad study journey today with expert guidance, personalized support, & comprehensive resources
                </p>
              </div>
              <div className="btn-wrap flex flex-wrap">
                <a
                  href="/register"
                  className="inline-flex items-center w-auto h-12 px-8 font-medium bg-[#3c65e3] hover:bg-[#264ec9] text-white rounded hover:text-gray-50 focus:outline-none ring-offset-0 cursor-pointer"
                >
                  Get Started
                  <ArrowRight className="ml-2" size={18} />
                </a>
              </div>
            </div>
            <div className="full lg:w-1/2 flex lg:justify-center items-center order-1 lg:order-2">
              <img
                src="img/pursue.webp"
                alt="Pursue abroad study"
                className="max-w-[200px] lg:max-w-[60%]"
                loading="lazy"
              />
            </div>
          </div>
          <div className="hidden xl:block absolute top-[-20%] right-[-30%] z-1 w-444 h-444 rounded-full bg-gradient-to-br from-[#296be3] to-[#3ccedb] opacity-20"></div>
        </section>

        {/* Blog Section */}
        <section className="bg-white py-12 lg:py-24">
          <div className="max-w-[1400px] mx-auto">
            <div className="px-8 mb-8">
              <h3 className="text-gray-900 text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.2] mb-2">
                Resources & blogs
              </h3>
              <hr className="w-12 border-t-2 border-[#0071e3] mb-4" />
              <p className="text-gray-700 text-sm lg:text-base mb-4 lg:mb-8 lg:max-w-[800px]">
                Get insights on latest trends through our updates
              </p>
            </div>

            <div className="mx-auto mb-8 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                {
                  img: 'img/activities-1.webp',
                  title: "Which US Universities Accept 3-Year Bachelor's Degrees...",
                  date: 'Nov 14, 2025',
                  desc: 'You worked hard for your 3-year bachelor\'s degree in India, Nepal...',
                  link: '#'
                },
                {
                  img: 'img/activities-2.webp',
                  title: 'What is Data Science & Why Study it in 2026...',
                  date: 'Nov 06, 2025',
                  desc: 'So, you\'ve probably heard the term "data science" thrown around...',
                  link: '#'
                },
                {
                  img: 'img/activities-3.webp',
                  title: 'American Dream for International Students in 2025...',
                  date: 'Oct 13, 2025',
                  desc: 'An International Student lands at JFK ( John F. Kennedy International Airport)...',
                  link: '#'
                },
                {
                  img: 'img/activities-4.webp',
                  title: 'Studying in the USA: Scholarships, Jobs, and Life Insights...',
                  date: 'Sep 12, 2025',
                  desc: 'Every year, thousands of young dreamers pack their bags and head..',
                  link: '#'
                }
              ].map((blog, index) => (
                <a key={index} href={blog.link} className="overflow-hidden group">
                  <div className="w-full overflow-hidden rounded-lg mb-6 aspect-[16/9]">
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:rotate-[-5deg] group-hover:scale-120 relative z-1"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-gray-950">
                    {blog.title}
                  </h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <Calendar className="text-[#14254B] w-4 min-w-4 h-4 mb-[2px]" />
                    <p className="text-gray-500 text-xs lg:text-sm mb-0">{blog.date}</p>
                  </div>
                  <p className="text-gray-700 text-sm mb-2 lg:mb-4">{blog.desc}</p>
                </a>
              ))}
            </div>

            <div className="px-8 btn-wrap flex flex-wrap">
              <a
                href="/blogs"
                className="inline-flex items-center w-auto h-12 px-8 font-medium bg-[#3c65e3] hover:bg-[#264ec9] text-white rounded hover:text-gray-50 focus:outline-none ring-offset-0 cursor-pointer"
              >
                More Blogs
                <ArrowRight className="ml-2" size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Sub Footer */}
      <section className="bg-gradient-to-b from-[#e6f0fc] via-white to-white py-12 lg:py-16">
        <div className="max-w-[1400px] px-8 mx-auto">
          <div className="mb-0 mx-auto py-2 lg:pl-0 text-black grid grid-cols-1 gap-2 lg:gap-3">
            <h2 className="text-gray-900 text-xl lg:text-2xl font-bold leading-[1.2] max-w-[600px]">
              Our partner institutions
            </h2>
            <hr className="w-12 border-t-2 border-[#0071e3] mb-4" />
          </div>
        </div>
        <div className="max-w-[1600px] mx-auto lg:px-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 z-2 w-16 xl:w-64 h-full bg-gradient-to-l from-transparent via-white to-white"></div>
          <div className="absolute top-0 right-0 z-2 w-16 xl:w-64 h-full bg-gradient-to-r from-transparent via-white to-white"></div>

          <div id="marquee-container" className="relative overflow-hidden w-full h-12 lg:h-24 bg-white">
            <div id="marquee" className="flex absolute top-0 left-0">
              {Array.from({ length: 20 }).map((_, i) => (
                <img
                  key={i}
                  src={`img/logo-partner/institutions-${i + 1}.webp`}
                  className="h-12 lg:h-24 p-1"
                  loading="lazy"
                  alt={`Institution ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

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
            <form>
              <div className="w-full flex flex-col md:flex-row gap-2">
                <div className="w-full lg:max-w-[500px] relative">
                  <input
                    type="email"
                    placeholder="Your Email Address..."
                    className="text-gray-800 placeholder-gray-500 w-full bg-white border border-gray-300 rounded p-3 pl-11 pr-11 outline-none"
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer">
                    <MailOpen className="stroke-gray-500 stroke-[1.5] w-6 h-6" />
                  </div>
                </div>
                <div className="btn-wrap">
                  <button className="min-w-[160px] min-h-[50px] bg-[#3c65e3] px-6 py-2 text-[#CBD5E1] rounded lg:text-[#fff] hover:bg-[#2b54d2] hover:text-[#8ba5e0] lg:hover:text-[#fff] font-normal transition w-full lg:w-auto flex justify-center items-center cursor-pointer">
                    Subscribe
                  </button>
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
            <ul className="flex space-x-3 mt-0 [&>li]:before:top-[0]">
              {[
                {
                  href: 'https://www.facebook.com/AdviseBridge/',
                  icon: (
                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
                      <path d="M9.18848 10.125L9.6884 6.86742H6.56266V4.75348C6.56266 3.86227 6.9993 2.99355 8.39922 2.99355H9.82023V0.220078C9.82023 0.220078 8.5307 0 7.29777 0C4.72363 0 3.04105 1.56023 3.04105 4.38469V6.86742H0.179688V10.125H3.04105V18H6.56266V10.125H9.18848Z" />
                    </svg>
                  )
                },
                {
                  href: 'https://x.com/AdviseBridge',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M10.7,7.3l5.9-6.9h-1.8L9.9,6.1L5.8,0.3H0.1l6.7,9.5L0,17.7h1.8L7.5,11l4.7,6.7H18L10.7,7.3z M2.8,1.8H5
                        l10.2,14.4H13L2.8,1.8z" />
                    </svg>
                  )
                },
                {
                  href: 'https://www.linkedin.com/company/advisebridge/',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M4.02911 17.9996H0.297321V5.98219H4.02911V17.9996ZM2.16121 4.3429C0.967902 4.3429 0 3.35451 0 2.16121C8.54116e-09 1.58802 0.227698 1.03831 0.633002 0.633002C1.03831 0.227698 1.58802 0 2.16121 0C2.73439 0 3.2841 0.227698 3.68941 0.633002C4.09471 1.03831 4.32241 1.58802 4.32241 2.16121C4.32241 3.35451 3.35411 4.3429 2.16121 4.3429ZM17.996 17.9996H14.2722V12.1496C14.2722 10.7554 14.2441 8.96746 12.332 8.96746C10.3918 8.96746 10.0945 10.4822 10.0945 12.0492V17.9996H6.3667V5.98219H9.9458V7.62147H9.99804C10.4962 6.67728 11.7133 5.68085 13.5289 5.68085C17.3057 5.68085 18 8.1679 18 11.3983V17.9996H17.996Z" />
                    </svg>
                  )
                },
                {
                  href: 'https://www.instagram.com/advisebridges/',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9.00201 4.386C6.44808 4.386 4.38806 6.44601 4.38806 8.99995C4.38806 11.5539 6.44808 13.6139 9.00201 13.6139C11.5559 13.6139 13.616 11.5539 13.616 8.99995C13.616 6.44601 11.5559 4.386 9.00201 4.386ZM9.00201 11.9996C7.35159 11.9996 6.00234 10.6544 6.00234 8.99995C6.00234 7.34551 7.34757 6.00028 9.00201 6.00028C10.6564 6.00028 12.0017 7.34551 12.0017 8.99995C12.0017 10.6544 10.6524 11.9996 9.00201 11.9996ZM14.8809 4.19727C14.8809 4.7956 14.399 5.27345 13.8047 5.27345C13.2064 5.27345 12.7285 4.79158 12.7285 4.19727C12.7285 3.60296 13.2104 3.12108 13.8047 3.12108C14.399 3.12108 14.8809 3.60296 14.8809 4.19727ZM17.9368 5.28952C17.8685 3.84791 17.5392 2.57094 16.4831 1.51885C15.431 0.466761 14.154 0.13748 12.7124 0.0651991C11.2267 -0.0191289 6.77334 -0.0191289 5.28756 0.0651991C3.84997 0.133465 2.57301 0.462745 1.5169 1.51484C0.460792 2.56693 0.135527 3.84389 0.063246 5.2855C-0.021082 6.77128 -0.021082 11.2246 0.063246 12.7104C0.131511 14.152 0.460792 15.4289 1.5169 16.481C2.57301 17.5331 3.84596 17.8624 5.28756 17.9347C6.77334 18.019 11.2267 18.019 12.7124 17.9347C14.154 17.8664 15.431 17.5371 16.4831 16.481C17.5352 15.4289 17.8645 14.152 17.9368 12.7104C18.0211 11.2246 18.0211 6.77529 17.9368 5.28952ZM16.0173 14.3046C15.7041 15.0916 15.0977 15.698 14.3066 16.0152C13.122 16.4851 10.3111 16.3766 9.00201 16.3766C7.69292 16.3766 4.87797 16.481 3.69738 16.0152C2.91032 15.702 2.30396 15.0957 1.98673 14.3046C1.5169 13.12 1.62532 10.309 1.62532 8.99995C1.62532 7.69085 1.52091 4.87591 1.98673 3.69532C2.29994 2.90826 2.9063 2.3019 3.69738 1.98466C4.88199 1.51484 7.69292 1.62326 9.00201 1.62326C10.3111 1.62326 13.126 1.51885 14.3066 1.98466C15.0937 2.29788 15.7001 2.90424 16.0173 3.69532C16.4871 4.87992 16.3787 7.69085 16.3787 8.99995C16.3787 10.309 16.4871 13.124 16.0173 14.3046Z" />
                    </svg>
                  )
                },
                {
                  href: 'https://www.youtube.com/@AdviseBridge',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 50 50" fill="none">
                      <path d="M49.5,15c0,0-0.5-3.4-2-5c-1.9-2-4-2-5-2.1C35.5,7.4,25,7.4,25,7.4h0c0,0-10.5,0-17.5,0.5c-1,0.1-3.1,0.1-5,2.1
                        c-1.5,1.5-2,5-2,5S0,19,0,23.1v3.8c0,4,0.5,8.1,0.5,8.1s0.5,3.4,2,5c1.9,2,4.4,1.9,5.5,2.1c4,0.4,17,0.5,17,0.5s10.5,0,17.5-0.5
                        c1-0.1,3.1-0.1,5-2.1c1.5-1.5,2,5,2,5s0.5,4,0.5,8.1v-3.8C50,19.1,49.5,15,49.5,15L49.5,15L49.5,15L49.5,15z M19.8,31.5V17.4l13.5,7
                        L19.8,31.5z" />
                    </svg>
                  )
                }
              ].map((social, index) => (
                <li key={index}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-400 rounded w-10 h-10 flex items-center justify-center hover:bg-white hover:text-white hover:border-white [&>svg>path]:fill-white/80 hover:[&>svg>path]:fill-[#121727]"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-[1400px] px-8 mx-auto relative">
          <div className="flex flex-wrap xl:justify-between gap-y-4 text-sm text-mywhitelighttext">
            {[
              {
                title: 'Company',
                links: [
                  { label: 'About', href: '/about' },
                  { label: 'Career', href: '/career' },
                  { label: 'Contact Us', href: '/contact' },
                  { label: 'Achievement', href: '/achievement' }
                ]
              },
              {
                title: 'Services',
                links: [
                  { label: 'Students', href: '/students' },
                  { label: 'Advisors', href: '/advisors' },
                  { label: 'Institutions', href: '/institutions' },
                  { label: 'Explore', href: '/explore' }
                ]
              },
              {
                title: 'Legal',
                links: [
                  { label: 'Terms & conditions', href: '/terms_conditions' },
                  { label: 'Disclaimer', href: '/disclaimer' },
                  { label: 'Privacy policy', href: '/privacy_policy' },
                  { label: 'Refund policy', href: '/refund_policy' },
                  { label: 'Cost policy', href: '/cost_policy' }
                ]
              },
              {
                title: 'Resources',
                links: [
                  { label: 'Blogs', href: '/blogs' },
                  { label: 'FAQs', href: '/faqs' },
                  { label: 'Eligibility Criteria', href: '/eligibility_criteria' }
                ]
              }
            ].map((section, index) => (
              <div key={index} className="w-1/2 md:w-1/3 xl:w-1/5 mb-4">
                <h5 className="text-base font-bold text-white mb-6">{section.title}</h5>
                <ul className="[&>li]:mb-2 mb-2 [&>li>a]:text-gray-300 [&>li>a]:text-xs lg:[&>li>a]:text-sm [&>li>a]:font-light [&>li:hover>a]:text-white">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="w-full md:w-1/3 xl:w-1/5 mb-4">
              <img
                src="img/logo/logo_white.svg"
                alt="Advise Bridge Logo"
                className="w-48 h-auto mb-4"
                loading="lazy"
              />
              <p className="text-gray-300 text-sm font-light mb-3 lg:mb-6">
                AdviseBridge connects students & institutions globally.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  {
                    href: 'https://www.icef.com/agency-accreditation-agencies-only/',
                    img: 'img/achievement-1.webp'
                  },
                  {
                    href: 'https://isana.org.au/',
                    img: 'img/achievement-2.webp'
                  }
                ].map((achievement, idx) => (
                  <a
                    key={idx}
                    href={achievement.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded w-16 h-16 flex justify-center items-center cursor-pointer"
                  >
                    <img
                      src={achievement.img}
                      alt="Achievement"
                      className="w-[60%]"
                      loading="lazy"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 lg:mt-12 border-t border-white/7 pt-2 lg:pt-12">
          <div className="max-w-[1400px] px-8 py-4 lg:py-0 mx-auto">
            <p className="text-gray-300 text-sm font-light mb-2 lg:mb-4">
              AdviseBridge © 2025. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        id="scrollToTopBtn"
        className={`${showScrollTop ? 'block' : 'hidden'
          } bg-gradient-to-br from-[#026d44] to-[#005c36] hover:from-[#029c75] hover:to-[#004327] text-white px-3 py-3 rounded-full transition-all duration-300 drop-shadow-[0_8px_8px_rgba(0,0,0,0.5)] hover:drop-shadow-[0_8px_8px_rgba(0,0,0,0.7)] fixed bottom-4 right-4 z-10 cursor-pointer`}
        onClick={scrollToTop}
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default Home;