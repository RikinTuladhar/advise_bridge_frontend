////Docs Wrap Starts
document.addEventListener('DOMContentLoaded', function() {

  //// Lucide Icons Script Starts
  lucide.createIcons();
  //// Lucide Icons Script Ends


  //// AOS Starts
  const aosElements = document.querySelectorAll('[data-aos]');
  const supportedDurations = ['1000', '1200', '1400', '1600'];

  let elementsInView = new Set();
   
  function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const threshold = windowHeight * 0.1; 
      
      return (
          rect.top <= (windowHeight - threshold) &&
          rect.bottom >= threshold
      );
  }
    
  function applyDuration(el) {
      const duration = el.getAttribute('data-aos-duration');
      
      if (duration && supportedDurations.includes(duration)) {
          el.style.transitionDuration = duration + 'ms';
      } else {
          el.style.transitionDuration = '1000ms';
      }
  }
    
  function resetAnimation(el) {
      el.classList.remove('aos-animate');
      void el.offsetWidth;
  }
    
  function triggerAnimation(el) {
      el.classList.add('aos-animate');
  }
    
  function handleAnimations() {
      const isMobile = window.innerWidth < 769;
      
      if (isMobile) {
          aosElements.forEach(el => {
              el.classList.add('aos-animate');
              el.style.transitionDuration = '0s';
          });
          return;
      }
      
      aosElements.forEach(el => {
          
          applyDuration(el);
          
          const isInView = isElementInViewport(el);
          const wasInView = elementsInView.has(el);
          
          if (isInView && !wasInView) {
              
              triggerAnimation(el);
              elementsInView.add(el);
          } else if (!isInView && wasInView) {
            
              resetAnimation(el);
              elementsInView.delete(el);
          }

      });
  }

  function initAnimations() {
      const isMobile = window.innerWidth < 769;
      
      if (isMobile) {
          
          aosElements.forEach(el => {
              el.classList.add('aos-animate');
              el.style.transitionDuration = '0s';
          });
      } else {
        
          aosElements.forEach(el => {
              applyDuration(el);
              resetAnimation(el);
              
              if (isElementInViewport(el)) {
                  triggerAnimation(el);
                  elementsInView.add(el);
              }
          });
      }
  }

  initAnimations();

  let isScrolling;
  window.addEventListener('scroll', function() {
      
      window.clearTimeout(isScrolling);
      
      
      isScrolling = setTimeout(function() {
          handleAnimations();
      }, 50);
  }, false);

  window.addEventListener('resize', function() {
      elementsInView.clear();
      initAnimations();
  });
  //// AOS Ends



  //// Scroll Top Custom Starts
  const scrollBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollBtn.classList.remove("hidden");
    } else {
      scrollBtn.classList.add("hidden");
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  //// Scroll Top Custom Ends


  //// Navigation Toggle Starts
  const nav = document.getElementById('mobile-nav');
  const toggleBtn = document.getElementById('menu-toggle');
  const closeBtn = document.getElementById('menu-close');

  toggleBtn.addEventListener('click', () => {
      nav.classList.remove('hidden');
      nav.classList.add('flex');
  });

  closeBtn.addEventListener('click', () => {
      nav.classList.remove('flex');
      nav.classList.add('hidden');
  });
  //// Navigation Toggle Ends



  //// Accordion Starts
  document.querySelectorAll('.faq-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector('svg');

      document.querySelectorAll('.faq-content').forEach(c => {
        if (c !== content) {
          c.style.maxHeight = null;
          c.previousElementSibling.querySelector('svg').classList.remove('rotate-180');
        }
      });

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        icon.classList.remove('rotate-180');
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.classList.add('rotate-180');
      }
    });
  });
  //// Accordion Ends


  
//// Select Dropdown Starts
document.querySelectorAll(".custom-dropdown").forEach((dropdown) => {
  const btn = dropdown.querySelector(".dropdown-btn");
  const menu = dropdown.querySelector(".dropdown-menu");
  const selected = dropdown.querySelector(".dropdown-selected");
  const arrow = dropdown.querySelector(".dropdown-arrow");
  const hiddenInput = dropdown.querySelector("input[type='hidden']");
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    document.querySelectorAll(".custom-dropdown").forEach((other) => {
      if (other !== dropdown) {
        other.querySelector(".dropdown-menu").classList.add("hidden");
        other.querySelector(".dropdown-arrow").classList.remove("rotate-180");
      }
    });
    menu.classList.toggle("hidden");
    arrow.classList.toggle("rotate-180");
  });
  menu.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", () => {
      selected.textContent = item.textContent;
      hiddenInput.value = item.dataset.value;
      menu.classList.add("hidden");
      arrow.classList.remove("rotate-180");
    });
  });
});

document.addEventListener("click", () => {
  document.querySelectorAll(".custom-dropdown").forEach((dropdown) => {
    dropdown.querySelector(".dropdown-menu").classList.add("hidden");
    dropdown.querySelector(".dropdown-arrow").classList.remove("rotate-180");
  });
});
//// Select Dropdown Ends




//// Cloud Tag Select Starts
 const cloudTagSections = document.querySelectorAll('.cloud-tag-section');
 cloudTagSections.forEach(section => {
 	const container = section.querySelector('.tag-dropdown-container');
 	const input = section.querySelector('.tag-input');
 	const dropdown = section.querySelector('.tag-dropdown-options');
 	const selectedTagsContainer = section.querySelector('.selected-tags');
 	const hiddenCheckboxes = section.querySelector('.services-checkboxes');
 	container.addEventListener('click', () => {
 		dropdown.classList.toggle('hidden');
 	});
 	document.addEventListener('click', (e) => {
 		if (!section.contains(e.target)) {
 			dropdown.classList.add('hidden');
 		}
 	});
 	const checkboxes = dropdown.querySelectorAll('.option-checkbox');
 	checkboxes.forEach(checkbox => {
 		checkbox.addEventListener('change', () => {
 			const value = checkbox.dataset.value;
 			const labelText = checkbox.parentElement.textContent.trim();
 			const hiddenCheckbox = Array.from(hiddenCheckboxes.querySelectorAll('input')).find(hc => hc.value === value);
 			if (checkbox.checked) {
 				const tag = document.createElement('span');
 				tag.className = 'tag bg-[#18284d] text-white text-xs px-2 py-1 rounded flex items-center gap-1';
 				tag.textContent = labelText;
 				const removeBtn = document.createElement('span');
 				removeBtn.className = 'ml-1 cursor-pointer font-bold';
 				removeBtn.textContent = '×';
 				removeBtn.addEventListener('click', () => {
 					tag.remove();
 					checkbox.checked = false;
 					hiddenCheckbox.checked = false;
 				});
 				tag.appendChild(removeBtn);
 				selectedTagsContainer.appendChild(tag);
 				if (hiddenCheckbox) hiddenCheckbox.checked = true;
 			} else {
 				const tag = Array.from(selectedTagsContainer.children).find(t => t.textContent.startsWith(labelText));
 				if (tag) tag.remove();
 				if (hiddenCheckbox) hiddenCheckbox.checked = false;
 			}
 		});
 	});
 	input.addEventListener('input', () => {
 		const search = input.value.toLowerCase();
 		checkboxes.forEach(cb => {
 			const labelText = cb.parentElement.textContent.toLowerCase();
 			if (labelText.includes(search)) {
 				cb.parentElement.style.display = 'flex';
 			} else {
 				cb.parentElement.style.display = 'none';
 			}
 		});
 	});
 });
//// Cloud Tag Select Ends



//// Video Section Starts
function setupVideo(wrapperId, coverId, buttonId, videoUrl) {
  const wrapper = document.getElementById(wrapperId);
  const cover = document.getElementById(coverId);
  const button = document.getElementById(buttonId);
  if (!wrapper || !cover || !button) {
    console.error("Missing element:", wrapperId, coverId, buttonId);
    return;
  }

  function startVideo() {
    const iframe = document.createElement("iframe");
    iframe.className = "absolute top-0 left-0 w-full h-full";
    iframe.src = videoUrl + "?autoplay=1";
    iframe.title = "Video Testimonial";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    cover.style.display = "none";
    button.style.display = "none";
    wrapper.appendChild(iframe);
  }
  cover.addEventListener("click", startVideo);
  button.addEventListener("click", startVideo);
}
setupVideo("video-wrapper-1", "video-cover-1", "play-button-1", "https://www.youtube.com/embed/MAKTjopS2J8");
setupVideo("video-wrapper-2", "video-cover-2", "play-button-2", "https://www.youtube.com/embed/SQUsK1uDigU");
//// Video Section Ends




  //// Language Select Starts
  const langBtn = document.getElementById('lang-btn');
  const langMenu = document.getElementById('lang-menu');
  const langFlag = document.getElementById('lang-flag');
  const langText = document.getElementById('lang-text');

  langBtn.addEventListener('click', () => {
    langMenu.classList.toggle('hidden');
  });

  langMenu.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', () => {
      const newLang = item.dataset.lang;
      const newFlag = item.dataset.flag;
      langFlag.src = `https://flagcdn.com/w20/${newFlag}.png`;
      langText.textContent = newLang;
      langMenu.classList.add('hidden');
    });
  });

  window.addEventListener('click', (e) => {
    if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
      langMenu.classList.add('hidden');
    }
  });
  //// Language Select Ends




  //// Infinate Logos Scroll Starts
  const marquee = document.getElementById("marquee");
  const container = document.getElementById("marquee-container");
  let pos = 0;
  let paused = false;
  let dragging = false;
  let holdTimer = null;
  let startX = 0;
  let startPos = 0;
  const HOLD_DELAY = 150;
  document.querySelectorAll("#marquee img").forEach(img => {
    img.setAttribute("draggable", "false");
  });

  function updateCursor() {
    container.style.cursor = dragging ? "grabbing" : paused ? "grab" : "default";
  }
  container.addEventListener("mouseenter", () => {
    paused = true;
    updateCursor();
  });
  container.addEventListener("mouseleave", () => {
    paused = false;
    updateCursor();
  });

  function startHold(x) {
    paused = true;
    startX = x;
    startPos = pos;
    updateCursor();
    holdTimer = setTimeout(() => {
      dragging = true;
      updateCursor();
    }, HOLD_DELAY);
  }

  function dragMove(x) {
    if (!dragging) return;
    pos = startPos + (x - startX);
    marquee.style.transform = `translateX(${pos}px)`;
  }

  function endDrag() {
    clearTimeout(holdTimer);
    dragging = false;
    updateCursor();
  }
  container.addEventListener("mousedown", e => startHold(e.clientX));
  window.addEventListener("mousemove", e => dragMove(e.clientX));
  window.addEventListener("mouseup", endDrag);
  container.addEventListener("touchstart", e => startHold(e.touches[0].clientX));
  container.addEventListener("touchmove", e => dragMove(e.touches[0].clientX));
  container.addEventListener("touchend", endDrag);

  function setupMarquee() {
    marquee.querySelectorAll(".cloned").forEach(el => el.remove());
    const originals = Array.from(marquee.children);
    while (marquee.scrollWidth < container.offsetWidth * 2) {
      originals.forEach(el => {
        const clone = el.cloneNode(true);
        clone.classList.add("cloned");
        marquee.appendChild(clone);
      });
    }
    pos = 0;
  }
  window.addEventListener("resize", setupMarquee);

  function animate() {
    if (!paused && !dragging) {
      pos -= 0.5;
      if (Math.abs(pos) >= marquee.scrollWidth / 2) pos = 0;
      marquee.style.transform = `translateX(${pos}px)`;
    }
    requestAnimationFrame(animate);
  }
  setupMarquee();
  animate();
  //// Infinate Logos Scroll Ends



  
  //// Banner Search Dropdown Starts
const educationOptions = ["Bachelor's Degree", "Master's Degree"];
const courseOptions = {
  "Bachelor's Degree": ["Accounting", "Actuarial Science", "Acupuncture"],
  "Master's Degree": ["Computer Science", "Business Administration", "Psychology"],
};
const educationSearch = document.getElementById("educationSearch");
const educationList = document.getElementById("educationList");
const educationClear = document.getElementById("educationClear");
const courseSearch = document.getElementById("courseSearch");
const courseList = document.getElementById("courseList");
const courseClear = document.getElementById("courseClear");
if (!educationSearch || !educationList || !educationClear || !courseSearch || !courseList || !courseClear) {
  console.error("Required DOM elements not found");
  return;
}

function filterDropdown(input, list, options, onSelect) {
  const v = input.value.toLowerCase();
  list.innerHTML = "";
  const filtered = v === "" ? options : options.filter(o => o.toLowerCase().includes(v));
  if (!filtered.length) {
    list.innerHTML = `<li class="p-3 text-gray-500 italic text-center">No options found</li>`;
  } else {
    filtered.forEach(opt => {
      const li = document.createElement("li");
      li.className = "px-4 py-2.5 text-gray-800 hover:bg-blue-50 border-b border-gray-100 last:border-none cursor-pointer";
      li.textContent = opt;
      li.onclick = () => {
        input.value = opt;
        list.classList.add("hidden");
        onSelect(opt);
        updateClearIcons();
      };
      list.appendChild(li);
    });
  }
  list.classList.remove("hidden");
}

function updateClearIcons() {
  educationClear.classList.toggle("visible", educationSearch.value.trim() !== "");
  courseClear.classList.toggle("visible", courseSearch.value.trim() !== "");
}

function closeOther(listToKeepOpen) {
  if (listToKeepOpen !== educationList) educationList.classList.add("hidden");
  if (listToKeepOpen !== courseList) courseList.classList.add("hidden");
}

function getAllCourses() {
  return Object.values(courseOptions).flat();
}
educationSearch.addEventListener("focus", () => {
  closeOther(educationList);
  filterDropdown(educationSearch, educationList, educationOptions, () => {});
});
educationSearch.addEventListener("input", () => {
  closeOther(educationList);
  filterDropdown(educationSearch, educationList, educationOptions, () => {});
});
courseSearch.addEventListener("focus", () => {
  closeOther(courseList);
  const list = educationSearch.value ? courseOptions[educationSearch.value] : getAllCourses();
  filterDropdown(courseSearch, courseList, list, () => {});
});
courseSearch.addEventListener("input", () => {
  closeOther(courseList);
  const list = educationSearch.value ? courseOptions[educationSearch.value] : getAllCourses();
  filterDropdown(courseSearch, courseList, list, () => {});
});
educationClear.onclick = () => {
  educationSearch.value = "";
  updateClearIcons();
};
courseClear.onclick = () => {
  courseSearch.value = "";
  updateClearIcons();
};
document.addEventListener("click", e => {
  if (!educationSearch.contains(e.target) && !educationList.contains(e.target)) {
    educationList.classList.add("hidden");
  }
  if (!courseSearch.contains(e.target) && !courseList.contains(e.target)) {
    courseList.classList.add("hidden");
  }
});
//// Banner Search Dropdown Ends






  

});
////Docs Wrap Ends

  //// Youtube Popup Play Starts
  document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("videoPopup");
    const frame = document.getElementById("ytFrame");
    const closeBtn = document.getElementById("closeVideo");
    const openBtns = document.querySelectorAll(".openVideoBtn");

    openBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const videoId = btn.dataset.video;
        frame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        popup.classList.remove("hidden");
      });
    });

    closeBtn.addEventListener("click", () => {
      frame.src = "";
      popup.classList.add("hidden");
    });
  });
  //// Youtube Popup Play Ends




  //// Calendar Multiple Starts
// document.querySelectorAll('.calendar-container').forEach(container => {
//   const input = container.querySelector('.calendar-input');

//   container.addEventListener('click', () => {
//     input.showPicker?.(); 
//     input.focus();      
//   });
// });
//// Calendar Multiple Ends