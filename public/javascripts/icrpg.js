"use strict";

import EventHandler from "./EventHandler.js";


class Main {
    constructor() {
        this.userThing();
    }

    userThing() {
        new EventHandler();
    }
}

window.addEventListener("load", () => {
    new Main();
});