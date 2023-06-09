"use strict";
/*
Aufgabe: <L02_EventInspector>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <30.03.2023>
Quellen: <inspiriert von Medin Flaig und Alexander Holstein>
*/
var household;
(function (household) {
    window.addEventListener("load", handleLoad);
    let task = (document.querySelector("#typetask"));
    let date = (document.querySelector("#choosedate"));
    let person = (document.querySelector("#typename"));
    let comment = (document.querySelector("#typecomment"));
    function handleLoad() {
        household.fetchData();
        task = document.querySelector("#typetask");
        date = document.querySelector("#choosedate");
        person = document.querySelector("#typename");
        comment = document.querySelector("#typecomment");
        let addbutton = (document.querySelector("#add"));
        //generateTasks();
        addbutton.addEventListener("click", handleButtonadd);
    }
    function handleButtonadd() {
        let taskadd = task.value;
        //console.log(taskadd);
        let dateadd = date.value;
        //console.log(dateadd);
        let personadd = person.value;
        // console.log(comment);
        let commentadd = comment.value;
        let newTASK = {
            task: taskadd,
            datetime: dateadd,
            person: personadd,
            comment: commentadd,
            status: false,
        };
        household.data.moretasks.push(newTASK);
        //console.log("add new task");
        //generateTasks();
    }
    ;
    function deleteTask(_event) {
        let deleteButton = document.querySelector("#summtask");
        let target = _event.target;
        let parent = target.parentElement;
        deleteButton?.removeChild(parent);
        //console.log("weg damit")
    }
    household.deleteTask = deleteTask;
})(household || (household = {}));
/*  function handleButtonedit(): void {
   console.log("edit task");
 } */
/*function handleChange(_event: Event) {}
function checkedTask(): void {}
function deleteTask(): void {}
function timeUp(): void {}
*/
//# sourceMappingURL=managetasks.js.map