import React from 'react';
import { OrbitControls, useGLTF } from 'drei';


function Model() {
    const gltf = useGLTF("/assets/scene.gltf", true);
    return (
        <primitive object ={gltf.scene} dispose = {null} />
    )
}

export default Model
