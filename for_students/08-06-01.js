/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import { PyramidHip } from "../for_students/08-06-buildings.js";
import { Shed } from "../for_students/08-06-buildings.js";
import { Tree } from "../for_students/08-06-buildings.js";

// your buildings are defined in another file... you should import them
// here

let world = new GrWorld({groundplanesize:10});

// place your buildings and trees into the world here
let pyramid_hip = new PyramidHip(1,0.4,1);
world.add(pyramid_hip);

let shed = new Shed(-1,0.4,-1);
world.add(shed);

let tree = new Tree(-3,0.6,2);
world.add(tree);

world.go();


