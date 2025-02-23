const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionContainer = document.getElementById("box-love");
const heartLoader = document.getElementById("loading");
const resultContainer = document.getElementById("resultado");

noBtn.addEventListener("click", () => {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});

yesBtn.addEventListener("click", () => {
    heartLoader.classList.remove("hidden");
    questionContainer.classList.add("hidden");

    setTimeout(() => {
        heartLoader.classList.add("hidden");
        resultContainer.classList.remove("hidden");
    }, 3000);
});
