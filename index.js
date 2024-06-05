const noBtn = document.getElementById('no');
const yesBtn = document.getElementById('yes');
const gif = document.getElementById('gif');
const heading = document.querySelector("h2");

noBtn.addEventListener("mouseover", () => {
    const left = Math.random() * 90;
    const top = Math.random() * 90;
    noBtn.style.left = `${left}%`;
    noBtn.style.top = `${top}%`;
});

yesBtn.addEventListener("click", (e) => {
    heading.innerText = "Thanks";
    gif.src = "./accepted.gif";
    noBtn.style.display = "none";
    yesBtn.style.display = "none";
});

