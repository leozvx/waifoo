let margin = 0;
let slideTime = 5;
let slideAmount = 4;
function Slide() {
    let slider = document.getElementById("highlight-slider");
    margin = margin-95;
    if (margin <= -95*slideAmount)
    {
        margin = 0;
    }
    console.log(margin.toString() + "vw");
    slider.style.marginLeft = margin.toString() + "vw";
}

setInterval(() => {Slide()}, slideTime*1000);