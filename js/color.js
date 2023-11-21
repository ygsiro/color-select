"use strict"

class RGB {
    constructor(red, green, blue) {
        this.r = red
        this.g = green
        this.b = blue
    }

    get red() {
        return this.r;
    }

    get green() {
        return this.g;
    }

    get blue() {
        return this.b;
    }

    set red(num) {
        this.r = num;
    }

    set green(num) {
        this.g = num;
    }

    set blue(num) {
        this.b = num;
    }

    get hex() {
        return "#" + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
    }

    set hex(RRGGBB) {
        this.r = parseInt(RRGGBB.substring(1, 3), 16)
        this.g = parseInt(RRGGBB.substring(3, 5), 16)
        this.b = parseInt(RRGGBB.substring(5, 7), 16)
    }
};
