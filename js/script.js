const translations = {
  ar: {
    nav_home: "الرئيسية",
    nav_about: "نبذة عني",
    nav_skills: "المهارات",
    nav_projects: "المشاريع",
    nav_contact: "تواصل",
    hero_hello: "مرحباً، أنا",
    hero_name: "عمر الخالدي",
    hero_desc: "طالب في برنامج Smart Methods، أحب بناء الأشياء التي تجمع بين البرمجة والإلكترونيات والويب.",
    hero_btn_projects: "شاهد مشاريعي",
    hero_btn_contact: "تواصل معي",
    about_title: "نبذة عني",
    about_text: "أنا عمر، مهتم بالروبوتات وأنظمة التحكم وتطوير الويب. في برنامج Smart Methods تعلمت التحكم بمحركات السيرفو باستخدام Arduino، وتصميم خوارزمية مشي للروبوت الشبيه بالإنسان، والآن أتعلم بناء واجهات الويب باستخدام HTML و CSS و JavaScript لربط الروبوتات بالتطبيقات عبر USB و Bluetooth و Wi-Fi.",
    about_card1_title: "التعليم",
    about_card1_text: "برنامج Smart Methods",
    about_card2_title: "الاهتمامات",
    about_card2_text: "الروبوتات وإنترنت الأشياء",
    about_card3_title: "أتعلم الآن",
    about_card3_text: "تطوير الويب و Flutter",
    skills_title: "المهارات",
    skill_sim: "المحاكاة (Tinkercad / Wokwi)",
    projects_title: "المشاريع",
    filter_all: "الكل",
    filter_robotics: "روبوتات",
    p1_title: "التحكم بأربعة محركات سيرفو",
    p1_desc: "برنامج Arduino يحرك 4 محركات سيرفو بنمط Sweep لمدة ثانيتين ثم يثبتها على زاوية 90°.",
    p2_title: "خوارزمية مشي الروبوت",
    p2_desc: "توثيق خوارزمية مشي لروبوت شبيه بالإنسان مع مخططات الحالات والتوصيل.",
    view_code: "عرض الكود ←",
    contact_title: "تواصل معي",
    contact_text: "لديك سؤال أو فكرة مشروع؟ راسلني وسأرد عليك بأقرب وقت.",
    form_name: "الاسم",
    form_email: "البريد الإلكتروني",
    form_message: "رسالتك",
    form_send: "إرسال",
    form_error: "الرجاء تعبئة جميع الحقول ببريد إلكتروني صحيح.",
    form_success: "تم تجهيز رسالتك في برنامج البريد، شكراً لك!",
    footer: "صُنع بـ ❤️ في Smart Methods",
    typed: ["مطوّر ويب مبتدئ", "مبرمج Arduino", "مهتم بالروبوتات"],
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",
    hero_hello: "Hi, I'm",
    hero_name: "Omar Al-Khaldi",
    hero_desc: "A Smart Methods student who loves building things that combine programming, electronics and the web.",
    hero_btn_projects: "View my work",
    hero_btn_contact: "Contact me",
    about_title: "About Me",
    about_text: "I'm Omar, interested in robotics, control systems and web development. At Smart Methods I learned to control servo motors with Arduino and designed a walking algorithm for a humanoid robot. Now I'm learning to build web interfaces with HTML, CSS and JavaScript to connect robots to apps over USB, Bluetooth and Wi-Fi.",
    about_card1_title: "Education",
    about_card1_text: "Smart Methods Program",
    about_card2_title: "Interests",
    about_card2_text: "Robotics & IoT",
    about_card3_title: "Learning Now",
    about_card3_text: "Web development & Flutter",
    skills_title: "Skills",
    skill_sim: "Simulation (Tinkercad / Wokwi)",
    projects_title: "Projects",
    filter_all: "All",
    filter_robotics: "Robotics",
    p1_title: "Four Servo Motor Control",
    p1_desc: "An Arduino sketch that sweeps 4 servo motors for 2 seconds and then holds them all at 90°.",
    p2_title: "Robot Walking Algorithm",
    p2_desc: "Documentation of a humanoid robot walking gait with state and wiring diagrams.",
    view_code: "View code →",
    contact_title: "Contact Me",
    contact_text: "Have a question or a project idea? Send me a message and I'll reply soon.",
    form_name: "Name",
    form_email: "Email",
    form_message: "Your message",
    form_send: "Send",
    form_error: "Please fill in all fields with a valid email.",
    form_success: "Your message is ready in your email app. Thank you!",
    footer: "Made with ❤️ at Smart Methods",
    typed: ["Junior Web Developer", "Arduino Programmer", "Robotics Enthusiast"],
  },
};

let currentLang = localStorage.getItem("lang") || "ar";

/* ---------- Language ---------- */
function applyLanguage(lang) {
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t[el.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t[el.dataset.i18nPlaceholder];
  });

  document.getElementById("langToggle").textContent = lang === "ar" ? "EN" : "ع";
  localStorage.setItem("lang", lang);
  restartTyping();
}

document.getElementById("langToggle").addEventListener("click", () => {
  currentLang = currentLang === "ar" ? "en" : "ar";
  applyLanguage(currentLang);
});

/* ---------- Theme ---------- */
const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme", theme);
}

themeToggle.addEventListener("click", () => {
  applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});

applyTheme(localStorage.getItem("theme") || "light");

/* ---------- Typing effect ---------- */
const typedEl = document.getElementById("typed");
let typingTimer;

function restartTyping() {
  clearTimeout(typingTimer);
  const words = translations[currentLang].typed;
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const word = words[wordIndex];
    charIndex += deleting ? -1 : 1;
    typedEl.textContent = word.slice(0, charIndex);

    let delay = deleting ? 50 : 110;
    if (!deleting && charIndex === word.length) {
      deleting = true;
      delay = 1500;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 400;
    }
    typingTimer = setTimeout(tick, delay);
  }
  tick();
}

/* ---------- Navbar ---------- */
const navbar = document.getElementById("navbar");
const navLinks = document.getElementById("navLinks");
const toTop = document.getElementById("toTop");
const sections = document.querySelectorAll("section[id]");

document.getElementById("menuBtn").addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  navbar.classList.toggle("scrolled", y > 50);
  toTop.classList.toggle("show", y > 500);

  sections.forEach((sec) => {
    const link = navLinks.querySelector(`a[href="#${sec.id}"]`);
    const inView = y >= sec.offsetTop - 120 && y < sec.offsetTop + sec.offsetHeight - 120;
    link.classList.toggle("active", inView);
  });
});

toTop.addEventListener("click", () => window.scrollTo({ top: 0 }));

/* ---------- Reveal + skill bars on scroll ---------- */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      entry.target.querySelectorAll(".fill").forEach((bar) => {
        bar.style.width = bar.dataset.width + "%";
      });
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".section .container").forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});

/* ---------- Project filters ---------- */
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    document.querySelectorAll(".project-card").forEach((card) => {
      card.classList.toggle("hide", filter !== "all" && card.dataset.category !== filter);
    });
  });
});

/* ---------- Contact form ---------- */
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const t = translations[currentLang];
  const status = document.getElementById("formStatus");
  const fields = ["name", "email", "message"].map((id) => document.getElementById(id));
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields[1].value.trim());

  let valid = true;
  fields.forEach((f) => {
    const bad = !f.value.trim() || (f.id === "email" && !emailOk);
    f.classList.toggle("invalid", bad);
    if (bad) valid = false;
  });

  if (!valid) {
    status.textContent = t.form_error;
    status.className = "form-status error";
    return;
  }

  const [name, email, message] = fields.map((f) => f.value.trim());
  const subject = encodeURIComponent(`Website message from ${name}`);
  const body = encodeURIComponent(`${message}\n\n${name} <${email}>`);
  window.location.href = `mailto:alkhaldi.omar@icloud.com?subject=${subject}&body=${body}`;

  status.textContent = t.form_success;
  status.className = "form-status success";
  e.target.reset();
});

/* ---------- Init ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
applyLanguage(currentLang);
