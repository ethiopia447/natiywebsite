document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling Navigation
    document.querySelectorAll(".navbar a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // Typing Effect for Title
    const typedText = "Hi, I'm Natiy man";
    let index = 0;
    function typeEffect() {
        if (index < typedText.length) {
            document.querySelector(".home-content h1").textContent += typedText.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    document.querySelector(".home-content h1").textContent = "";
    typeEffect();

    // Dark Mode Toggle
    const darkModeBtn = document.createElement("button");
    darkModeBtn.textContent = "Toggle Dark Mode";
    darkModeBtn.style.position = "fixed";
    darkModeBtn.style.top = "90px";
    darkModeBtn.style.right = "20px";
    darkModeBtn.style.padding = "10px";
    darkModeBtn.style.background = "#00abf0";
    darkModeBtn.style.color = "#081b29";
    darkModeBtn.style.border = "none";
    darkModeBtn.style.cursor = "pointer";
    document.body.appendChild(darkModeBtn);

    darkModeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Sticky Header on Scroll
    const header = document.querySelector(".header");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.style.background = "rgba(0, 0, 0, 0.8)";
        } else {
            header.style.background = "transparent";
        }
    });

    // Interactive Button Effects
    document.querySelectorAll(".btn-box a").forEach(button => {
        button.addEventListener("mousedown", function () {
            this.style.transform = "scale(0.95)";
        });
        button.addEventListener("mouseup", function () {
            this.style.transform = "scale(1)";
        });
    });
});
