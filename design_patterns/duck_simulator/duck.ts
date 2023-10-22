import { FlyBehavior } from "./flyBehavior";
import { QuackBehavior } from "./quackBehavior";
export abstract class Duck {
    quackBehavior: QuackBehavior;
    flyBehavior: FlyBehavior;

    constructor() {}

    abstract display():void;

    performQuack():void{
        this.quackBehavior.quack();
    }

    performFly(){
        this.flyBehavior.fly();
    }

    swim():void {
        console.log("All ducks float, even decoys!");
    }
}

