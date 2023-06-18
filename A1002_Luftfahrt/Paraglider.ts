namespace LuftfahrtPolymorphie {
  export class Paraglider extends Moveable {
    position: Vector;
    velosity: Vector;
    size: number;

    constructor(_position: number) {
      // console.log("Paraglider constructor");
      super(_position)
      this.position = new Vector(0, 0);
      this.velosity = new Vector(0, 0);
      this.velosity.random(100, 200);

    }
    move(_timeslice: number): void {
      // console.log("Paraglider move");
      let Startpoint = new Vector(0, 20);
      let Endpoint = new Vector(480, 400);
      Startpoint.scale(_timeslice);
      Endpoint.scale(_timeslice);
      let startPosition = this.position.clone();
      let endPosition = this.position.clone();
      startPosition.add(Startpoint);
      endPosition.add(Endpoint);

      let paragliderVector = endPosition.subtract(startPosition);
    }
    draw(): void {
      //console.log("Paraglider draw");
      // Paraglider
      crc2.beginPath();
      crc2.arc(this.position.x, this.position.y, 15, Math.PI, Math.PI * 2);
      crc2.fillStyle = "blue";
      crc2.fill();
      crc2.closePath();

      // Seile
      crc2.beginPath();
      crc2.moveTo(this.position.x - 15, this.position.y);
      crc2.lineTo(this.position.x - 5, this.position.y + 40);
      crc2.moveTo(this.position.x + 15, this.position.y);
      crc2.lineTo(this.position.x + 5, this.position.y + 40);
      crc2.strokeStyle = "black";
      crc2.lineWidth = 1;
      crc2.stroke();
      crc2.closePath();

      // Körper
      crc2.beginPath();
      crc2.rect(this.position.x - 5, this.position.y + 20, 10, 30);
      crc2.fillStyle = "yellow";
      crc2.fill();
      crc2.closePath();
    }
  }
}
