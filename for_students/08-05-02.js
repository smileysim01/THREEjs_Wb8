/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import { Group } from "../libs/CS559-Three/build/three.module.js";

// define a class of Domino here - it should be a subclass of GrObject
/*jshint esversion: 6 */
// @ts-check

class Domino extends GrObject {
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
            -1,-1,
            1,-1,1,1,

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
            //front-blank
            0,2/3,
            1/3,2/3,
            0,1,

            0,1,
            1/3,2/3,
            1/3,1,

            // left- blank
            0,2/3,
            1/3,2/3,
            0,1,

            0,1,
            1/3,2/3,
            1/3,1,

            //right- blank
            0,2/3,
            1/3,2/3,
            0,1,

            0,1,
            1/3,2/3,
            1/3,1,

            //back- blank
            0,2/3,
            1/3,2/3,
            0,1,

            0,1,
            1/3,2/3,
            1/3,1,

            //bottom- blank
            0,2/3,
            1/3,2/3,
            0,1,

            0,1,
            1/3,2/3,
            1/3,1,

            //top- 6
            2/3,0,
            1,0,
            2/3,1/3,

            2/3,1/3,
            1,0,
            1,1/3
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

        let mesh1 = new T.Mesh(geometry, material);
        let mesh2 = new T.Mesh(geometry, material);
        mesh1.position.set(-1,0.2,0);
        mesh2.position.set(-1,0.2,2);
        let domino = new T.Group();
        domino.add(mesh1);
        domino.add(mesh2);
        //
        super("Domino", domino);
    }
}

function shift(grobj, x, y, z) {
    grobj.objects[0].translateX(x);
    grobj.objects[0].translateY(y);
    grobj.objects[0].translateZ(z);
    grobj.objects[0].scale.set(0.5,0.25,0.5);
    return grobj;
  }

let world = new GrWorld();

// put the two dice into the world Here
let domino = shift(new Domino(),2, 0.2, 0);


// put the domino into the world Here
world.add(domino);
//world.add(domino2);

world.go();
