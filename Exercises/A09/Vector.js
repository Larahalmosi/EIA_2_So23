"use strict";
var A09_Asteroids;
(function (A09_Asteroids) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, y) {
            this.x = _x;
            this.y = y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y -= _addend.y;
        }
        random(_minLength, _maxLength) {
            // Länge und Richtung angeben
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            // Katheten der Länge, Richtung hypothenuse Werte zw 1 und-1, Vector erstellt
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
        copy() {
            return new Vector(this.x, this.y);
        }
    }
    A09_Asteroids.Vector = Vector;
})(A09_Asteroids || (A09_Asteroids = {}));
//# sourceMappingURL=Vector.js.map