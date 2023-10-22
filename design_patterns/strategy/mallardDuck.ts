import { Duck } from './duck';
import { Quack } from './quacks';
import { FlyWithWings } from './flyWithWings';
export class MallardDuck extends Duck {
    constructor(){
        super();
        this.quackBehavior = new Quack();
        this.flyBehavior = new FlyWithWings();
    }

    display(){
        console.log("I am a real Mallard duck");
    }
}