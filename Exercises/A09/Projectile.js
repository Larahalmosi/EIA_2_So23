"use strict";
var A09_Asteroids;
(function (A09_Asteroids) {
    class Projectile extends A09_Asteroids.Moveable {
        lifetime = 2;
        constructor(_position, _velosity) {
            super(_position);
            console.log("Projectile constuctor");
            this.velosity = _velosity.copy();
        }
        draw() {
            // console.log("Asteroid draw");
            A09_Asteroids.crc2.save();
            A09_Asteroids.crc2.translate(this.position.x, this.position.y);
            A09_Asteroids.crc2.strokeRect(-1, -1, 1, 1);
            A09_Asteroids.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            //läuft ab
            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.expendable = true;
        }
    }
    A09_Asteroids.Projectile = Projectile;
})(A09_Asteroids || (A09_Asteroids = {}));
//# sourceMappingURL=Projectile.js.map