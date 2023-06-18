"use strict";
var LuftfahrtPolymorphie;
(function (LuftfahrtPolymorphie) {
    class Insect extends LuftfahrtPolymorphie.Moveable {
        position;
        velosity;
        size;
        constructor(_position) {
            super(_position);
            //console.log("Insect constructor");
            this.position = new LuftfahrtPolymorphie.Vector(0, 0);
            this.velosity = new LuftfahrtPolymorphie.Vector(0, 0);
            this.velosity.random(100, 200);
        }
        move(_timeslice) {
            // console.log("Insect move");
            let offset = new LuftfahrtPolymorphie.Vector(this.velosity.x, this.velosity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            // wenn position canvas verlässt
            if (this.position.x < 0)
                //addend
                this.position.x += LuftfahrtPolymorphie.crc2.canvas.width;
            if (this.position.y < 0)
                //addend
                this.position.y += LuftfahrtPolymorphie.crc2.canvas.height;
            if (this.position.x > LuftfahrtPolymorphie.crc2.canvas.width)
                //addend
                this.position.x -= LuftfahrtPolymorphie.crc2.canvas.width;
            if (this.position.y > LuftfahrtPolymorphie.crc2.canvas.height)
                //addend
                this.position.y -= LuftfahrtPolymorphie.crc2.canvas.height;
        }
        draw() {
            // console.log("Insect draw");
            let radius = 3;
            LuftfahrtPolymorphie.crc2.save();
            // Körper
            LuftfahrtPolymorphie.crc2.beginPath();
            LuftfahrtPolymorphie.crc2.fillStyle = "red";
            LuftfahrtPolymorphie.crc2.arc(this.position.x, this.position.y, radius, 0, Math.PI * 2);
            LuftfahrtPolymorphie.crc2.fill();
            LuftfahrtPolymorphie.crc2.closePath();
            // Beine
            LuftfahrtPolymorphie.crc2.translate(this.position.x, this.position.y);
            LuftfahrtPolymorphie.crc2.scale(this.size, this.size);
            LuftfahrtPolymorphie.crc2.beginPath();
            LuftfahrtPolymorphie.crc2.strokeStyle = "black";
            LuftfahrtPolymorphie.crc2.moveTo(0, 1);
            LuftfahrtPolymorphie.crc2.lineTo(3, 7);
            LuftfahrtPolymorphie.crc2.moveTo(0, 0);
            LuftfahrtPolymorphie.crc2.lineTo(-3, 7);
            LuftfahrtPolymorphie.crc2.moveTo(0, 0);
            LuftfahrtPolymorphie.crc2.lineTo(1, 2);
            LuftfahrtPolymorphie.crc2.moveTo(0, 0);
            LuftfahrtPolymorphie.crc2.lineTo(-1.5, 2);
            LuftfahrtPolymorphie.crc2.stroke();
            LuftfahrtPolymorphie.crc2.restore();
        }
    }
    LuftfahrtPolymorphie.Insect = Insect;
})(LuftfahrtPolymorphie || (LuftfahrtPolymorphie = {}));
//# sourceMappingURL=Insect.js.map