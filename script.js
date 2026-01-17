/* ========================================
   Jasur Saidmurodov Portfolio - JavaScript
   ======================================== */

// ========================================
// Configuration & Data
// ========================================

// EDIT_HERE: Customize your projects
const projects = [
    {
        id: 1,
        title: "Sales Performance Dashboard",
        description: "Interactive Power BI dashboard tracking KPIs, revenue trends, and team performance with 15+ visualizations.",
        tags: ["Dashboard", "Power BI", "SQL"],
        category: "dashboard",
        codeLink: "#", // EDIT_HERE: Add your GitHub link
        liveLink: "#"  // EDIT_HERE: Add your live demo link
    },
    {
        id: 2,
        title: "Customer Churn Prediction",
        description: "ML model achieving 87% accuracy in predicting customer churn using Python and scikit-learn.",
        tags: ["ML", "Python", "Analytics"],
        category: "ml",
        codeLink: "#", // EDIT_HERE: Add your GitHub link
        liveLink: "#"  // EDIT_HERE: Add your report link
    },
    {
        id: 3,
        title: "Inventory Optimization System",
        description: "Automated SQL-based system reducing stockouts by 40% through predictive reorder analysis.",
        tags: ["SQL", "Automation", "Dashboard"],
        category: "sql",
        codeLink: "#", // EDIT_HERE: Add your GitHub link
        liveLink: "#"  // EDIT_HERE: Add your live demo link
    },
    {
        id: 4,
        title: "Financial Reporting Automation",
        description: "Django-powered reporting system automating monthly financial reports, saving 20+ hours per cycle.",
        tags: ["Python", "Django", "Automation"],
        category: "dashboard",
        codeLink: "#", // EDIT_HERE: Add your GitHub link
        liveLink: "#"  // EDIT_HERE: Add your live demo link
    },
    {
        id: 5,
        title: "Market Basket Analysis",
        description: "Association rule mining project uncovering cross-sell opportunities using Apriori algorithm.",
        tags: ["ML", "Python", "Analytics"],
        category: "ml",
        codeLink: "#", // EDIT_HERE: Add your GitHub link
        liveLink: "#"  // EDIT_HERE: Add your report link
    },
    {
        id: 6,
        title: "HR Analytics Dashboard",
        description: "Comprehensive Excel dashboard tracking employee metrics, turnover rates, and workforce planning.",
        tags: ["Dashboard", "Excel", "Analytics"],
        category: "dashboard",
        codeLink: "#", // EDIT_HERE: Add your GitHub link
        liveLink: "#"  // EDIT_HERE: Add your live demo link
    }
];

// EDIT_HERE: Customize translations
const translations = {
    en: {
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.portfolio": "Portfolio",
        "nav.contact": "Contact",
        "hero.greeting": "Hi, I am",
        "hero.title": "Data Analytics / Business Analytics",
        "hero.description": "Transforming complex data into actionable insights. I build dashboards, automate workflows, and deliver business intelligence solutions that drive strategic decisions.",
        "hero.viewPortfolio": "View Portfolio",
        "hero.skills": "Skills",
        "hero.downloadCV": "Download CV",
        "hero.focus": "Focus",
        "hero.focusValue": "BI & Analytics",
        "hero.stack": "Stack",
        "hero.stackValue": "Python, SQL, Power BI",
        "about.label": "About Me",
        "about.title": "Turning Data into Decisions",
        "about.text": "I'm a data-driven analyst passionate about uncovering insights that power business growth. With expertise in Python, SQL, and visualization tools like Power BI, I transform raw data into compelling stories and automated solutions. My approach combines technical rigor with business acumen to deliver dashboards and reports that stakeholders actually use.",
        "about.chip1": "SQL-First Approach",
        "about.chip2": "Dashboard Design",
        "about.chip3": "Process Automation",
        "skills.label": "Expertise",
        "skills.title": "Technical Skills",
        "skills.advanced": "Advanced",
        "skills.expert": "Expert",
        "skills.intermediate": "Intermediate",
        "portfolio.label": "Work",
        "portfolio.title": "Featured Projects",
        "portfolio.filterAll": "All",
        "portfolio.filterDashboard": "Dashboard",
        "portfolio.filterML": "ML",
        "portfolio.filterSQL": "SQL",
        "portfolio.code": "Code",
        "portfolio.live": "Live Demo",
        "contact.label": "Get in Touch",
        "contact.title": "Let's Work Together",
        "contact.text": "Have a project in mind or want to discuss data analytics opportunities? I'd love to hear from you.",
        "contact.formNotice": "Demo form — connect Formspree or Netlify Forms to receive emails",
        "contact.name": "Name",
        "contact.email": "Email",
        "contact.message": "Message",
        "contact.send": "Send Message",
        "footer.rights": "All rights reserved."
    },
    ru: {
        "nav.about": "Обо мне",
        "nav.skills": "Навыки",
        "nav.portfolio": "Портфолио",
        "nav.contact": "Контакт",
        "hero.greeting": "Привет, я",
        "hero.title": "Аналитика данных / Бизнес-аналитика",
        "hero.description": "Превращаю сложные данные в практические решения. Создаю дашборды, автоматизирую процессы и предоставляю решения бизнес-аналитики для стратегических решений.",
        "hero.viewPortfolio": "Портфолио",
        "hero.skills": "Навыки",
        "hero.downloadCV": "Скачать CV",
        "hero.focus": "Фокус",
        "hero.focusValue": "BI и Аналитика",
        "hero.stack": "Стек",
        "hero.stackValue": "Python, SQL, Power BI",
        "about.label": "Обо мне",
        "about.title": "Данные в решения",
        "about.text": "Я аналитик данных, увлечённый раскрытием инсайтов для роста бизнеса. Владея Python, SQL и инструментами визуализации вроде Power BI, я превращаю сырые данные в убедительные истории и автоматизированные решения.",
        "about.chip1": "SQL-подход",
        "about.chip2": "Дизайн дашбордов",
        "about.chip3": "Автоматизация",
        "skills.label": "Экспертиза",
        "skills.title": "Технические навыки",
        "skills.advanced": "Продвинутый",
        "skills.expert": "Эксперт",
        "skills.intermediate": "Средний",
        "portfolio.label": "Работы",
        "portfolio.title": "Избранные проекты",
        "portfolio.filterAll": "Все",
        "portfolio.filterDashboard": "Дашборды",
        "portfolio.filterML": "ML",
        "portfolio.filterSQL": "SQL",
        "portfolio.code": "Код",
        "portfolio.live": "Демо",
        "contact.label": "Связаться",
        "contact.title": "Давайте работать вместе",
        "contact.text": "Есть проект или хотите обсудить возможности аналитики данных? Буду рад услышать вас.",
        "contact.formNotice": "Демо форма — подключите Formspree или Netlify Forms",
        "contact.name": "Имя",
        "contact.email": "Email",
        "contact.message": "Сообщение",
        "contact.send": "Отправить",
        "footer.rights": "Все права защищены."
    },
    uz: {
        "nav.about": "Men haqimda",
        "nav.skills": "Ko'nikmalar",
        "nav.portfolio": "Portfolio",
        "nav.contact": "Aloqa",
        "hero.greeting": "Salom, men",
        "hero.title": "Ma'lumotlar tahlili / Biznes tahlili",
        "hero.description": "Murakkab ma'lumotlarni amaliy yechimlarga aylantiraman. Dashboardlar yarataman, jarayonlarni avtomatlashtiraman va strategik qarorlar uchun biznes-intellekt yechimlarini taqdim etaman.",
        "hero.viewPortfolio": "Portfolio",
        "hero.skills": "Ko'nikmalar",
        "hero.downloadCV": "CV yuklab olish",
        "hero.focus": "Yo'nalish",
        "hero.focusValue": "BI va Tahlil",
        "hero.stack": "Texnologiyalar",
        "hero.stackValue": "Python, SQL, Power BI",
        "about.label": "Men haqimda",
        "about.title": "Ma'lumotlarni qarorlarga aylantirish",
        "about.text": "Men biznes o'sishini ta'minlovchi tushunchalarni ochishga ishtiyoqli ma'lumotlar tahlilchisiman. Python, SQL va Power BI kabi vizualizatsiya vositalari bo'yicha tajribaga egaman.",
        "about.chip1": "SQL-yondashuv",
        "about.chip2": "Dashboard dizayni",
        "about.chip3": "Avtomatlashtirish",
        "skills.label": "Ekspertiza",
        "skills.title": "Texnik ko'nikmalar",
        "skills.advanced": "Yuqori",
        "skills.expert": "Ekspert",
        "skills.intermediate": "O'rta",
        "portfolio.label": "Ishlar",
        "portfolio.title": "Tanlangan loyihalar",
        "portfolio.filterAll": "Hammasi",
        "portfolio.filterDashboard": "Dashboard",
        "portfolio.filterML": "ML",
        "portfolio.filterSQL": "SQL",
        "portfolio.code": "Kod",
        "portfolio.live": "Demo",
        "contact.label": "Bog'lanish",
        "contact.title": "Birga ishlaymiz",
        "contact.text": "Loyihangiz bormi yoki ma'lumotlar tahlili imkoniyatlarini muhokama qilmoqchimisiz? Sizdan eshitishdan xursand bo'laman.",
        "contact.formNotice": "Demo forma — Formspree yoki Netlify Forms ulang",
        "contact.name": "Ism",
        "contact.email": "Email",
        "contact.message": "Xabar",
        "contact.send": "Yuborish",
        "footer.rights": "Barcha huquqlar himoyalangan."
    },
    es: {
        "nav.about": "Sobre mí",
        "nav.skills": "Habilidades",
        "nav.portfolio": "Portafolio",
        "nav.contact": "Contacto"
    },
    fr: {
        "nav.about": "À propos",
        "nav.skills": "Compétences",
        "nav.portfolio": "Portfolio",
        "nav.contact": "Contact"
    },
    de: {
        "nav.about": "Über mich",
        "nav.skills": "Fähigkeiten",
        "nav.portfolio": "Portfolio",
        "nav.contact": "Kontakt"
    },
    zh: {
        "nav.about": "关于我",
        "nav.skills": "技能",
        "nav.portfolio": "作品集",
        "nav.contact": "联系"
    },
    ko: {
        "nav.about": "소개",
        "nav.skills": "기술",
        "nav.portfolio": "포트폴리오",
        "nav.contact": "연락"
    },
    ja: {
        "nav.about": "私について",
        "nav.skills": "スキル",
        "nav.portfolio": "ポートフォリオ",
        "nav.contact": "お問い合わせ"
    },
    pt: {
        "nav.about": "Sobre",
        "nav.skills": "Habilidades",
        "nav.portfolio": "Portfólio",
        "nav.contact": "Contato"
    },
    tr: {
        "nav.about": "Hakkımda",
        "nav.skills": "Yetenekler",
        "nav.portfolio": "Portföy",
        "nav.contact": "İletişim"
    },
    ar: {
        "nav.about": "عني",
        "nav.skills": "المهارات",
        "nav.portfolio": "الأعمال",
        "nav.contact": "تواصل"
    }
};

const langNames = {
    en: "EN",
    ru: "RU",
    uz: "UZ",
    es: "ES",
    fr: "FR",
    de: "DE",
    zh: "中文",
    ko: "한",
    ja: "日",
    pt: "PT",
    tr: "TR",
    ar: "ع"
};

// ========================================
// State
// ========================================
let currentTheme = 'system';
let currentLang = 'en';

// ========================================
// DOM Elements
// ========================================
const html = document.documentElement;
const nav = document.querySelector('.nav');
const langBtn = document.querySelector('.lang-btn');
const langDropdown = document.querySelector('.lang-dropdown');
const langCurrent = document.querySelector('.lang-current');
const themeBtns = document.querySelectorAll('.theme-btn');
const themeIndicator = document.querySelector('.theme-indicator');
const portfolioGrid = document.getElementById('portfolioGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const heroPhoto = document.getElementById('heroPhoto');
const contactForm = document.getElementById('contactForm');
const currentYearEl = document.getElementById('currentYear');

// ========================================
// Initialization
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initNavigation();
    initProjects();
    initFilters();
    initRevealAnimations();
    initSkillBars();
    initParallax();
    initContactForm();
    setCurrentYear();
});

// ========================================
// Theme System
// ========================================
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'system';
    setTheme(savedTheme);
    
    themeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.dataset.theme;
            setTheme(theme);
            localStorage.setItem('theme', theme);
        });
    });
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (currentTheme === 'system') {
            applySystemTheme();
        }
    });
}

function setTheme(theme) {
    currentTheme = theme;
    
    // Update ARIA states
    themeBtns.forEach(btn => {
        const isActive = btn.dataset.theme === theme;
        btn.setAttribute('aria-checked', isActive);
    });
    
    // Position indicator
    const positions = { light: '1', system: '2', dark: '3' };
    themeIndicator.dataset.position = positions[theme];
    
    if (theme === 'system') {
        applySystemTheme();
    } else {
        html.dataset.theme = theme;
    }
}

function applySystemTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    html.dataset.theme = prefersDark ? 'dark' : 'light';
}

// ========================================
// Language System
// ========================================
function initLanguage() {
    const savedLang = localStorage.getItem('lang') || 'en';
    setLanguage(savedLang);
    
    // Toggle dropdown
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = langDropdown.classList.contains('open');
        langDropdown.classList.toggle('open');
        langBtn.setAttribute('aria-expanded', !isOpen);
    });
    
    // Language selection
    langDropdown.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', () => {
            const lang = item.dataset.lang;
            setLanguage(lang);
            localStorage.setItem('lang', lang);
            langDropdown.classList.remove('open');
            langBtn.setAttribute('aria-expanded', 'false');
        });
    });
    
    // Close on outside click
    document.addEventListener('click', () => {
        langDropdown.classList.remove('open');
        langBtn.setAttribute('aria-expanded', 'false');
    });
}

function setLanguage(lang) {
    currentLang = lang;
    
    // Update current display
    langCurrent.textContent = langNames[lang];
    
    // Update active state in dropdown
    langDropdown.querySelectorAll('li').forEach(item => {
        item.classList.toggle('active', item.dataset.lang === lang);
    });
    
    // Set RTL for Arabic
    if (lang === 'ar') {
        html.setAttribute('dir', 'rtl');
    } else {
        html.setAttribute('dir', 'ltr');
    }
    
    // Update html lang attribute
    html.setAttribute('lang', lang);
    
    // Translate all elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const translation = getTranslation(key, lang);
        if (translation) {
            el.textContent = translation;
        }
    });
    
    // Re-render projects with new language
    renderProjects();
}

function getTranslation(key, lang) {
    if (translations[lang] && translations[lang][key]) {
        return translations[lang][key];
    }
    // Fallback to English
    return translations.en[key] || key;
}

// ========================================
// Navigation
// ========================================
function initNavigation() {
    // Scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        nav.classList.toggle('scrolled', currentScroll > 50);
        lastScroll = currentScroll;
    });
    
    // Active section highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// Projects
// ========================================
function initProjects() {
    renderProjects();
}

function renderProjects(filter = 'all') {
    const codeText = getTranslation('portfolio.code', currentLang);
    const liveText = getTranslation('portfolio.live', currentLang);
    
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category === filter);
    
    portfolioGrid.innerHTML = filteredProjects.map(project => `
        <article class="project-card reveal revealed" data-category="${project.category}">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.codeLink}" class="project-link" target="_blank" rel="noopener noreferrer">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 0.999999C19.91 0.999999 18.73 0.649999 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.649999 5.09 0.999999 5.09 0.999999C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        ${codeText}
                    </a>
                    <a href="${project.liveLink}" class="project-link" target="_blank" rel="noopener noreferrer">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15 3H21V9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10 14L21 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        ${liveText}
                    </a>
                </div>
            </div>
        </article>
    `).join('');
}

// ========================================
// Filters
// ========================================
function initFilters() {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter projects
            renderProjects(filter);
        });
    });
}

// ========================================
// Reveal Animations
// ========================================
function initRevealAnimations() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        document.querySelectorAll('.reveal').forEach(el => {
            el.classList.add('revealed');
        });
        return;
    }
    
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
}

// ========================================
// Skill Bars Animation
// ========================================
function initSkillBars() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const skillBars = document.querySelectorAll('.skill-bar');
    
    if (prefersReducedMotion) {
        skillBars.forEach(bar => {
            bar.style.width = bar.dataset.level + '%';
        });
        return;
    }
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                bar.style.setProperty('--level', bar.dataset.level + '%');
                bar.classList.add('animated');
                observer.unobserve(bar);
            }
        });
    }, observerOptions);
    
    skillBars.forEach(bar => observer.observe(bar));
}

// ========================================
// Parallax Effect on Hero Photo
// ========================================
function initParallax() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    
    if (prefersReducedMotion || isMobile || !heroPhoto) return;
    
    const heroSection = document.querySelector('.hero');
    
    heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        const rotateX = y * 10;
        const rotateY = x * -10;
        
        heroPhoto.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    heroSection.addEventListener('mouseleave', () => {
        heroPhoto.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
}

// ========================================
// Contact Form
// ========================================
function initContactForm() {
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Demo: Just show alert
        // EDIT_HERE: Replace with actual form submission (Formspree, Netlify, etc.)
        alert('Demo form submitted! Connect Formspree or Netlify Forms to receive actual emails.');
        
        contactForm.reset();
    });
}

// ========================================
// Utilities
// ========================================
function setCurrentYear() {
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }
}

// ========================================
// Keyboard Navigation
// ========================================
document.addEventListener('keydown', (e) => {
    // Close dropdowns on Escape
    if (e.key === 'Escape') {
        langDropdown.classList.remove('open');
        langBtn.setAttribute('aria-expanded', 'false');
    }
});

// Language dropdown keyboard navigation
langBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        langBtn.click();
    }
});

langDropdown.addEventListener('keydown', (e) => {
    const items = Array.from(langDropdown.querySelectorAll('li'));
    const currentIndex = items.findIndex(item => item === document.activeElement);
    
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % items.length;
        items[nextIndex].focus();
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        items[prevIndex].focus();
    } else if (e.key === 'Enter') {
        e.preventDefault();
        items[currentIndex]?.click();
    }
});

// Make dropdown items focusable
langDropdown.querySelectorAll('li').forEach(item => {
    item.setAttribute('tabindex', '0');
});
