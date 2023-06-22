"use strict";
var A09_Asteroids;
(function (A09_Asteroids) {
    class Ufo extends A09_Asteroids.Moveable {
        speed = 50;
        constructor(_size, _position) {
            console.log("Asteroid constructor");
            super();
            this.position = new A09_Asteroids.Vector(0, Math.random() * A09_Asteroids.crc2.canvas.height);
            this.velosity = new A09_Asteroids.Vector(0, Math.random() * A09_Asteroids.crc2.canvas.height);
        }
        draw() {
            // console.log("Asteroid draw");
            super.move(_timeslice);
            if (Math.random() < 0.01)
                this.shoot();
            if (Math.random() < 0.02)
                this.velosity.y = this.speed * (Math.floor(Math.random() * 3) - 1);
        }
        isHit(_hotspot) {
            let hitsize = 50 * this.size;
            let difference = new A09_Asteroids.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            // absolut position
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
    }
    A09_Asteroids.Ufo = Ufo;
})(A09_Asteroids || (A09_Asteroids = {}));
//# sourceMappingURL=Ufo.js.map