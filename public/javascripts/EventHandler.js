"use strict";

import DieRoller from "./die.js";

export default class EventHandler {
    constructor() {
        this.buttonGroup();
        this.hpThing();
    }

    buttonGroup() {
        document.getElementById("groupButton").addEventListener("click", () => {
            document.getElementById("combat").addEventListener("click", () => {
                this.combatThing();
            });

            document.getElementById("die").addEventListener("click", () => {
                this.dieThing();
            });


        });
    }

    hpThing() {
        document.getElementById("maxhp").addEventListener("onkeypress", () => {
            this.changeImage();
        });
    }

    combatThing() {
        let enemyNumb = document.getElementById("enemynum").value;
        let enemyHealth = [];
        for (let i = 0; i < enemyNumb; i++) {
            enemyHealth[i] = prompt("How much health does enemy " + [i] + " have?");
            var playerInit = Math.floor(Math.random() * 54) + 1;
        }
        let enemyInit = Math.floor(Math.random() * 54) +1;
        alert("Player Initiative = " + playerInit + "");
        alert("All Enemy Initiative = " + enemyInit + "");
    }

    changeImage() {
        let currentHP = document.getElementById("maxhp").value;
        let pic1 = document.getElementById("1");
        let pic2 = document.getElementById("2");
        let pic3 = document.getElementById("3");
        let pic4 = document.getElementById("4");
        let pic5 = document.getElementById("5");
        let pic6 = document.getElementById("6");
        let pic7 = document.getElementById("7");
        let pic8 = document.getElementById("8");
        if (currentHP >= 1 && currentHP <= 10) {
            pic1.src.match("../images/heart.png");
            pic2.src.match("../images/outline.png");
            pic3.src="../images/outline.png";
            pic4.src="../images/outline.png";
            pic5.src="../images/outline.png";
            pic6.src="../images/outline.png";
            pic7.src="../images/outline.png";
            pic8.src="../images/outline.png";
        }
        if (currentHP >= 11 && currentHP <= 20 ) {
            pic1.src.match("../images/heart.png");
            pic2.src.match("../images/heart.png");
            pic3.src="outline.png";
            pic4.src="outline.png";
            pic5.src="outline.png";
            pic6.src="outline.png";
            pic7.src="outline.png";
            pic8.src="outline.png";
        }
        if (currentHP >= 21 && currentHP <= 30) {
            pic1.src="heart.png";
            pic2.src="heart.png";
            pic3.src="heart.png";
            pic4.src="outline.png";
            pic5.src="outline.png";
            pic6.src="outline.png";
            pic7.src="outline.png";
            pic8.src="outline.png";
        }
        if (currentHP >= 31 && currentHP <= 40) {
            pic1.src="heart.png";
            pic2.src="heart.png";
            pic3.src="heart.png";
            pic4.src="heart.png";
            pic5.src="outline.png";
            pic6.src="outline.png";
            pic7.src="outline.png";
            pic8.src="outline.png";
        }
        if (currentHP >= 41 && currentHP <= 50) {
            pic1.src="heart.png";
            pic2.src="heart.png";
            pic3.src="heart.png";
            pic4.src="heart.png";
            pic5.src="heart.png";
            pic6.src="outline.png";
            pic7.src="outline.png";
            pic8.src="outline.png";
        }
        if (currentHP >= 51 && currentHP <= 60) {
            pic1.src="heart.png";
            pic2.src="heart.png";
            pic3.src="heart.png";
            pic4.src="heart.png";
            pic5.src="heart.png";
            pic6.src="heart.png";
            pic7.src="outline.png";
            pic8.src="outline.png";
        }
        if (currentHP >= 61 && currentHP <= 70) {
            pic1.src="heart.png";
            pic2.src="heart.png";
            pic3.src="heart.png";
            pic4.src="heart.png";
            pic5.src="heart.png";
            pic6.src="heart.png";
            pic7.src="heart.png";
            pic8.src="outline.png";
        }
    }

    dieThing() {
        new DieRoller();
    }
}