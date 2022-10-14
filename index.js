const imageContainerEl = document.querySelector(".imageContainer");

const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

let x = 0;
let timer;
prevEl.addEventListener("click", ()=>{
    x = x + 36;
    clearTimeout(timer);
    updateGallery();
});
nextEl.addEventListener("click", ()=>{
    x = x - 36;
    clearTimeout(timer);
    updateGallery();
});

function updateGallery(){
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(()=>{
        x = x - 36;
        updateGallery();
    }, 2000)
}
updateGallery();