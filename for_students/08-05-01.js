/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

// define a class of Dice here - it should be a subclass of GrObject

class Dice extends GrObject {
    constructor() {
        let geometry = new T.BufferGeometry();

        const vertices = new Float32Array( [
            //for front
            -1,-1,1,
            1,-1,1,
            -1,1,1,

            -1,1,1,
            1,-1,1,
            1,1,1,

            //for left
            -1,-1,-1, 
            -1,-1,1, 
            -1,1,-1,

            -1,1,-1,
            -1,-1,1,
            -1,1,1,

            //for right
            1,-1,1,
            1,-1,-1,
            1,1,1,

            1,1,1,
            1,-1,-1,
            1,1,-1,

            //for back
            1,-1,-1,
            -1,-1,-1,
            1,1,-1,

            1,1,-1,
            -1,-1,-1,
            -1,1,-1,

            //for bottom
            1,-1,1,
            -1,-1,1,
            1,-1,-1,

            1,-1,-1,
            -1,-1,1,
            -1,-1,-1,

            //for top
            1,1,-1,
            -1,1,-1,
            1,1,1,

            1,1,1,
            -1,1,-1,
            -1,1,1,
        ]);

        geometry.setAttribute('position',new T.BufferAttribute(vertices,3));
        geometry.computeVertexNormals();

        const uvs = new Float32Array([
            //front-3
            1/3,0,
            2/3,0,
            1/3,1/3,

            1/3,1/3,
            2/3,0,
            2/3,1/3,

            // left- 6
            2/3,0,
            1,0,
            2/3,1/3,

            2/3,1/3,
            1,0,
            1,1/3,

            //right- 5
            2/3,1/3,
            1,1/3,
            2/3,2/3,
    
            2/3,2/3,
            1,1/3,
            1,2/3,

            //back- 1
            1/3,1/3,
            2/3,1/3,
            1/3,2/3,
    
            1/3,2/3,
            2/3,1/3,
            2/3,2/3,

            //bottom- 2
            0,1/3,
            1/3,1/3,
            0,2/3,
    
            0,2/3,
            1/3,1/3,
            1/3,2/3,

            //top- 4
            1/3,2/3,
            2/3,2/3,
            1/3,1,
    
            1/3,1,
            2/3,2/3,
            2/3,1
        ])

        geometry.setAttribute('uv',new T.BufferAttribute(uvs,2));


              // @@Snippet:texuse
        let tl = new T.TextureLoader().load("../images/dice_texture.png");
        let material = new T.MeshStandardMaterial({
            color: "white",
            roughness: 0.75,
            map: tl,
            side: T.DoubleSide
        });

        let mesh = new T.Mesh(geometry, material);

        //
        super("Dice", mesh);
    }
}

function shift(grobj, x, y, angle = 0) {
    grobj.objects[0].translateX(x);
    grobj.objects[0].translateY(y);
    grobj.objects[0].rotateX(angle);
    return grobj;
  }

let world = new GrWorld();

// put the two dice into the world Here
let dice1 = shift(new Dice(),-1, 1);
let dice2 = shift(new Dice(),3, 1, Math.PI/2);

// don't forget to orient them so they have different numbers facing up
world.add(dice1);
world.add(dice2);

world.go();

