import { FlyRocketPowered } from './flyRocketPowered';
import { MallardDuck } from './mallardDuck';
import { ModelDuck } from './modelDuck';
let mallard = new MallardDuck();
mallard.performQuack();
mallard.performFly();

const model = new ModelDuck();
model.performFly();
model.setFlyBehavior(new FlyRocketPowered());
model.performFly();