/*
Aufgabe: <L10.2_Oldmacdonalds>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <10.06.2023>
Quellen: <->
*/

namespace OldMacDonalds10 {
  window.addEventListener("load", handleLoad);

  let cow: Animal = new Animal("Cow", "Moses", "Hay", 20, 120, "Mooo");
  console.log(cow);
  let pig: Animal = new Animal("Pig", "Napoleon", "Junk", 5, 55, "OINK");
  let chicken: Animal = new Animal(
    "Chicken",
    "Arnold",
    "Grain",
    1,
    20,
    "BOGBOG"
  );
  let cat: Animal = new Animal("Cat", "Cat", "Meat", 8, 35, "MIAAAU");
  let horse: Animal = new Animal("Horse", "Boxer", "Grass", 10, 47, "WIIIUUU");
  let allAnimals: Animal[] = [cow, pig, chicken, cat, horse];

  function handleLoad(_event: Event): void {
    singSong();
    document.getElementById("daysimulation")?.addEventListener("click", newDay);
  }

  function singSong(): void {
    for (let animal of allAnimals) {
      let paragraph: HTMLParagraphElement = document.createElement("p");
      paragraph.innerHTML = animal.singSong();
      let textarea: HTMLDivElement = <HTMLDivElement>(
        document.getElementById("lyrics")
      );
      textarea.appendChild(paragraph);
    }

    newDay();
  }

  function newDay(): void {
    let isOutOfFood = false;

    for (let animal of allAnimals) {
      if (animal.foodstock > 0) {
        animal.portion -= animal.foodstock;
        animal.foodstock = 0;
      } else {
        isOutOfFood = true;
      }
    }

    let storageDiv: HTMLElement = document.getElementById(
      "Storage"
    ) as HTMLDivElement;
    storageDiv.innerHTML = `<h3>Food Storage</h3>
          ${allAnimals[0].portion}kg of ${allAnimals[0].food}<br>
          ${allAnimals[1].portion}kg of ${allAnimals[1].food}<br>
          ${allAnimals[2].portion}kg of ${allAnimals[2].food}<br>
          ${allAnimals[3].portion}kg of ${allAnimals[3].food}<br>
          ${allAnimals[4].portion}kg of ${allAnimals[4].food}<br>`;

    if (isOutOfFood) {
      alert(
        "LANDWIRTSCHAFTLICHER GUTSHERREHOF wird zu FARM DER TIERE- GENOSSENSCHAFTSBETRIEB"
      );
      window.location.reload();
    }
  }
}
