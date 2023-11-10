"use strict"

const changeInput = (main, sub, acc, text) => {
    document.getElementById("main-color").style.fill = main;
    document.getElementById("sub-color").style.fill = sub;
    document.getElementById("accent-color").style.fill = acc;
    document.getElementById("under-line").style.stroke = acc;
    document.getElementById("text-color").style.fill = text;
};