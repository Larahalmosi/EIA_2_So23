"use strict";
/*Aufgabe: <L10.1_Luftfahrt>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <10.06.2023>
Quellen: <->
*/
// Handle-load function
var OldMacDonalds10;
(function (OldMacDonalds10) {
    class Animal {
        animaltype;
        name;
        food;
        foodstock;
        portion;
        noise;
        constructor(animaltype, name, food, foodstock, portion, noise) {
            this.animaltype = animaltype;
            this.name = name;
            this.food = food;
            this.foodstock = foodstock;
            this.portion = portion;
            this.noise = noise;
        }
        singSong() {
            return `<h3>${this.name} the ${this.animaltype}</h3>
            <p>"And on that Farm he had a ${this.animaltype} EIEIO</p>
            <p>With a ${this.noise} ${this.noise} here and a ${this.noise} ${this.noise} there</p>
            <p>The ${this.animaltype} called ${this.name} ate ${this.foodstock} kg of ${this.food}.</p>`;
        }
    }
    OldMacDonalds10.Animal = Animal;
})(OldMacDonalds10 || (OldMacDonalds10 = {}));
//# sourceMappingURL=Animal.js.map