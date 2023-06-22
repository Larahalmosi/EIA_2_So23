"use strict";
var A09_Asteroids;
(function (A09_Asteroids) {
    window.addEventListener("load", handleLoad);
    A09_Asteroids.linewidth = 2;
    let moveables = [];
    function handleLoad(_event) {
        console.log("Asteroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        A09_Asteroids.crc2 = canvas.getContext("2d");
        A09_Asteroids.crc2.fillStyle = "black";
        A09_Asteroids.crc2.strokeStyle = "white";
        A09_Asteroids.crc2.lineWidth = A09_Asteroids.linewidth;
        A09_Asteroids.crc2.fillRect(0, 0, canvas.width, canvas.height);
        A09_Asteroids.createPaths();
        console.log("Asteroids paths:", A09_Asteroids.asteroidPaths);
        createAsteroids(5);
        //createShip();
        createUfo();
        createUfo();
        window.addEventListener("mousedown", shootProjectile);
        window.addEventListener("mouseup", shootLaser);
        //window.addEventListener("keypress",handleKeypress);
        //window.addEventListener("mousemove",setHeading);
        window.setInterval(update, 20);
    }
    function shootProjectile(_event) {
        console.log("shoot Protectile");
        let origin = new A09_Asteroids.Vector(_event.clientX - A09_Asteroids.crc2.canvas.offsetLeft, _event.clientY - A09_Asteroids.crc2.canvas.offsetTop);
        let velosity = new A09_Asteroids.Vector(0, 0);
        velosity.random(100, 100);
        let projectile = new A09_Asteroids.Projectile(origin, velosity);
        moveables.push(projectile);
    }
    function shootLaser(_event) {
        console.log("shoot Laser");
        let hotspot = new A09_Asteroids.Vector(_event.clientX - A09_Asteroids.crc2.canvas.offsetLeft, _event.clientY - A09_Asteroids.crc2.canvas.offsetTop);
        let asteroidHit = getAsteroidHit(hotspot);
        console.log(asteroidHit);
        if (asteroidHit)
            breakAsteroid(asteroidHit);
    }
    function getAsteroidHit(_hotspot) {
        for (let moveable of moveables) {
            if (moveable instanceof A09_Asteroids.Asteroid && moveable.isHit(_hotspot))
                return moveable;
        }
        return null;
    }
    // wenn asteroid größer als 0.3, dann 2 kleinere Asteroiden
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                let fragment = new A09_Asteroids.Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velosity.add(_asteroid.velosity);
                moveables.push(fragment);
            }
        }
        _asteroid.expendable = true;
    }
    function createAsteroids(_nAsteroids) {
        for (let i = 0; i < _nAsteroids; i++) {
            let asteroid = new A09_Asteroids.Asteroid(1.0);
            moveables.push(asteroid);
        }
    }
    function update() {
        //console.log("update");
        A09_Asteroids.crc2.fillRect(0, 0, A09_Asteroids.crc2.canvas.width, A09_Asteroids.crc2.canvas.height);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        deleteExpandables();
        //ship.draw();
        //handleCollisions();
        console.log("Moveable lenght", moveables.length);
    }
    function deleteExpandables() {
        //letztes Element wird gelöscht, so ist egal wie viele nachrücken
        for (let i = moveables.length - 1; i >= 0; i--) {
            if (moveables[i].expendable)
                moveables.slice(i, 1);
        }
    }
})(A09_Asteroids || (A09_Asteroids = {}));
//# sourceMappingURL=Main.js.map