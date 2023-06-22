"use strict";
var A09_Asteroids;
(function (A09_Asteroids) {
    class Asteroid extends A09_Asteroids.Moveable {
        position;
        velosity;
        type;
        size;
        constructor(_size, _position) {
            console.log("Asteroid constructor");
            super(_position);
            //min, max lenght festlegen
            this.velosity = new A09_Asteroids.Vector(0, 0);
            this.velosity.random(100, 200);
            //Math.floor schneidet nachkommastellen weg
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        draw() {
            // console.log("Asteroid draw");
            A09_Asteroids.crc2.save();
            A09_Asteroids.crc2.translate(this.position.x, this.position.y);
            A09_Asteroids.crc2.scale(this.size, this.size);
            A09_Asteroids.crc2.translate(-50, -50);
            A09_Asteroids.crc2.lineWidth = A09_Asteroids.linewidth / this.size;
            A09_Asteroids.crc2.stroke(A09_Asteroids.asteroidPaths[this.type]);
            A09_Asteroids.crc2.restore();
        }
        isHit(_hotspot) {
            let hitsize = 50 * this.size;
            let difference = new A09_Asteroids.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            // absolut position
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
    }
    A09_Asteroids.Asteroid = Asteroid;
})(A09_Asteroids || (A09_Asteroids = {}));
//# sourceMappingURL=Asteroid.js.map