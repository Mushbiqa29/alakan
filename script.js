// ✅ FIXED AND CLEANED-UP VERSION
// Loader Logo Drawing Animation
const canvas = document.getElementById("houseCanvas");
const ctx = canvas.getContext("2d");
ctx.lineWidth = 4;
ctx.lineJoin = "round";
ctx.lineCap = "round";

const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
gradient.addColorStop(0, "  #a58e26");
gradient.addColorStop(1, " #A52626");
ctx.strokeStyle = gradient;

const lines = [
  [[150, 80], [100, 120]],
  [[150, 80], [200, 120]],
  [[100, 120], [100, 200]],
  [[200, 120], [200, 200]],
  [[100, 200], [200, 200]],
  [[150, 120], [150, 200]],
  [[100, 160], [150, 160]],
  [[150, 160], [200, 160]],
  [[125, 160], [125, 200]],
  [[100, 180], [150, 180]]
];

let step = 0;
const logo = new Image();
logo.src = "A-logo.png";

function drawSegment(segment) {
  ctx.beginPath();
  ctx.moveTo(segment[0][0], segment[0][1]);
  ctx.lineTo(segment[1][0], segment[1][1]);
  ctx.stroke();
}

function animateDrawing() {
if (step < lines.length) {
drawSegment(lines[step]);
step++;
setTimeout(animateDrawing, 200);
} else {
setTimeout(() => {
// Draw logo in the middle
let alpha = 0;

const fadeIn = setInterval(() => {
ctx.clearRect(125, 107, 50, 50);// Clean full spot
ctx.globalAlpha = alpha;
ctx.drawImage(logo, 105, 100, 80, 80);
alpha += 0.05;

if (alpha >= 1) {
clearInterval(fadeIn);
ctx.globalAlpha = 1;

// Wait and then show content
setTimeout(() => {
document.getElementById("loader").style.display = "none";
document.querySelector(".footer").style.display="block"
document.getElementById("content").style.display = "block";
}, 1200);
}

},50);
},500);
}
}



  const fadeItems = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.15
  });
  // Trigger fade-up animations when in view (optional)
  const fadeElements = document.querySelectorAll('.alak-fade-up');
  const observer3 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => {
    observer3.observe(el);
});
  fadeItems.forEach(item => observer.observe(item));
  document.addEventListener('DOMContentLoaded', function () {
  const backToTopBtn = document.getElementById('backToTop');

  // Show/hide button
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  // Scroll to top (robust version)
  backToTopBtn.addEventListener('click', function (e) {
    e.preventDefault();

    // Scroll both <html> and <body> to be safe
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    document.body.scrollTo({
      top: 0,
      behavior: 'smooth'
});
});
});
       // Underline move
    const navItems = document.querySelectorAll(".nav-item");
    const underline = document.getElementById("underline");
const activeNavItem = document.querySelector(".nav-item.active");
    if (activeNavItem) {
      moveUnderline(activeNavItem);
    }
    function moveUnderline(target) {
      const rect = target.getBoundingClientRect();
      const navRect = target.parentElement.getBoundingClientRect();
      const left = rect.left - navRect.left;
      underline.style.left = `${left}px`;
      underline.style.width = `${rect.width}px`;
    }
   
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        document.querySelector(".nav-item.active")?.classList.remove("active");
        item.classList.add("active");
        moveUnderline(item);
      });
    });

  
    document.addEventListener('DOMContentLoaded', function() {
    // Mobile hamburger toggle
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');
    
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        navList.classList.toggle('show');
        hamburger.classList.toggle('active');
    });

    // Dropdown toggle - modified for mobile
    const dropdown = document.getElementById('dropdown');
    const dropdownToggle = document.getElementById('dropdownToggle');
    const dropdownMenu = document.getElementById('dropdownMenu');
    
    dropdownToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        dropdown.classList.toggle('open');
        
        // Close other dropdowns if any
        document.querySelectorAll('.dropdown').forEach(item => {
            if (item !== dropdown) {
                item.classList.remove('open');
            }
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('open');
        }
        
        // Close mobile menu when clicking outside
        if (window.innerWidth <= 768 && !navList.contains(e.target) && 
            !hamburger.contains(e.target)) {
            navList.classList.remove('show');
            hamburger.classList.remove('active');
        }
    });

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-item a:not(#dropdownToggle)');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navList.classList.remove('show');
                hamburger.classList.remove('active');
            }
        });
    });
});

  
// On page load
 
window.onload = () => {
  const active = document.querySelector(".nav-item.active");
  animateDrawing();
};
