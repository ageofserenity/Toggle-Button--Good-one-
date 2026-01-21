// Loop through all sections
document.querySelectorAll('.theme-section').forEach((section) => {
  const sunBtn = section.querySelector('.sun');
  const moonBtn = section.querySelector('.moon');
  const modeH1 = section.querySelector('.mode-h1');

  // Function to update H1 for this section
  function updateH1() {
    if (section.classList.contains('dark-mode')) {
      modeH1.textContent = "That's better";
    } else {
      modeH1.textContent = 'Let there be darkness!';
    }
  }

  // Sun button toggles dark mode for this section
  sunBtn.addEventListener('click', () => {
    section.classList.add('dark-mode');
    updateH1();
  });

  // Moon button toggles light mode for this section
  moonBtn.addEventListener('click', () => {
    section.classList.remove('dark-mode');
    updateH1();
  });
});

// =====================
// H1 fade-in on scroll
// =====================
const h1s = document.querySelectorAll('.mode-h1');

const h1Observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate once
      }
    });
  },
  { threshold: 0.4 },
);

h1s.forEach((h1) => h1Observer.observe(h1));

/*
Section-Scoped:
[Click Button in Section] 
      |
      v
[Toggle class on section only] 
      |
      v
[Update H1 text in section]
      |
      v
[CSS applies styles locally]

- Each section requires its own JS listener
- More DOM manipulations if many sections
- More style recalculations
- Slower on large pages

*/
