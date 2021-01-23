import React, { useState, useRef, Suspense } from 'react';
import { OrbitControls, useGLTFLoader } from 'drei';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { VRCanvas, DefaultXRControllers } from 'react-xr';
import Model from './Model';

function HospitalScene() {
    let width = window.innerWidth;
    let height = window.innerHeigh; 

    const cameraPosition = useRef([0,1,0]);
    return (
        <>
            <VRCanvas
            colorManagement
            camera={
                {
                    position: cameraPosition.current,
                    fov: 52.5,
                    aspect: width / height, 
                    far: 5000
                    }
                }
            >
                <Suspense fallback = {null}>
                    <mesh visible position = {[0,0,0]}>
                        <Model/>
                    </mesh>
                </Suspense>
                <OrbitControls />
                <DefaultXRControllers/>
            </VRCanvas>
        </>
    )
}

export default HospitalScene
