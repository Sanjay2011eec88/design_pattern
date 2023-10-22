import { FlyBehavior } from "./flyBehavior";

export class FlyWithWings implements FlyBehavior{
    fly():void{
        console.log("I am flying using wings");
    }
}