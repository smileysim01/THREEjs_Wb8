/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

// define your vehicles here - remember, they need to be imported
// into the "main" program

export class Car extends GrObject{
    constructor(x,y,z){
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
        let front_geometry = new T.PlaneGeometry(1,1);
        let front_material = new T.MeshStandardMaterial({color:"#00c7fc", opacity:0.4, emissive:"#0042aa", map:tl_glass, side:T.DoubleSide});
        let front_mesh = new T.Mesh(front_geometry,front_material);
        front_mesh.scale.set(0.5,0.5,0.5);
        front_mesh.position.z = 0.58;
        front_mesh.position.y = 0.47;
        front_mesh.position.x = 0.03;
        front_mesh.rotateX(-Math.PI/4);

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
            //right window
            0.28,0.3,0.75,
            0.4,0.25,0.5,
            0.28,0.65,0.4,

            //left window
            -0.22,0.3,0.75,
            -0.32,0.25,0.5,
            -0.22,0.65,0.4
        ])

        window_geometry.setAttribute('position',new T.BufferAttribute(vertices,3));
        window_geometry.computeVertexNormals();

        let window_material = new T.MeshStandardMaterial({
            color: "#00c7fc",
            map: tl_glass,
            side: T.DoubleSide
        });

        let window_mesh = new T.Mesh(window_geometry, window_material);
        
        let car = new T.Group();
        car.add(base_mesh);
        car.add(top_mesh);
        car.add(front_mesh);
        car.add(wheels[0]);
        car.add(wheels[1]);
        car.add(wheels[2]);
        car.add(wheels[3]);
        car.add(window_mesh);
        car.translateX(x);
        car.translateY(y);
        car.translateZ(z);

            //
        super("Car", car);
    }
}

