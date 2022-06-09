function ChangeOpacity()
{
    header = document.getElementById("header");
    if(scrollY <= 150) 
    {
        header.style.backgroundColor = "rgba(48, 51, 51, " + (scrollY*255/150).toString() + ")";
    }
    else 
    {
        header.style.backgroundColor = "rgba(48, 51, 51, 255)";
    }
}

setInterval(() => {ChangeOpacity()}, 50);