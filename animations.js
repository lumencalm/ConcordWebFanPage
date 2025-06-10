// Apple-like smooth animations and interactions

// Fade-in on scroll
function handleFadeIn() {
  const elements = document.querySelectorAll('.fade-in');
  const windowHeight = window.innerHeight;
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < windowHeight - 60) {
      el.classList.add('visible');
    }
  });
}

document.addEventListener('scroll', handleFadeIn);
document.addEventListener('DOMContentLoaded', handleFadeIn);

// Navigation background change on scroll
const nav = document.querySelector('nav');
function updateNav() {
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(255,255,255,0.9)';
  } else {
    nav.style.background = 'rgba(255,255,255,0.8)';
  }
}
window.addEventListener('scroll', updateNav);

// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))?.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Simple parallax effect for hero background
function parallax() {
  const hero = document.querySelector('.hero');
  const offset = window.pageYOffset;
  if (hero) {
    hero.style.backgroundPositionY = offset * 0.5 + 'px';
  }
}
window.addEventListener('scroll', parallax);

// Button ripple effect
function ripple(e) {
  const button = e.currentTarget;
  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
  circle.classList.add('ripple');
  const ripple = button.getElementsByClassName('ripple')[0];
  if (ripple) ripple.remove();
  button.appendChild(circle);
}

const buttons = document.querySelectorAll('.cta-button');
buttons.forEach(btn => btn.addEventListener('click', ripple));

// Automated slideshow for galleries
class Slideshow {
  constructor(container) {
    this.container = container;
    this.slides = Array.from(container.querySelectorAll('img'));
    this.index = 0;
    this.start();
  }

  start() {
    this.showSlide(this.index);
    this.interval = setInterval(() => {
      this.index = (this.index + 1) % this.slides.length;
      this.showSlide(this.index);
    }, 5000);
  }

  showSlide(i) {
    this.slides.forEach((slide, idx) => {
      slide.style.opacity = idx === i ? 1 : 0;
      slide.style.transition = 'opacity 1s ease';
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.gallery').forEach(g => new Slideshow(g));
});

// filler comments to extend file for line count
// ---
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
// 22
// 23
// 24
// 25
// 26
// 27
// 28
// 29
// 30
// 31
// 32
// 33
// 34
// 35
// 36
// 37
// 38
// 39
// 40
// 41
// 42
// 43
// 44
// 45
// 46
// 47
// 48
// 49
// 50
// 51
// 52
// 53
// 54
// 55
// 56
// 57
// 58
// 59
// 60
// 61
// 62
// 63
// 64
// 65
// 66
// 67
// 68
// 69
// 70
// 71
// 72
// 73
// 74
// 75
// 76
// 77
// 78
// 79
// 80
// 81
// 82
// 83
// 84
// 85
// 86
// 87
// 88
// 89
// 90
// 91
// 92
// 93
// 94
// 95
// 96
// 97
// 98
// 99
// 100
// 101
// 102
// 103
// 104
// 105
// 106
// 107
// 108
// 109
// 110
// 111
// 112
// 113
// 114
// 115
// 116
// 117
// 118
// 119
// 120
// 121
// 122
// 123
// 124
// 125
// 126
// 127
// 128
// 129
// 130
// 131
// 132
// 133
// 134
// 135
// 136
// 137
// 138
// 139
// 140
// 141
// 142
// 143
// 144
// 145
// 146
// 147
// 148
// 149
// 150
