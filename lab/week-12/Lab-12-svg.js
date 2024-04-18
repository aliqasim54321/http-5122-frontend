
window.onload = function() {
sun = document.getElementById("sun");
sky = document.getElementById("sky");   

sun.onclick = changecolour;
function changecolour() {
    if (sun.style.fill === "yellow" || sun.style.fill === "fill: rgb(35, 210, 236)")
    {
        sun.style = "fill: black;";
    sky.style = "fill: white;stroke-width:3;stroke:red";
    }
    else {
        sun.style = "fill: yellow;";
        sky.style = "fill: rgb(35, 210, 236);stroke-width:3;stroke:red";
    }

} }   