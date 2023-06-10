namespace A09_Asteroids {
  export class Projectile extends Moveable {
    lifetime: number= 2;

    constructor(_position: Vector, _velosity: Vector) {
      super(_position);

      console.log("Projectile constuctor")
      this.velosity = _velosity.copy();
    }

    draw(): void {
      // console.log("Asteroid draw");
      crc2.save();
      crc2.translate(this.position.x, this.position.y);
      crc2.strokeRect(-1, -1, 1, 1);
      crc2.restore();
    }
    move(_timeslice: number): void {
        super.move(_timeslice);
        //läuft ab
        this.lifetime -= _timeslice;
        if ( this.lifetime < 0)
        this.expendable = true;

    }
  }
}
