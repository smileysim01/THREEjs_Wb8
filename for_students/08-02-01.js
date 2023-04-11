/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as InputHelpers from "../libs/CS559/inputHelpers.js";

/*
 * Define your 3 objects here. If the objects fit inside +/- 1,
 * the world code below will place them nicely.
 * Otherwise, you need to modify the world code below to make the
 * world bigger and space the objects out differently.
 */

class Object1 extends GrObject {
  constructor() {
    let bott_geometry = new T.BufferGeometry();
    let roof_geometry = new T.BufferGeometry();

    const vertices1 = new Float32Array( [
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
        -1,2,-1,

        -1,2,-1,
        -1,-1,1,
        -1,1,1,

        //for right
        1,-1,1,
        1,-1,-1,
        1,1,1,

        1,1,1,
        1,-1,-1,
        1,2,-1,

        //for back
        1,-1,-1,
        -1,-1,-1,
        1,2,-1,

        1,2,-1,
        -1,-1,-1,
        -1,2,-1,
    ])


    const vertices2 = new Float32Array( [
        //for top left
        -1.2,0.9,1.2,
        1.2,0.9,1.2,
        -1.2,2.1,-1.2,

        //for top right
        -1.2,2.1,-1.2,
        1.2,0.9,1.2,
        1.2,2.1,-1.2,
    ]);

    bott_geometry.setAttribute('position',new T.BufferAttribute(vertices1,3));
    bott_geometry.computeVertexNormals();

    roof_geometry.setAttribute('position',new T.BufferAttribute(vertices2,3));
    roof_geometry.computeVertexNormals();

    const uvs1 = new Float32Array([
        //front
        0.25,0,
        0.75,0,
        0.25,1,

        0.25,1,
        0.75,0,
        0.75,1,

        // left- 6
        0.01,0,
        0.03,0,
        0.01,1,

        0.01,1,
        0.03,0,
        0.03,1,

        //right- 5
        0.01,0,
        0.03,0,
        0.01,1,

        0.01,1,
        0.03,0,
        0.03,1,

        //back- 1
        0.01,0,
        0.03,0,
        0.01,1,

        0.01,1,
        0.03,0,
        0.03,1
    ])

    const uvs2 = new Float32Array([
        //top left
        0,0,
        1,0,
        0,1,

        //top right
        0,1,
        1,0,
        1,1,
    ])

    bott_geometry.setAttribute('uv',new T.BufferAttribute(uvs1,2));
    roof_geometry.setAttribute('uv',new T.BufferAttribute(uvs2,2));

    // @@Snippet:texuse
    let tl1 = new T.TextureLoader().load("../textures/house.png");
    let bott_material = new T.MeshStandardMaterial({
        color: "white",
        roughness: 0.75,
        map: tl1,
        side: T.DoubleSide
    });

    // @@Snippet:texuse
    let tl2 = new T.TextureLoader().load("../textures/tiles.jpeg");
    let roof_material = new T.MeshStandardMaterial({
        color: "white",
        roughness: 1,
        metalness: 0.5,
        map: tl2,
        side: T.DoubleSide
    });

    let bott_mesh = new T.Mesh(bott_geometry, bott_material);
    let roof_mesh = new T.Mesh(roof_geometry, roof_material);
    let pyramid_hip = new T.Group();
    pyramid_hip.add(bott_mesh);
    pyramid_hip.add(roof_mesh);
    pyramid_hip.translateY(0.35);
    pyramid_hip.scale.set(1,0.4,0.5);
    //
    super("Object1", pyramid_hip);
  }
}

class Object2 extends GrObject {
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
        const colors = new Float32Array( [
          0.2,0.51,0.3,    // yellow (3 vertices)
          0.2,0.51,0.1,
          0.3,0.51,0.1,
          1,1,0,    // yellow (3 vertices)
          1,1,0,
          1,1,0,
          1,1,0,    // yellow (3 vertices)
          1,1,0,
          1,1,0,
          1,1,0,    // yellow (3 vertices)
          1,1,0,
          1,1,0,
          1,1,0,    // yellow (3 vertices)
          1,1,0,
          1,1,0,
          1,1,0,    // yellow (3 vertices)
          1,1,0,
          1,1,0,
          1,1,0,    // yellow (3 vertices)
          1,1,0,
          1,1,0,
          1,1,0,    // yellow (3 vertices)
          1,1,0,
          1,1,0,
          1,1,0,    // yellow (3 vertices)
          1,1,0,
          1,1,0,
          1,1,0,    // yellow (3 vertices)
          1,1,0,
          0.2,0.3,0,
          1,0.2,0,    // yellow (3 vertices)
          1,1,0,
          1,1,0,
          1,1,0,    // yellow (3 vertices)
          1,1,0,
          1,1,0,
  
  
  
      ]);
      geometry.setAttribute("color",new T.BufferAttribute(colors,3));
  
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
            color: "red",
            vertexColors:true,
            roughness: 0.75,
            map: tl,
            side: T.DoubleSide
        });
  
        let mesh = new T.Mesh(geometry, material);
        mesh.scale.set(0.5,0.5,0.5);
        mesh.translateY(0.5);
  
        //
        super("Object2", mesh);
    }
  }

class Object3 extends GrObject {
    constructor() {
        let geometry = new T.BufferGeometry();
        //
        // while the two triangles have 4 certices, we need to split the vertices
        // so that they can have different normals
        const vertices = new Float32Array( [
            -1, 1, -1,     // 1A note that we need to keep this ccw
            0, 0, 0,       // 1B
            0, 2, 0,       // 1C
            1, 1, -1,      // second triangle
        ]);
        // don't ask where we learn to call this "position" and "normal"
        // the only thing I can find is to read examples...
        geometry.setAttribute('position',new T.BufferAttribute(vertices,3));

        // set the indecies - our triangles are 0 1 2 and 3,2,1
        geometry.setIndex([0,1,2, 3,2,1]);

        // Let THREE do this for us
        geometry.computeVertexNormals();

        let material = new T.MeshStandardMaterial({
        color: "red",
        roughness: 0.75,
        side:T.DoubleSide
        });

        let mesh = new T.Mesh(geometry, material);
        mesh.translateY(2);

        const mat = new T.LineBasicMaterial( { color: 0x0000ff } );
        const points = [];
        points.push( new T.Vector3( 0, 0, 0 ) );
        points.push( new T.Vector3( 0, -2, 0 ) );

        const geom = new T.BufferGeometry().setFromPoints( points );
        const line = new T.Line( geom, mat );
        line.translateY(2);


        let kite = new T.Group();
        kite.add(mesh);
        kite.add(line);

        //
        super("Object3", kite);
    }
  }

// translate an object in the X direction
function shift(grobj, x) {
    grobj.objects.forEach(element => {
        element.translateX(x);
    });
  return grobj;
}

// Set the Object's Y rotate
function roty(grobj, ry) {
    grobj.objects.forEach(element => {
        element.rotation.y = ry;
    });
  return grobj;
}

/*
 * The world making code here assumes the objects are +/- 1
 * and have a single mesh as their THREE objects.
 * If you don't follow this convention, you will need to modify
 * the code below.
 * The code is a little funky because it is designed to work for
 * a variety of demos.
 */
let mydiv = document.getElementById("div1");

let box = InputHelpers.makeBoxDiv({ width: mydiv ? 640 : 820 }, mydiv);
if (!mydiv) {
    InputHelpers.makeBreak(); // sticks a break after the box
}
InputHelpers.makeHead("Three Different Objects", box);

let world = new GrWorld({ width: mydiv ? 600 : 800, where: box });
let tt = shift(new Object1(), -3);
world.add(tt);

let t2 = shift(new Object2(), 0);
world.add(t2);

let t3 = shift(new Object3(), 3);
world.add(t3);

let div = InputHelpers.makeBoxDiv({}, box);

let sl = new InputHelpers.LabelSlider("ry", { min: -2, max: 2, where: div });

InputHelpers.makeBreak(box);

sl.oninput = function(evt) {
    let v = sl.value();
    roty(tt,v);
    roty(t2,v);
    roty(t3,v);
};

world.go();
