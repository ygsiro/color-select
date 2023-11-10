"use strict"

const compleColor = color => {
    const R = parseInt(color.substring(1, 3), 16);
    const G = parseInt(color.substring(3, 5), 16);
    const B = parseInt(color.substring(5, 7), 16);
    const Calc = Math.max(R, G, B) + Math.min(R, G, B);
    const trans = num => {
        const text = `00` + (Calc - num).toString(16);
        return text.substring(text.length - 2, text.length);
    };
    return `#${trans(R)}${trans(G)}${trans(B)}`;
};

const changeInput = (main, sub, acc, text) => {
    document.getElementById("main-color").style.fill = main;
    document.getElementById("sub-color").style.fill = sub;
    document.getElementById("accent-color").style.fill = acc;
    document.getElementById("under-line").style.stroke = acc;
    document.getElementById("text-color").style.fill = text;
    const comple = document.getElementById("comple");
    comple.style.backgroundColor = main;
    comple.style.color = compleColor(main);
    comple.innerHTML = `<p>${compleColor(main)}</p>`;
};