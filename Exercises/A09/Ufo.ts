namespace A09_Asteroids {
    export class Ufo extends Moveable {
      speed: number = 50;
  
      constructor(_size: number, _position?: Vector) {
        console.log("Asteroid constructor");
        
        super();

        this.position = new Vector(0, Math.random()* crc2.canvas.height);
        this.velosity = new Vector(0, Math.random()* crc2.canvas.height);
      }
  
      draw(): void {
        // console.log("Asteroid draw");
        super.move(_timeslice);
        if (Math.random() < 0.01)
        this.shoot();
        if (Math.random() < 0.02)
        this.velosity.y = this.speed * ( Math.floor(Math.random()*3)- 1)
      }
      isHit(_hotspot: Vector): boolean {
        let hitsize: number = 50 * this.size;
        let difference: Vector = new Vector(
          _hotspot.x - this.position.x,
          _hotspot.y - this.position.y
        );
        // absolut position
        return (
          Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize
        );
      }
    }
  }
  