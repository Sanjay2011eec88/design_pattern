import { FlyBehavior } from "./flyBehavior";
import { QuackBehavior } from "./quackBehavior";
export abstract class Duck {
    quackBehavior: QuackBehavior;
    flyBehavior: FlyBehavior;

    constructor() {}

    setFlyBehavior(fb: FlyBehavior){
        this.flyBehavior = fb;
    }

    setQuackBehavior(qb: QuackBehavior){
        this.quackBehavior = qb;
    }

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

