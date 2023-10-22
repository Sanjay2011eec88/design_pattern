import { Duck } from "./duck";
import { FlyNoWay } from "./flyNoWay";
import { Quack } from "./quacks";

export class ModelDuck extends Duck{
    constructor(){
        super();
        this.flyBehavior = new FlyNoWay();
        this.quackBehavior = new Quack();
    }

    display(): void {
        console.log("I am model duck!");
    }
}