// =========================
// THEME TOGGLE
// =========================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeBtn.textContent = "🌙";

        localStorage.setItem("theme", "light");

    } else {

        themeBtn.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    }

});


// =========================
// LOAD SAVED THEME
// =========================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light");

    themeBtn.textContent = "🌙";

}


// =========================
// NAVIGATION ACTIVE LINK
// =========================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


// =========================
// SCROLL REVEAL
// =========================

const cards = document.querySelectorAll(
    ".learning-card, .info-card, .goal-card, .contact-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach((card) => {

    card.style.opacity = "0";

    card.style.transform = "translateY(30px)";

    card.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(card);

});




































































