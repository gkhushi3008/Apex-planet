// Dark Mode Toggle
document.getElementById('darkToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Dynamic Project Rendering
const projects = [
  {
    title: "E-Commerce Demo",
    description: "A basic shopping site UI using HTML, CSS, and JS."
  },
  {
    title: "Blog Platform",
    description: "Responsive blog layout with dark mode and scroll animations."
  }
];

const container = document.getElementById('project-container');
projects.forEach(proj => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `<h3>${proj.title}</h3><p>${proj.description}</p>`;
  container.appendChild(card);
});

// Form Submission Handler
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  alert("Thanks for reaching out! We'll get back soon.");
});