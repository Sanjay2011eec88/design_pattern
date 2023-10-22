import { FlyBehavior } from "./flyBehavior";

export class FlyRocketPowered implements FlyBehavior{
    fly(): void{
        console.log("I am flying with a rocket");
    }
}