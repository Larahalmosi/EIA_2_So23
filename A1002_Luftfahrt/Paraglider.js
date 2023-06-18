"use strict";
var LuftfahrtPolymorphie;
(function (LuftfahrtPolymorphie) {
    class Paraglider extends Moveable {
        position;
        velosity;
        size;
        constructor(_position) {
            // console.log("Paraglider constructor");
            super(_position);
            this.position = new LuftfahrtPolymorphie.Vector(0, 0);
            this.velosity = new LuftfahrtPolymorphie.Vector(0, 0);
            this.velosity.random(100, 200);
        }
        move(_timeslice) {
            // console.log("Paraglider move");
            let Startpoint = new LuftfahrtPolymorphie.Vector(0, 20);
            let Endpoint = new LuftfahrtPolymorphie.Vector(480, 400);
            Startpoint.scale(_timeslice);
            Endpoint.scale(_timeslice);
            let startPosition = this.position.clone();
            let endPosition = this.position.clone();
            startPosition.add(Startpoint);
            endPosition.add(Endpoint);
            let paragliderVector = endPosition.subtract(startPosition);
        }
        draw() {
            //console.log("Paraglider draw");
            // Paraglider
            LuftfahrtPolymorphie.crc2.beginPath();
            LuftfahrtPolymorphie.crc2.arc(this.position.x, this.position.y, 15, Math.PI, Math.PI * 2);
            LuftfahrtPolymorphie.crc2.fillStyle = "blue";
            LuftfahrtPolymorphie.crc2.fill();
            LuftfahrtPolymorphie.crc2.closePath();
            // Seile
            LuftfahrtPolymorphie.crc2.beginPath();
            LuftfahrtPolymorphie.crc2.moveTo(this.position.x - 15, this.position.y);
            LuftfahrtPolymorphie.crc2.lineTo(this.position.x - 5, this.position.y + 40);
            LuftfahrtPolymorphie.crc2.moveTo(this.position.x + 15, this.position.y);
            LuftfahrtPolymorphie.crc2.lineTo(this.position.x + 5, this.position.y + 40);
            LuftfahrtPolymorphie.crc2.strokeStyle = "black";
            LuftfahrtPolymorphie.crc2.lineWidth = 1;
            LuftfahrtPolymorphie.crc2.stroke();
            LuftfahrtPolymorphie.crc2.closePath();
            // Körper
            LuftfahrtPolymorphie.crc2.beginPath();
            LuftfahrtPolymorphie.crc2.rect(this.position.x - 5, this.position.y + 20, 10, 30);
            LuftfahrtPolymorphie.crc2.fillStyle = "yellow";
            LuftfahrtPolymorphie.crc2.fill();
            LuftfahrtPolymorphie.crc2.closePath();
        }
    }
    LuftfahrtPolymorphie.Paraglider = Paraglider;
})(LuftfahrtPolymorphie || (LuftfahrtPolymorphie = {}));
//# sourceMappingURL=Paraglider.js.map