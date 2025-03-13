const card = document.querySelector(".card");

card.addEventListener("mousemove", (event) => {
    let rect = card.getBoundingClientRect();
    let xAxis = (event.clientX - rect.left - rect.width / 2) / 15;
    let yAxis = -(event.clientY - rect.top - rect.height / 2) / 15;
    
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
});