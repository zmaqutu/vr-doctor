import React, { useState, useRef, Suspense } from 'react';
import { OrbitControls, useGLTFLoader } from 'drei';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { VRCanvas, DefaultXRControllers } from 'react-xr';
import Model from './Model';
import DoctorModel from './DoctorModel';

function HospitalScene() {
    let width = window.innerWidth;
    let height = window.innerHeigh; 

    const cameraPosition = useRef([0.38,-0.39,0.18]);
    return (
        <>
            <VRCanvas
            colorManagement
            camera={
                {
                    position: cameraPosition.current,
                    fov: 52.5,
                    aspect: width / height, 
                    far: 5000,
                    }
                }
            >
                <ambientLight intensity = {1}/>
                <Suspense fallback = {null}>
                    <mesh visible position = {[0,0,0]}>
                        <Model/>
                    </mesh>
                    <mesh visible position = {[-1,-1.05,0]} scale = {[0.008,0.008,0.008]} rotation={[0, Math.PI /2, 0]}>
                        <DoctorModel/>
                    </mesh>
                </Suspense>
                <OrbitControls />
                <DefaultXRControllers/>
            </VRCanvas>
        </>
    )
}

export default HospitalScene
