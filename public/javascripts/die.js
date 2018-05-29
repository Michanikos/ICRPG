"use strict";
let strNumb = 0;
let dexNumb = 0;
let conNumb = 0;
let intNumb = 0;
let wisNumb = 0;
let chaNumb = 0;
export default class DieRoller {
    constructor() {
        this.dieRoller();
    }

    dieRoller() {
        let targetNumb = document.getElementById("targetThing").value;
        if (targetNumb === null || targetNumb === undefined || targetNumb.length <= 0) {
            targetNumb = 10;
        }
        let statApplied = prompt("How much is the stat bonus applied to this roll?");
        parseInt(statApplied);
        let attemptThing = Math.floor(Math.random() * 20) + 1;
        let attemptThing2 = attemptThing + statApplied;
        if (attemptThing2 >= targetNumb) {
            alert("Congratulations, your roll of " + attemptThing + " was higher than the target number of " + targetNumb + "");
            this.twentyRoll();
        }
        else {
            alert("That's too bad. Your roll of " + attemptThing + " was not greater than " + targetNumb + "");
            this.endProgram();
        }
    }

    twentyRoll() {
        let dieRolled = prompt("What die do you want to roll? 1: Basic Work, 2: Weapon Damage, 3: Magic, 4: Ultimate");
        parseInt(dieRolled);
        if (dieRolled === 1) {
            if (confirm("You wanted to do a Basic Work roll?")) {
                let fourRoll = Math.floor(Math.random() * 4) + 1;
                let statApplied = prompt("How much is the stat bonus applied to this roll?");
                parseInt(statApplied);
                fourRoll += statApplied;
                prompt("Your basic work roll ended up being a " + fourRoll + "");
                this.endProgram();
            }
            else {
                this.endProgram();
            }
        }
        else if (dieRolled === 2) {
            if (confirm("You wanted to do a roll for Weapon Damage?")) {
                let sixRoll = Math.floor(Math.random() * 6) + 1;
                let statApplied = prompt("How much is the stat bonus applied to this roll?");
                parseInt(statApplied);
                sixRoll += statApplied;
                prompt("Your weapon damage roll ended up being a " + sixRoll + "");
                this.endProgram();
            }
        }
       else if (dieRolled === 3) {
            if (confirm("You wanted to do a Magic roll?")) {
                let eightRoll = Math.floor(Math.random() * 8) + 1;
                let statApplied = prompt("How much is the stat bonus applied to this roll?");
                parseInt(statApplied);
                eightRoll += statApplied;
                prompt("Your magic roll ended up being a " + eightRoll + "");
                this.endProgram();
            }
        }
       else if (dieRolled === 4) {
            if (confirm("You wanted to do an ultimate roll?")) {
                let twelveRoll = Math.floor(Math.random() * 12) + 1;
                let statApplied = prompt("How much is the stat bonus applied to this roll?");
                parseInt(statApplied);
                twelveRoll += statApplied;
                prompt("Your ultimate roll ended up being a " + twelveRoll + "");
                this.endProgram();
            }
        }
        else {
            alert("" + dieRolled + " is not a valid answer.");
            this.twentyRoll();
        }
    }

    endProgram() {
        window.stop();
    }
}