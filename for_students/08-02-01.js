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
    ])


    const vertices2 = new Float32Array( [
        //for top front
        -1,1,1,
        1,1,1,
        0,2.5,0,

        //for top left
        -1,1,-1,
        -1,1,1,
        0,2.5,0,

        //for top right
        1,1,1,
        1,1,-1,
        0,2.5,0,

        //for top back
        1,1,-1,
        -1,1,-1,
        0,2.5,0
    ]);

    bott_geometry.setAttribute('position',new T.BufferAttribute(vertices1,3));
    bott_geometry.computeVertexNormals();

    roof_geometry.setAttribute('position',new T.BufferAttribute(vertices2,3));
    roof_geometry.computeVertexNormals();

    const uvs1 = new Float32Array([
        //front
        0.36,0,
        0.64,0,
        0.36,1,

        0.36,1,
        0.64,0,
        0.64,1,

        // left- 6
        0.08,0,
        0.4,0,
        0.08,1,

        0.08,1,
        0.4,0,
        0.4,1,

        //right- 5
        0.01,0.01,
        0.02,0.01,
        0.01,0.01,

        0.01,0.01,
        0.02,0.01,
        0.02,0.01,

        //back- 1
        0.01,0.01,
        0.02,0.01,
        0.01,0.01,

        0.01,0.01,
        0.02,0.01,
        0.02,0.01,
    ])

    const uvs2 = new Float32Array([
        //top front
        0.81,0.01,
        0.02,0.01,
        0.81,0.01,

        //top left
        0.81,0.01,
        0.02,0.01,
        0.81,0.01,

        //top right
        0.81,0.01,
        0.02,0.01,
        0.81,0.01,

        //top back
        0.81,0.01,
        0.02,0.01,
        0.81,0.01,
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
    let tl2 = new T.TextureLoader().load("../textures/UV_Grid_Sm.jpg");
    let roof_material = new T.MeshStandardMaterial({
        color: "white",
        roughness: 0.75,
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
    pyramid_hip.scale.set(0.5,0.4,0.5);

    //
    super("Object2", pyramid_hip);
  }
}
class Object3 extends GrObject {
  constructor() {
    let tl_base = new T.TextureLoader().load("../textures/metalic_blue.jpg");
    let base_geometry = new T.BoxGeometry(4.5,1.8,8.5);
    let base_material = new T.MeshStandardMaterial({color:"red",map:tl_base});
    let base_mesh = new T.Mesh(base_geometry,base_material);
    base_mesh.scale.set(0.2,0.2,0.2);
    base_mesh.position.y = 0.1;

    let tl_matte = new T.TextureLoader().load("../textures/matte.jpg");
    const length = 12, width = 8;

    const shape = new T.Shape();
    shape.moveTo( 0,0 );
    shape.lineTo( 0, width );
    shape.lineTo( length, width );
    shape.lineTo( length, 0 );
    shape.lineTo( 0, 0 );

    const extrudeSettings = {
        steps: 1,
        depth: 1,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 1,
        bevelOffset: -2,
        bevelSegments: 1
    };
    let top_geometry = new T.ExtrudeGeometry(shape,extrudeSettings);
    let top_material = new T.MeshStandardMaterial({color:"yellow", map:tl_matte});
    let top_mesh = new T.Mesh(top_geometry,top_material);
    top_mesh.scale.set(0.12,0.12,0.12);
    top_mesh.rotateX(Math.PI/2);
    top_mesh.rotateZ(Math.PI/2);
    top_mesh.position.z = -0.8;
    top_mesh.position.y = 0.4;
    top_mesh.position.x = 0.5;

    let tl_glass = new T.TextureLoader().load("../textures/glass.jpg");

    let tl_tyre = new T.TextureLoader().load("../textures/tyre.jpg");
    let wheels = [];
    let wheels_geometry = new T.TorusGeometry(1,0.5);
    let wheels_material = new T.MeshStandardMaterial({color:"grey", roughness:0.75, map:tl_tyre});
    for(let i = 0; i<4; i++){
        wheels[i] = new T.Mesh(wheels_geometry, wheels_material);
        wheels[i].scale.set(0.1,0.1,0.1);
        wheels[i].rotateY(Math.PI/2);
    }
    wheels[0].position.set(0.5,-0.06,0.4);
    wheels[1].position.set(0.5,-0.06,-0.4);
    wheels[2].position.set(-0.5,-0.06,0.4);
    wheels[3].position.set(-0.5,-0.06,-0.4);

    let window_geometry = new T.BufferGeometry();
    const vertices = new Float32Array([
      //front window
      -0.22,0.25,0.75,
      0.28,0.25,0.75,
      -0.22,0.65,0.4,

      -0.22,0.65,0.4,
      0.28,0.25,0.75,
      0.28,0.65,0.4,

      //right window
      0.28,0.25,0.75,
      0.4,0.25,0.5,
      0.28,0.65,0.4,

      //left window
      -0.22,0.25,0.75,
      -0.32,0.25,0.5,
      -0.22,0.65,0.4
    ])

    window_geometry.setAttribute('position',new T.BufferAttribute(vertices,3));
    window_geometry.computeVertexNormals();

    let window_material = new T.MeshStandardMaterial({
        color: "cyan",
        map: tl_glass,
        side: T.DoubleSide
    });

    let window_mesh = new T.Mesh(window_geometry, window_material);
    
    let car = new T.Group();
    car.add(base_mesh);
    car.add(top_mesh);
    car.add(wheels[0]);
    car.add(wheels[1]);
    car.add(wheels[2]);
    car.add(wheels[3]);
    car.add(window_mesh);
    car.translateY(0.35);

        //
    super("Object3", car);
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
