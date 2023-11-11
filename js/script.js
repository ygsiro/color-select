"use strict"
const changeColor = (hue, sat, lum) => {
    document.getElementById("hue_value").value = hue;
    document.getElementById("sat_value").value = sat;
    document.getElementById("lum_value").value = lum;
    const hsl = `hsl(${hue}, ${sat}%, ${lum}%)`;
    document.getElementById("main-color").style.fill = hsl;
    const cursor = document.getElementById("cursor");
    cursor.style.transform = `rotate(${hue}deg)`;
    cursor.style.fill = hsl;
};