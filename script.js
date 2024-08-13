document.addEventListener("DOMContentLoaded", function() {
    // 1. Dynamic Greeting Based on Time
    const now = new Date();
    const hours = now.getHours();
    const greetingElement = document.getElementById("greeting");

    let greeting;

    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    if (greetingElement) {
        greetingElement.textContent = greeting;
    }

    // 2. Scroll Animations for Sections
    const sections = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // 3. Smooth Scroll Effect for Back-to-Top Button
    const backToTopBtn = document.getElementById("backToTop");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // 4. Enhanced Section Navigation
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 60, // Adjust based on navbar height
                behavior: "smooth"
            });
        });
    });

    const headings = document.querySelectorAll("section h3");

    headings.forEach(heading => {
        heading.addEventListener("click", function() {
            const sectionId = this.id.split('-')[0]; // Assumes id format is section-id
            const section = document.getElementById(sectionId);

            window.scrollTo({
                top: section.offsetTop - 60, // Adjust based on navbar height
                behavior: "smooth"
            });
        });
    });

    // 5. Interactive Skills Graph
    const ctx = document.getElementById('skillsChart')?.getContext('2d');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Java', 'C', 'Python', 'MySQL', 'HTML'],
                datasets: [{
                    label: 'Skill Level',
                    data: [80, 60, 90, 70, 85], // Skill levels (out of 100)
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});
