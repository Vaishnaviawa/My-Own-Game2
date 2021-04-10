class Letter{
    constructor(x, y){
        this.body = Bodies.rectangle(x, y, 10, 10);
        this.width = 10;
        this.height = 10;
        World.add(this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        fill("white");
        textSize(20);
        text("", pos.x, pox.y);
        pop();
    }
}