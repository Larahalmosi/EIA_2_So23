/*
Aufgabe: <L08.1_GenerativeKunst>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <03.05.2023>
Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/
namespace Canvas {
window.addEventListener("load", handleLoad );

let canvas: HTMLCanvasElement 
let crc2: CanvasRenderingContext2D 

function handleLoad(): void {
    canvas = <HTMLCanvasElement>document.querySelector("canvas");
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
    background()
    lines()
};
function background():void{
crc2.fillStyle = "lightblue";
crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
crc2.beginPath();
crc2.arc(50, 100, 30, 0, 1.5 * Math.PI);
crc2.closePath();
crc2.stroke();
};
function lines():void{
crc2.beginPath();
crc2.moveTo(20.1, 24);
crc2.lineTo(20.1, 10);
crc2.moveTo(40.5, 34);
crc2.lineTo(40.5, 46);
crc2.moveTo(70.5, 47);
crc2.lineTo(10.5, 30);
crc2.stroke();
}
}