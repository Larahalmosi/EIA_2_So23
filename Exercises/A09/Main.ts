namespace A09_Asteroids {
  window.addEventListener("load", handleLoad);

  export let crc2: CanvasRenderingContext2D;
  export let linewidth: number = 2;
  let moveables: Moveable[] = [];

  function handleLoad(_event: Event): void {
    console.log("Asteroids starting");
    let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
    if (!canvas) return;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
    crc2.fillStyle = "black";
    crc2.strokeStyle = "white";
    crc2.lineWidth = linewidth;
    crc2.fillRect(0, 0, canvas.width, canvas.height);

    createPaths();
    console.log("Asteroids paths:", asteroidPaths);

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

  function shootProjectile(_event: MouseEvent) {
    console.log("shoot Protectile");
    let origin: Vector = new Vector(
      _event.clientX - crc2.canvas.offsetLeft,
      _event.clientY - crc2.canvas.offsetTop
    );
    let velosity: Vector = new Vector(0, 0);
    velosity.random(100, 100);
    let projectile = new Projectile(origin, velosity);
    moveables.push(projectile);
  }

  function shootLaser(_event: MouseEvent): void {
    console.log("shoot Laser");
    let hotspot: Vector = new Vector(
      _event.clientX - crc2.canvas.offsetLeft,
      _event.clientY - crc2.canvas.offsetTop
    );
    let asteroidHit: Asteroid | null = getAsteroidHit(hotspot);
    console.log(asteroidHit);
    if (asteroidHit) breakAsteroid(asteroidHit);
  }

  function getAsteroidHit(_hotspot: Vector): Asteroid | null {
    for (let moveable of moveables) {
      if (moveable instanceof Asteroid && moveable.isHit(_hotspot))
        return moveable;
    }
    return null;
  }
  // wenn asteroid größer als 0.3, dann 2 kleinere Asteroiden
  function breakAsteroid(_asteroid: Asteroid): void {
    if (_asteroid.size > 0.3) {
      for (let i: number = 0; i < 2; i++) {
        let fragment: Asteroid = new Asteroid(
          _asteroid.size / 2,
          _asteroid.position
        );
        fragment.velosity.add(_asteroid.velosity);
        moveables.push(fragment);
      }
    }
    _asteroid.expendable= true
  }
  function createAsteroids(_nAsteroids: number): void {
    for (let i: number = 0; i < _nAsteroids; i++) {
      let asteroid: Asteroid = new Asteroid(1.0);
      moveables.push(asteroid);
    }
  }
  function update(): void {
    //console.log("update");
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    for (let moveable of moveables) {
      moveable.move(1 / 50);
      moveable.draw();
    }
    deleteExpandables();

    //ship.draw();
    //handleCollisions();
    console.log("Moveable lenght",moveables.length);
  }

  function deleteExpandables(): void {
    //letztes Element wird gelöscht, so ist egal wie viele nachrücken
    for (let i: number = moveables.length - 1; i >= 0; i--) {
      if (moveables[i].expendable) moveables.slice(i, 1);
    }
  }
}
