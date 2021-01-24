import React from 'react';
import { OrbitControls, useGLTF } from 'drei';


function DoctorModel() {
    const doctor = useGLTF("/doctor_assets/scene.gltf", true);
    return (
        <primitive object ={doctor.scene} dispose = {null} />
    )
}

export default DoctorModel