"use strict"

const inputColor = (main, sub, acc) => {
    const box = document.getElementById("box");
    const title = document.getElementById("title");
    box.style.backgroundColor = main;
    box.style.color = acc;
    title.style.backgroundColor = sub;
    const css = document.getElementById("css");
    css.innerText = `main: ${main}\nsub: ${sub}\nacc: ${acc}`;
};