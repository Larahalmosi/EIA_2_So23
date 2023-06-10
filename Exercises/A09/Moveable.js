"use strict";
var A09_Asteroids;
(function (A09_Asteroids) {
    class Moveable {
        position;
        velosity;
        expendable = false;
        constructor(_position) {
            //console.log("Moveable constructor");
            if (_position)
                this.position = _position.copy();
            else
                this.position = new A09_Asteroids.Vector(0, 0);
            //min, max lenght festlegen
            this.velosity = new A09_Asteroids.Vector(0, 0);
        }
        move(_timeslice) {
            // console.log("Moveable move");
            //Verschiebung
            let offset = this.velosity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            // wenn position canvas verlässt
            if (this.position.x < 0)
                //addend
                this.position.x += A09_Asteroids.crc2.canvas.width;
            if (this.position.y < 0)
                //addend
                this.position.y += A09_Asteroids.crc2.canvas.height;
            if (this.position.x > A09_Asteroids.crc2.canvas.width)
                //addend
                this.position.x -= A09_Asteroids.crc2.canvas.width;
            if (this.position.y > A09_Asteroids.crc2.canvas.height)
                //addend
                this.position.y -= A09_Asteroids.crc2.canvas.height;
        }
        draw() {
            // console.log("Moveable draw");
        }
    }
    A09_Asteroids.Moveable = Moveable;
})(A09_Asteroids || (A09_Asteroids = {}));
//# sourceMappingURL=Moveable.js.map