/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

// define your buildings here - remember, they need to be imported
// into the "main" program

export class PyramidHip extends GrObject {
    constructor(x,y,z) {
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
        pyramid_hip.translateX(x);
        pyramid_hip.translateY(y);
        pyramid_hip.translateZ(z);
        pyramid_hip.scale.set(0.5,0.4,0.5);

        //
        super("PyramidHip", pyramid_hip);
    }
}


export class Shed extends GrObject {
    constructor(x,y,z) {
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
        pyramid_hip.translateX(x);
        pyramid_hip.translateY(y);
        pyramid_hip.translateZ(z);
        pyramid_hip.scale.set(1,0.4,0.5);
        //
        super("Shed", pyramid_hip);
    }
}

export class Tree extends GrObject {
    constructor(x,y,z) {
        let trunk_geometry = new T.CylinderGeometry(0.1,0.4,4);
        let top_geometry = new T.ConeGeometry(3.5,7,11);
        top_geometry.scale(0.5,0.5,0.5);
        let trunk_material = new T.MeshStandardMaterial({color: "brown", roughness: 0.7});
        let top_material = new T.MeshStandardMaterial({color: "green", roughness: 0.5});

        let trunk_mesh = new T.Mesh(trunk_geometry, trunk_material);
        let top_mesh = new T.Mesh(top_geometry, top_material);
        top_mesh.translateY(0.6);
        
        let tree = new T.Group();
        tree.add(trunk_mesh);
        tree.add(top_mesh);
        tree.translateX(x);
        tree.translateY(y);
        tree.translateZ(z);
        tree.scale.set(0.3,0.3,0.3);
        //
        super("Tree", tree);
    }
}
