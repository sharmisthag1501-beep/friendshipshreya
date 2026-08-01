// ==========================================
// SISSY BLISSY - FRIENDSHIP DAY
// ==========================================

// Smooth opening of the diary
document.getElementById("openBook").addEventListener("click", () => {
    document.getElementById("diary").scrollIntoView({
        behavior: "smooth"
    });
});

// Go to scrapbook
document.getElementById("memoryBtn").addEventListener("click", () => {
    document.getElementById("scrapbook").scrollIntoView({
        behavior: "smooth"
    });
});

// ==========================================
// Scroll Reveal Animation
// ==========================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".photo,.quote,.wish-card,.ending-card,.page,.cover"
).forEach((el) => {

    el.classList.add("hidden");
    observer.observe(el);

});

// ==========================================
// Floating Animation for Photos
// ==========================================

document.querySelectorAll(".photo").forEach((photo, index) => {

    photo.animate(
        [
            { transform: "translateY(0px)" },
            { transform: "translateY(-10px)" },
            { transform: "translateY(0px)" }
        ],
        {
            duration: 3500 + index * 250,
            iterations: Infinity,
            easing: "ease-in-out"
        }
    );

});

// ==========================================
// Create Floating Hearts
// ==========================================

const hearts = document.querySelector(".floating-hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = (18 + Math.random() * 18) + "px";
    heart.style.opacity = Math.random();

    heart.style.animation =
        "rise " + (8 + Math.random() * 6) + "s linear forwards";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 14000);

}

setInterval(createHeart, 900);

// ==========================================
// Inject Animations
// ==========================================

const style = document.createElement("style");

style.innerHTML = `

.hidden{

opacity:0;

transform:translateY(60px);

transition:1s;

}

.show{

opacity:1;

transform:translateY(0);

}

@keyframes rise{

0%{

transform:translateY(0) rotate(0deg);

opacity:0;

}

15%{

opacity:1;

}

100%{

transform:translateY(-120vh) rotate(25deg);

opacity:0;

}

}

`;

document.head.appendChild(style);

// ==========================================
// Welcome Message
// ==========================================

console.log("Happy Friendship Day, Sissy Blissy! 💕");
