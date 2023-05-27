namespace A09_Asteroids{
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    function handleLoad(_event:Event):void{
        console.log("Asteroids starting");

        let canvas: HTMLCanvasElement| null = document.querySelector("canvas");
        if (!canvas)
        return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2D");
        //crc2.fillStyle = "black";
        //crc2.strokeStyle = "white";

        createPaths();
        console.log("Asteroids paths:",asteroidPaths);

        let asteroid: Asteroid = new Asteroid(1);
            console.log(asteroid)
        
    }
}