// Dark Mode Toggle
const darkModeBtn = document.getElementById('darkModeBtn');
const body = document.body;
const htmlElement = document.documentElement;

// Load dark mode preference from localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  darkModeBtn.innerHTML = '<i class="fas fa-sun"></i>';
}

darkModeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  htmlElement.style.scrollBehavior = 'auto';
  
  if (body.classList.contains('dark-mode')) {
    darkModeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('darkMode', 'enabled');
  } else {
    darkModeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('darkMode', 'disabled');
  }
  
  htmlElement.style.scrollBehavior = 'smooth';
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navbarMenu = document.querySelector('.navbar-menu');

menuToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.navbar-menu a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
  });
});

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Scroll Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.animation = 'fadeIn 0.8s ease-out';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const animatedElements = document.querySelectorAll('.animate-on-scroll');
animatedElements.forEach(el => {
  el.style.opacity = '0';
  observer.observe(el);
});

// Portfolio Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const filter = btn.getAttribute('data-filter');
    
    portfolioItems.forEach(item => {
      if (filter === '*' || item.classList.contains(filter.substring(1))) {
        item.style.display = 'block';
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.animation = 'fadeIn 0.6s ease-out';
        }, 0);
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Gallery Tabs
const galleryTabs = document.querySelectorAll('.gallery-tab');
const galleryItems = document.querySelectorAll('.gallery-item');

galleryTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    galleryTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    
    const tabName = tab.getAttribute('data-tab');
    
    galleryItems.forEach(item => {
      if (item.classList.contains(tabName)) {
        item.style.display = 'block';
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.animation = 'fadeIn 0.6s ease-out';
        }, 0);
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const phone = contactForm.querySelector('input[type="tel"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    // Create WhatsApp message
    const whatsappMessage = `Halo Munawar, Saya ${name}%0AEmail: ${email}%0ANo WA: ${phone}%0A%0APesan: ${message}`;
    const whatsappLink = `https://wa.me/6285314326970?text=${whatsappMessage}`;
    
    // Open WhatsApp
    window.open(whatsappLink, '_blank');
    
    // Reset form
    contactForm.reset();
  });
}

// Save Editable Content
const editableElements = document.querySelectorAll('.editable');

editableElements.forEach(el => {
  // Load saved content
  const savedContent = localStorage.getItem(`content-${el.textContent}`);
  if (savedContent) {
    el.textContent = savedContent;
  }
  
  // Save on blur
  el.addEventListener('blur', () => {
    localStorage.setItem(`content-${el.textContent}`, el.textContent);
  });
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add loading animation
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

// Prevent editing accidentally during normal browsing
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault();
    alert('Konten telah disimpan otomatis di localStorage Anda.');
  }
});

// Progressive skill animation
const skillBars = document.querySelectorAll('.skill-progress');
const skillSection = document.querySelector('.skill');

if (skillSection) {
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillBars.forEach(bar => {
          const width = bar.style.width;
          bar.style.width = '0';
          setTimeout(() => {
            bar.style.width = width;
          }, 100);
        });
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  skillObserver.observe(skillSection);
}

// Navbar sticky effect
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  lastScrollY = window.scrollY;
  
  if (lastScrollY > 100) {
    navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
  }
});

// Initialize skills display
window.addEventListener('DOMContentLoaded', () => {
  // Set initial skill widths
  skillBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
  });
});

console.log('%cSelamat Datang!', 'color: #0F766E; font-size: 20px; font-weight: bold;');
console.log('%cWebsite Portfolio Munawar - "Menebar Manfaat Melalui Ilmu dan Teknologi"', 'color: #14B8A6; font-size: 14px;');
console.log('%cTip: Klik pada teks dengan background hijau muda untuk mengedit isi', 'color: #64748B; font-size: 12px;');