/*
Aufgabe: <L02_EventInspector>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <30.03.2023>
Quellen: <inspiriert von Medin Flaig und Alexander Holstein>
*/
namespace household {
  window.addEventListener("load", handleLoad);

  
  let task: HTMLInputElement = <HTMLInputElement>(
    document.querySelector("#typetask")
  );
  let date: HTMLInputElement = <HTMLInputElement>(
    document.querySelector("#choosedate")
  );
  let person: HTMLInputElement = <HTMLInputElement>(
    document.querySelector("#typename")
  );
  let comment: HTMLInputElement = <HTMLInputElement>(
    document.querySelector("#typecomment")
  );
  
  function handleLoad(): void {
    fetchData()
      task = <HTMLInputElement>document.querySelector("#typetask");
      date = <HTMLInputElement>document.querySelector("#choosedate");
      person = <HTMLInputElement>document.querySelector("#typename");
      comment = <HTMLInputElement>document.querySelector("#typecomment");
      
      let addbutton: HTMLButtonElement = <HTMLButtonElement>(
      document.querySelector("#add")
    );
   
    //generateTasks();
    addbutton.addEventListener("click", handleButtonadd);
    
   
}
function handleButtonadd(): void {
    let taskadd = task.value;
    //console.log(taskadd);
    let dateadd = date.value;
    //console.log(dateadd);
    let personadd = person.value;
   // console.log(comment);
    let commentadd = comment.value;
    
    let newTASK: Task = {
      task: taskadd,
      datetime: dateadd,
      person: personadd,
      comment: commentadd,
      status: false,
    };

    data.moretasks.push(newTASK);

    //console.log("add new task");

    //generateTasks();
    
  };
  
 export function deleteTask(_event:MouseEvent): void {


    let deleteButton = document.querySelector("#summtask");
    let target: HTMLElement= <HTMLElement>_event.target;
    let parent:HTMLElement= <HTMLElement>target.parentElement;

    deleteButton?.removeChild(parent);
    //console.log("weg damit")
        

    }
  }


 /*  function handleButtonedit(): void {
    console.log("edit task");
  } */
  /*function handleChange(_event: Event) {}
  function checkedTask(): void {}
  function deleteTask(): void {}
  function timeUp(): void {}
*/

