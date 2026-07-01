/* ============================================================
   script.js – Mega Joules Premium Website
   Enhanced with robust interactivity and smooth navigation
   ============================================================ */

// ============================================================
// DATA
// ============================================================

const servicesData = [{
    id: 'commercial',
    icon: 'fa-building',
    title: 'Commercial Cleaning',
    desc: 'Professional office and commercial space cleaning tailored to your business needs.',
    longDesc: 'Our commercial cleaning services are designed to keep your office, retail space, or corporate environment spotless and welcoming. We use advanced equipment and eco-friendly products to ensure a healthy workspace for your employees and clients. Services include daily cleaning, floor care, window washing, and deep cleaning.',
    benefits: ['Daily office cleaning', 'Carpet & upholstery care', 'Window & glass cleaning', 'Waste management',
        'Custom schedules'
    ]
}, {
    id: 'industrial',
    icon: 'fa-industry',
    title: 'Industrial Cleaning',
    desc: 'Heavy-duty cleaning for warehouses, factories, and industrial facilities.',
    longDesc: 'Industrial environments require specialized cleaning solutions. Our team is trained to handle heavy machinery, chemical spills, and high-traffic industrial spaces. We follow strict safety protocols and use industrial-grade equipment to ensure your facility meets health and safety standards.',
    benefits: ['Heavy machinery cleaning', 'Chemical spill management', 'Floor scrubbing & polishing',
        'Waste disposal', 'Safety compliance'
    ]
}, {
    id: 'residential',
    icon: 'fa-home',
    title: 'Residential Cleaning',
    desc: 'Deep cleaning and maintenance for homes, apartments, and estates.',
    longDesc: 'Transform your home into a pristine sanctuary with our residential cleaning services. We offer everything from regular weekly cleans to deep spring cleaning, move-in/move-out services, and specialized treatments for kitchens, bathrooms, and living areas.',
    benefits: ['Weekly & bi-weekly cleaning', 'Deep cleaning', 'Move-in/move-out',
        'Kitchen & bathroom focus', 'Eco-friendly products'
    ]
}, {
    id: 'retail',
    icon: 'fa-store',
    title: 'Retail Cleaning',
    desc: 'Clean and inviting retail spaces that enhance customer experience.',
    longDesc: 'First impressions matter. Our retail cleaning services ensure your store is always clean, bright, and inviting. We work around your business hours to minimize disruption and maintain a pristine shopping environment that keeps customers coming back.',
    benefits: ['Storefront cleaning', 'Floor maintenance', 'Changing room sanitization', 'Window displays',
        'After-hours service'
    ]
}, {
    id: 'healthcare',
    icon: 'fa-hospital',
    title: 'Healthcare Cleaning',
    desc: 'Specialized cleaning for hospitals, clinics, and healthcare facilities.',
    longDesc: 'Healthcare facilities demand the highest standards of cleanliness. Our team is trained in infection control, biohazard handling, and sanitization protocols. We use hospital-grade disinfectants and follow strict procedures to protect patients and staff.',
    benefits: ['Infection control', 'Biohazard handling', 'Operating room cleaning',
        'Patient room sanitization', 'Compliance with health codes'
    ]
}, {
    id: 'educational',
    icon: 'fa-school',
    title: 'Educational Cleaning',
    desc: 'Safe and hygienic cleaning for schools, universities, and campuses.',
    longDesc: 'Create a healthy learning environment with our educational cleaning services. We specialize in classrooms, libraries, laboratories, and common areas, using child-safe products and following strict hygiene protocols to protect students and staff.',
    benefits: ['Classroom cleaning', 'Laboratory sanitization', 'Common area maintenance', 'Safe products',
        'Flexible scheduling'
    ]
}, {
    id: 'sanitization',
    icon: 'fa-shield-alt',
    title: 'Sanitization &amp; Disinfection',
    desc: 'Advanced sanitization protocols for a safe and healthy environment.',
    longDesc: 'Our sanitization services go beyond surface cleaning to eliminate germs, bacteria, and viruses. Using electrostatic sprayers and EPA-approved disinfectants, we provide comprehensive sanitization for offices, schools, healthcare facilities, and public spaces.',
    benefits: ['Electrostatic spraying', 'EPA-approved products', 'Virus & bacteria elimination',
        'High-touch area focus', 'Peace of mind'
    ]
}, {
    id: 'pest',
    icon: 'fa-bug',
    title: 'Pest Control',
    desc: 'Effective pest management solutions for commercial and residential properties.',
    longDesc: 'Our integrated pest management approach eliminates pests safely and effectively. We handle everything from ants and cockroaches to rodents and birds, using environmentally responsible methods and providing ongoing monitoring to prevent recurrence.',
    benefits: ['Integrated pest management', 'Safe methods', 'Ongoing monitoring', 'Commercial & residential',
        'Eco-friendly options'
    ]
}, {
    id: 'garden',
    icon: 'fa-seedling',
    title: 'Garden Services',
    desc: 'Professional landscaping, gardening, and grounds maintenance.',
    longDesc: 'Keep your outdoor spaces beautiful with our comprehensive garden services. We offer landscaping design, lawn maintenance, pruning, planting, and seasonal clean-ups for residential estates, corporate parks, and public spaces.',
    benefits: ['Lawn maintenance', 'Landscaping design', 'Pruning & trimming', 'Seasonal clean-ups',
        'Irrigation systems'
    ]
}, {
    id: 'pressure',
    icon: 'fa-water',
    title: 'High Pressure Cleaning',
    desc: 'Powerful pressure washing for driveways, facades, and outdoor surfaces.',
    longDesc: 'Our high-pressure cleaning services restore the appearance of your property. We clean driveways, parking lots, building facades, roofs, and outdoor furniture using specialized equipment that removes dirt, grime, mold, and graffiti without damaging surfaces.',
    benefits: ['Driveway cleaning', 'Facade restoration', 'Roof cleaning', 'Graffiti removal',
        'Eco-friendly pressure washing'
    ]
}, {
    id: 'pool',
    icon: 'fa-swimmer',
    title: 'Pool Cleaning',
    desc: 'Complete pool cleaning, maintenance, and chemical balancing services.',
    longDesc: 'Enjoy a crystal-clear pool with our professional cleaning and maintenance services. We handle everything from skimming and vacuuming to chemical balancing, filter cleaning, and equipment repairs, ensuring your pool is always ready for use.',
    benefits: ['Skimming & vacuuming', 'Chemical balancing', 'Filter cleaning', 'Equipment repairs',
        'Regular maintenance'
    ]
}, {
    id: 'painting',
    icon: 'fa-paint-roller',
    title: 'Painting',
    desc: 'Interior and exterior painting for residential and commercial properties.',
    longDesc: 'Transform your property with our professional painting services. We offer interior and exterior painting, including walls, ceilings, trim, and specialized finishes. Our team prepares surfaces properly and uses high-quality paints for a flawless, long-lasting result.',
    benefits: ['Interior painting', 'Exterior painting', 'Surface preparation', 'High-quality paints',
        'Color consultation'
    ]
}, {
    id: 'tile',
    icon: 'fa-th-large',
    title: 'Tile Installation &amp; Removal',
    desc: 'Professional tile installation, repair, and removal services.',
    longDesc: 'Our tile experts handle everything from removal to installation. We work with ceramic, porcelain, natural stone, and glass tiles, providing precision cutting, grouting, and sealing for beautiful, durable results in kitchens, bathrooms, and commercial spaces.',
    benefits: ['Tile removal', 'Tile installation', 'Grouting & sealing', 'Kitchen & bathroom',
        'Commercial & residential'
    ]
}, {
    id: 'cupboards',
    icon: 'fa-cabinet-filing',
    title: 'Built-in Cupboards Installation',
    desc: 'Custom built-in cupboard design, manufacturing, and installation.',
    longDesc: 'Maximize your space with custom built-in cupboards. We design, manufacture, and install bespoke cabinetry for kitchens, bedrooms, offices, and living areas. Our solutions combine functionality, style, and quality craftsmanship to enhance your property.',
    benefits: ['Custom design', 'Manufacturing', 'Professional installation', 'Kitchen & bedroom',
        'Quality craftsmanship'
    ]
}];

const portfolioData = [
    { title: 'Modern Office Cleaning', category: 'commercial',
    img: 'images/images.jpg' },
    { title: 'Luxury Home Deep Clean', category: 'residential',
    img: 'images/mj7.jpeg' },
    { title: 'Warehouse Floor Scrub', category: 'industrial',
    img: 'images/floor scrubber.jpg' },
    { title: 'Pressure Washing Driveway', category: 'pressure',
    img: 'images/mj8.jpeg' },
    { title: 'Garden Landscaping', category: 'garden',
    img: 'images/garden.jpg' },
    { title: 'Commercial Building Exterior', category: 'painting',
    img: 'images/mj2.jpeg' },
    { title: 'Hospital Sanitization', category: 'commercial',
    img: 'images/mj10.jpeg' },
    { title: 'Retail Store Cleaning', category: 'commercial',
    img: 'images/retail.jpg' },
    { title: 'Pool Maintenance', category: 'pressure',
    img: 'images/pool.jpg' },
    { title: 'School Floor Buffing', category: 'commercial',
    img: 'images/artboard-2.jpg' },
];

// ============================================================
// RENDER SERVICES
// ============================================================

function renderServices() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;
    grid.innerHTML = servicesData.map((s, i) => `
            <div class="service-card" data-aos="fade-up" data-aos-delay="${i * 40}">
                <div class="icon"><i class="fas ${s.icon}"></i></div>
                <h3>${s.title}</h3>
                <p>${s.desc}</p>
                <button class="learn-more" onclick="openServiceModal('${s.id}')">
                    Learn More <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `).join('');
}

// ============================================================
// SERVICE MODAL
// ============================================================

function openServiceModal(id) {
    const service = servicesData.find(s => s.id === id);
    if (!service) return;
    document.getElementById('modalIcon').innerHTML = `<i class="fas ${service.icon}"></i>`;
    document.getElementById('modalTitle').textContent = service.title;
    const benefitsHtml = service.benefits.map(b => `<li>${b}</li>`).join('');
    document.getElementById('modalBody').innerHTML = `
            <p>${service.longDesc}</p>
            <ul>${benefitsHtml}</ul>
        `;
    document.getElementById('serviceModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('serviceModal').classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================================
// QUOTE MODAL
// ============================================================

function openQuoteModal() {
    document.getElementById('quoteFormContent').style.display = 'block';
    document.getElementById('quoteThankYou').style.display = 'none';
    document.getElementById('quoteModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeQuoteModal() {
    document.getElementById('quoteModal').classList.remove('active');
    document.body.style.overflow = '';
}

function submitQuote(e) {
    e.preventDefault();
    const name = document.getElementById('qname').value.trim();
    const email = document.getElementById('qemail').value.trim();
    const phone = document.getElementById('qphone').value.trim();
    if (!name || !email || !phone) {
        alert('Please fill in all required fields.');
        return;
    }
    document.getElementById('quoteFormContent').style.display = 'none';
    document.getElementById('quoteThankYou').style.display = 'block';
}

// ============================================================
// APPLICATION MODAL
// ============================================================

function openApplyModal() {
    document.getElementById('applyFormContent').style.display = 'block';
    document.getElementById('applyThankYou').style.display = 'none';
    document.getElementById('applyModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeApplyModal() {
    document.getElementById('applyModal').classList.remove('active');
    document.body.style.overflow = '';
}

function submitApplication(e) {
    e.preventDefault();
    const name = document.getElementById('aname').value.trim();
    const email = document.getElementById('aemail').value.trim();
    const phone = document.getElementById('aphone').value.trim();
    if (!name || !email || !phone) {
        alert('Please fill in all required fields.');
        return;
    }
    document.getElementById('applyFormContent').style.display = 'none';
    document.getElementById('applyThankYou').style.display = 'block';
}

// ============================================================
// BLOG EXPAND
// ============================================================

function toggleBlog(btn, contentId) {
    const content = document.getElementById(contentId);
    const isOpen = content.classList.contains('open');
    // Close all
    document.querySelectorAll('.blog-full').forEach(el => el.classList.remove('open'));
    document.querySelectorAll('.read-more').forEach(b => {
        b.innerHTML = b.innerHTML.replace('Read Less', 'Read More');
    });
    if (!isOpen) {
        content.classList.add('open');
        btn.innerHTML = 'Read Less <i class="fas fa-arrow-up"></i>';
    } else {
        btn.innerHTML = 'Read More <i class="fas fa-arrow-right"></i>';
    }
}

// ============================================================
// RENDER PORTFOLIO
// ============================================================

function renderPortfolio(filter) {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;
    const filtered = filter === 'all' ? portfolioData : portfolioData.filter(p => p.category === filter);
    grid.innerHTML = filtered.map(item => `
            <div class="portfolio-item" data-category="${item.category}">
                <img src="${item.img}" alt="${item.title}" loading="lazy" />
                <div class="overlay"><span>${item.title}</span></div>
            </div>
        `).join('');
}

// ============================================================
// FAQ TOGGLE
// ============================================================

function toggleFaq(btn) {
    const answer = btn.nextElementSibling;
    const isOpen = answer.classList.contains('open');
    document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
    document.querySelectorAll('.faq-q').forEach(q => q.classList.remove('active'));
    if (!isOpen) {
        answer.classList.add('open');
        btn.classList.add('active');
    }
}

// ============================================================
// COOKIE CONSENT
// ============================================================

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    document.getElementById('cookieBanner').classList.remove('active');
}

function declineCookies() {
    localStorage.setItem('cookieConsent', 'declined');
    document.getElementById('cookieBanner').classList.remove('active');
}

// ============================================================
// NEWSLETTER
// ============================================================

function subscribeNewsletter() {
    const email = document.getElementById('newsletterEmail').value;
    if (email && email.includes('@')) {
        alert('✅ Thank you for subscribing! We\'ll keep you updated.');
        document.getElementById('newsletterEmail').value = '';
    } else {
        alert('⚠️ Please enter a valid email address.');
    }
}

// ============================================================
// INIT – DOM Ready
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

    // ===== Render Services & Portfolio =====
    renderServices();
    renderPortfolio('all');

    // ===== Portfolio Filters =====
    document.querySelectorAll('.portfolio-filters button').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.portfolio-filters button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderPortfolio(btn.dataset.filter);
        });
    });

    // ===== Testimonials Swiper =====
    if (typeof Swiper !== 'undefined') {
        new Swiper('.testimonials-slider', {
            slidesPerView: 1,
            spaceBetween: 24,
            pagination: { el: '.swiper-pagination', clickable: true },
            breakpoints: {
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
            },
            autoplay: { delay: 5000, disableOnInteraction: false },
            loop: true,
        });
    }

    // ===== AOS =====
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 700,
            once: true,
            offset: 60,
            easing: 'ease-out-cubic'
        });
    }

    // ===== Nav Toggle =====
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('open');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navLinks.classList.remove('open');
            });
        });
    }

    // ===== Nav Scroll Effect =====
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 40);
        }
        // Active link
        const sections = document.querySelectorAll('section[id]');
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 120;
            if (window.scrollY >= top) current = section.getAttribute('id');
        });
        document.querySelectorAll('.nav-links a').forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === '#' + current);
        });
        // Back to top
        const backTop = document.getElementById('backTop');
        if (backTop) {
            backTop.classList.toggle('visible', window.scrollY > 400);
        }
    });

    // ===== Back to Top =====
    const backTop = document.getElementById('backTop');
    if (backTop) {
        backTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ===== Counter Animation =====
    const counters = document.querySelectorAll('[data-count]');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-count'));
                let current = 0;
                const increment = target / 60;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        el.textContent = target + '+';
                        clearInterval(timer);
                    } else {
                        el.textContent = Math.floor(current) + '+';
                    }
                }, 25);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.4 });
    counters.forEach(c => counterObserver.observe(c));

    // ===== Cookie Banner =====
    const cookieBanner = document.getElementById('cookieBanner');
    if (cookieBanner && !localStorage.getItem('cookieConsent')) {
        cookieBanner.classList.add('active');
    }

    // ===== Modal Close Handlers =====
    document.getElementById('closeModal')?.addEventListener('click', closeModal);
    document.getElementById('serviceModal')?.addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });
    document.getElementById('quoteModal')?.addEventListener('click', function(e) {
        if (e.target === this) closeQuoteModal();
    });
    document.getElementById('applyModal')?.addEventListener('click', function(e) {
        if (e.target === this) closeApplyModal();
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
            closeQuoteModal();
            closeApplyModal();
        }
    });

    // ===== Modal Quote Button =====
    document.getElementById('modalQuoteBtn')?.addEventListener('click', function() {
        closeModal();
        setTimeout(openQuoteModal, 300);
    });

    // ===== Hero & CTA Buttons =====
    document.getElementById('heroGetQuoteBtn')?.addEventListener('click', openQuoteModal);
    document.getElementById('ctaGetQuoteBtn')?.addEventListener('click', openQuoteModal);
    document.getElementById('navGetQuote')?.addEventListener('click', function(e) {
        e.preventDefault();
        openQuoteModal();
    });

    // ===== Hero Services Button =====
    document.getElementById('heroServicesBtn')?.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    });

    // ===== About Buttons =====
    document.getElementById('aboutLearnMoreBtn')?.addEventListener('click', function() {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('aboutServicesBtn')?.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    });

    // ===== Contact Info Items =====
    document.getElementById('contactPhone')?.addEventListener('click', () => {
        window.location.href = 'tel:+27693939220';
    });
    document.getElementById('contactWhatsApp')?.addEventListener('click', () => {
        window.open('https://wa.me/27693939220', '_blank');
    });
    document.getElementById('contactEmail')?.addEventListener('click', () => {
        window.location.href = 'mailto:megajoulescleaning@gmail.com';
    });
    document.getElementById('contactAddress')?.addEventListener('click', () => {
        window.open('https://maps.google.com/maps?q=59+Diakonia+Avenue+Albert+Park+Durban+4000', '_blank');
    });

    // ===== Call Now Button =====
    document.getElementById('callNowBtn')?.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'tel:+27693939220';
    });

    // ===== Contact Form =====
    document.getElementById('contactForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = this.querySelector('button[type="submit"]');
        const original = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.disabled = true;

        const data = new FormData(this);
        fetch(this.action, {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                if (response.ok) {
                    alert('✅ Thank you! Your message has been sent. We\'ll get back to you shortly.');
                    this.reset();
                } else {
                    alert('❌ Oops! Something went wrong. Please try again.');
                }
            })
            .catch(() => {
                alert('❌ Oops! Something went wrong. Please try again.');
            })
            .finally(() => {
                btn.innerHTML = original;
                btn.disabled = false;
            });
    });

    // ===== Smooth Scroll for all anchor links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target && this.getAttribute('href') !== '#') {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    console.log('🚀 Mega Joules — Premium Website Fully Loaded');
    console.log('📞 Call: 069 393 9220 | WhatsApp: 069 393 9220');
    console.log('👨‍💻 Designed with care by Senior UX/UI Team');

});