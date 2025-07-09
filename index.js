// burger=document.querySelector('.burger')
// navbarItems=document.querySelector('.navbar-items')
// nav=document.querySelector('.nav')

// burger.addEventListener('click',()=>{
//    navbarItems.classList.toggle('h-class')
//    nav.classList.toggle('v-class')
// })
// Add this JS at the end of your index.js or in a <script> tag

// Modern Navbar Toggle

    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });

    // Close nav on link click (for mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
      });
    });

    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

  // Appointment form success message
  const appointmentForm = document.getElementById('appointmentForm');
  const appointmentSuccess = document.getElementById('appointmentSuccess');
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', function (e) {
      e.preventDefault();
      appointmentSuccess.style.display = 'flex';
      setTimeout(() => {
        appointmentSuccess.style.display = 'none';
        appointmentForm.reset();
      }, 2000);
    });
  }

document.addEventListener('DOMContentLoaded', function () {
  // Slider logic
  const track = document.getElementById('specialist-slider-track');
  const cards = track.querySelectorAll('.specialist-card');
  const prevBtn = document.getElementById('specialist-prev');
  const nextBtn = document.getElementById('specialist-next');
  const dotsContainer = document.getElementById('specialist-slider-dots');
  const visibleCards = 1; // Show 1 card at a time for mobile friendliness
  const totalCards = cards.length;
  let currentIndex = 0;

  // Create dots
  for (let i = 0; i < totalCards; i++) {
    const dot = document.createElement('span');
    dot.classList.add('specialist-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }
  const dots = dotsContainer.querySelectorAll('.specialist-dot');

  function updateSlider() {
    const cardWidth = cards[0].offsetWidth + 24; // card width + margin
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[currentIndex]) dots[currentIndex].classList.add('active');
  }

  function goToSlide(idx) {
    currentIndex = idx;
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > totalCards - visibleCards) currentIndex = totalCards - visibleCards;
    updateSlider();
  }

  prevBtn.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
  });
  nextBtn.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
  });

  // Responsive: update on resize
  window.addEventListener('resize', updateSlider);

  // Touch support for mobile
  let startX = 0;
  let isDragging = false;
  track.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
  });
  track.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    let diff = e.touches[0].clientX - startX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) goToSlide(currentIndex + 1);
      else goToSlide(currentIndex - 1);
      isDragging = false;
    }
  });
  track.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Initial update
  updateSlider();
});

// Add this to your index.js or in a <script> tag

document.addEventListener('DOMContentLoaded', function () {
  // Feedback slider logic
  const track = document.getElementById('feedback-slider-track');
  if (!track) return; // Prevent error if section not present
  const cards = track.querySelectorAll('.feedback-card');
  const prevBtn = document.getElementById('feedback-prev');
  const nextBtn = document.getElementById('feedback-next');
  const dotsContainer = document.getElementById('feedback-slider-dots');
  const visibleCards = 1;
  const totalCards = cards.length;
  let currentIndex = 0;

  // Create dots
  for (let i = 0; i < totalCards; i++) {
    const dot = document.createElement('span');
    dot.classList.add('feedback-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }
  const dots = dotsContainer.querySelectorAll('.feedback-dot');

  function updateSlider() {
    const cardWidth = cards[0].offsetWidth + 24; // card width + margin
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[currentIndex]) dots[currentIndex].classList.add('active');
  }

  function goToSlide(idx) {
    currentIndex = idx;
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > totalCards - visibleCards) currentIndex = totalCards - visibleCards;
    updateSlider();
  }

  prevBtn.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
  });
  nextBtn.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
  });

  // Responsive: update on resize
  window.addEventListener('resize', updateSlider);

  // Touch support for mobile
  let startX = 0;
  let isDragging = false;
  track.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
  });
  track.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    let diff = e.touches[0].clientX - startX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) goToSlide(currentIndex + 1);
      else goToSlide(currentIndex - 1);
      isDragging = false;
    }
  });
  track.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Initial update
  updateSlider();
});

// Department section animation on scroll
document.addEventListener('DOMContentLoaded', function () {
  const deptCards = document.querySelectorAll('.department-card');
  function revealDepartments() {
    const triggerBottom = window.innerHeight * 0.92;
    deptCards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < triggerBottom) {
        card.style.animationPlayState = 'running';
      }
    });
  }
  revealDepartments();
  window.addEventListener('scroll', revealDepartments);
});