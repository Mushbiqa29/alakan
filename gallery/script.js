const canvas = document.getElementById("houseCanvas");
const ctx = canvas.getContext("2d");
ctx.lineWidth = 4;
ctx.lineJoin = "round";
ctx.lineCap = "round";

const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
gradient.addColorStop(0, "#e6cd7d");
gradient.addColorStop(1, "#7a1c1c");
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
setTimeout(animateDrawing, 300);
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
document.getElementById("content").style.display = "block";
}, 1200);
}

},50);
},500);
}
}

// Underline move
const navItems = document.querySelectorAll(".nav-item");
const underline = document.getElementById("underline");

function moveUnderline(target) {
  const rect = target.getBoundingClientRect();
  const navRect = target.parentElement.getBoundingClientRect();
  const left = rect.left - navRect.left;
  underline.style.left = `${left}px`;
  underline.style.width =` ${rect.width}px`;
}

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".nav-item.active")?.classList.remove("active");
    item.classList.add("active");
    moveUnderline(item);
  });
});

// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("show");
  hamburger.classList.toggle("active");
});

// Dropdown toggle
const dropdown = document.getElementById("dropdown");
const dropdownToggle = document.getElementById("dropdownToggle");

dropdownToggle.addEventListener("click", (e) => {
  e.preventDefault();
  dropdown.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target) && !dropdownToggle.contains(e.target)) {
    dropdown.classList.remove("open");
  }
});

const sections = [
  {
    title: "Corridor View",
    images: [
      "https://images.unsplash.com/photo-1582484983984-1a930896da01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjBjb3JyaWRvcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBjb3JyaWRvcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1631049780150-c197bf723954?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjBjb3JyaWRvcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1707923701616-96b73890deae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsJTIwY29ycmlkb3J8ZW58MHwwfDB8fHww"
    ]
  },
  {
    title: "Hotel View",
    images: [
      "https://images.unsplash.com/photo-1683799909442-43230b93d3ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdvbGRlbiUyMGhvdGVsJTIwaW1hZ2V8ZW58MHwwfDB8fHww",
      "https://images.unsplash.com/photo-1604002818032-a40414378931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdvbGRlbiUyMGhvdGVsJTIwaW1hZ2V8ZW58MHwwfDB8fHww",
      "https://images.unsplash.com/photo-1559793028-e685ad82d143?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdvbGRlbiUyMGhvdGVsJTIwaW1hZ2V8ZW58MHwwfDB8fHww",
      "https://images.unsplash.com/photo-1707923701616-96b73890deae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsJTIwY29ycmlkb3J8ZW58MHwwfDB8fHww"
    ]
  },
  {
    title: "Reception",
    images: [
      "https://images.unsplash.com/photo-1711487288242-7bf1d2932717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVjZXB0aW9uJTIwdmlld3xlbnwwfDB8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1677129666186-d29eba893fe3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlY2VwdGlvbiUyMHZpZXd8ZW58MHwwfDB8fHww",
      "https://images.unsplash.com/photo-1698812007623-341dd87a3333?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlY2VwdGlvbiUyMHZpZXd8ZW58MHwwfDB8fHww",
      "https://images.unsplash.com/photo-1696091314116-bdcd55ec37e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVjZXB0aW9uJTIwdmlld3xlbnwwfDB8MHx8fDA%3D"
    ]
  },
  
  {
    title: "Room View",
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsJTIwcm9vbSUyMHZpZXd8ZW58MHwwfDB8fHww",
      "https://images.unsplash.com/photo-1590490359683-658d3d23f972?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwcm9vbSUyMHZpZXd8ZW58MHwwfDB8fHww",
      "https://images.unsplash.com/photo-1689729738817-fb1f4256769d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWwlMjByb29tJTIwdmlld3xlbnwwfDB8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1689729738920-edea97589328?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjByb29tJTIwdmlld3xlbnwwfDB8MHx8fDA%3D"
    ]
  },
  {
     title: "Lake View",
    images: [
      "https://images.unsplash.com/photo-1658591350663-502cc60ef897?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsJTIwbGFrZSUyMHZpZXd8ZW58MHwwfDB8fHww",
      "https://images.unsplash.com/photo-1681034874371-f443554fd036?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsJTIwbGFrZSUyMHZpZXd8ZW58MHwwfDB8fHww",
      "https://images.unsplash.com/photo-1713149733386-9565729633ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWwlMjBsYWtlJTIwdmlld3xlbnwwfDB8MHx8fDA%3D",
      "https://media.istockphoto.com/id/514102692/photo/udaipur-city-palace-in-rajasthan-state-of-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=vrI8mr6Plncbv77t_y2ejmc7snDlFR9hE-UefEDjn24="
    ]
  },
  {
    title: "parking",
    images: [
      "https://images.unsplash.com/photo-1604063165585-e17e9c3c3f0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBhcmtpbmd8ZW58MHwwfDB8fHww",
      "https://images.unsplash.com/photo-1612917231506-a0825d1bc76d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcmtpbmd8ZW58MHwwfDB8fHww",
      "https://images.unsplash.com/photo-1616363088386-31c4a8414858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFya2luZ3xlbnwwfDB8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFya2luZ3xlbnwwfDB8MHx8fDA%3D"
    ]
  }
  
];


// Open Gallery
function openGallery(index) {
  const viewer = document.getElementById("viewer");
  const title = document.getElementById("viewTitle");
  const gallery = document.getElementById("galleryImages");

  // Hide carousel and show viewer
  document.querySelector(".collection").style.display = "none";
  viewer.classList.add("active");

  // Update title
  title.textContent = sections[index].title;

  // Clear old images
  gallery.innerHTML = "";

  // Add new images with creative animation
  sections[index].images.forEach((src, i) => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("image-enter-animation");
    img.style.animationDelay = `${i * 0.2}s`;
    gallery.appendChild(img);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Go Back
function goBack() {
  const viewer = document.getElementById("viewer");
  viewer.classList.remove("active");

  // Show carousel again
  setTimeout(() => {
    document.querySelector(".collection").style.display = "block";
},300);
}
// On page load
window.onload = () => {
  const active = document.querySelector(".nav-item.active");
  if (active) moveUnderline(active);
  animateDrawing();
};