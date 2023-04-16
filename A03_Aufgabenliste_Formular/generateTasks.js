"use strict";
/*
Aufgabe: <L04_Datastructures>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <16.04.2023>
Quellen: <inspiriert von Theresa Hauser>
*/
//* neue Task wird erstellt, bei klick auf den add-Button *//
var household;
(function (household) {
    function generateTasks() {
        let taskcollection = (document.querySelector("#summtask"));
        taskcollection.innerHTML = "";
        // for-Schleife durchläuft solang, wie länge des arrays
        for (let index = 0; index < household.data.moretasks.length; index++) {
            //erstellt in HTML Elemente für jeweils eine Aufgabe
            let task = document.createElement("div");
            let taskname = document.createElement("p");
            let datetime = document.createElement("p");
            let personname = document.createElement("p");
            let commenttext = document.createElement("p");
            let notonedit = document.createElement("input");
            let onedit = document.createElement("input");
            let check = (document.createElement("checkbox"));
            let editbutton = document.createElement("button");
            let editbuttonI = document.createElement("i");
            let deletebutton = document.createElement("button");
            let deletebuttonI = document.createElement("i");
            editbuttonI.className = "fas fa-edit";
            editbuttonI.id = "edit";
            deletebuttonI.className = "fas fa-delete";
            deletebuttonI.id = "delete";
            //task wird taskcollection angehängt
            taskcollection.appendChild(task);
            //Elemente werden task angehängt
            task.appendChild(taskname);
            task.appendChild(datetime);
            task.appendChild(personname);
            task.appendChild(commenttext);
            task.appendChild(notonedit);
            task.appendChild(onedit);
            task.appendChild(check);
            //fügt Werte aus Array in HTML
            taskname.innerHTML = household.data.moretasks[index].task;
            datetime.innerHTML = household.data.moretasks[index].datetime;
            personname.innerHTML = household.data.moretasks[index].person;
            commenttext.innerHTML = household.data.moretasks[index].comment;
            /* let date = new Date();
            console.log(date); */
            if (household.data.moretasks[index].status) {
                notonedit.checked = true;
            }
            else {
                onedit.checked = false;
            }
            //
            check.checked = household.data.moretasks[index].status;
            task.appendChild(editbutton);
            editbutton.appendChild(editbuttonI);
            task.appendChild(deletebutton);
            deletebutton.appendChild(deletebuttonI);
        }
    }
    household.generateTasks = generateTasks;
    function handleChange(_event) { }
    function checkedTask() { }
    function deleteTask() { }
    function timeUp() { }
})(household || (household = {}));
//# sourceMappingURL=generateTasks.js.map