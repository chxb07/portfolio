document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
          
          // Update active nav dot
          if (targetId !== '#hero') {
            document.querySelectorAll('.nav-dot').forEach(dot => {
              dot.classList.remove('active');
            });
            document.querySelector(`.nav-dot[href="${targetId}"]`).classList.add('active');
          }
        }
      });
    });
    
    // Update active nav dot on scroll
    window.addEventListener('scroll', function() {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 200;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          document.querySelectorAll('.nav-dot').forEach(dot => {
            dot.classList.remove('active');
          });
          
          if (sectionId !== 'hero') {
            document.querySelector(`.nav-dot[href="#${sectionId}"]`).classList.add('active');
          }
        }
      });
    });
    
    // Mobile menu toggle (you can add this if you implement a mobile menu)
    // const menuToggle = document.querySelector('.menu-toggle');
    // const nav = document.querySelector('nav');
    // 
    // menuToggle.addEventListener('click', function() {
    //   nav.classList.toggle('active');
    // });
    
    // Animation on scroll
    const animateOnScroll = function() {
      const elements = document.querySelectorAll('.project, .about-content, .contact');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    };
    
    // Set initial state for animation
    document.querySelectorAll('.project, .about-content, .contact').forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
  });